import React from 'react';
import Link from 'next/link';
import styles from './BookingBanner.module.css';

const BookingBanner = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroOverlay}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Cuide da Sua Saúde com Facilidade</h1>
          <p className={styles.heroDescription}>
            Agende sua consulta de forma rápida e segura. Nossa equipe está pronta para atender você.
          </p>
          <Link href="/login" className={styles.heroButton}>
            Agende Agora
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BookingBanner;