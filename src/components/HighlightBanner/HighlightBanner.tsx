import { Container, Row, Col, Button } from 'react-bootstrap';
import styles from './HighlightBanner.module.css';

const HighlightBanner = () => {
    return (
        <div className={styles.bannerContainer}>
            <Row className="align-items-center h-100">
                <Col md={0} className={`d-flex flex-column justify-content-center ${styles.textContainer}`}>
                    <h5 className={styles.title}>Bem-vindo à E-Clinic</h5>
                    <h1 className={styles.subtitle}>
                        Marque sua consulta <span className={styles.highlight}>agora</span>
                    </h1>
                    <p className={styles.text}>
                        Na E-Clinic, oferecemos atendimento médico de qualidade com profissionais altamente capacitados. Nossa missão é cuidar da sua saúde com dedicação e excelência. Agende sua consulta e experimente um atendimento personalizado e humanizado.
                    </p>
                    <div className={styles.buttonGroup}>
                        <Button className={`rounded-pill text-white py-3 col-5 col-md-3 me-2 me-md-3 ${styles.btnPrimary}`}>Agendar</Button>
                        <Button variant="light" className={`rounded-pill py-3 col-5 col-md-3 ${styles.btnSecondary}`}>Serviços</Button>
                    </div>
                </Col>
                <Col md={12} className={styles.imageContainer}>
                    <img src="images/home/banner.jpeg" alt="Doctor" className={`${styles.bannerImage}`} />
                </Col>
            </Row>
        </div>
    );
};

export default HighlightBanner;
