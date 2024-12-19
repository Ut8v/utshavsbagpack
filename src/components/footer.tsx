import React from 'react';
import { Navbar, Container } from 'react-bootstrap';

const Footer: React.FC = () => {
  return (
    <Navbar expand="lg" className="mt-auto py-3 fixed-bottom">
      <Container>
        <div className="text-center w-100 mt-3 text-light">
          <hr/>
          &copy; {new Date().getFullYear()} Utshav Khatiwada. 
          <hr></hr>
        </div>
      </Container>
    </Navbar>
  );
};

export default Footer;