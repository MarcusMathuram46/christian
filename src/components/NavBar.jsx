import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import "../styles/Navbar.css"
import { FaCrown } from "react-icons/fa";

function NavBar() {
  return (
    <div>
      <Navbar fixed="top" expand="lg" className="custom-navbar" data-bs-theme="dark">
        <Container>
          <FaCrown className="logo-icon me-2" />
          <Navbar.Brand as={Link} to="/" className="text-white">Kingdoms Connect</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/" className="text-white">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/login" className="text-white">
                Login
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;
