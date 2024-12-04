import { Container, Row, Col, Button } from 'react-bootstrap';
import styles from '../../components/Banner/banner.module.css';

const Banner = () => {
    return (
        <Container className={`mt-5 ${styles.container}`}>
            <Row>
                <Col md={6} className="d-flex flex-column justify-content-center">
                    <h5 className={styles.title}>Bem-vindo à E-Clinic</h5>
                    <h1 className={styles.subtitle}>
                        Marque sua consulta <span className={styles.highlight}>agora</span>
                    </h1>
                    <p className={styles.text}>
                        Na E-Clinic, oferecemos atendimento médico de qualidade com profissionais altamente capacitados. Nossa missão é cuidar da sua saúde com dedicação e excelência. Agende sua consulta e experimente um atendimento personalizado e humanizado.
                    </p>
                    <div className={styles.buttonGroup}>
                        <Button className={`rounded-pill text-white py-3 px-5 me-3 ${styles.btnPrimary}`}>Agendar</Button>
                        <Button variant="light" className={`rounded-pill py-3 px-5 me-3 ${styles.btnSecondary}`}>Serviços</Button>
                    </div>
                </Col>
                <Col md={6} className={styles.imageContainer}>
                    <img src="images/home/banner.jpg" alt="Doctor" className={`${styles.bannerImage}`} />
                </Col>
            </Row>
        </Container>
    );
};

export default Banner;
