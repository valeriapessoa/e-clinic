import React from 'react';
import Link from "next/link";
import styles from './DiagnosticBanner.module.css';

const DiagnosticBanner = () => {
  return (
    <section className={styles.bannerContainer}>
      <img
        src="images/unidades/banner.jpg"
        alt=""
        className={styles.bannerImage}
      />
      <div className={styles.bannerContent}>
        <div className="container text-start">
          <div className="row justify-content-sm-center justify-content-lg-start">
            <div className={`${styles.textContainer} col-md-10 col-lg-8 col-xl-5`}>
              <h2 className={styles.title}>Todos os tipos <br className="d-none d-xl-inline-block" />de Diagnóstico</h2>
              <p className={`${styles.text} ${styles.spacingTop}`}>E-clinic oferece a gama mais abrangente de serviços de diagnóstico da região, desde ressonância magnética a raio-X.</p>
              <div className={styles.spacingTop}>
                <Link href="consultas/form-agendar-consulta" className={`${styles.btnEllipse} ${styles.btnWhite} btn`}>
                    Explorar Serviços
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiagnosticBanner;
