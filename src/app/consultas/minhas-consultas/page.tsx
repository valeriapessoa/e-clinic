"use client";

import React, { useEffect, useState } from 'react';
import { Container, Table, Image, Button, Modal, Form } from 'react-bootstrap';
import styles from "../../styles/consultas/minhas-consultas.module.css";
import { consultationSchema } from "@/models/consultationSchema";
import { z } from 'zod';


interface Consulta {
  _id: string;
  pacienteNome: string;
  unidade: string;
  especialidade: string;
  consultaDataHora: string;
}

const ConsultasAgendadas = () => {
  const [consultas, setConsultas] = useState<Consulta[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedConsulta, setSelectedConsulta] = useState<Consulta | null>(null);
  const [formData, setFormData] = useState({ consultaDataHora: "" }); // Apenas o campo de data/hora
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    const fetchConsultas = async () => {
      try {
        const response = await fetch('/api/consultations');
        if (!response.ok) throw new Error('Erro ao buscar consultas');
        const data = await response.json();
        setConsultas(data);
      } catch (error) {
        console.error("Erro ao buscar consultas:", error);
      }
    };
    fetchConsultas();
  }, []);

  const formatarDataHora = (dataHora: string) => {
    const date = new Date(dataHora);
    const optionsDate: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'long', year: 'numeric' };
    const dataFormatada = date.toLocaleDateString('pt-BR', optionsDate);
    const optionsTime: Intl.DateTimeFormatOptions = { hour: 'numeric', minute: 'numeric', hour12: true };
    const horaFormatada = date.toLocaleTimeString('pt-BR', optionsTime);
    return `${dataFormatada} às ${horaFormatada}`;
  };

  const handleDelete = async (id: string) => {
    if (confirm("Você tem certeza que deseja cancelar esta consulta?")) {
      await fetch(`/api/consultations/${id}`, { method: 'DELETE' });
      setConsultas(consultas.filter(consulta => consulta._id !== id));
    }
  };

  const handleEditClick = (consulta: Consulta) => {
    setSelectedConsulta(consulta);
    setFormData({ consultaDataHora: consulta.consultaDataHora }); // Apenas a data/hora
    setShowModal(true);
  };

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setErrors(prev => ({ ...prev, [name]: "" }));
  };

  const handleUpdateSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      // Valida apenas a data/hora
      consultationSchema.pick({ consultaDataHora: true }).parse(formData);

      // Envia a requisição para atualizar a consulta
      const response = await fetch(`/api/consultations/${selectedConsulta?._id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ consultaDataHora: formData.consultaDataHora }) // Envia apenas a nova data/hora
      });

      if (!response.ok) {
        throw new Error('Erro ao atualizar consulta');
      }

      // Atualiza a lista de consultas
      setConsultas(consultas.map(c => c._id === selectedConsulta?._id ? { ...c, consultaDataHora: formData.consultaDataHora } : c));
      setShowModal(false); // Fecha o modal
      alert("Consulta atualizada com sucesso!"); // Mensagem de sucesso
    } catch (error) {
      if (error instanceof z.ZodError) {
        const formErrors = error.errors.reduce((acc, curr) => {
          acc[curr.path[0]] = curr.message; return acc;
        }, {} as { [key: string]: string });
        setErrors(formErrors); // Atualiza os erros no estado
      } else {
        console.error("Erro ao atualizar consulta:", error);
        alert("Erro ao atualizar consulta");
      }
    }
  };

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
            <th>Data/Hora</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {consultas.length > 0 ? (
            consultas.map(consulta => (
              <tr key={consulta._id}>
                <td>{consulta.pacienteNome}</td>
                <td>{consulta.unidade}</td>
                <td>{consulta.especialidade}</td>
                <td>{formatarDataHora(consulta.consultaDataHora)}</td>
                <td>
                  <Button className={styles.customButton}  onClick={() => handleEditClick(consulta)}>Editar</Button>
                  <Button className={styles.customButton}  onClick={() => handleDelete(consulta._id)}>Cancelar</Button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={5} className="text-center">Nenhuma consulta agendada.</td>
            </tr>
          )}
        </tbody>
      </Table>

      {/* Modal para editar a consulta */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Editar Consulta</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleUpdateSubmit}>
            {/* Campo para Data/Hora da Consulta */}
            <Form.Group controlId="consultaDataHora">
              <Form.Label>Data/Hora da Consulta</Form.Label>
              <Form.Control
                type="datetime-local"
                name="consultaDataHora"
                value={formData.consultaDataHora}
                onChange={handleFormChange}
                required
              />
            </Form.Group>
            {/* Botão de Submissão */}
            <Button variant="primary" type="submit" className="mt-3">Salvar Alterações</Button>
          </Form>
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default ConsultasAgendadas;