import React from 'react';
import TertiaryTitle from '../TertiaryTitle/TertiaryTitle';
import styles from './NewsCarousel.module.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

interface NewsArticle {
  title: string;
  summary: string;
  date: string;
  link: string;
  image: string;
}

interface NewsCarouselProps {
  title: string;
  subtitle: string;
  news: NewsArticle[];
}

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const NewsCarousel = ({ title, subtitle, news }: NewsCarouselProps) => {
  return (
    <section className={`${styles.newsSection} ${styles.container} py-5 newsCarousel`}>
      <TertiaryTitle primary={title} secondary={subtitle} />
      <Carousel
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={3000}
        showDots={true}
        containerClass={styles.carouselContainer}
        itemClass={styles.carouselItem}
        dotListClass={styles.customDotList}
        className='newsCarousel'
      >
        {news.map((article, index) => (
          <div key={index} className={styles.newsItem}>
            <img src={article.image} alt={`Notícia ${index + 1}`} className={styles.newsImage} />
            <div className={styles.newsContent}>
              <h3 className={styles.newsHeadline}>{article.title}</h3>
              <p className={styles.newsSummary}>{article.summary}</p>
              <p className={styles.newsDate}>{article.date}</p>
              <a href={article.link} className={styles.readMore}>Leia mais...</a>
            </div>
          </div>
        ))}
      </Carousel>
    </section>
  );
};

export default NewsCarousel;
