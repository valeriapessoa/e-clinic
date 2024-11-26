"use client";

import Head from 'next/head';
import styles from '../styles/convenios.module.css';

const Convenios = () => {
  return (
    <>
      <Head>
        <title>Convênios</title>
      </Head>
      <main >
        <section className={styles.bannerSection}>
          <img src="/images/convenios/banner.jpg" className={styles.banner} alt="Banner" />
        </section>
        <section className={`${styles.healthPlanSection} ${styles.container}`}>
          <h4 className={`${styles.primaryTitle} pe-3 mb-0`}>Nossos Convênios</h4>
          <h1 className={`${styles.secondaryTitle} mb-4`}>Confira os <span className={styles.highlight}>Planos de Saúde</span></h1>
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
      </main>
    </>
  );
};

export default Convenios;
