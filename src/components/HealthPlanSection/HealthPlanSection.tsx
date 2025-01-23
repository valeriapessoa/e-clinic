import React from "react";
import SecondaryTitle from "../SecondaryTitle/SecondaryTitle";
import styles from "./HealthPlanSection.module.css";

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

const HealthPlanSection = () => {
  return (
    <section
      id="convenios"
      className={`${styles.healthPlanSection} ${styles.container}`}
    >
      <SecondaryTitle
        primary="Nossos Convênios"
        secondary="Conheça os"
        highlight="Planos de Saúde"
      />
      <p className={styles.paragraph}>
        Na E-Clinic, valorizamos a vida dos nossos pacientes em cada
        atendimento. Oferecemos cuidado excepcional com o jeito E-Clinic de
        fazer saúde. Nossa equipe trabalha unida diariamente para proporcionar o
        que há de melhor na medicina moderna a todos que confiam em nossos
        serviços.
      </p>
      <p className={styles.paragraph}>
        Com dedicação, garantimos tratamento personalizado e de qualidade,
        utilizando tecnologias avançadas e técnicas inovadoras. Estabelecemos
        parcerias com diversas operadoras de saúde para facilitar o acesso à
        saúde de qualidade.
      </p>
      <p className={styles.paragraph}>
        Confira abaixo a lista completa dos convênios atendidos na E-Clinic:
      </p>
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
    </section>
  );
};

export default HealthPlanSection;
