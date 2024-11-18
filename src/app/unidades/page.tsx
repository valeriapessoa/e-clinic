"use client";

import Head from 'next/head';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone } from '@fortawesome/free-solid-svg-icons';
import styles from '../styles/unidades.module.css';

const Unidades = () => {
  return (
    <div>
      <Head>
        <title>Unidades</title>
      </Head>
      <main className={styles.container}>
        <div className={styles.unitsHeader}>
          <h1 className={styles.heading}>Conheça as Unidades</h1>
        </div>
        <p className={styles.description}>
          Estamos presentes em várias localidades para melhor atender você e sua família, sempre com o compromisso de oferecer atendimento de qualidade e personalizado. Conheça as nossas unidades e encontre a mais próxima de você:
        </p>
        <section className={styles.unitsList}>
          {[
            {
              title: "Morumbi",
              address: "Praça Roberto Gomes Pedrosa, 782 - Morumbi, SP",
              phone: "(11) 3244-2020",
              image: "/images/unidades/morumbi.jpg",
              mapsLink: "https://maps.app.goo.gl/B8HncGY511YPcJGUA",
              wazeLink: "https://www.waze.com/pt-PT/live-map/directions/br/sp/hospital-sao-camilo-sp-unidade-pompeia-(pronto-socorro)?navigate=yes&utm_campaign=default&utm_source=waze_website&utm_medium=lm_share_location&to=place.ChIJTY_7SN1XzpQRhohJUy2oNog"
            },
            {
              title: "Paulista",
              address: "Av. Paulista, 325 - Bela Vista, SP",
              phone: "(11) 3230-1010",
              image: "/images/unidades/paulista.jpeg",
              mapsLink: "https://maps.app.goo.gl/B8HncGY511YPcJGUA",
              wazeLink: "https://www.waze.com/pt-PT/live-map/directions/br/sp/hospital-sao-camilo-sp-unidade-pompeia-(pronto-socorro)?navigate=yes&utm_campaign=default&utm_source=waze_website&utm_medium=lm_share_location&to=place.ChIJTY_7SN1XzpQRhohJUy2oNog"
            },
            {
              title: "Pompeia",
              address: "Av. Pompéia, 1422 - Pompeia, SP",
              phone: "(11) 3240-6631",
              image: "/images/unidades/pompeia.png",
              mapsLink: "https://maps.app.goo.gl/B8HncGY511YPcJGUA",
              wazeLink: "https://www.waze.com/pt-PT/live-map/directions/br/sp/hospital-sao-camilo-sp-unidade-pompeia-(pronto-socorro)?navigate=yes&utm_campaign=default&utm_source=waze_website&utm_medium=lm_share_location&to=place.ChIJTY_7SN1XzpQRhohJUy2oNog"
            },
            {
              title: "Sumaré",
              address: "R. Duartina, 203 - Sumaré, SP",
              phone: "(11) 3277-2100",
              image: "/images/unidades/sumare.jpg",
              mapsLink: "https://maps.app.goo.gl/B8HncGY511YPcJGUA",
              wazeLink: "https://www.waze.com/pt-PT/live-map/directions/br/sp/hospital-sao-camilo-sp-unidade-pompeia-(pronto-socorro)?navigate=yes&utm_campaign=default&utm_source=waze_website&utm_medium=lm_share_location&to=place.ChIJTY_7SN1XzpQRhohJUy2oNog"
            },
          ].map((unit, index) => (
            <div key={index} className={styles.unitCard}>
              <h3 className={styles.unitTitle}>{unit.title}</h3>
              <div>
                <FontAwesomeIcon icon={faMapMarkerAlt} className={styles.icon} />
                <p className={styles.unitAddress}>{unit.address}</p>
                <br />
                <FontAwesomeIcon icon={faPhone} className={styles.icon} />
                <a className={styles.unitPhone} href={`tel:${unit.phone.replace(/\D/g, '')}`}>{unit.phone}</a>
                <img className={`${styles.unitImage} ${styles.imageAnimation}`} src={unit.image} alt={unit.title} />
                <div className={styles.iconContainer}>
                  <div className="elementor-widget-container">
                    <a href={unit.mapsLink} target="_blank">
                      <img loading="lazy" decoding="async" width="48" height="48" src="https://hospitalsaocamilosp.org.br/wp-content/uploads/2024/07/icons8-google-maps-48.png" className="attachment-full size-full wp-image-2547" alt="Google Maps" />
                    </a>
                    <p>Maps</p>
                  </div>
                  <div className="elementor-widget-container">
                    <a href={unit.wazeLink} target="_blank">
                      <img loading="lazy" decoding="async" width="48" height="48" src="https://hospitalsaocamilosp.org.br/wp-content/uploads/2024/07/1200x630wa-1.png" className="attachment-full size-full wp-image-3229" alt="Waze" />
                    </a>
                    <p>Waze</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </section>
        <p className={styles.description}>
          Todas as nossas unidades são equipadas com tecnologia de ponta e contam com profissionais altamente qualificados para oferecer o melhor atendimento. Na E-Clinic, sua saúde e bem-estar são nossas prioridades.
        </p>
        <p className={styles.description}>
          Venha nos visitar em uma de nossas unidades e experimente o cuidado e a excelência que só a E-Clinic pode oferecer. Estamos prontos para atender você!
        </p>
      </main>
    </div>
  );
};

export default Unidades;
