import React from "react";
import {
  FaStethoscope,
  FaHospital,
  FaUserMd,
  FaShieldAlt,
} from "react-icons/fa";
import TertiaryTitle from "../TertiaryTitle/TertiaryTitle";
import styles from "./ClinicServices.module.css";

const ClinicServices = () => {
  return (
    <div className={styles.container}>
      <TertiaryTitle
        primary="CUIDADO MÉDICO"
        secondary="ATENDIMENTO DE QUALIDADE"
      />
      <div className={styles.content}>
        <img
          className={styles.image}
          src="./images/unidades/medico.jpg"
          alt="Atendimento Médico"
        />
        <div className={styles.infoSection}>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              <span className={styles.icon}>
                <FaStethoscope />
              </span>
              <div>
                <strong>ATENDIMENTO ESPECIALIZADO</strong>
                <p>
                  Receba cuidados de saúde com médicos experientes e dedicados.
                </p>
              </div>
            </li>
            <li className={styles.listItem}>
              <span className={styles.icon}>
                <FaHospital />
              </span>
              <div>
                <strong>AMPLAS INSTALAÇÕES</strong>
                <p>Conheça nossas unidades modernas e bem equipadas.</p>
              </div>
            </li>
            <li className={styles.listItem}>
              <span className={styles.icon}>
                <FaUserMd />
              </span>
              <div>
                <strong>SOLUÇÕES PERSONALIZADAS</strong>
                <p>
                  Recomendações de tratamento personalizadas para cada paciente.
                </p>
              </div>
            </li>
            <li className={styles.listItem}>
              <span className={styles.icon}>
                <FaShieldAlt />
              </span>
              <div>
                <strong>SEGURO E TRANSPARENTE</strong>
                <p>
                  Transações e processos médicos seguros e sem complicações.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ClinicServices;
