import React from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import '../scss/topbar.scss';
import logo from '../assets/favicon.png';
import { Link } from 'react-router-dom';
import SocialIcons from './sIcons.tsx';
import ChatModal from './chat.tsx';

const TopBar: React.FC = () => {
  return (
    <Navbar expand="lg" className="navbar-custom fixed-top">
      <Container>
        <Navbar.Brand className="brand">
        <Link to="/" className="brand-link">
          <img
            src={logo}
            alt="Logo"
            height="30"
            className="d-inline-block align-top"
          />
        </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown
              title="Blogs"
              id="basic-nav-dropdown"
              className="nav-dropdown"
            >
              <NavDropdown.Item>
                <Link to="/chat-blog" className="dropdown-link">
                  Chat-Blog
                </Link>
              </NavDropdown.Item>
            </NavDropdown>
            <SocialIcons />
          </Nav>
          <div className="ms-auto d-flex align-items-center chat-model position-relative">
            <ChatModal />
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default TopBar;
