import React from 'react';
import { FaStethoscope, FaHospital, FaUserMd, FaShieldAlt } from 'react-icons/fa';
import TertiaryTitle from '../TertiaryTitle/TertiaryTitle';
import styles from './ClinicServices.module.css';

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface ClinicServicesProps {
  primaryTitle: string;
  secondaryTitle: string;
  imageUrl: string;
  services: Service[];
}

const ClinicServices = ({ primaryTitle, secondaryTitle, imageUrl, services }: ClinicServicesProps) => {
  return (
    <div className={styles.container}>
      <TertiaryTitle primary={primaryTitle} secondary={secondaryTitle} />
      <div className={styles.content}>
        <img
          className={styles.image}
          src={imageUrl}
          alt="Atendimento Médico"
        />
        <div className={styles.infoSection}>
          <ul className={styles.list}>
            {services.map((service, index) => (
              <li key={index} className={styles.listItem}>
                <span className={styles.icon}>{service.icon}</span>
                <div>
                  <strong>{service.title}</strong>
                  <p>{service.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ClinicServices;
