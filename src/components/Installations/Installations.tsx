import React from 'react';
import { Carousel } from 'react-bootstrap';
import SecondaryTitle from '../SecondaryTitle/SecondaryTitle';
import styles from './Installations.module.css';

interface InstallationProps {
  images: string[];
  primaryTitle: string;
  secondaryTitle: string;
  highlight: string;
  description: string;
}

const Installations: React.FC<InstallationProps> = ({ images, primaryTitle, secondaryTitle, highlight, description }) => {
  const groupedImages = [];
  for (let i = 0; i < images.length; i += 3) {
    groupedImages.push(images.slice(i, i + 3));
  }

  return (
    <div className={`container-fluid installations py-5 ${styles.installations}`}>
      <img src="/images/home/img-0.png" className={`${styles.waveStyle}`} alt="Instalação" />
      <div className="container py-5">
        <SecondaryTitle
          primary={primaryTitle}
          secondary={secondaryTitle}
          highlight={highlight}
        />
        <p className={`mb-4 ${styles.text}`}>{description}</p>
        <Carousel indicators={true} nextIcon={<span aria-hidden="true" className="carousel-control-next-icon" />} prevIcon={<span aria-hidden="true" className="carousel-control-prev-icon" />}>
          {groupedImages.map((group, index) => (
            <Carousel.Item key={index}>
              <div className="d-flex justify-content-center align-items-center">
                <img src={group[0]} className={`d-block ${styles.smallImg}`} alt={`Instalação ${index * 3 + 1}`} />
                <img src={group[1]} className={`d-block ${styles.largeImg}`} alt={`Instalação ${index * 3 + 2}`} />
                <img src={group[2]} className={`d-block ${styles.smallImg}`} alt={`Instalação ${index * 3 + 3}`} />
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
      <img src="/images/home/img-00.png" className={`${styles.waveStyle}`} alt="Instalação" />
    </div>
  );
};

export default Installations;
