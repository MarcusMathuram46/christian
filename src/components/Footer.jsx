import React from 'react'
import { motion } from 'framer-motion';
import "../styles/Footer.css"
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaCrown } from 'react-icons/fa';
function Footer() {
  return (
    <motion.footer className='footer-container' initial={{ opacity:0, y: 50 }} animate={{ opacity: 1,y:0}} transition={{ duration:1}}>
      <div className='footer-content'>
        <div className="footer-logo">
        <FaCrown className="logo-icon" />
          <h3 className='logo-text'>Kingdoms Connect</h3>
        </div>
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#privacy">Privacy Policy</a></li>
          </ul>
        </div>
        <div className="footer-social">
          <h4>Follow Us</h4>
          <div className="social-icons">
          <a href="https://facebook.com" target="_blank" rel="noreferrer" className='social-link'>
              <FaFacebookF/>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className='social-link'>
              <FaTwitter />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className='social-link'>
              <FaInstagram />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className='social-link'>
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>
      <div className='footer-bottom'>
        <p> ©{new Date().getFullYear()} Kingdom Connect. All rights reserved</p>
      </div>
    </motion.footer>
  )
}

export default Footer