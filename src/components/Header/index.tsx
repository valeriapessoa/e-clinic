"use client"

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaPhoneAlt } from 'react-icons/fa';

const Header = () => {
  return (
    <Navbar collapseOnSelect expand="lg" className="custom-navbar">
      <Container>
        <Navbar.Brand href="/home" className='logo-container'>
          <img
            src="./logo-white.png"
            alt="e-Clinic Logo"
            className="logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" className='navbar-toggler' />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/convenios">Convênios</Nav.Link>
            <Nav.Link href="/unidades">Unidades</Nav.Link>
            <Nav.Link href="/agendar-consulta">Agendar Consulta</Nav.Link>
          </Nav>
          <Nav className='header-phone'>
            <Nav.Link href="tel:1122403434">
              <FaPhoneAlt /> +55 11 2240-3434
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;