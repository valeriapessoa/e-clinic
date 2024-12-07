import React from 'react';
import styles from './BannerSection.module.css';

interface BannerSectionProps {
  title: string;
  subtitle: string;
  buttonText: string;
  buttonLink: string;
  imageUrl: string;
}

const BannerSection = ({ title, subtitle, buttonText, buttonLink, imageUrl }: BannerSectionProps) => {
  return (
    <section className={styles.bannerSection}>
      <img
        src={imageUrl}
        alt="Banner Clínico"
        className={styles.bannerImage}
      />
      <div className={styles.bannerOverlay}>
        <div className={styles.bannerContent}>
          <h1 className={styles.bannerTitle}>
            {title}
          </h1>
          <p className={styles.bannerSubtitle}>
            {subtitle}
          </p>
          <a href={buttonLink} className={styles.bannerButton}>
            {buttonText}
          </a>
        </div>
      </div>
    </section>
  );
};

export default BannerSection;
