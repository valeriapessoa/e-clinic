"use client";

import React from 'react';
import { FaInstagramSquare, FaFacebookSquare, FaTwitterSquare, FaPhoneAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <section className="container-flex">
        <div className="recipiente">
          <div className="footer-item">
            <a href="/"><img src="/logo-white.png" className="logo_branco" alt="Logo E-Clinic" /></a>
          </div>
          <div className="footer-item">
            <p><a className="link" href="/">Home</a></p>
            <p><a className="link" href="/convenios">Convênios</a></p>
            <p><a className="link" href="/unidades">Unidades</a></p>
            <p><a className="link" href="/agendar-consulta">Agendar Consulta</a></p>
          </div>
          <div className="footer-item">
            <p>Entre em contato conosco:</p>
            <div className="footer-contato">
              <FaPhoneAlt className="contato-icone" />
              <a className="footer-telefone" href="tel:11-3244-2020">(11) 34724-1234</a>
            </div>
          </div>
          <div className="footer-item footer-item--social">
            <p>Nos acompanhe nas redes sociais:</p>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><FaInstagramSquare className="redes-sociais" /></a>
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><FaFacebookSquare className="redes-sociais" /></a>
            <a href="https://twitter.com/?lang=pt-br" target="_blank" rel="noopener noreferrer"><FaTwitterSquare className="redes-sociais" /></a>
          </div>
        </div>
      </section>
      <div className="footer-termo">
        ©2024 - E-Clinic - Todos os direitos reservados - Termos de Uso e Política de Privacidade
      </div>
    </footer>
  );
};

export default Footer;
