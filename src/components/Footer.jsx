import React from "react";
import { motion } from "framer-motion";
import "../styles/Footer.css";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaCrown,
} from "react-icons/fa";

function Footer() {
  return (
    <motion.footer
      className="footer-container"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="footer-content">
        {/* Logo Section */}
        <motion.div
          className="footer-logo"
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          <FaCrown className="logo-icon me-2" />
          <h3 className="logo-text">Kingdoms Connect</h3>
        </motion.div>

        {/* Quick Links */}
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            {["Home", "News", "US", "World", "Church", "Culture", "Lifestyle", "Comment", "Video"].map(
              (link, index) => (
                <motion.li
                  key={index}
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <a href={`/${link.toLowerCase()}`}>{link}</a>
                </motion.li>
              )
            )}
          </ul>
        </div>

        {/* Social Media */}
        <div className="footer-social">
          <h4>Follow Us</h4>
          <div className="social-icons">
            {[
              { href: "https://facebook.com", icon: <FaFacebookF /> },
              { href: "https://twitter.com", icon: <FaTwitter /> },
              { href: "https://instagram.com", icon: <FaInstagram /> },
              { href: "https://linkedin.com", icon: <FaLinkedinIn /> },
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="social-link"
                whileHover={{ scale: 1.2, rotate: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          ©{new Date().getFullYear()} Kingdom Connect. All rights reserved.
        </motion.p>
      </div>
    </motion.footer>
  );
}

export default Footer;
