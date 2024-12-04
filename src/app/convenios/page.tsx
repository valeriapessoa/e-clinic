"use client";

import Head from "next/head";
import SecondaryTitle from "../../components/SecondaryTitle/SecondaryTitle";
import styles from "../styles/convenios.module.css";
import ConvenioBenefits from "../../components/ConvenioBenefits/ConvenioBenefits";
import NewsCarousel from "../../components/NewsCarousel/NewsCarousel";

const images = [
  "/images/convenios/img-1.png",
  "/images/convenios/img-2.png",
  "/images/convenios/img-3.png",
  "/images/convenios/img-4.png",
  "/images/convenios/img-5.png",
  "/images/convenios/img-6.png",
  "/images/convenios/img-7.png",
  "/images/convenios/img-8.png",
  "/images/convenios/img-9.png",
  "/images/convenios/img-10.png",
  "/images/convenios/img-11.png",
  "/images/convenios/img-12.png",
  "/images/convenios/img-13.png",
  "/images/convenios/img-14.png",
  "/images/convenios/img-15.png",
  "/images/convenios/img-16.png",
];

const Convenios = () => {
  return (
    <>
      <Head>
        <title>Convênios</title>
      </Head>
      <main>
        {/* Banner */}
        <section className={styles.bannerSection}>
          <img
            src="/images/convenios/banner.jpg"
            alt="Banner Clínico"
            className={styles.bannerImage}
          />
          <div className={styles.bannerOverlay}>
            <div className={styles.bannerContent}>
              <h1 className={styles.bannerTitle}>
                Convênios Aceitos pela E-Clinic
              </h1>
              <p className={styles.bannerSubtitle}>
                Consulte a lista completa de planos de saúde atendidos pela nossa clínica.
              </p>
              <a href="#convenios" className={styles.bannerButton}>
                Conheça Nossos Convênios
              </a>
            </div>
          </div>
        </section>

        {/* Seção de Convênios */}
        <section
          id="convenios"
          className={`${styles.healthPlanSection} ${styles.container}`}
        >
          <SecondaryTitle primary="Nossos Convênios" secondary="Conheça os" highlight="Planos de Saúde" />
          <p className={styles.paragraph}>
            Na E-Clinic, valorizamos a vida dos nossos pacientes em cada atendimento. Oferecemos cuidado excepcional com o jeito E-Clinic de fazer saúde. Nossa equipe trabalha unida diariamente para proporcionar o que há de melhor na medicina moderna a todos que confiam em nossos serviços.
          </p>
          <p className={styles.paragraph}>
            Com dedicação, garantimos tratamento personalizado e de qualidade, utilizando tecnologias avançadas e técnicas inovadoras. Estabelecemos parcerias com diversas operadoras de saúde para facilitar o acesso à saúde de qualidade.
          </p>
          <p className={styles.paragraph}>
            Confira abaixo a lista completa dos convênios atendidos na E-Clinic:
          </p>
        </section>

        {/* Lista de Convênios */}
        <div className={`row ${styles.imageRow} ${styles.container}`}>
          {images.map((src, index) => (
            <div key={index} className="col-6 col-md-4 col-lg-3">
              <div className={styles.block}>
                <img
                  className={`${styles.insuranceImage} ${styles.imageAnimation}`}
                  src={src}
                  alt={`Convênio ${index + 1}`}
                />
              </div>
            </div>
          ))}
        </div>

        <ConvenioBenefits />
        <NewsCarousel />
      </main>
    </>
  );
};

export default Convenios;
