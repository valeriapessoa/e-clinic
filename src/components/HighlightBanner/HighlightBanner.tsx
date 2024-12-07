import { FC } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import styles from './HighlightBanner.module.css';

interface HighlightBannerProps {
    title: string;
    subtitle: string;
    highlightText: string;
    text: string;
    primaryButtonText: string;
    secondaryButtonText: string;
    imageUrl: string;
}

const HighlightBanner: FC<HighlightBannerProps> = ({ title, subtitle, highlightText, text, primaryButtonText, secondaryButtonText, imageUrl }) => {
    return (
        <div className={styles.bannerContainer}>
            <Row className="align-items-center h-100">
                <Col md={6} className={`d-flex flex-column justify-content-center ${styles.textContainer}`}>
                    <h5 className={styles.title}>{title}</h5>
                    <h1 className={styles.subtitle}>
                        {subtitle} <span className={styles.highlight}>{highlightText}</span>
                    </h1>
                    <p className={styles.text}>
                        {text}
                    </p>
                    <div className={styles.buttonGroup}>
                        <Button className={`rounded-pill text-white py-3 px-5 me-3 ${styles.btnPrimary}`}>{primaryButtonText}</Button>
                        <Button variant="light" className={`rounded-pill py-3 px-5 me-3 ${styles.btnSecondary}`}>{secondaryButtonText}</Button>
                    </div>
                </Col>
                <Col md={6} className={styles.imageContainer}>
                    <img src={imageUrl} alt="Banner" className={`${styles.bannerImage}`} />
                </Col>
            </Row>
        </div>
    );
};

export default HighlightBanner;
