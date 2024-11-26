import React from 'react';
import styles from './RealEstateAd.module.css';

const RealEstateAd = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.mainTitle}>
          YOUR TRUSTED <span className={styles.highlight}>REAL ESTATE PARTNER</span>
        </h1>
      </div>
      <div className={styles.content}>
        <img
          className={styles.image}
          src="./images/unidades/sumare.jpg"
          alt="Real Estate"
        />
        <ul className={styles.list}>
          <li className={styles.listItem}>
            <strong>EXPERT GUIDANCE</strong>
            <p>Navigate the market with experienced local agents.</p>
          </li>
          <li className={styles.listItem}>
            <strong>VAST LISTINGS</strong>
            <p>Access thousands of properties updated daily.</p>
          </li>
          <li className={styles.listItem}>
            <strong>TAILORED SOLUTIONS</strong>
            <p>Personalized recommendations for buyers, sellers, and renters.</p>
          </li>
          <li className={styles.listItem}>
            <strong>SECURE & TRANSPARENT</strong>
            <p>Safe and hassle-free property transactions.</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default RealEstateAd;
