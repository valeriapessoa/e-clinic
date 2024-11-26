import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStethoscope, faXRay, faHeartbeat, faSyringe, faUserMd, faBriefcaseMedical } from '@fortawesome/free-solid-svg-icons';
import styles from '../../components/Services/services.module.css';

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
        <div className="section-title text-center mb-5">
          <h4 className={`${styles['primary-title']} pe-3 mb-0`}>{primaryTitle || 'Nossos Serviços'}</h4>
          <h1 className={`${styles['secondary-title']} mb-4`}>{secondaryTitle || 'O Que <span className={styles.highlight}>Oferecemos</span>'}</h1>
          <p className="mb-4">
            {sectionDescription || 'Na E-Clinic, oferecemos uma ampla gama de serviços para atender às suas necessidades de saúde com excelência e dedicação.'}
          </p>
        </div>
        <div className="row g-4">
          {services.map((service, index) => (
            <div key={index} className="col-lg-4 col-md-6 d-flex align-items-stretch">
              <div className={`service-item ${styles['service-item']} text-center p-4`}>
                <div className={styles['icon-circle']}>
                  <FontAwesomeIcon icon={service.icon} className={styles['service-icon']} />
                </div>
                <h5 className="mb-3">{service.title}</h5>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
