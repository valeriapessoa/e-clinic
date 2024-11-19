"use client";

import Head from 'next/head';
import styles from '../styles/convenios.module.css';
import DoctorsCarousel from "../../components/DoctorsCarousel";

const Convenios = () => {
  return (
    <>
      <Head>
        <title>Convênios</title>
      </Head>
      <main className={styles.container}>
        <section className={styles.healthPlanSection}>
          <h1 className={styles.heading}>Planos de Saúde</h1>
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
        <div className={`row ${styles.imageRow}`}>
          {Array.from({ length: 15 }, (_, index) => (
            <div key={index} className="col-6 col-md-4 col-lg-3">
              <div className={styles.block}>
                <div>
                  <img
                    className={`${styles.insuranceImage} ${styles.imageAnimation}`}
                    src={`images/convenios/img-${index + 1}.png`}
                    alt={`Convênio ${index + 1}`}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
        <DoctorsCarousel />
      </main>
    </>
  );
};

export default Convenios;