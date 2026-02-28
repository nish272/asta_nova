import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import nodemailer from "nodemailer";
import Contact from "./models/Contact.js";
import connectDB from "./config/db.js";

// load environment variables as early as possible
dotenv.config();

// establish database connection
// we'll wait for the connection before starting the HTTP server

const app = express();

// simple in-memory fallback storage when MongoDB is unreachable
const fallbackContacts = [];

app.use(cors());
app.use(express.json());

// Create transporter once and verify it to catch config issues early
const mailUser = process.env.EMAIL_USER;
const mailPass = process.env.EMAIL_PASS ? process.env.EMAIL_PASS.trim() : undefined;
if (!mailUser || !mailPass) {
  console.warn("EMAIL_USER or EMAIL_PASS not configured; contact emails will fail");
}

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: mailUser,
    pass: mailPass,
  },
});

transporter.verify()
  .then(() => console.log("Mail transporter verified"))
  .catch(err => console.log("Mail transporter verification failed:", err));

app.post("/api/contact", (req, res) => {
  const { name, phone, message } = req.body;

  // Validate input
  if (!name || !phone || !message) {
    return res.status(400).json({ 
      success: false, 
      error: "Missing required fields" 
    });
  }

  // Return response IMMEDIATELY to user (don't wait for email/DB)
  res.json({ success: true, message: "Message received" });

  // Do database save and email in background (fire-and-forget)
  setImmediate(async () => {
    try {
      // Try to save to database
      try {
        const newContact = new Contact({ name, phone, message });
        await newContact.save();
        console.log("Contact saved to database");
      } catch (dbErr) {
        console.warn("DB save failed (fallback):", dbErr.message);
        fallbackContacts.push({ name, phone, message, createdAt: new Date() });
      }

      // Try to send email
      try {
        const info = await transporter.sendMail({
          from: mailUser,
          to: mailUser,
          subject: "New Contact Message",
          text: `Name: ${name}\nPhone: ${phone}\nMessage: ${message}`,
        });
        console.log("Email sent:", info.response || info);
      } catch (mailErr) {
        console.log("Email sending error:", mailErr.message);
      }
    } catch (err) {
      console.error("Background task error:", err);
    }
  });
});

// diagnostic route to list stored contacts (from DB if connected, otherwise fallback)
app.get("/api/contacts", async (req, res) => {
  try {
    const list = await Contact.find().sort({ createdAt: -1 });
    return res.json(list);
  } catch (err) {
    console.warn("DB read failed, returning fallback contacts", err);
    return res.json(fallbackContacts);
  }
});

// start the HTTP server; attempt database connection but don't block startup
const startServer = async () => {
  try {
    await connectDB();
  } catch (err) {
    console.warn("Continuing without database due to connection error.", err);
    // the application will still start; API routes should handle missing DB gracefully
  }

  app.listen(5000, () => console.log("Server running on port 5000"));
};

startServer();