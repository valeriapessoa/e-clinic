'use client'

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaPhoneAlt, FaCaretDown, FaUserCircle } from 'react-icons/fa';
import { MdOutlineLibraryBooks, MdCalendarMonth } from "react-icons/md";
import { SlLogout } from "react-icons/sl";
import { useState } from 'react';
import { useSession, signOut } from "next-auth/react"; // Importa useSession e signOut

// Componente do cabeçalho
const Header = () => {
  const { data: session } = useSession(); // Obtém os dados da sessão
  const pathname = usePathname();
  const isActive = (path: string) => pathname === path;
  const [dropdownOpen, setDropdownOpen] = useState(false); // Estado para controlar o dropdown

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen); // Alterna a visibilidade do dropdown
  };

  return (
    <Navbar collapseOnSelect expand="lg" className="custom-navbar">
      <Container>
        <Navbar.Brand as={Link} href="/" className='logo-container' aria-label="Página Inicial">
          <img
            src="/logo-white.png"
            alt="e-Clinic Logo"
            className="header-logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" className='navbar-toggler' />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="header-nav">
            <Nav.Link as={Link} href="/" active={isActive('/')}>Home</Nav.Link>
            <Nav.Link as={Link} href="/convenios" active={isActive('/convenios')}>Convênios</Nav.Link>
            <Nav.Link as={Link} href="/unidades" active={isActive('/unidades')}>Unidades</Nav.Link>
            <Nav.Link as={Link} href="/agendar-consulta" active={isActive('/agendar-consulta')}>Agendar Consulta</Nav.Link>
          </Nav>
          <Nav className='header-phone'>
            <Nav.Link href="tel:1122403434" aria-label="Ligar para +55 11 2240-3434">
              <FaPhoneAlt /> +55 11 2240-3434
            </Nav.Link>
          </Nav>
          {session && ( // Verifica se a sessão existe
            <div className="user-menu">
              {/* Exibe a imagem do usuário se disponível ou um ícone padrão */}
              {session.user.image ? (
                <img
                  src={session.user.image} // Caminho da imagem do usuário
                  alt="Usuário"
                  className="user-image"
                />
              ) : (
                <FaUserCircle className="user-icon" /> // Ícone padrão se não houver imagem
              )}
              <FaCaretDown
                className="caret-icon"
                onClick={toggleDropdown}
                aria-haspopup="true"
                aria-expanded={dropdownOpen}
              />
              <div className={`user-menu-dropdown ${dropdownOpen ? 'show' : ''}`}>
                {/* Linha com fundo azul para o nome do usuário */}
                <div className="flex flex-column border-bottom py-2 mb-2">
                  <div className="ps-3 user-info">
                    {session.user.name && (
                      <>
                        <FaUserCircle className="user-name-icon" /> {/* Ícone ao lado do nome */}
                        <span className="user-name text-capitalize">{session.user.name}</span>
                      </>
                    )}
                  </div>
                  {session.user.email && ( // Exibe o email abaixo do nome
                    <div className="ps-3 user-email text-secondary fw-light">{session.user.email}</div>
                  )}
                </div>
                <Link href="/consultas/minhas-consultas"><MdOutlineLibraryBooks className="me-1" /> Minhas Consultas</Link>
                <Link href="/consultas/form-agendar-consulta"><MdCalendarMonth className="me-1" /> Agendar Consulta</Link>
                {/* Link de Sair */}
                <button
                  onClick={() => signOut()}
                  className='logout'
                  aria-label="Sair"
                >
                 <SlLogout className='me-1'/> Sair
                </button>
              </div>
            </div>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;