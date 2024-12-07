import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import PrimaryTitle from '../PrimaryTitle/PrimaryTitle';
import styles from './About.module.css';

interface AboutProps {
  primaryTitle: string;
  secondaryTitle: string;
  highlight: string;
  description: string;
  experienceYears: number;
  image1: string;
  image2: string;
  features: string[];
  buttonText: string;
}

const About: React.FC<AboutProps> = ({ primaryTitle, secondaryTitle, highlight, description, experienceYears, image1, image2, features, buttonText }) => {
  return (
    <div className={`container-fluid about py-5 ${styles.containerAbout}`}>
      <div className="container py-5">
        <div className="row g-5 align-items-center">
          <div className="col-lg-5 wow fadeInLeft" data-wow-delay="0.2s">
            <div className={`${styles.aboutImg} pb-5 ps-5`}>
              <img src={image1} className={`img-fluid rounded w-100 ${styles.coverImage}`} alt="Imagem" />
              <div className={styles.aboutImgInner}>
                <img src={image2} className={`img-fluid rounded-circle ${styles.innerImg}`} alt="Imagem" />
              </div>
              <div className={styles.aboutExperience}>{experienceYears} anos de experiência</div>
            </div>
          </div>
          <div className="col-lg-7 wow fadeInRight" data-wow-delay="0.4s">
            <PrimaryTitle
              primary={primaryTitle}
              secondary={secondaryTitle}
              highlight={highlight}
            />
            <p className={`mb-4 ${styles.text}`}>{description}</p>
            <div className="mb-4">
              {features.map((feature, index) => (
                <p key={index} className={styles.text}>
                  <FontAwesomeIcon icon={faCheck} className={`me-2 ${styles.customIcon}`} /> {feature}
                </p>
              ))}
            </div>
            <a href="#" className={`btn ${styles.customButton} rounded-pill text-white py-3 px-5`}>{buttonText}</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
