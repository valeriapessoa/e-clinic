"use client"

import Head from 'next/head';
import styles from '../styles/convenios.module.css';

const Convenios = () => {
  return (
    <>
      <Head>
        <title>Convenios</title>
      </Head>
      <main className={styles.recipiente}>
          <div className={styles.divPlanoSaude}>
            <h1 className={styles.texto1}>Planos de saúde</h1>
            { /* <p className={styles.texto2}>
              Sempre valorizamos a vida dos nossos pacientes em cada atendimento, com o jeito E-Clinic de fazer saúde.
              Trabalhamos juntos diariamente, disponibilizando o melhor que a medicina pode oferecer para todos que
              passam por aqui, confira abaixo a lista dos convênios atendidos:
            </p> */ }

            <p className={styles.texto2}>
              Na E-Clinic, valorizamos a vida dos nossos pacientes em cada atendimento, oferecendo cuidado excepcional
              com o jeito E-Clinic de fazer saúde. Nossa equipe trabalha unida diariamente para proporcionar o que há
              de melhor na medicina moderna a todos que confiam em nossos serviços.
            </p>

            <br />

            <p className={styles.texto2}>
            Com dedicação, garantimos tratamento personalizado e de qualidade, utilizando tecnologias avançadas e técnicas inovadoras. Estabelecemos parcerias com diversas operadoras de saúde para facilitar o acesso à saúde de qualidade
            </p>

            <br />

            <p className={styles.texto2}>
              Confira abaixo a lista completa dos convênios atendidos na E-Clinic:
            </p>
          </div>
          <div className="row">
            <div className="col-6 col-md-3">
              <div className={styles.bloco}>
                <div>
                  <img className={styles.imgUnidades} src="images/convenios/img-1.png" />
                </div>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className={styles.bloco}>
                <div>
                  <img className={styles.imgUnidades} src="images/convenios/img-2.png" />
                </div>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className={styles.bloco}>
                <div>
                  <img className={styles.imgUnidades} src="images/convenios/img-3.png" />
                </div>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className={styles.bloco}>
                <div>
                  <img className={styles.imgUnidades} src="images/convenios/img-4.png" />
                </div>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className={styles.bloco}>
                <div>
                  <img className={styles.imgUnidades} src="images/convenios/img-5.png" />
                </div>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className={styles.bloco}>
                <div>
                  <img className={styles.imgUnidades} src="images/convenios/img-6.png" />
                </div>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className={styles.bloco}>
                <div>
                  <img className={styles.imgUnidades} src="images/convenios/img-7.png" />
                </div>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className={styles.bloco}>
                <div>
                  <img className={styles.imgUnidades} src="images/convenios/img-8.png" />
                </div>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className={styles.bloco}>
                <div>
                  <img className={styles.imgUnidades} src="images/convenios/img-9.png" />
                </div>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className={styles.bloco}>
                <div>
                  <img className={styles.imgUnidades} src="images/convenios/img-10.png" />
                </div>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className={styles.bloco}>
                <div>
                  <img className={styles.imgUnidades} src="images/convenios/img-11.png" />
                </div>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className={styles.bloco}>
                <div>
                  <img className={styles.imgUnidades} src="images/convenios/img-12.png" />
                </div>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className={styles.bloco}>
                <div>
                  <img className={styles.imgUnidades} src="images/convenios/img-13.png" />
                </div>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className={styles.bloco}>
                <div>
                  <img className={styles.imgUnidades} src="images/convenios/img-14.png" />
                </div>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className={styles.bloco}>
                <div>
                  <img className={styles.imgUnidades} src="images/convenios/img-15.png" />
                </div>
              </div>
            </div>
          </div>
      </main>
    </>
  );
};

export default Convenios;
