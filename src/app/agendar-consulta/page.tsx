"use client";

import Head from "next/head";
import styles from "../styles/agendar-consulta.module.css";
import { FaBullseye } from "react-icons/fa";
import Link from "next/link";

const AgendarConsulta = () => {
  return (
    <main>
      <Head>
        <title>Agendar Consulta</title>
      </Head>
      <img src="/images/agendar-consulta/img-1.png" className={styles.banner} />
      <div className={styles.highlight}></div>
      <div className="section-title text-center mb-5">
        <h4 className={`${styles['primary-title']} pe-3 mb-0`}>Agendar Consulta</h4>
        <h1 className={`${styles['secondary-title']} mb-4`}>Agende sua <span className={styles.highlight}>Consulta</span></h1>
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
        <Link href="login" className={styles.blueButton}>
          <FaBullseye className={styles.icon} />
          <span> Agendamento Online</span>
        </Link>
      </div>
    </main>
  );
};

export default AgendarConsulta;
