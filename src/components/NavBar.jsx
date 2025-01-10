import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <Navbar fixed="top" bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand as={Link} to="/">Christian</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/login">Login</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;
