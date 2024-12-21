import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStethoscope, faXRay, faHeartbeat, faSyringe, faUserMd, faBriefcaseMedical } from '@fortawesome/free-solid-svg-icons';
import TertiaryTitle from '../TertiaryTitle/TertiaryTitle';
import styles from './Services.module.css';

export interface Service {
  icon: any;
  title: string;
  description: string;
}

interface ServicesProps {
  services: Service[];
  primaryTitle?: string;
  secondaryTitle?: string;
  sectionDescription?: string;
}

const Services: React.FC<ServicesProps> = ({ services, primaryTitle, secondaryTitle, sectionDescription }) => {
  return (
    <div className={`container-fluid services py-5 ${styles.services}`}>
      <div className="container py-5">
        <TertiaryTitle
          primary={primaryTitle || 'Nossos Serviços'}
          secondary={secondaryTitle || 'O Que Oferecemos'}
        />
         <p className={`mb-4 ${styles.textServices}`}>
          {sectionDescription || 'Na E-Clinic, oferecemos uma ampla gama de serviços para atender às suas necessidades de saúde com excelência e dedicação. Nossa equipe de profissionais altamente qualificados está comprometida em proporcionar um atendimento humanizado e personalizado, garantindo que cada paciente receba o cuidado e a atenção que merece.'}
        </p>
        <div className={`row g-4 ${styles.containerItem}`}>
          {services.map((service, index) => (
            <div key={index} className="col-lg-4 col-md-6 d-flex align-items-stretch">
              <div className={`service-item ${styles.serviceItem} text-center p-4`}>
                <div className={styles.iconCircle}>
                  <FontAwesomeIcon icon={service.icon} className={styles.serviceIcon} />
                </div>
                <h5 className="mb-3">{service.title}</h5>
                <p className={styles.textServices}>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
