import React from 'react';
import styles from './ConvenioBenefits.module.css';

interface Benefit {
  title: string;
  description: string;
}

interface ConvenioBenefitsProps {
  mainTitle: string;
  highlight: string;
  imageUrl: string;
  benefits: Benefit[];
}

const ConvenioBenefits = ({ mainTitle, highlight, imageUrl, benefits }: ConvenioBenefitsProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.mainTitle}>
          {mainTitle} <span className={styles.highlight}>{highlight}</span>
        </h1>
      </div>
      <div className={styles.content}>
        <img
          className={styles.image}
          src={imageUrl}
          alt={highlight}
        />
        <ul className={styles.list}>
          {benefits.map((benefit, index) => (
            <li key={index} className={styles.listItem}>
              <strong className={styles.title}>{benefit.title}</strong>
              <p>{benefit.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ConvenioBenefits;
