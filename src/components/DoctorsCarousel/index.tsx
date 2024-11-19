import React from "react";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { BiLogoInstagramAlt } from "react-icons/bi";
import styles from '../../components/DoctorsCarousel/doctors-carousel.module.css';
import { Carousel } from "react-bootstrap";

interface Doctor {
  name: string;
  specialty: string;
  image: string;
}

const doctors: Doctor[] = [
  {
    name: "Dr. Utdew Erry",
    specialty: "Eye Specialist",
    image: "/images/home/doctors-2.png",
  },
  {
    name: "Dr. Mariya Ruk",
    specialty: "Dental Specialist",
    image: "/images/home/doctors-1.jpg",
  },
  {
    name: "Dr. Nurul Hoq",
    specialty: "Heart Specialist",
    image: "/images/home/doctors-1.jpg",
  },
  {
    name: "Dr. Alex Green",
    specialty: "Orthopedic Specialist",
    image: "/images/home/doctors-2.png",
  },
  {
    name: "Dr. Linda Lee",
    specialty: "Pediatric Specialist",
    image: "/images/home/doctors-1.jpg",
  },
  {
    name: "Dr. Michael Wong",
    specialty: "Cardiologist",
    image: "/images/home/doctors-1.jpg",
  },
];

const DoctorsCarousel: React.FC = () => {
  return (
    <div className={styles.carouselContainer}>
      <h2 className={`${styles.title} text-center mb-4`}>Our Doctors</h2>
      <Carousel indicators={true} controls={true} interval={5000} className={styles.customCarousel}>
        {Array.from({ length: Math.ceil(doctors.length / 3) }).map((_, slideIndex) => (
          <Carousel.Item key={slideIndex}>
            <div className="d-flex justify-content-center gap-4">
              {doctors.slice(slideIndex * 3, slideIndex * 3 + 3).map((doctor, index) => (
                <div key={index} className={`${styles.card}`}>
                  <div className={styles.imageContainer}>
                    <img
                      src={doctor.image}
                      alt={doctor.name}
                      className={styles.doctorImage}
                    />
                  </div>
                  <h5 className={styles.doctorName}>{doctor.name}</h5>
                  <p className={styles.doctorSpecialty}>{doctor.specialty}</p>
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
