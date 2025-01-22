'use client'

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaPhoneAlt } from 'react-icons/fa';
import { useState, useLayoutEffect } from 'react';
import { useSession } from "next-auth/react";
import UserMenu from '../../components/UserMenu/UserMenu';

const Header = () => {
  const pathname = usePathname();
  const isActive = (path: string) => pathname === path;
  const [isMobile, setIsMobile] = useState(false);
  const { data: session } = useSession();

  useLayoutEffect(() => {
    const updateIsMobile = () => {
      setIsMobile(window.innerWidth <= 992);
    };

    updateIsMobile();
    window.addEventListener("resize", updateIsMobile);
    return () => window.removeEventListener("resize", updateIsMobile);
  }, []);

  return (
    <Navbar collapseOnSelect expand="lg" className="custom-navbar">
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" className='navbar-toggler' />
        <Navbar.Brand as={Link} href="/" className='logo-container' aria-label="Página Inicial">
          <img
            src="/logo-white.png"
            alt="e-Clinic Logo"
            className="header-logo"
          />
        </Navbar.Brand>
        {isMobile && (
            <UserMenu />
        )}
        {isMobile && !session && (
          <Nav.Link as={Link} href="/login" className="login-button">Login</Nav.Link>
        )}
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="header-nav">
            <Nav.Link as={Link} href="/" active={isActive('/')} className="nav-link">Home</Nav.Link>
            <Nav.Link as={Link} href="/convenios" active={isActive('/convenios')} className="nav-link">Convênios</Nav.Link>
            <Nav.Link as={Link} href="/unidades" active={isActive('/unidades')} className="nav-link">Unidades</Nav.Link>
            <Nav.Link as={Link} href="/agendar-consulta" active={isActive('/agendar-consulta')} className="nav-link">Agendar Consulta</Nav.Link>
          </Nav>
          <Nav className='header-phone'>
            <Nav.Link href="tel:1122403434" aria-label="Ligar para +55 11 2240-3434">
              <FaPhoneAlt /> +55 11 2240-3434
            </Nav.Link>
          </Nav>
          {!isMobile && !session && (
            <Nav.Link as={Link} href="/login" className="login-button">Login</Nav.Link>
          )}
          {!isMobile && (
            <UserMenu />
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
