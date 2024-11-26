import React from "react";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { BiLogoInstagramAlt } from "react-icons/bi";
import styles from '../../components/DoctorsCarousel/doctors-carousel.module.css';
import { Carousel } from "react-bootstrap";

interface CarouselItem {
  name: string;
  description: string;
  image: string;
}

interface DoctorsCarouselProps {
  title: string;
  subtitle: string;
  items: CarouselItem[];
}

const DoctorsCarousel: React.FC<DoctorsCarouselProps> = ({ title, subtitle, items }) => {
  return (
    <div className={styles.carouselContainer}>
      <div className="section-title text-center mb-5">
        <h4 className={`${styles['primary-title']} pe-3 mb-0`}>{title}</h4>
        <h1 className={`${styles['secondary-title']} mb-4`}>{subtitle}</h1>
      </div>
      <Carousel indicators={true} controls={true} interval={5000} className={`carousel doctors ${styles.customCarousel}`}>
        {Array.from({ length: Math.ceil(items.length / 3) }).map((_, slideIndex) => (
          <Carousel.Item key={slideIndex}>
            <div className="d-flex justify-content-center">
              {items.slice(slideIndex * 3, slideIndex * 3 + 3).map((item, index) => (
                <div key={index} className={`${styles.card} ${styles.customGap}`}>
                  <div className={styles.imageContainer}>
                    <img
                      src={item.image}
                      alt={item.name}
                      className={styles.itemImage}
                    />
                  </div>
                  <h5 className={styles.itemName}>{item.name}</h5>
                  <p className={styles.itemDescription}>{item.description}</p>
                  <div className={styles.socialIcons}>
                    <BiLogoInstagramAlt className={styles.icon} />
                    <FaFacebookF className={styles.icon} />
                    <FaTwitter className={styles.icon} />
                  </div>
                </div>
              ))}
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default DoctorsCarousel;
