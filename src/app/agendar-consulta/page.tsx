"use client"

import Head from 'next/head';
import styles from '../styles/agendar-consulta.module.css';

const AgendarConsulta = () => {
  return (
    <main>
      <Head>
        <title>Agendar Consulta</title>
      </Head>
      <img src="/images/agendar-consulta/img-1.png" className={styles.banner} />
      <div className={styles.div_destaque}></div>
      <div className={styles.div_agendamento}>
        <h1 className={styles.texto}>Agende sua consulta</h1>
      </div>
      <section className={`container ${styles.container}`}>
        <div className={`card ${styles.card}`}>
          <div>
            <img className={styles.icones} src="/images/agendar-consulta/img-2.png" />
            <p className={styles.texto1}>Boa localização</p>
          </div>
        </div>
        <div className={`card ${styles.card}`}>
          <div>
            <img className={styles.icones} src="/images/agendar-consulta/img-3.png" />
            <p className={styles.texto1}>Escolha o melhor dia e horário</p>
          </div>
        </div>
        <div className={`card ${styles.card}`}>
          <div>
            <img className={styles.icones} src="/images/agendar-consulta/img-4.png" />
            <p className={styles.texto1}>Prático e seguro</p>
          </div>
        </div>
      </section>
      <div className={styles.div_Agendamento}>
        <a href="login.php" target="_blank" className={styles.botao_azul}>
          <span className="material-icons">ads_click</span><span> Agendamento Online</span>
        </a>
      </div>
    </main>
  );
};

export default AgendarConsulta;


