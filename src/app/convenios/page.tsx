"use client";

import Head from "next/head";
import styles from "../styles/convenios.module.css";
import BannerSection from "../../components/BannerSection/BannerSection";
import ContentSection from "../../components/ContentSection/ContentSection";
import ConvenioBenefits from "../../components/ConvenioBenefits/ConvenioBenefits";
import NewsCarousel from "../../components/NewsCarousel/NewsCarousel";

const images = [
  "/images/convenios/img-1.png",
  "/images/convenios/img-2.png",
  "/images/convenios/img-3.png",
  "/images/convenios/img-4.png",
  "/images/convenios/img-5.png",
  "/images/convenios/img-6.png",
  "/images/convenios/img-7.png",
  "/images/convenios/img-8.png",
  "/images/convenios/img-9.png",
  "/images/convenios/img-10.png",
  "/images/convenios/img-11.png",
  "/images/convenios/img-12.png",
  "/images/convenios/img-13.png",
  "/images/convenios/img-14.png",
  "/images/convenios/img-15.png",
  "/images/convenios/img-16.png",
];

const paragraphs = [
  "Na E-Clinic, valorizamos a vida dos nossos pacientes em cada atendimento. Oferecemos cuidado excepcional com o jeito E-Clinic de fazer saúde. Nossa equipe trabalha unida diariamente para proporcionar o que há de melhor na medicina moderna a todos que confiam em nossos serviços.",
  "Com dedicação, garantimos tratamento personalizado e de qualidade, utilizando tecnologias avançadas e técnicas inovadoras. Estabelecemos parcerias com diversas operadoras de saúde para facilitar o acesso à saúde de qualidade.",
  "Confira abaixo a lista completa dos convênios atendidos na E-Clinic:"
];

const benefits = [
  {
    title: "Cobertura Abrangente",
    description: "Oferecemos uma ampla gama de serviços médicos e especialidades cobertas pelos nossos convênios."
  },
  {
    title: "Atendimento Personalizado",
    description: "Cada paciente é único, e nossos convênios permitem um atendimento personalizado para suas necessidades específicas."
  },
  {
    title: "Facilidade de Acesso",
    description: "Nossas unidades estão estrategicamente localizadas para facilitar o acesso aos serviços de saúde."
  },
  {
    title: "Benefícios Exclusivos",
    description: "Aproveite benefícios exclusivos e descontos especiais através dos nossos convênios parceiros."
  }
];

const news = [
  {
    title: "Demências: fatores de risco, prevenção e sintomas",
    summary: "Entenda os fatores de risco, formas de prevenção e sintomas das demências. As demências são condições que afetam a memória, o pensamento e a capacidade de realizar atividades diárias. A prevenção inclui hábitos saudáveis e acompanhamento médico regular.",
    date: "Publicado em: 15/11/2024",
    link: "https://drauziovarella.uol.com.br/coluna-da-mariana-varella/demencias-fatores-de-risco-prevencao-e-sintomas/",
    image: "./images/convenios/news/img-1.jpg"
  },
  {
    title: "Fertilização in vitro: entenda como funciona o procedimento",
    summary: "Saiba mais sobre o procedimento de fertilização in vitro, uma técnica de reprodução assistida que ajuda casais com dificuldades para engravidar. O processo envolve a coleta de óvulos e espermatozoides, a fertilização em laboratório e a transferência dos embriões para o útero.",
    date: "Publicado em: 05/11/2024",
    link: "https://drauziovarella.uol.com.br/mulher/fertilizacao-in-vitro-entenda-como-funciona-o-procedimento/",
    image: "./images/convenios/news/img-3.jpg"
  },
  {
    title: "20% das mulheres acima dos 40 anos não fazem exames médicos nas mamas",
    summary: "A importância dos exames médicos nas mamas para mulheres acima dos 40 anos é crucial para a detecção precoce do câncer de mama. No entanto, uma pesquisa recente mostra que 20% dessas mulheres não realizam esses exames regularmente, o que pode comprometer a saúde.",
    date: "Publicado em: 06/11/2024",
    link: "https://drauziovarella.uol.com.br/oncologia/20-das-mulheres-acima-dos-40-anos-nao-fazem-exames-medicos-nas-mamas/",
    image: "./images/convenios/news/img-2.jpg"
  },
  {
    title: "Inteligência artificial na saúde pública: o que os hospitais do SUS já estão usando?",
    summary: "Descubra como a inteligência artificial está sendo utilizada nos hospitais do SUS para melhorar o atendimento e a eficiência dos serviços de saúde. Tecnologias como análise de dados e sistemas de apoio à decisão clínica estão transformando a saúde pública.",
    date: "Publicado em: 04/11/2024",
    link: "https://drauziovarella.uol.com.br/saude-publica/inteligencia-artificial-na-saude-publica-o-que-os-hospitais-do-sus-ja-estao-usando/",
    image: "./images/convenios/news/img-4.jpg"
  },
  {
    title: "Botox pode ser utilizado no tratamento de doenças neurológicas",
    summary: "O uso do botox no tratamento de doenças neurológicas está ganhando destaque. Além de sua aplicação estética, o botox pode ajudar no alívio de sintomas de condições como enxaquecas crônicas e espasmos musculares.",
    date: "Publicado em: 23/10/2024",
    link: "https://drauziovarella.uol.com.br/neurologia/botox-pode-ser-utilizado-no-tratamento-de-doencas-neurologicas/",
    image: "./images/convenios/news/img-5.jpg"
  },
  {
    title: "Como identificar a síndrome do intestino irritável?",
    summary: "Aprenda a identificar os sintomas da síndrome do intestino irritável, uma condição que afeta o sistema digestivo e causa desconforto abdominal, inchaço e alterações nos hábitos intestinais. O diagnóstico precoce e o tratamento adequado são essenciais para a qualidade de vida.",
    date: "Publicado em: 22/10/2024",
    link: "https://drauziovarella.uol.com.br/gastroenterologia/como-identificar-a-sindrome-do-intestino-irritavel/",
    image: "./images/convenios/news/img-6.jpg"
  }
];

const Convenios = () => {
  return (
    <>
      <Head>
        <title>Convênios</title>
      </Head>
      <main>
        <BannerSection
          title="Convênios Aceitos pela E-Clinic"
          subtitle="Consulte a lista completa de planos de saúde atendidos pela nossa clínica."
          buttonText="Conheça Nossos Convênios"
          buttonLink="#convenios"
          imageUrl="/images/convenios/banner.jpg"
        />

        <ContentSection
          primaryTitle="Nossos Convênios"
          secondaryTitle="Conheça os"
          highlight="Planos de Saúde"
          paragraphs={paragraphs}
          images={images}
        />

        <ConvenioBenefits
          mainTitle="Melhores"
          highlight="Convênios"
          imageUrl="./images/convenios/img-0.jpg"
          benefits={benefits}
        />

        <NewsCarousel
          title="Últimas Notícias"
          subtitle="Fique por Dentro das Novidades"
          news={news}
        />
      </main>
    </>
  );
};

export default Convenios;
