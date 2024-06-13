"use client";

import React from 'react';
import { usePathname } from 'next/navigation';
import { FaInstagramSquare, FaFacebookSquare, FaTwitterSquare, FaPhoneAlt } from 'react-icons/fa';

const Footer = () => {
  const pathname = usePathname();
  const isActive = (path: string) => pathname === path ? 'link active': 'link';
  return (
    <footer className="footer">
      <section className="flex-container">
        <div className="wrapper">
          <div className="footer-item">
            <a href="/"><img src="/logo-white.png" className="white-logo" alt="Logo E-Clinic" /></a>
          </div>
          <div className="footer-item">
            <p><a className={isActive('/')} href="/">Home</a></p>
            <p><a className={isActive('/convenios')} href="/convenios">Convênios</a></p>
            <p><a className={isActive('/unidades')} href="/unidades">Unidades</a></p>
            <p><a className={isActive('/agendar-consulta')} href="/agendar-consulta">Agendar Consulta</a></p>
          </div>
          <div className="footer-item">
            <p>Entre em contato conosco:</p>
            <div className="footer-contact">
              <FaPhoneAlt className="contact-icon" />
              <a className="footer-phone" href="tel:11-3244-2020">(11) 34724-1234</a>
            </div>
          </div>
          <div className="footer-item social-links">
            <p>Nos acompanhe nas redes sociais:</p>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><FaInstagramSquare className="social-icon" /></a>
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><FaFacebookSquare className="social-icon" /></a>
            <a href="https://twitter.com/?lang=pt-br" target="_blank" rel="noopener noreferrer"><FaTwitterSquare className="social-icon" /></a>
          </div>
        </div>
      </section>
      <div className="footer-disclaimer">
        ©2024 - E-Clinic - Todos os direitos reservados - Termos de Uso e Política de Privacidade
      </div>
    </footer>
  );
};

export default Footer;
