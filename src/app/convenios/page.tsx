"use client";

import Head from "next/head";
import styles from "../styles/convenios.module.css";
import ConvenioBenefits from "../../components/ConvenioBenefits/ConvenioBenefits";
import NewsCarousel from "../../components/NewsCarousel/NewsCarousel";
import BannerSection from "../../components/BannerSection/BannerSection";
import HealthPlanSection from "../../components/HealthPlanSection/HealthPlanSection";

const Convenios = () => {
  return (
    <>
      <Head>
        <title>Convênios</title>
      </Head>
      <main>
        <BannerSection />
        <HealthPlanSection />
        {/* <ConvenioBenefits /> */}
        <NewsCarousel />
      </main>
    </>
  );
};

export default Convenios;
