import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

export const NavBar = () => {
  return (
    <div>
        <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="/">MOVIE APP</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};


export default NavBar;