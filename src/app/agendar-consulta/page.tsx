"use client";

import Head from "next/head";
import styles from "../styles/agendar-consulta.module.css";
import Link from "next/link";
import Faq from "../../components/Faq/Faq";
import HealthTips from "../../components/HealthTips/HealthTips";
import HighlightBanner from "../../components/HighlightBanner/HighlightBanner";
import BookingBanner from "../../components/BookingBanner/BookingBanner";

const AgendarConsulta = () => {
  const faqs = [
    {
      question: "Como posso cancelar ou remarcar minha consulta?",
      answer: "Você pode cancelar ou remarcar sua consulta pelo portal online ou pelo telefone.",
    },
    {
      question: "Quais são os horários disponíveis para agendamento?",
      answer: "Os horários variam conforme o especialista. Verifique as opções ao agendar online.",
    },
    {
      question: "Preciso levar algum documento para a consulta?",
      answer: "Sim, recomendamos RG, CPF e exames anteriores, se houver.",
    },
    {
      question: "O que devo fazer se não encontrar um horário disponível?",
      answer: "Entre em contato conosco para verificar outras opções.",
    },
    {
      question: "Como posso pagar pela consulta?",
      answer: "Aceitamos cartões de crédito, débito e pagamentos via aplicativos.",
    },
  ];

  const healthTips = [
    { tip: "Beba 2 litros de água por dia.", image: "/images/agendar-consulta/img-5.jpg" },
    { tip: "Exercite-se regularmente.", image: "/images/agendar-consulta/img-6.jpg" },
    { tip: "Alimente-se de forma balanceada.", image: "/images/agendar-consulta/img-7.jpg" },
    { tip: "Durma 7-8 horas por noite.", image: "/images/agendar-consulta/img-8.jpg" },
    { tip: "Evite alimentos processados.", image: "/images/agendar-consulta/img-9.png" },
    { tip: "Pratique meditação para reduzir o estresse.", image: "/images/agendar-consulta/img-10.jpg" },
  ];

  return (
    <main>
      <Head>
        <title>Agendar Consulta</title>
      </Head>
      <BookingBanner />
      <section className={`container ${styles.cardContainer}`}>
        <div className={styles.card}>
          <img src="/images/agendar-consulta/img-2.png" className={styles.icons} alt="Localização" />
          <p className={styles.text}>Boa localização</p>
        </div>
        <div className={styles.card}>
          <img src="/images/agendar-consulta/img-3.png" className={styles.icons} alt="Horário" />
          <p className={styles.text}>Escolha o melhor dia e horário</p>
        </div>
        <div className={styles.card}>
          <img src="/images/agendar-consulta/img-4.png" className={styles.icons} alt="Praticidade" />
          <p className={styles.text}>Prático e seguro</p>
        </div>
      </section>
      <HealthTips healthTips={healthTips} />
      <Faq faqs={faqs} />
    </main>
  );
};

export default AgendarConsulta;
