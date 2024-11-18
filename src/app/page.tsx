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
      <Container className="mt-5">
        <Row>
          <Col md={6} className="d-flex flex-column justify-content-center">
            <h5 className={styles.title}>Bem-vindo à E-Clinic</h5>
            <h1 className={styles.subtitle}>Agende uma Consulta</h1>
            <p className={styles.text}>
              Na E-Clinic, oferecemos atendimento médico de qualidade com profissionais altamente capacitados. Nossa missão é cuidar da sua saúde com dedicação e excelência. Agende sua consulta e experimente um atendimento personalizado e humanizado.
            </p>
            <div className={styles.buttonGroup}>
              <Button variant="primary" className="me-2">Contact us</Button>
              <Button variant="light">Read more</Button>
            </div>
          </Col>
          <Col md={6} className={styles.imageContainer}>
            <div className={styles.circle}></div>
            <img src="images/home/home-banner.png" alt="Doctor" className={`${styles.bannerImage} ${styles.alignRight}`} />
          </Col>
        </Row>
      </Container>


      {/* <section className={styles.container}>
        <div className={styles.featured}>
          <div className={styles.featuredItem}>
            <div className={styles.featuredContent}>
              <img className={styles.featuredImage} src="images/home/atendimento.png" alt="Ícone de atendimento" />
              <h4 className={styles.featuredText}>ATENDIMENTO DE QUALIDADE</h4>
            </div>
          </div>
          <div className={styles.featuredItem}>
            <div className={styles.featuredContent}>
              <img className={styles.featuredImage} src="images/home/especialidades.png" alt="Ícone de especialidades" />
              <h4 className={styles.featuredText}>DIVERSAS ESPECIALIDADES</h4>
            </div>
          </div>
          <div className={styles.featuredItem}>
            <div className={styles.featuredContent}>
              <img className={styles.featuredImage} src="images/home/exames.png" alt="Ícone de exames e procedimentos" />
              <h4 className={styles.featuredText}>EXAMES E PROCEDIMENTOS</h4>
            </div>
          </div>
        </div>
        </section> */}

          <About/>
          <Installations/>
          <Services/>
        {/* <section>
        <div className={styles.facilities}>
          <h2 className={styles.facilitiesHeading}>Nossas instalações</h2>
          <p className={styles.facilitiesDescription}>A E-Clinic disponibiliza instalações modernas para prestar atendimento de qualidade a seus pacientes. Humanização, cuidado, atenção e respeito são palavras que orientam há anos todas as atividades das equipes.</p>
          <p className={styles.facilitiesDescription}>Centro cirúrgico completo, com 17 salas preparadas para realizar quaisquer tipos de procedimentos, dos mais simples aos de alta complexidade, incluindo cirurgias por videolaparoscopia, tornando os procedimentos menos incisivos e minimizando o período de internação.</p>
        </div>
        <div className={styles.gallery}>
          <div className={styles.card}>
            <img className={styles.facilitiesImage} src="images/home/img-1.jpg" alt="Imagem 1 da galeria" />
          </div>
          <div className={styles.card}>
            <img className={styles.facilitiesImage} src="images/home/img-2.jpg" alt="Imagem 2 da galeria" />
          </div>
          <div className={styles.card}>
            <img className={styles.facilitiesImage} src="images/home/img-3.jpg" alt="Imagem 3 da galeria" />
          </div>
          <div className={styles.card}>
            <img className={styles.facilitiesImage} src="images/home/img-4.jpg" alt="Imagem 4 da galeria" />
          </div>
          <div className={styles.card}>
            <img className={styles.facilitiesImage} src="images/home/img-5.jpeg" alt="Imagem 5 da galeria" />
          </div>
          <div className={styles.card}>
            <img className={styles.facilitiesImage} src="images/home/img-6.jpg" alt="Imagem 6 da galeria" />
          </div>
          <div className={styles.card}>
            <img className={styles.facilitiesImage} src="images/home/img-7.bmp" alt="Imagem 7 da galeria" />
          </div>
          <div className={styles.card}>
            <img className={styles.facilitiesImage} src="images/home/img-8.jpg" alt="Imagem 8 da galeria" />
          </div>
          <div className={styles.card}>
            <img className={styles.facilitiesImage} src="images/home/img-9.png" alt="Imagem 9 da galeria" />
          </div>
        </div>
      </section> */}

      {/* Seção de Depoimentos */}
      <section>
        <Testimonials
          testimonials={testimonialsData}
          sectionTitle="O Que Nossos Pacientes Dizem"
          sectionDescription="Estamos orgulhosos de ter ajudado mais de 15.000 pacientes a alcançar uma melhor qualidade de vida. Veja o que alguns deles têm a dizer sobre a experiência em nossa clínica."
        />
      </section>
    </main>
  );
};

export default Home;
