import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone } from '@fortawesome/free-solid-svg-icons';
import styles from './UnitList.module.css';

export interface Unit {
  title: string;
  address: string;
  phone: string;
  image: string;
  mapsLink: string;
  wazeLink: string;
}

interface UnitListProps {
  units: Unit[];
  primaryTitle?: string;
  secondaryTitle?: string;
  description?: string;
}

const UnitList: React.FC<UnitListProps> = ({ units, primaryTitle, secondaryTitle, description }) => {
  return (
    <section className={`${styles.unitsList} container mt-5 pt-5`}>
      <div className={`${styles.healthPlanSection} ${styles.container} ${styles.unitsHeader} `}>
        <h4 className={`${styles.primaryTitle} pe-3 mb-0`}>{primaryTitle || 'Nossos Convênios'}</h4>
        <h1 className={`${styles.secondaryTitle} mb-4`}>{secondaryTitle || 'Visite Nossas <span className={styles.highlight}>Unidades</span>'}</h1>
      </div>
      <p className={styles.description}>
        {description || 'Estamos presentes em várias localidades para melhor atender você e sua família, sempre com o compromisso de oferecer atendimento de qualidade e personalizado. Conheça as nossas unidades e encontre a mais próxima de você:'}
      </p>
      {units?.map((unit, index) => (
        <div key={index} className={styles.unitCard}>
          <h3 className={styles.unitTitle}>{unit.title}</h3>
          <div>
            <FontAwesomeIcon icon={faMapMarkerAlt} className={styles.icon} />
            <p className={styles.unitAddress}>{unit.address}</p>
            <br />
            <FontAwesomeIcon icon={faPhone} className={styles.icon} size='1x' />
            <a className={styles.unitPhone} href={`tel:${unit.phone.replace(/\D/g, '')}`}>{unit.phone}</a>
            <img className={`${styles.unitImage} ${styles.imageAnimation}`} src={unit.image} alt={unit.title} />
            <div className={styles.iconContainer}>
              <div className="elementor-widget-container">
                <a href={unit.mapsLink} target="_blank">
                  <img loading="lazy" decoding="async" width="48" height="48" src="https://hospitalsaocamilosp.org.br/wp-content/uploads/2024/07/icons8-google-maps-48.png" alt="Google Maps" />
                </a>
                <p>Maps</p>
              </div>
              <div className="elementor-widget-container">
                <a href={unit.wazeLink} target="_blank">
                  <img loading="lazy" decoding="async" width="48" height="48" src="https://hospitalsaocamilosp.org.br/wp-content/uploads/2024/07/1200x630wa-1.png" alt="Waze" />
                </a>
                <p>Waze</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default UnitList;
