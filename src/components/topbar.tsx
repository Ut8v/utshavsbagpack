import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

const TopBar: React.FC = () => {
  return (
    <Navbar bg="black" variant="dark" expand="lg" className="sticky-top">
      <Navbar.Toggle aria-controls="navbar-nav" />
      <Navbar.Collapse id="navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link href="/home">Home</Nav.Link>
          <Nav.Link href="/about">About</Nav.Link>
          <Nav.Link href="/contact">Contact</Nav.Link>
          <Nav.Link href='/projects'>Projects</Nav.Link>
          <NavDropdown title="Blogs" id="blogs-dropdown">
            <NavDropdown.Item href="/action">Chat-blog</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default TopBar;
