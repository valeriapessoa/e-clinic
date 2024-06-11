"use client";

import Head from 'next/head';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone } from '@fortawesome/free-solid-svg-icons';
import styles from '../styles/unidades.module.css';

const Unidades = () => {
  return (
    <div>
      <Head>
        <title>Units</title>
      </Head>
      <main className={styles.container}>
        <div className={styles.unitsHeader}>
          <h1 className={styles.heading}>Conheça as Unidades</h1>
        </div>
        <p className={styles.description}>Estamos presentes em várias localidades para melhor atender você e sua família, sempre com o compromisso de oferecer atendimento de qualidade e personalizado. Conheça as nossas unidades e encontre a mais próxima de você:</p>
        <section className={styles.unitsList}>
          <div className={styles.unitCard}>
            <h3 className={styles.unitTitle}>Morumbi</h3>
            <div>
              <FontAwesomeIcon icon={faMapMarkerAlt} className={styles.icon} />
              <p className={styles.unitAddress}>Praça Roberto Gomes Pedrosa, 782 - Morumbi, SP</p>
              <br />
              <FontAwesomeIcon icon={faPhone} className={styles.icon} />
              <a className={styles.unitPhone} href="tel:11-3244-2020">(11) 3244-2020</a>
              <img className={styles.unitImage} src="/images/unidades/morumbi.jpg" alt="Morumbi" />
            </div>
          </div>
          <div className={styles.unitCard}>
            <h3 className={styles.unitTitle}>Paulista</h3>
            <div>
              <FontAwesomeIcon icon={faMapMarkerAlt} className={styles.icon} />
              <p className={styles.unitAddress}>Av. Paulista, 325 - Bela Vista, SP</p>
              <br />
              <FontAwesomeIcon icon={faPhone} className={styles.icon} />
              <a className={styles.unitPhone} href="tel:11-3230-1010">(11) 3230-1010</a>
              <img className={styles.unitImage} src="/images/unidades/paulista.jpeg" alt="Paulista" />
            </div>
          </div>
          <div className={styles.unitCard}>
            <h3 className={styles.unitTitle}>Pompeia</h3>
            <div>
              <FontAwesomeIcon icon={faMapMarkerAlt} className={styles.icon} />
              <p className={styles.unitAddress}>Av. Pompéia, 1422 - Pompeia, SP</p>
              <br />
              <FontAwesomeIcon icon={faPhone} className={styles.icon} />
              <a className={styles.unitPhone} href="tel:11-3240-6631">(11) 3240-6631</a>
              <img className={styles.unitImage} src="/images/unidades/pompeia.png" alt="Pompeia" />
            </div>
          </div>
          <div className={styles.unitCard}>
            <h3 className={styles.unitTitle}>Sumaré</h3>
            <div>
              <FontAwesomeIcon icon={faMapMarkerAlt} className={styles.icon} />
              <p className={styles.unitAddress}>R. Duartina, 203 - Sumaré, SP</p>
              <br />
              <FontAwesomeIcon icon={faPhone} className={styles.icon} />
              <a className={styles.unitPhone} href="tel:11-3277-2100">(11) 3277-2100</a>
              <img className={styles.unitImage} src="/images/unidades/sumare.jpg" alt="Sumaré" />
            </div>
            <br /><br />
          </div>
          <p className={styles.description}>Todas as nossas unidades são equipadas com tecnologia de ponta e contam com profissionais altamente qualificados para oferecer o melhor atendimento. Na E-Clinic, sua saúde e bem-estar são nossas prioridades.</p>
          <p className={styles.description}>Venha nos visitar em uma de nossas unidades e experimente o cuidado e a excelência que só a E-Clinic pode oferecer. Estamos prontos para atender você!</p>
        </section>
      </main>
    </div>
  );
};

export default Unidades;
