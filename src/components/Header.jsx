import { React, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button"; 

const Header = () => {
  const navigate = useNavigate();

  // Function to handle logout
  const handleLogout = () => {
    // Perform logout logic here (e.g., clear session, remove tokens, etc.)
    // After logout, navigate to the login or home page
    navigate("/login"); // Replace with the actual route for your login page
  };

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
      <Navbar.Brand href="#home">
            <img
              src="src\assets\logo.png"
              width="35"
              height="35"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
      </Navbar.Brand>
        <Navbar.Brand href="#home">QUIZ APP</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#link">My Scores</Nav.Link>
            <Nav.Link href="#link">Profile</Nav.Link>
            <Nav.Link href="#link">About</Nav.Link>
          </Nav>
          <Button variant="outline-primary"  onClick={handleLogout}>
            Logout
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
