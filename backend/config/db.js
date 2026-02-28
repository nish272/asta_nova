import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDB = async () => {
  const uri = process.env.MONGO_URI;
  if (!uri) {
    const msg = "MONGO_URI not set in environment";
    console.error(msg);
    throw new Error(msg);
  }

  try {
    await mongoose.connect(uri);
    console.log("MongoDB Connected");
  } catch (err) {
    console.error("MongoDB connection error:", err);
    // propagate error so caller can decide what to do
    throw err;
  }
};

export default connectDB;
