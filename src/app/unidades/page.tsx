"use client";

import Head from 'next/head';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone } from '@fortawesome/free-solid-svg-icons';
import styles from '../styles/unidades.module.css';
import DoctorsCarousel from '../../components/DoctorsCarousel/DoctorsCarousel';
import ParallaxSection from "../../components/paralaxSection/ParallaxSection";
import UnitList from '../../components/UnitList/UnitList';
import RealEstateAdcopy2 from '../../components/ClinicAd/ClinicAd';

const doctors = [
  {
    name: "Dr. Utdew Erry",
    description: "Eye Specialist",
    image: "/images/home/doctors-2.png",
  },
  {
    name: "Dr. Mariya Ruk",
    description: "Dental Specialist",
    image: "/images/home/doctors-1.jpg",
  },
  {
    name: "Dr. Nurul Hoq",
    description: "Heart Specialist",
    image: "/images/home/doctors-1.jpg",
  },
  {
    name: "Dr. Alex Green",
    description: "Orthopedic Specialist",
    image: "/images/home/doctors-2.png",
  },
  {
    name: "Dr. Linda Lee",
    description: "Pediatric Specialist",
    image: "/images/home/doctors-1.jpg",
  },
  {
    name: "Dr. Michael Wong",
    description: "Cardiologist",
    image: "/images/home/doctors-1.jpg",
  },
];

const Unidades = () => {
  return (
    <>
      <Head>
        <title>Unidades</title>
      </Head>
      <main>
        <ParallaxSection />
        <UnitList/>
        <DoctorsCarousel
          items={doctors}
          title="Especialistas"
          subtitle="Conheça Nossa Equipe"
        />
        <RealEstateAdcopy2 />
        {/* <section className={styles.bannerSection}>
          <div className={styles.bannerContainer}>
            <img src="/images/convenios/banner.jpg" className={styles.banner} alt="Banner" />
          </div>
        </section> */}
      </main>
    </>
  );
};

export default Unidades;
