import "./Footer.css";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { NavLink } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="footercon">
      <div className="footer-container">

        {/* Brand Section */}
        <div className="footer-brand">
          <h2>
            AstNova<span> BioPharma</span>
          </h2>
          <p>
            helps you manage,
            grow & simplify your  life.
          </p>

          <div className="social-icons">
            <a href="https://www.facebook.com/"><FaFacebookF /></a>
            <a href="https://www.twitter.com/"><FaTwitter /></a>
            <a href="https://www.linkedin.com/"><FaLinkedinIn /></a>
            <a href="https://www.instagram.com/"><FaInstagram /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li>
              <NavLink to="/" end>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about">
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/products">
                Product
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact">
                Contact
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Support */}
        <div className="footer-links">
          <h4>Support</h4>
          <ul>
            <li>FAQs</li>
            <li>Help Center</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="footer-newsletter">
      
          <div className="newsletter-box">
            <input type="email" placeholder="Enter your email." />
            <button>Go</button>
          </div>
        </div>

      </div>

      {/* Bottom */}
      <div className="footer-bottom">
        © 2025 <span>BioPharma</span>. All Rights Reserved.
      </div>
    </footer>
  );
};
