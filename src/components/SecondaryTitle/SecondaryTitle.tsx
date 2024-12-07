import React from 'react';
import styles from './SecondaryTitle.module.css';

interface SecondaryTitleProps {
  primary?: string;
  secondary?: string;
  highlight?: string;
}

const SecondaryTitle = ({ primary, secondary, highlight }: SecondaryTitleProps) => {
  return (
    <div className={`${styles.sectionTitle} text-center mb-5`}>
      <h4 className={`${styles.primaryTitle} pe-3 mb-0`}>{primary}</h4>
      <h1 className={`${styles.secondaryTitle} mb-4`}>
        {secondary} <span className={styles.highlight}>{highlight}</span>
      </h1>
    </div>
  );
};

export default SecondaryTitle;
