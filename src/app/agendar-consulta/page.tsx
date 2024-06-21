"use client"

import Head from 'next/head';
import styles from '../styles/agendar-consulta.module.css';
import { FaBullseye } from 'react-icons/fa';

const AgendarConsulta = () => {
  return (
    <main>
      <Head>
        <title>Agendar Consulta</title>
      </Head>
      <img src="/images/agendar-consulta/img-1.png" className={styles.banner} />
      <div className={styles.highlight}></div>
      <div className={styles.scheduling}>
        <h1 className={styles.title}>Agende sua consulta</h1>
      </div>
      <section className={styles.container}>
        <div className={styles.card}>
          <div>
            <img className={styles.icons} src="/images/agendar-consulta/img-2.png" />
            <p className={styles.text}>Boa localização</p>
          </div>
        </div>
        <div className={styles.card}>
          <div>
            <img className={styles.icons} src="/images/agendar-consulta/img-3.png" />
            <p className={styles.text}>Escolha o melhor dia e horário</p>
          </div>
        </div>
        <div className={styles.card}>
          <div>
            <img className={styles.icons} src="/images/agendar-consulta/img-4.png" />
            <p className={styles.text}>Prático e seguro</p>
          </div>
        </div>
      </section>
      <div className={styles.onlineScheduling}>
      <a href="login" target="_blank" className={styles.blueButton}>
        <FaBullseye className={styles.icon} />
        <span> Agendamento Online</span>
      </a>
    </div>
    </main>
  );
};

export default AgendarConsulta;
