import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import SecondaryTitle from "../SecondaryTitle/SecondaryTitle";
import styles from "./HealthTips.module.css";

interface HealthTip {
  tip: string;
  image: string;
}

interface HealthTipsProps {
  healthTips: HealthTip[];
}

const HealthTips = ({ healthTips }: HealthTipsProps) => {
  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 3 },
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
  };

  return (
    <section className={`container ${styles.healthTips}`}>
      <SecondaryTitle
        primary="Dicas de Saúde"
        secondary="para uma"
        highlight="Vida Melhor"
      />
      <Carousel
        responsive={responsive}
        className="healthTipsCarousel"
        infinite
        autoPlay
        autoPlaySpeed={3000}
        showDots
        arrows={false} // Remove as setas laterais
      >
        {healthTips.map((tip, index) => (
          <div key={index} className={styles.healthTip}>
            <img
              src={tip.image}
              alt={`Dica ${index + 1}`}
              className={styles.healthTipImage}
            />
            <p className={styles.healthTipText}>{tip.tip}</p>
          </div>
        ))}
      </Carousel>
    </section>
  );
};

export default HealthTips;
