"use client";

import Head from 'next/head';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FaStethoscope, FaHospital, FaUserMd, FaShieldAlt } from 'react-icons/fa';
import styles from '../styles/unidades.module.css';
import DoctorsCarousel from '../../components/DoctorsCarousel/DoctorsCarousel';
import ParallaxSection from "../../components/ParallaxSection/ParallaxSection";
import UnitList from '../../components/UnitList/UnitList';
import ClinicServices from '../../components/ClinicServices/ClinicServices';

const doctors = [
  {
    name: "Dra. Juliana Lima",
    description: "Especialista em Oftalmologia",
    image: "/images/unidades/img-1.jpg",
    facebookLink: "https://www.facebook.com/",
    instagramLink: "https://www.instagram.com/",
    twitterLink: "https://twitter.com/"
  },
  {
    name: "Dra. Isadora Figueiredo",
    description: "Especialista em Dermatologia",
    image: "/images/unidades/img-2.jpg",
    facebookLink: "https://www.facebook.com/",
    instagramLink: "https://www.instagram.com/",
    twitterLink: "https://twitter.com/"
  },
  {
    name: "Dr. Felipe Almeida",
    description: "Especialista em Cardiologia",
    image: "/images/unidades/img-3.jpg",
    facebookLink: "https://www.facebook.com/",
    instagramLink: "https://www.instagram.com/",
    twitterLink: "https://twitter.com/"
  },
  {
    name: "Dra. Beatriz Carvalho",
    description: "Especialista em Ortopedia",
    image: "/images/unidades/img-4.jpg",
    facebookLink: "https://www.facebook.com/",
    instagramLink: "https://www.instagram.com/",
    twitterLink: "https://twitter.com/"
  },
  {
    name: "Dr. Pedro Lacerda",
    description: "Especialista em Pediatria",
    image: "/images/unidades/img-5.jpg",
    facebookLink: "https://www.facebook.com/",
    instagramLink: "https://www.instagram.com/",
    twitterLink: "https://twitter.com/"
  },
  {
    name: "Dr. Fernando Oliveira",
    description: "Especialista em Oftalmologia",
    image: "/images/unidades/img-6.jpg",
    facebookLink: "https://www.facebook.com/",
    instagramLink: "https://www.instagram.com/",
    twitterLink: "https://twitter.com/"
  },
  {
    name: "Dr. Carlos Martins",
    description: "Especialista em Neurologia",
    image: "/images/unidades/img-7.jpg",
    facebookLink: "https://www.facebook.com/",
    instagramLink: "https://www.instagram.com/",
    twitterLink: "https://twitter.com/"
  },
  {
    name: "Dra. Camila Mendes",
    description: "Especialista em Ginecologia",
    image: "/images/unidades/img-8.jpg",
    facebookLink: "https://www.facebook.com/",
    instagramLink: "https://www.instagram.com/",
    twitterLink: "https://twitter.com/"
  },
  {
    name: "Dra. Renata Pires",
    description: "Especialista em Endocrinologia",
    image: "/images/unidades/img-9.jpg",
    facebookLink: "https://www.facebook.com/",
    instagramLink: "https://www.instagram.com/",
    twitterLink: "https://twitter.com/"
  },
];

const services = [
  {
    icon: <FaStethoscope />,
    title: "ATENDIMENTO ESPECIALIZADO",
    description: "Receba cuidados de saúde com médicos experientes e dedicados."
  },
  {
    icon: <FaHospital />,
    title: "AMPLAS INSTALAÇÕES",
    description: "Conheça nossas unidades modernas e bem equipadas."
  },
  {
    icon: <FaUserMd />,
    title: "SOLUÇÕES PERSONALIZADAS",
    description: "Recomendações de tratamento personalizadas para cada paciente."
  },
  {
    icon: <FaShieldAlt />,
    title: "SEGURO E TRANSPARENTE",
    description: "Transações e processos médicos seguros e sem complicações."
  }
];

const Unidades = () => {
  return (
    <>
      <Head>
        <title>Unidades</title>
      </Head>
      <main>
        <ParallaxSection
          imageUrl="images/unidades/banner.jpg"
          title="Todos os tipos de Diagnóstico"
          text="E-clinic oferece a gama mais abrangente de serviços de diagnóstico da região, desde ressonância magnética a raio-X."
          buttonText="Explorar Serviços"
          buttonLink="consultas/form-agendar-consulta"
        />

        <UnitList/>

        <DoctorsCarousel
          items={doctors}
          title="Especialistas"
          subtitle="Conheça Nossa Equipe"
        />
        
        <ClinicServices
          primaryTitle="CUIDADO MÉDICO"
          secondaryTitle="ATENDIMENTO DE QUALIDADE"
          imageUrl="./images/unidades/medico.jpg"
          services={services}
        />
      </main>
    </>
  );
};

export default Unidades;
