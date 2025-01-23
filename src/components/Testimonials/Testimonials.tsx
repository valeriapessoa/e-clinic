import React from "react";
import Image from "next/image";
import { FaQuoteRight } from "react-icons/fa";
import Carousel from "react-bootstrap/Carousel";
import TertiaryTitle from "../TertiaryTitle/TertiaryTitle";
import styles from "./Testimonials.module.css";

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

const Testimonials = ({
  testimonials,
  primaryTitle,
  secondaryTitle,
  sectionDescription,
}: TestimonialsProps) => {
  const chunkedTestimonials: Testimonial[][] = [];
  for (let i = 0; i < testimonials.length; i += 2) {
    chunkedTestimonials.push(testimonials.slice(i, i + 2));
  }

  return (
    <section className={`${styles.testimonialSection} py-5 testimonial`}>
      <div className="container text-center">
        <TertiaryTitle
          primary={primaryTitle || "Depoimentos"}
          secondary={secondaryTitle || "O Que Nossos Pacientes Dizem"}
        />
        <p className={`${styles.text}`}>
          {sectionDescription ||
            "Estamos orgulhosos de ter ajudado mais de 15.000 pacientes a alcançar uma melhor qualidade de vida. Veja o que alguns deles têm a dizer sobre a experiência em nossa clínica:"}
        </p>
        <Carousel
          className={`${styles.containerCarousel}`}
          aria-live="polite"
          indicators
          interval={3000}
          controls={false}
          pause="hover"
          wrap={true}
        >
          {chunkedTestimonials.map((pair, index) => (
            <Carousel.Item key={index}>
              <div className="row">
                {pair.map((testimonial) => (
                  <div
                    className="col-md-6 col-12 d-flex justify-content-center"
                    key={testimonial.name}
                  >
                    <div
                      className={`${styles.testimonialBlock} d-flex p-4 m-2`}
                    >
                      <div className="mb-3">
                        <Image
                          src={testimonial.image}
                          alt={testimonial.name}
                          width={60}
                          height={60}
                          className="rounded-circle"
                        />
                      </div>
                      <div className="ms-2">
                        <h4 className={`${styles.testimonialTitle}`}>
                          {testimonial.title}
                        </h4>
                        <span
                          className={`d-flex ms-3 ${styles.testimonialName}`}
                        >
                          {testimonial.name}
                        </span>
                        <p className={`${styles.feedbackText}`}>
                          {testimonial.feedback}
                        </p>
                      </div>
                      <FaQuoteRight className={`${styles.quoteIcon}`} />
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
