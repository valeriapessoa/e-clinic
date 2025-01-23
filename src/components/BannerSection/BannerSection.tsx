import React from "react";
import styles from "./BannerSection.module.css";

const BannerSection = () => {
  return (
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
            Consulte a lista completa de planos de saúde atendidos pela nossa
            clínica.
          </p>
          <a href="#convenios" className={styles.bannerButton}>
            Conheça Nossos Convênios
          </a>
        </div>
      </div>
    </section>
  );
};

export default BannerSection;
