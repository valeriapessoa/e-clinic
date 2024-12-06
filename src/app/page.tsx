"use client";

import React from "react";
import styles from "./page.module.css";
import About from "../components/About/About";
import Installations from "../components/Installations/Installations";
import Banner from "../components/HighlightBanner/HighlightBanner";
import Services, { Service } from '../components/Services/Services';
import { faStethoscope, faXRay, faHeartbeat, faSyringe, faUserMd, faBriefcaseMedical } from '@fortawesome/free-solid-svg-icons';
import Testimonials from "../components/Testimonials/Testimonials";

const services: Service[] = [
  {
    icon: faStethoscope,
    title: "Consultas Médicas",
    description: "Atendimento personalizado com médicos especializados em diversas áreas para cuidar da sua saúde.",
  },
  {
    icon: faXRay,
    title: "Exames de Imagem",
    description: "Realizamos exames de imagem como raio-X, ultrassonografia e tomografia com equipamentos modernos.",
  },
  {
    icon: faHeartbeat,
    title: "Cardiologia",
    description: "Cuidados especializados para a saúde do seu coração, com exames e tratamentos avançados.",
  },
  {
    icon: faSyringe,
    title: "Vacinação",
    description: "Oferecemos uma variedade de vacinas para proteger você e sua família contra diversas doenças.",
  },
  {
    icon: faUserMd,
    title: "Telemedicina",
    description: "Consultas online para que você possa receber atendimento médico sem sair de casa.",
  },
  {
    icon: faBriefcaseMedical,
    title: "Emergências",
    description: "Atendimento de emergência para situações que requerem cuidados médicos imediatos.",
  },
];

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

const Home = () => {
  return (
    <main>
      <Banner/>
      <About/>
      <Installations/>
      <div className={styles.container}>
        <div className={styles.fullWidthImage}>
          <img src="/images/home/banner-1.jpg" alt="Banner" />
          <div className={styles.overlayLeft}>
              <h2 className={styles.bannerTitleLeft}>ATENDIMENTO EM CASA</h2>
              <h2 className={styles.bannerSubtitleLeft}>Suas coletas de exames<br/>laboratoriais sem<br/>sair de casa!</h2>
          </div>
        </div>
      </div>
      <Services
        services={services}
        primaryTitle="Nossos Serviços"
        secondaryTitle="O Que Oferecemos"
        sectionDescription="Na E-Clinic, oferecemos uma ampla gama de serviços para atender às suas necessidades de saúde com excelência e dedicação."
      />
      <div className={styles.container}>
        <div className={styles.fullWidthImage}>
          <img src="/images/home/banner-2.png" alt="Banner" />
          <div className={styles.overlay}>
              <h2 className={styles.title}>Sua Saúde, Nossa Missão</h2>
          </div>
        </div>
      </div>
      <Testimonials
        testimonials={testimonialsData}
      />
    </main>
  );
};

export default Home;
