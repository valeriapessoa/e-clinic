import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import styles from '../../app/page.module.css';

const About = () => {
  return (
    <div className={`container-fluid about bg-light py-5 ${styles.about}`}>
      <div className="container py-5">
        <div className="row g-5 align-items-center">
          <div className="col-lg-5 wow fadeInLeft" data-wow-delay="0.2s">
            <div className={`${styles['about-img']} pb-5 ps-5`}>
              <img src="/images/home/about-1.jpg" className="img-fluid rounded w-100" style={{ objectFit: 'cover' }} alt="Imagem" />
              <div className={styles['about-img-inner']}>
                <img src="/images/home/about-2.jpg" className={`img-fluid rounded-circle ${styles['inner-img']}`} alt="Imagem" />
              </div>
              <div className={styles['about-experience']}>15 anos de experiência</div>
            </div>
          </div>
          <div className="col-lg-7 wow fadeInRight" data-wow-delay="0.4s">
            <div className="section-title text-start mb-5">
              <h4 className="sub-title pe-3 mb-0">Sobre Nós</h4>
              <h1 className="display-3 mb-4">Comprometidos com a Sua Saúde e Bem-Estar</h1>
              <p className="mb-4">Na E-Clinic, dedicamo-nos a oferecer o melhor atendimento possível. Com 15 anos de experiência, nossa equipe está preparada para cuidar de você com excelência e dedicação. Nossa missão é proporcionar tratamentos personalizados que atendam às suas necessidades específicas.</p>
              <div className="mb-4">
                <p className="text-secondary"><FontAwesomeIcon icon={faCheck} className={`me-2 ${styles['custom-icon']}`} /> Atendimento personalizado e humanizado.</p>
                <p className="text-secondary"><FontAwesomeIcon icon={faCheck} className={`me-2 ${styles['custom-icon']}`} /> Profissionais qualificados e experientes.</p>
                <p className="text-secondary"><FontAwesomeIcon icon={faCheck} className={`me-2 ${styles['custom-icon']}`} /> Tecnologia de ponta para seu conforto e segurança.</p>
              </div>
              <a href="#" className={`btn ${styles['custom-button']} rounded-pill text-white py-3 px-5`}>Descubra Mais</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
