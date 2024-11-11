import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStethoscope, faXRay, faHeartbeat, faSyringe, faUserMd, faBriefcaseMedical } from '@fortawesome/free-solid-svg-icons';
import styles from '../../app/page.module.css';

const Services = () => {
  return (
    <div className={`container-fluid services bg-light py-5 ${styles.services}`}>
      <div className="container py-5">
        <div className="section-title text-center mb-5">
          <h4 className="sub-title pe-3 mb-0">Nossos Serviços</h4>
          <h1 className="display-3 mb-4">O Que Oferecemos</h1>
          <p className="mb-4">Na E-Clinic, oferecemos uma ampla gama de serviços para atender às suas necessidades de saúde com excelência e dedicação.</p>
        </div>
        <div className="row g-4">
          <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
            <div className={`service-item ${styles['service-item']} text-center p-4`}>
              <FontAwesomeIcon icon={faStethoscope} className={`mb-3 ${styles['service-icon']}`} />
              <h5 className="mb-3">Consultas Médicas</h5>
              <p>Atendimento personalizado com médicos especializados em diversas áreas para cuidar da sua saúde.</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
            <div className={`service-item ${styles['service-item']} text-center p-4`}>
              <FontAwesomeIcon icon={faXRay} className={`mb-3 ${styles['service-icon']}`} />
              <h5 className="mb-3">Exames de Imagem</h5>
              <p>Realizamos exames de imagem como raio-X, ultrassonografia e tomografia com equipamentos modernos.</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
            <div className={`service-item ${styles['service-item']} text-center p-4`}>
              <FontAwesomeIcon icon={faHeartbeat} className={`mb-3 ${styles['service-icon']}`} />
              <h5 className="mb-3">Cardiologia</h5>
              <p>Cuidados especializados para a saúde do seu coração, com exames e tratamentos avançados.</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
            <div className={`service-item ${styles['service-item']} text-center p-4`}>
              <FontAwesomeIcon icon={faSyringe} className={`mb-3 ${styles['service-icon']}`} />
              <h5 className="mb-3">Vacinação</h5>
              <p>Oferecemos uma variedade de vacinas para proteger você e sua família contra diversas doenças.</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
            <div className={`service-item ${styles['service-item']} text-center p-4`}>
              <FontAwesomeIcon icon={faUserMd} className={`mb-3 ${styles['service-icon']}`} />
              <h5 className="mb-3">Telemedicina</h5>
              <p>Consultas online para que você possa receber atendimento médico sem sair de casa.</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
            <div className={`service-item ${styles['service-item']} text-center p-4`}>
              <FontAwesomeIcon icon={faBriefcaseMedical} className={`mb-3 ${styles['service-icon']}`} />
              <h5 className="mb-3">Emergências</h5>
              <p>Atendimento de emergência para situações que requerem cuidados médicos imediatos.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
