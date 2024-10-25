"use client";

import { Container, Table, Image } from "react-bootstrap";
import styles from "../../styles/consultas/consultas-agendadas.module.css";

const ConsultasAgendadas = () => {
  const consultas = [
    {
      id: 1,
      pacienteNome: "João Silva",
      unidade: "Morumbi",
      especialidade: "Cardiologia",
      dataHora: "2024-10-30T10:00",
    },
    {
      id: 2,
      pacienteNome: "Maria Oliveira",
      unidade: "Centro",
      especialidade: "Dermatologia",
      dataHora: "2024-10-31T14:30",
    },
  ];

  return (
    <Container className={styles.container}>
      <Image src="/images/consultas/banner.jpg" fluid className={styles.bannerImage} alt="Banner de Consultas" />
      <h2 className={styles.title}>Consultas Agendadas</h2>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Nome do Paciente</th>
            <th>Unidade</th>
            <th>Especialidade</th>
            <th>Data e Hora</th>
          </tr>
        </thead>
        <tbody>
          {consultas.map((consulta) => (
            <tr key={consulta.id}>
              <td>{consulta.pacienteNome}</td>
              <td>{consulta.unidade}</td>
              <td>{consulta.especialidade}</td>
              <td>{new Date(consulta.dataHora).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default ConsultasAgendadas;
