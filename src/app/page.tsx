"use client";

import React from "react";
import styles from "./page.module.css";
import Testimonials from "../components/Testimonials";
import About from "../components/About";
import Services from "../components/Services";
import Installations from "../components/Installations";
import { Container, Row, Col, Button } from 'react-bootstrap';

const Home = () => {
  const testimonialsData = [
      {
        image: "/images/home/test-thumb1.jpg",
        title: "Serviço incrível!",
        name: "Camila Silva",
        feedback:
          "O atendimento foi simplesmente incrível! Desde a recepção até a consulta, fui tratada com muito carinho e profissionalismo. Recomendo a todos!",
      },
      {
        image: "/images/home/test-thumb2.jpg",
        title: "Médicos especialistas!",
        name: "João Pereira",
        feedback:
          "Os médicos são extremamente competentes e especializados. Senti muita confiança durante todo o tratamento. Excelente equipe!",
      },
      {
        image: "/images/home/test-thumb3.jpg",
        title: "Bom suporte!",
        name: "Maria Oliveira",
        feedback:
          "O suporte que recebi foi excepcional. Todas as minhas dúvidas foram esclarecidas rapidamente e com muita atenção. Agradeço a toda a equipe!",
      },
      {
        image: "/images/home/test-thumb4.jpg",
        title: "Ambiente agradável!",
        name: "Carlos Ferreira",
        feedback:
          "A clínica possui um ambiente muito agradável e acolhedor. Me senti confortável e bem-vindo desde o momento em que entrei.",
      },
      {
        image: "/images/home/test-thumb5.jpg",
        title: "Equipamentos modernos!",
        name: "Fernanda Costa",
        feedback:
          "Fiquei impressionada com a modernidade dos equipamentos e a tecnologia utilizada na clínica. Isso fez toda a diferença no meu tratamento.",
      },
      {
        image: "/images/home/test-thumb6.jpg",
        title: "Ótimo atendimento!",
        name: "Lucas Almeida",
        feedback:
          "O atendimento foi excelente! Todos os funcionários são muito educados e prestativos. Com certeza voltarei sempre que precisar.",
      },
    ];

  return (
    <main>
      <Container className={`mt-5 ${styles.container}`}>
        <Row>
          <Col md={6} className="d-flex flex-column justify-content-center">
            <h5 className={styles.title}>Bem-vindo à E-Clinic</h5>
            <h1 className={styles.subtitle}>Marque sua consulta agora</h1>
            <p className={styles.text}>
              Na E-Clinic, oferecemos atendimento médico de qualidade com profissionais altamente capacitados. Nossa missão é cuidar da sua saúde com dedicação e excelência. Agende sua consulta e experimente um atendimento personalizado e humanizado.
            </p>
            <div className={styles.buttonGroup}>
              <Button className={`rounded-pill text-white py-3 px-5 me-3 ${styles.btnPrimary}`}>Agendar</Button>
              <Button variant="light" className={`rounded-pill py-3 px-5 me-3 ${styles.btnSecondary}`}>Serviços</Button>
            </div>
          </Col>
          <Col md={6} className={styles.imageContainer}>
            <div className={styles.circlePrimary}></div>
            <div className={styles.circleSecondary}></div>
            <img src="images/home/home-banner.png" alt="Doctor" className={`${styles.bannerImage} ${styles.alignRight}`} />
          </Col>
        </Row>
      </Container>
          <About/>
          <Installations/>
          <Services/>
          <Testimonials
            testimonials={testimonialsData}
          />
    </main>
  );
};

export default Home;
