"use client"

import Head from 'next/head';
import styles from '../styles/convenios.module.css';

const Convenios = () => {
  return (
    <>
      <Head>
        <title>Convenios</title>
      </Head>
      <main className={styles.container}>
          <div className={styles.healthPlanSection}>
            <h1 className={styles.heading}>Planos de saúde</h1>
            <p className={styles.paragraph}>
              Na E-Clinic, valorizamos a vida dos nossos pacientes em cada atendimento, oferecendo cuidado excepcional
              com o jeito E-Clinic de fazer saúde. Nossa equipe trabalha unida diariamente para proporcionar o que há
              de melhor na medicina moderna a todos que confiam em nossos serviços.
            </p>
            <br />
            <p className={styles.paragraph}>
            Com dedicação, garantimos tratamento personalizado e de qualidade, utilizando tecnologias avançadas e técnicas inovadoras. Estabelecemos parcerias com diversas operadoras de saúde para facilitar o acesso à saúde de qualidade.
            </p>
            <br />
            <p className={styles.paragraph}>
              Confira abaixo a lista completa dos convênios atendidos na E-Clinic:
            </p>
          </div>
          <div className="row">
            <div className="col-6 col-md-4 col-lg-3">
              <div className={styles.block}>
                <div>
                  <img className={styles.insuranceImage} src="images/convenios/img-1.png" />
                </div>
              </div>
            </div>
            <div className="col-6 col-md-4 col-lg-3">
              <div className={styles.block}>
                <div>
                  <img className={styles.insuranceImage} src="images/convenios/img-2.png" />
                </div>
              </div>
            </div>
            <div className="col-6 col-md-4 col-lg-3">
              <div className={styles.block}>
                <div>
                  <img className={styles.insuranceImage} src="images/convenios/img-3.png" />
                </div>
              </div>
            </div>
            <div className="col-6 col-md-4 col-lg-3">
              <div className={styles.block}>
                <div>
                  <img className={styles.insuranceImage} src="images/convenios/img-4.png" />
                </div>
              </div>
            </div>
            <div className="col-6 col-md-4 col-lg-3">
              <div className={styles.block}>
                <div>
                  <img className={styles.insuranceImage} src="images/convenios/img-5.png" />
                </div>
              </div>
            </div>
            <div className="col-6 col-md-4 col-lg-3">
              <div className={styles.block}>
                <div>
                  <img className={styles.insuranceImage} src="images/convenios/img-6.png" />
                </div>
              </div>
            </div>
            <div className="col-6 col-md-4 col-lg-3">
              <div className={styles.block}>
                <div>
                  <img className={styles.insuranceImage} src="images/convenios/img-7.png" />
                </div>
              </div>
            </div>
            <div className="col-6 col-md-4 col-lg-3">
              <div className={styles.block}>
                <div>
                  <img className={styles.insuranceImage} src="images/convenios/img-8.png" />
                </div>
              </div>
            </div>
            <div className="col-6 col-md-4 col-lg-3">
              <div className={styles.block}>
                <div>
                  <img className={styles.insuranceImage} src="images/convenios/img-9.png" />
                </div>
              </div>
            </div>
            <div className="col-6 col-md-4 col-lg-3">
              <div className={styles.block}>
                <div>
                  <img className={styles.insuranceImage} src="images/convenios/img-10.png" />
                </div>
              </div>
            </div>
            <div className="col-6 col-md-4 col-lg-3">
              <div className={styles.block}>
                <div>
                  <img className={styles.insuranceImage} src="images/convenios/img-11.png" />
                </div>
              </div>
            </div>
            <div className="col-6 col-md-4 col-lg-3">
              <div className={styles.block}>
                <div>
                  <img className={styles.insuranceImage} src="images/convenios/img-12.png" />
                </div>
              </div>
            </div>
            <div className="col-6 col-md-4 col-lg-3">
              <div className={styles.block}>
                <div>
                  <img className={styles.insuranceImage} src="images/convenios/img-13.png" />
                </div>
              </div>
            </div>
            <div className="col-6 col-md-4 col-lg-3">
              <div className={styles.block}>
                <div>
                  <img className={styles.insuranceImage} src="images/convenios/img-14.png" />
                </div>
              </div>
            </div>
            <div className="col-6 col-md-4 col-lg-3">
              <div className={styles.block}>
                <div>
                  <img className={styles.insuranceImage} src="images/convenios/img-15.png" />
                </div>
              </div>
            </div>
          </div>
      </main>
    </>
  );
};

export default Convenios;
