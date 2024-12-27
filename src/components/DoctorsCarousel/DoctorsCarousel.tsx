import React, { useState, useLayoutEffect } from "react";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { BiLogoInstagramAlt } from "react-icons/bi";
import TertiaryTitle from "../TertiaryTitle/TertiaryTitle";
import { Carousel } from "react-bootstrap";
import styles from "./DoctorsCarousel.module.css";

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
  const [itemsPerSlide, setItemsPerSlide] = useState(3);

  useLayoutEffect(() => {
    const updateItemsPerSlide = () => {
      if (window.innerWidth < 768) {
        setItemsPerSlide(1);
      } else {
        setItemsPerSlide(3);
      }
    };

    // Chama a função no primeiro render
    updateItemsPerSlide();

    // Adiciona um listener para redimensionamento da janela
    window.addEventListener("resize", updateItemsPerSlide);

    // Limpa o listener ao desmontar o componente
    return () => window.removeEventListener("resize", updateItemsPerSlide);
  }, []);

  // Calcular o número total de slides
  const slides = Math.ceil(items.length / itemsPerSlide);

  return (
    <div className={`${styles.carouselContainer}`}>
      <TertiaryTitle primary={title} secondary={subtitle} />
      <Carousel indicators={true} controls={true} interval={5000} className={`carousel doctors ${styles.customCarousel}`}>
        {Array.from({ length: slides }).map((_, slideIndex) => (
          <Carousel.Item key={slideIndex}>
            <div className="row justify-content-center">
              {items.slice(slideIndex * itemsPerSlide, slideIndex * itemsPerSlide + itemsPerSlide).map((item, index) => (
                <div key={index} className="col-12 col-sm-6 col-md-4">
                  <div className="card text-center">
                    <img src={item.image} alt={item.name} className="card-img-top" />
                    <div className="card-body">
                      <h5 className="card-title">{item.name}</h5>
                      <p className="card-text">{item.description}</p>
                      <div className="social-icons">
                        <a href={item.instagramLink} target="_blank" rel="noopener noreferrer">
                          <BiLogoInstagramAlt className="icon" size={24}/>
                        </a>
                        <a href={item.facebookLink} target="_blank" rel="noopener noreferrer">
                          <FaFacebookF className="icon ms-3" size={24}/>
                        </a>
                        <a href={item.twitterLink} target="_blank" rel="noopener noreferrer">
                          <FaTwitter className="icon ms-3" size={24}/>
                        </a>
                      </div>
                    </div>
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
