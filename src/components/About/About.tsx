import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import PrimaryTitle from '../PrimaryTitle/PrimaryTitle';
import SecondaryTitle from '../SecondaryTitle/SecondaryTitle';
import styles from './About.module.css';

const About: React.FC = () => {
  return (
    <div className={`container-fluid about py-5 ${styles.containerAbout}`}>
      <div className="container py-5">
        <div className="row g-5 align-items-center">
          <div className="col-lg-5 wow fadeInLeft" data-wow-delay="0.2s">
            <div className={`${styles.aboutImg} pb-5 ps-5`}>
              <img src="/images/home/about-1.jpg" className="img-fluid rounded w-100" style={{ objectFit: 'cover' }} alt="Imagem" />
              <div className={styles.aboutImgInner}>
                <img src="/images/home/about-2.jpg" className={`img-fluid rounded-circle ${styles.innerImg}`} alt="Imagem" />
              </div>
              <div className={styles.aboutExperience}>15 anos de experiência</div>
            </div>
          </div>
          <div className="col-lg-7 wow fadeInRight" data-wow-delay="0.4s">
            <PrimaryTitle
              primary="Sobre Nós"
              secondary="Comprometidos com a Sua"
              highlight="Saúde e Bem-estar"
            />
            <p className="mb-4">Na E-Clinic, dedicamo-nos a oferecer o melhor atendimento possível. Com 15 anos de experiência, nossa equipe está preparada para cuidar de você com excelência e dedicação. Nossa missão é proporcionar tratamentos personalizados que atendam às suas necessidades específicas.</p>
            <div className="mb-4">
              <p className="text-secondary"><FontAwesomeIcon icon={faCheck} className={`me-2 ${styles.customIcon}`} /> Atendimento personalizado e humanizado.</p>
              <p className="text-secondary"><FontAwesomeIcon icon={faCheck} className={`me-2 ${styles.customIcon}`} /> Profissionais qualificados e experientes.</p>
              <p className="text-secondary"><FontAwesomeIcon icon={faCheck} className={`me-2 ${styles.customIcon}`} /> Tecnologia de ponta para seu conforto e segurança.</p>
            </div>
            <a href="#" className={`btn ${styles.customButton} rounded-pill text-white py-3 px-5`}>Descubra Mais</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
