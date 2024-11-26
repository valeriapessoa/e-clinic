"use client";

import React from 'react';
import Image from 'next/image';
import { FaQuoteRight } from 'react-icons/fa';
import Carousel from 'react-bootstrap/Carousel';
import styles from '../../components/Testimonials/testimonials.module.css';

interface Testimonial {
  title: string;
  name: string;
  feedback: string;
  image: string;
}

interface TestimonialsProps {
  testimonials: Testimonial[];
  primaryTitle?: string;
  secondaryTitle?: string;
  sectionDescription?: string;
}

const Testimonials: React.FC<TestimonialsProps> = ({ testimonials, primaryTitle, secondaryTitle, sectionDescription }) => {
  const chunkedTestimonials: Testimonial[][] = [];
  for (let i = 0; i < testimonials.length; i += 2) {
    chunkedTestimonials.push(testimonials.slice(i, i + 2));
  }

  return (
    <section className={`${styles.testimonialSection} py-5 testimonial`}>
      <div className="container text-center">
        <h4 className={`${styles['primary-title']} pe-3 mb-0`}>{primaryTitle || 'Depoimentos'}</h4>
        <h1 className={`${styles['secondary-title']} mb-4`}>{secondaryTitle || 'O Que Nossos Pacientes Dizem'}</h1>
        <p>
          {sectionDescription || 'Estamos orgulhosos de ter ajudado mais de 15.000 pacientes a alcançar uma melhor qualidade de vida. Veja o que alguns deles têm a dizer sobre a experiência em nossa clínica:'}
        </p>
        <Carousel indicators interval={3000} controls={false} pause="hover" wrap={true}>
          {chunkedTestimonials.map((pair, index) => (
            <Carousel.Item key={index}>
              <div className="row">
                {pair.map((testimonial) => (
                  <div className="col-md-6 d-flex justify-content-center" key={testimonial.name}>
                    <div className={`${styles.testimonialBlock} d-flex p-4 m-2`}>
                      <FaQuoteRight className={`${styles.quoteIcon}`} />
                      <div className="mb-3">
                        <Image
                          src={testimonial.image || '/images/default-avatar.png'}
                          alt={testimonial.name}
                          width={60}
                          height={60}
                          className="rounded-circle"
                        />
                      </div>
                      <div className="ms-2">
                        <h4 className={`${styles.testimonialTitle}`}>{testimonial.title}</h4>
                        <span className={`${styles.testimonialName}`}>{testimonial.name}</span>
                        <p>{testimonial.feedback}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonials;
