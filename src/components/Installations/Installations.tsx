import React, { useState, useLayoutEffect } from 'react';
import { Carousel } from 'react-bootstrap';
import SecondaryTitle from '../SecondaryTitle/SecondaryTitle';
import styles from './Installations.module.css';

const Installations: React.FC = () => {
  const [itemsPerSlide, setItemsPerSlide] = useState(3);

  useLayoutEffect(() => {
    const updateItemsPerSlide = () => {
      if (window.innerWidth < 768) {
        setItemsPerSlide(1);
      } else {
        setItemsPerSlide(3);
      }
    };

    // Chama a função no primeiro render
    updateItemsPerSlide();

    // Adiciona um listener para redimensionamento da janela
    window.addEventListener("resize", updateItemsPerSlide);

    // Limpa o listener ao desmontar o componente
    return () => window.removeEventListener("resize", updateItemsPerSlide);
  }, []);

  // Lista de imagens
  const items = [
    { src: "/images/home/img-1.jpg", alt: "Instalação 1" },
    { src: "/images/home/img-2.jpg", alt: "Instalação 2" },
    { src: "/images/home/img-3.jpg", alt: "Instalação 3" },
    { src: "/images/home/img-4.jpg", alt: "Instalação 4" },
    { src: "/images/home/img-5.jpg", alt: "Instalação 5" },
    { src: "/images/home/img-6.jpg", alt: "Instalação 6" },
    { src: "/images/home/img-7.jpg", alt: "Instalação 7" },
    { src: "/images/home/img-8.jpg", alt: "Instalação 8" },
    { src: "/images/home/img-9.jpg", alt: "Instalação 9" },
  ];

  // Calcular o número total de slides
  const slides = Math.ceil(items.length / itemsPerSlide);

  return (
    <div className={`container-fluid installations py-5 ${styles.installations}`}>
      <img src="/images/home/img-0.png" className={`${styles.waveStyle}`} alt="Instalação" />
      <div className="container py-5">
        <SecondaryTitle
          primary="Nossas Instalações"
          secondary="Conheça"
          highlight="Nossa Estrutura"
        />
        <p className={`mb-4 ${styles.text}`}>A E-Clinic disponibiliza instalações modernas para prestar atendimento de qualidade a seus pacientes. Humanização, cuidado, atenção e respeito são palavras que orientam há anos todas as atividades das equipes.</p>
        <p className={`mb-4 ${styles.text}`}>Centro cirúrgico completo, com 17 salas preparadas para realizar quaisquer tipos de procedimentos, dos mais simples aos de alta complexidade, incluindo cirurgias por videolaparoscopia, tornando os procedimentos menos incisivos e minimizando o período de internação.</p>
        <Carousel indicators={true} nextIcon={<span aria-hidden="true" className="carousel-control-next-icon" />} prevIcon={<span aria-hidden="true" className="carousel-control-prev-icon" />}>
          {Array.from({ length: slides }).map((_, slideIndex) => (
            <Carousel.Item key={slideIndex}>
              <div className="d-flex justify-content-center align-items-center">
                {items.slice(slideIndex * itemsPerSlide, slideIndex * itemsPerSlide + itemsPerSlide).map((item, index) => (
                  <img key={index} src={item.src} className={`d-block ${styles.carouselImg}`} alt={item.alt} />
                ))}
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
      <img src="/images/home/img-00.png" className={`${styles.waveStyle}`} alt="Instalação" />
    </div>
  );
};

export default Installations;
