import React from 'react';
import SecondaryTitle from '../SecondaryTitle/SecondaryTitle';
import styles from './ContentSection.module.css';

interface ContentSectionProps {
  primaryTitle: string;
  secondaryTitle: string;
  highlight: string;
  paragraphs: string[];
  images: string[];
}

const ContentSection = ({ primaryTitle, secondaryTitle, highlight, paragraphs, images }: ContentSectionProps) => {
  return (
    <>
      <section className={`${styles.contentSection} ${styles.container}`}>
        <SecondaryTitle primary={primaryTitle} secondary={secondaryTitle} highlight={highlight} />
        {paragraphs.map((paragraph, index) => (
          <p key={index} className={styles.paragraph}>
            {paragraph}
          </p>
        ))}
      </section>

      <div className={`row ${styles.imageRow} ${styles.container}`}>
        {images.map((src, index) => (
          <div key={index} className="col-6 col-md-4 col-lg-3">
            <div className={styles.block}>
              <img
                className={`${styles.image} ${styles.imageAnimation}`}
                src={src}
                alt={`Imagem ${index + 1}`}
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ContentSection;
