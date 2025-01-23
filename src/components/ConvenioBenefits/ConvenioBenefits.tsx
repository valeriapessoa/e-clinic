import React from "react";
import styles from "./ConvenioBenefits.module.css";

const ConvenioBenefits = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.mainTitle}>
          Melhores <span className={styles.highlight}>Convênios</span>
        </h1>
      </div>
      <div className={styles.content}>
        <img
          className={styles.image}
          src="./images/convenios/img-0.jpg"
          alt="Convênios"
        />
        <ul className={styles.list}>
          <li className={styles.listItem}>
            <strong className={styles.title}>Cobertura Abrangente</strong>
            <p>
              Oferecemos uma ampla gama de serviços médicos e especialidades
              cobertas pelos nossos convênios.
            </p>
          </li>
          <li className={styles.listItem}>
            <strong className={styles.title}>Atendimento Personalizado</strong>
            <p>
              Cada paciente é único, e nossos convênios permitem um atendimento
              personalizado para suas necessidades específicas.
            </p>
          </li>
          <li className={styles.listItem}>
            <strong className={styles.title}>Facilidade de Acesso</strong>
            <p>
              Nossas unidades estão estrategicamente localizadas para facilitar
              o acesso aos serviços de saúde.
            </p>
          </li>
          <li className={styles.listItem}>
            <strong className={styles.title}>Benefícios Exclusivos</strong>
            <p>
              Aproveite benefícios exclusivos e descontos especiais através dos
              nossos convênios parceiros.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ConvenioBenefits;
