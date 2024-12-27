import React, { useEffect, useRef } from 'react';
import Link from "next/link";
import styles from './ParallaxSection.module.css';

const ParallaxSection: React.FC = () => {
  const parallaxImageRef = useRef<HTMLImageElement | null>(null);
  const parallaxContainerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxImageRef.current && parallaxContainerRef.current) {
        const containerTop = parallaxContainerRef.current.getBoundingClientRect().top;
        const scrollPosition = containerTop - window.innerHeight;
        parallaxImageRef.current.style.transform = `translate3d(-50%, ${scrollPosition * 0.25}px, 0)`;
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section
      className={styles.parallaxContainer}
      ref={parallaxContainerRef}
    >
      <div className={`${styles.materialParallax} parallax`}>
        <img
          src="images/unidades/banner.jpg"
          alt=""
          className={styles.parallaxImage}
          ref={parallaxImageRef}
        />
      </div>
      <div className={`${styles.parallaxContent} ${styles['section-sm-110']} ${styles['section-98']}`}>
        <div className="container text-start">
          <div className="row justify-content-sm-center justify-content-lg-start">
            <div className="col-md-10 col-lg-8 col-xl-5">
              <h2 className={styles.title}>Todos os tipos<br className="d-none d-xl-inline-block" />de Diagnóstico</h2>
              <p className={`offset-top-30 text-white ${styles.text}`}>E-clinic oferece a gama mais abrangente de serviços de diagnóstico da região, desde ressonância magnética a raio-X.</p>
              <div className="offset-top-30">
                <Link href="consultas/form-agendar-consulta" className={`${styles['btn-ellipse']} ${styles['btn-white']} btn`}>
                    Explorar Serviços
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ParallaxSection;