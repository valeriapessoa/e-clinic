"use client";

import React from 'react';
import styles from './styles/home.module.css';

const Home = () => {
  return (
    <main>
      <section className={styles.bannerSection}>
        <img src="images/home/home-banner.jpg" className={styles.bannerImage} alt="Banner da home" />
        <div className={styles.bannerOverlay}></div>
      </section>

      <section className={styles.container}>
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
      </section>
    </main>
  );
};

export default Home;
