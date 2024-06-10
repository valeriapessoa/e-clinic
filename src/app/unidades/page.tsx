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
      <main className={styles.recipiente}>
        <div className={styles.unitsContainer}>
          <h1 className={styles.heading}>Conheça as Unidades</h1>
        </div>
        <p className={styles.text}>Estamos presentes em várias localidades para melhor atender você e sua família, sempre com o compromisso de oferecer atendimento de qualidade e personalizado. Conheça as nossas unidades e encontre a mais próxima de você:</p>
        <section className={styles.container}>
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>Morumbi</h3>
            <div>
              <FontAwesomeIcon icon={faMapMarkerAlt} className={styles.icon} />
              <p className={styles.address}>Praça Roberto Gomes Pedrosa, 782 - Morumbi, SP</p>
              <br />
              <FontAwesomeIcon icon={faPhone} className={styles.icon} />
              <a className={styles.phone} href="tel:11-3244-2020">(11) 3244-2020</a>
              <img className={styles.unitImage} src="/images/unidades/morumbi.jpg" alt="Morumbi" />
            </div>
          </div>
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>Paulista</h3>
            <div>
              <FontAwesomeIcon icon={faMapMarkerAlt} className={styles.icon} />
              <p className={styles.address}>Av. Paulista, 325 - Bela Vista, SP</p>
              <br />
              <FontAwesomeIcon icon={faPhone} className={styles.icon} />
              <a className={styles.phone} href="tel:11-3230-1010">(11) 3230-1010</a>
              <img className={styles.unitImage} src="/images/unidades/paulista.jpeg" alt="Paulista" />
            </div>
          </div>
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>Pompeia</h3>
            <div>
              <FontAwesomeIcon icon={faMapMarkerAlt} className={styles.icon} />
              <p className={styles.address}>Av. Pompéia, 1422 - Pompeia, SP</p>
              <br />
              <FontAwesomeIcon icon={faPhone} className={styles.icon} />
              <a className={styles.phone} href="tel:11-3240-6631">(11) 3240-6631</a>
              <img className={styles.unitImage} src="/images/unidades/pompeia.png" alt="Pompeia" />
            </div>
          </div>
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>Sumaré</h3>
            <div>
              <FontAwesomeIcon icon={faMapMarkerAlt} className={styles.icon} />
              <p className={styles.address}>R. Duartina, 203 - Sumaré, SP</p>
              <br />
              <FontAwesomeIcon icon={faPhone} className={styles.icon} />
              <a className={styles.phone} href="tel:11-3277-2100">(11) 3277-2100</a>
              <img className={styles.unitImage} src="/images/unidades/sumare.jpg" alt="Sumaré" />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Unidades;
