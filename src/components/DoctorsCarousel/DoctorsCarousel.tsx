import React from "react";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { BiLogoInstagramAlt } from "react-icons/bi";
import TertiaryTitle from "../TertiaryTitle/TertiaryTitle";
import styles from "./DoctorsCarousel.module.css";
import { Carousel } from "react-bootstrap";

interface CarouselItem {
  name: string;
  description: string;
  image: string;
  facebookLink: string;
  instagramLink: string;
  twitterLink: string;
}

interface DoctorsCarouselProps {
  title: string;
  subtitle: string;
  items: CarouselItem[];
}

const DoctorsCarousel: React.FC<DoctorsCarouselProps> = ({ title, subtitle, items }) => {
  return (
    <div className={styles.carouselContainer}>
      <TertiaryTitle primary={title} secondary={subtitle} />
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
                    <a href={item.instagramLink} target="_blank" rel="noopener noreferrer">
                      <BiLogoInstagramAlt className={styles.icon} />
                    </a>
                    <a href={item.facebookLink} target="_blank" rel="noopener noreferrer">
                      <FaFacebookF className={styles.icon} />
                    </a>
                    <a href={item.twitterLink} target="_blank" rel="noopener noreferrer">
                      <FaTwitter className={styles.icon} />
                    </a>
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
