import React from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import "./Header.css"; // Import CSS for any additional styling

function Header() {
  return (
    <div className="header-container">
      <Navbar expand="lg" className="navbar">
        <Navbar.Brand href="/" className="navbar-brand">
          <img
            src="pexels-magda-ehlers-pexels-1337388.jpg"
            alt="Logo"
            className="navbar-logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Header;
