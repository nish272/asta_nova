import React, { useState, useEffect } from "react";
import "./contact.css";

import { useLocation } from "react-router-dom";

export default function ContactForm() {

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const location = useLocation();
  const product = location.state?.product;

  useEffect(() => {
    if (product) {
      setFormData(prev => ({ ...prev, message: `I am interested in ${product.title}.` }));
    }
  }, [product]);

  const handleChange = (e) => {
    setFormData({ 
      ...formData, 
      [e.target.name]: e.target.value 
    });
  };

  // ✅ OPTIMIZED SUBMIT FUNCTION
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate fields
    if (!formData.name.trim() || !formData.phone.trim() || !formData.message.trim()) {
      alert("Please fill all fields");
      return;
    }

    setIsLoading(true);

    try {
      // Add 10 second timeout
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 10000);

      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      if (response.ok) {
        const result = await response.json();
        alert("✅ Thank you! Your message has been received.");
        setFormData({ name: "", phone: "", message: "" });
      } else {
        alert("❌ Something went wrong. Please try again.");
      }
    } catch (error) {
      if (error.name === 'AbortError') {
        alert("⏱️ Request took too long. Please try again.");
      } else {
        alert("❌ Network error. Please check your connection.");
      }
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* HERO SECTION */}
      <section className="contact-section">
        <div className="hero-content">
          <h1>Get in Touch with Us</h1>
          <p>
            We’d love to hear from you. Whether you have a question about our
            services, need support, or just want to chat — we’re here for you
            every time.
          </p>
        </div>
        {product && (
          <div className="selected-product-hero">
            <img src={product.image} alt={product.title} style={{ maxWidth: 220 }} />
            <h3>Inquiry about {product.title}</h3>
          </div>
        )}
      </section>

      {/* CONTACT DETAILS */}
      <section className="contact-wrapper">
        <div className="contact-container">

          {/* LEFT */}
          <div className="contact-info">
            <h3>Send us a message <span>✉</span></h3>

            <p>
              Feel free to reach out through the contact form or find our contact
              information below.
            </p>

            <ul>
              <li><strong>Email:</strong> contact@greatstack.dev</li>
              <li><strong>Phone:</strong> +91 723-456-7890</li>
            </ul>

            <div className="office-location">
              <h4> Office</h4>
              <p>
                06SA/34A Malhaur,<br />
                Lucknow, Uttar Pradesh,<br />
                India – 226028
              </p>

              <div className="map-container">
                <iframe
                  title="Corporate Office Location"
                  src="https://www.google.com/maps?q=06SA/34A%20Malhaur,%20Lucknow,%20Uttar%20Pradesh,%20India&output=embed"
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <form className="contact-form" onSubmit={handleSubmit}>
            <h3 className="form-title">Send Your Message</h3>

            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input
                id="name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input
                id="phone"
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter your mobile number"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Your Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message here..."
                required
              ></textarea>
            </div>

            <button type="submit" className="submit-btn" disabled={isLoading}>
              {isLoading ? "Sending..." : "Submit Now →"}
            </button>

            {/* MEDICINE PRECAUTIONS */}
            <div className="medicine-precautions">
              <h4>Medicine Precautions</h4>
              <ul>
                <li>Always take medicines as prescribed by a certified doctor.</li>
                <li>Do not exceed the recommended dosage.</li>
                <li>Store medicines in a cool, dry place away from sunlight.</li>
                <li>Keep medicines out of reach of children.</li>
                <li>Inform your doctor about allergies or ongoing treatments.</li>
              </ul>
            </div>

          </form>

        </div>
      </section>
    </>
  );
}