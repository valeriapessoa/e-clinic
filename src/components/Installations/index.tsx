import { Carousel } from 'react-bootstrap';
import styles from '../../app/page.module.css';

const Installations = () => {
  return (
    <div className={`container-fluid installations py-5 ${styles.installations}`}>
      <img src="/images/home/img-0.png" className={`${styles['wave-style']}`}   alt="Instalação" />
      <div className="container py-5">
        <div className="section-title text-center mb-5">
          <h4 className={`${styles['primary-title']} pe-3 mb-0`}>Nossas Instalações</h4>
          <h1 className={`${styles['secondary-title']} mb-4`}>Conheça Nossa Estrutura</h1>
          <p className={`mb-4 ${styles['text']}`}>A E-Clinic disponibiliza instalações modernas para prestar atendimento de qualidade a seus pacientes. Humanização, cuidado, atenção e respeito são palavras que orientam há anos todas as atividades das equipes.</p>
          <p className={`mb-4 ${styles['text']}`}>Centro cirúrgico completo, com 17 salas preparadas para realizar quaisquer tipos de procedimentos, dos mais simples aos de alta complexidade, incluindo cirurgias por videolaparoscopia, tornando os procedimentos menos incisivos e minimizando o período de internação.</p>
        </div>
        <Carousel indicators={true} nextIcon={<span aria-hidden="true" className="carousel-control-next-icon" />} prevIcon={<span aria-hidden="true" className="carousel-control-prev-icon" />}>
          <Carousel.Item>
            <div className="d-flex justify-content-center align-items-center">
              <img src="/images/home/img-1.jpg" className={`d-block ${styles['small-img']}`} alt="Instalação 1" />
              <img src="/images/home/img-2.jpg" className={`d-block ${styles['large-img']}`} alt="Instalação 2" />
              <img src="/images/home/img-3.jpg" className={`d-block ${styles['small-img']}`} alt="Instalação 3" />
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="d-flex justify-content-center align-items-center">
              <img src="/images/home/img-4.jpg" className={`d-block ${styles['small-img']}`} alt="Instalação 4" />
              <img src="/images/home/img-5.jpg" className={`d-block ${styles['large-img']}`} alt="Instalação 5" />
              <img src="/images/home/img-6.jpg" className={`d-block ${styles['small-img']}`} alt="Instalação 6" />
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="d-flex justify-content-center align-items-center">
              <img src="/images/home/img-7.jpg" className={`d-block ${styles['small-img']}`} alt="Instalação 7" />
              <img src="/images/home/img-8.jpg" className={`d-block ${styles['large-img']}`} alt="Instalação 8" />
              <img src="/images/home/img-9.jpg" className={`d-block ${styles['small-img']}`} alt="Instalação 9" />
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
      <img src="/images/home/img-00.png"  className={`${styles['wave-style']}`} />
    </div>
  );
};

export default Installations;
