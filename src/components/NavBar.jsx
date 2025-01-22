import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import {
  FaSearch,
  FaFacebookF,
  FaTwitter,
  FaPinterest,
  FaEnvelope,
  FaInstagram,
  FaTumblr,
  FaTimes,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import "../styles/Navbar.css";

function NavBar() {
  const [toggleOpen, setToggleOpen] = useState(false);
  const navigate = useNavigate(); // React Router's navigation hook

  const handleLoginClick = () => {
    navigate("/login"); // Navigate to the Login component
  };

  const handleBrandClick = () => {
    navigate("/"); // Navigate to Home when the brand is clicked
  };

  const toggleVariants = {
    hidden: { height: 0, opacity: 0 },
    visible: { height: "auto", opacity: 1 },
  };

  return (
    <div className="navbar-wrapper">
      {/* First Row */}
      <Navbar expand="lg" fixed="top" className="custom-navbar">
        <Container className="first-row">
          {/* Left Section: Toggle, Search, Subscribe */}
          <motion.div
            className="left-section d-flex align-items-center"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {/* Toggler */}
            <Navbar.Toggle
              aria-controls="basic-navbar-nav"
              onClick={() => setToggleOpen((prev) => !prev)}
            >
              {!toggleOpen && <span>☰</span>}
            </Navbar.Toggle>

            {/* Search Icon */}
            <div className="search-icon ms-3">
              <FaSearch />
            </div>
            {/* Login */}
            <button className="btn-subscribe ms-3" onClick={handleLoginClick}>
              Login
            </button>
          </motion.div>

          {/* Center Section: Brand */}
          <motion.div
            className="brand-container"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <motion.h1
              className="brand-name"
              onClick={handleBrandClick}
              whileHover={{
                scale: 1.1,
                rotate: 3,
                textShadow: "0px 0px 8px rgba(255, 255, 255, 0.9)",
              }}
              whileTap={{ scale: 0.9 }}
              style={{ cursor: "pointer" }}
            >
              KINGDOM CONNECT
            </motion.h1>
          </motion.div>

          {/* Right Section: Social Media Icons */}
          <motion.div
            className="social-icons d-flex align-items-center"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <FaFacebookF />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              <FaTwitter />
            </a>
            <a href="https://pinterest.com" target="_blank" rel="noreferrer">
              <FaPinterest />
            </a>
            <a href="mailto:info@christiantoday.com">
              <FaEnvelope />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <FaInstagram />
            </a>
            <a href="https://tumblr.com" target="_blank" rel="noreferrer">
              <FaTumblr />
            </a>
          </motion.div>
        </Container>
      </Navbar>

      {/* Second Row: Navigation Links */}
      <motion.div
        className="nav-links-container"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Container>
          <Nav className="justify-content-center nav-links">
            <Nav.Link as={Link} to="/" className="active">
              HOME
            </Nav.Link>
            <Nav.Link as={Link} to="/news">
              NEWS
            </Nav.Link>
            <Nav.Link as={Link} to="/india">
              INDIA
            </Nav.Link>
            <Nav.Link as={Link} to="/church">
              CHURCH
            </Nav.Link>
            <Nav.Link as={Link} to="/culture">
              CULTURE
            </Nav.Link>
            <Nav.Link as={Link} to="/comment">
              COMMENT
            </Nav.Link>
            <Nav.Link as={Link} to="/video">
              VIDEO
            </Nav.Link>
          </Nav>
        </Container>
      </motion.div>

      {/* Toggle Bar Content */}
      <AnimatePresence>
        {toggleOpen && (
          <motion.div
            className="toggle-bar"
            initial={{ x: "-100%", opacity: 0 }}
            animate={{
              x: toggleOpen ? "0%" : "-100%",
              opacity: toggleOpen ? 1 : 0,
            }}
            exit="hidden"
            variants={toggleVariants}
            transition={{ duration: 0.5 }}
          >
            <div className="toggle-bar">
              <div
                className="close-icon"
                onClick={() => setToggleOpen(false)}
                style={{ fontSize: "2rem", cursor: "pointer" }}
              >
                <FaTimes />
              </div>

              <div className="search-bar">
                <FaSearch className="search-icon" />
                <input
                  type="text"
                  className="form-control search-input"
                  placeholder="Search"
                />
              </div>

              <Nav className="navbar-nav flex-column mt-3">
                <Nav.Link
                  as={Link}
                  to="/"
                  onClick={() => setToggleOpen(false)}
                  className="active"
                >
                  HOME
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to="/news"
                  onClick={() => setToggleOpen(false)}
                >
                  NEWS
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to="/india"
                  onClick={() => setToggleOpen(false)}
                >
                  INDIA
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to="/church"
                  onClick={() => setToggleOpen(false)}
                >
                  CHURCH
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to="/culture"
                  onClick={() => setToggleOpen(false)}
                  >CULTURE</Nav.Link>
                <Nav.Link
                  as={Link}
                  to="/comment"
                  onClick={() => setToggleOpen(false)}
                >
                  COMMENT
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to="/video"
                  onClick={() => setToggleOpen(false)}
                >
                  VIDEO
                </Nav.Link>
              </Nav>

              <div className="social-icons mt-3">
                <a href="https://facebook.com" target="_blank" rel="noreferrer">
                  <FaFacebookF />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noreferrer">
                  <FaTwitter />
                </a>
                <a
                  href="https://pinterest.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaPinterest />
                </a>
                <a href="mailto:info@christiantoday.com">
                  <FaEnvelope />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaInstagram />
                </a>
                <a href="https://tumblr.com" target="_blank" rel="noreferrer">
                  <FaTumblr />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default NavBar;
