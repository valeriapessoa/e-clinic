'use client'

import { usePathname } from 'next/navigation';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaPhoneAlt } from 'react-icons/fa';

// Componente do cabeçalho
const Header = () => {
  const pathname = usePathname();
  const isActive = (path: string) => pathname === path;
  return (
    <Navbar collapseOnSelect expand="lg" className="custom-navbar">
      <Container>
        <Navbar.Brand href="/" className='logo-container'>
          <img
            src="./logo-white.png"
            alt="e-Clinic Logo"
            className="header-logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" className='navbar-toggler' />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="header-nav">
            <Nav.Link href="/" active={isActive('/')}>Home</Nav.Link>
            <Nav.Link href="/convenios" active={isActive('/convenios')}>Convênios</Nav.Link>
            <Nav.Link href="/unidades" active={isActive('/unidades')}>Unidades</Nav.Link>
            <Nav.Link href="/agendar-consulta" active={isActive('/agendar-consulta')}>Agendar Consulta</Nav.Link>
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
