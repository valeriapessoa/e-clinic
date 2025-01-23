"use client";

import React from "react";
import TertiaryTitle from "../TertiaryTitle/TertiaryTitle";
import styles from "./NewsCarousel.module.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const news = [
  {
    title: "Demências: fatores de risco, prevenção e sintomas",
    summary:
      "Entenda os fatores de risco, formas de prevenção e sintomas das demências. As demências são condições que afetam a memória, o pensamento e a capacidade de realizar atividades diárias. A prevenção inclui hábitos saudáveis e acompanhamento médico regular.",
    date: "Publicado em: 15/11/2024",
    link: "https://drauziovarella.uol.com.br/coluna-da-mariana-varella/demencias-fatores-de-risco-prevencao-e-sintomas/",
    image: "./images/convenios/news/img-1.jpg",
  },
  {
    title: "Fertilização in vitro: entenda como funciona o procedimento",
    summary:
      "Saiba mais sobre o procedimento de fertilização in vitro, uma técnica de reprodução assistida que ajuda casais com dificuldades para engravidar. O processo envolve a coleta de óvulos e espermatozoides, a fertilização em laboratório e a transferência dos embriões para o útero.",
    date: "Publicado em: 05/11/2024",
    link: "https://drauziovarella.uol.com.br/mulher/fertilizacao-in-vitro-entenda-como-funciona-o-procedimento/",
    image: "./images/convenios/news/img-3.jpg",
  },
  {
    title:
      "20% das mulheres acima dos 40 anos não fazem exames médicos nas mamas",
    summary:
      "A importância dos exames médicos nas mamas para mulheres acima dos 40 anos é crucial para a detecção precoce do câncer de mama. No entanto, uma pesquisa recente mostra que 20% dessas mulheres não realizam esses exames regularmente, o que pode comprometer a saúde.",
    date: "Publicado em: 06/11/2024",
    link: "https://drauziovarella.uol.com.br/oncologia/20-das-mulheres-acima-dos-40-anos-nao-fazem-exames-medicos-nas-mamas/",
    image: "./images/convenios/news/img-2.jpg",
  },
  {
    title:
      "Inteligência artificial na saúde pública: o que os hospitais do SUS já estão usando?",
    summary:
      "Descubra como a inteligência artificial está sendo utilizada nos hospitais do SUS para melhorar o atendimento e a eficiência dos serviços de saúde. Tecnologias como análise de dados e sistemas de apoio à decisão clínica estão transformando a saúde pública.",
    date: "Publicado em: 04/11/2024",
    link: "https://drauziovarella.uol.com.br/saude-publica/inteligencia-artificial-na-saude-publica-o-que-os-hospitais-do-sus-ja-estao-usando/",
    image: "./images/convenios/news/img-4.jpg",
  },
  {
    title: "Botox pode ser utilizado no tratamento de doenças neurológicas",
    summary:
      "O uso do botox no tratamento de doenças neurológicas está ganhando destaque. Além de sua aplicação estética, o botox pode ajudar no alívio de sintomas de condições como enxaquecas crônicas e espasmos musculares.",
    date: "Publicado em: 23/10/2024",
    link: "https://drauziovarella.uol.com.br/neurologia/botox-pode-ser-utilizado-no-tratamento-de-doencas-neurologicas/",
    image: "./images/convenios/news/img-5.jpg",
  },
  {
    title: "Como identificar a síndrome do intestino irritável?",
    summary:
      "Aprenda a identificar os sintomas da síndrome do intestino irritável, uma condição que afeta o sistema digestivo e causa desconforto abdominal, inchaço e alterações nos hábitos intestinais. O diagnóstico precoce e o tratamento adequado são essenciais para a qualidade de vida.",
    date: "Publicado em: 22/10/2024",
    link: "https://drauziovarella.uol.com.br/gastroenterologia/como-identificar-a-sindrome-do-intestino-irritavel/",
    image: "./images/convenios/news/img-6.jpg",
  },
];

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const NewsCarousel = () => {
  return (
    <section
      className={`${styles.newsSection} ${styles.container} py-5 newsCarousel`}
    >
      <TertiaryTitle
        primary="Últimas Notícias"
        secondary="Fique por Dentro das Novidades"
      />
      <Carousel
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={3000}
        showDots={true}
        containerClass={styles.carouselContainer}
        itemClass={styles.carouselItem}
        dotListClass={styles.customDotList}
        className="newsCarousel"
        arrows={false} // Remove as setas laterais
      >
        {news.map((article, index) => (
          <div key={index} className={styles.newsItem}>
            <img
              src={article.image}
              alt={`Notícia ${index + 1}`}
              className={styles.newsImage}
            />
            <div className={styles.newsContent}>
              <h3 className={styles.newsHeadline}>{article.title}</h3>
              <p className={styles.newsSummary}>{article.summary}</p>
              <p className={styles.newsDate}>{article.date}</p>
              <a href={article.link} className={styles.readMore}>
                Leia mais...
              </a>
            </div>
          </div>
        ))}
      </Carousel>
    </section>
  );
};

export default NewsCarousel;
