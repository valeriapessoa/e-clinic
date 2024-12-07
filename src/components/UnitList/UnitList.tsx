import React, { useState } from "react";
import styles from "./UnitList.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import SecondaryTitle from "../SecondaryTitle/SecondaryTitle";

interface Unit {
  name: string;
  address: string;
  phone: string;
  mapsLink: string;
  wazeLink: string;
  image: string;
}

const UnitList = () => {
  const [modalContent, setModalContent] = useState<null | Unit>(null);

  const units: Unit[] = [
    {
      name: "Morumbi",
      address: "Av. Morumbi, 1500 - Morumbi, SP",
      phone: "(11) 3240-1234",
      mapsLink: "https://maps.google.com/?q=Av.%20Morumbi,%201500",
      wazeLink: "https://waze.com/ul?q=Av.%20Morumbi,%201500",
      image: "./images/unidades/morumbi.jpg",
    },
    {
      name: "Paulista",
      address: "Av. Paulista, 1000 - Bela Vista, SP",
      phone: "(11) 3240-5678",
      mapsLink: "https://maps.google.com/?q=Av.%20Paulista,%201000",
      wazeLink: "https://waze.com/ul?q=Av.%20Paulista,%201000",
      image: "./images/unidades/paulista.jpeg",
    },
    {
      name: "Pompéia",
      address: "Av. Pompéia, 1422 - Pompeia, SP",
      phone: "(11) 3240-6631",
      mapsLink: "https://maps.google.com/?q=Av.%20Pompéia,%201422",
      wazeLink: "https://waze.com/ul?q=Av.%20Pompéia,%201422",
      image: "./images/unidades/pompeia.png",
    },
    {
      name: "Sumaré",
      address: "Av. Sumaré, 2200 - Sumaré, SP",
      phone: "(11) 3240-9988",
      mapsLink: "https://maps.google.com/?q=Av.%20Sumaré,%202200",
      wazeLink: "https://waze.com/ul?q=Av.%20Sumaré,%202200",
      image: "./images/unidades/sumare.jpg",
    },
  ];

  const openModal = (unit: Unit) => {
    setModalContent(unit);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setModalContent(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section className={`${styles.unitsList} container mt-5 pt-5`}>
      <div className="section-title text-center mb-5">
        <SecondaryTitle primary="Conheça as Unidades" secondary="Visite Nossas" highlight="Unidades" />
        <p className={`mb-4 ${styles.description}`}>
          Estamos presentes em várias localidades para melhor atender você e sua família, sempre com o compromisso de oferecer atendimento de qualidade e personalizado. Nossas unidades são estrategicamente localizadas para garantir acesso fácil e rápido aos nossos serviços. Conheça as nossas unidades e encontre a mais próxima de você. Na E-Clinic, sua saúde é nossa prioridade.
        </p>

      </div>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.mainTitle}>SEU PARCEIRO</h1>
          <h2 className={styles.subTitle}>DE CONFIANÇA NA SAÚDE</h2>
        </div>
        <div className={styles.content}>
          <div className={styles.divImage}>
            <img src="./images/unidades/sumare.jpg" alt="Real Estate" className={styles.image} />
          </div>
          <div className={styles.infoSection}>
            <ul className={styles.list}>
              {units.map((unit) => (
                <li
                  key={unit.name}
                  className={styles.listItem}
                  onClick={() => openModal(unit)}
                >
                  <span className={styles.icon}>
                    <FontAwesomeIcon icon={faMapMarkerAlt} />
                  </span>
                  <div>
                    <strong>{unit.name}</strong>
                    <p>{unit.address}</p>
                    <hr />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Modal */}
        {modalContent && (
          <div className={styles.modal} onClick={closeModal}>
            <div
              className={styles.modalContent}
              onClick={(e) => e.stopPropagation()}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <h2>{modalContent.name}</h2>
                <button className={styles.closeBtn} onClick={closeModal}>
                  ×
                </button>
              </div>
              <p>{modalContent.address}</p>
              <p>{modalContent.phone}</p>
              <img
                src={modalContent.image}
                alt={`${modalContent.name}`}
                style={{ width: "100%", borderRadius: "8px", marginBottom: "1rem" }}
              />
              <div style={{ display: "flex", justifyContent: "space-around", marginTop: "1rem" }}>
                <a href={modalContent.mapsLink} target="_blank" rel="noopener noreferrer" className={styles.link}>
                  <img
                    loading="lazy"
                    decoding="async"
                    width="48"
                    height="48"
                    src="https://hospitalsaocamilosp.org.br/wp-content/uploads/2024/07/icons8-google-maps-48.png"
                    alt="Google Maps"
                  />
                  <p>Maps</p>
                </a>
                <a href={modalContent.wazeLink} target="_blank" rel="noopener noreferrer" className={styles.link}>
                  <img
                    loading="lazy"
                    decoding="async"
                    width="48"
                    height="48"
                    src="https://hospitalsaocamilosp.org.br/wp-content/uploads/2024/07/1200x630wa-1.png"
                    alt="Waze"
                  />
                  <p>Waze</p>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
      <p className={`mb-4 ${styles.description}`}>
        Todas as nossas unidades são equipadas com tecnologia de ponta e contam com profissionais altamente qualificados para oferecer o melhor atendimento. Na E-Clinic, sua saúde e bem-estar são nossas prioridades.
      </p>
      <p className={`mb-4 ${styles.description}`}>
        Venha nos visitar em uma de nossas unidades e experimente o cuidado e a excelência que só a E-Clinic pode oferecer. Estamos prontos para atender você!
      </p>
    </section>
  );
};

export default UnitList;
