"use client";

import React, { useEffect, useState } from 'react';
import { Container, Table, Image, Button, Modal, Form } from 'react-bootstrap';
import styles from "../../styles/consultas/minhas-consultas.module.css";
import { consultationSchema } from "@/models/consultationSchema";
import { z } from 'zod';
import { addDays, getDay } from "date-fns";
import CustomDatePicker from "@/components/CustomDatePicker/CustomDatePicker";

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
  const [showConfirmDeleteModal, setShowConfirmDeleteModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [selectedConsulta, setSelectedConsulta] = useState<Consulta | null>(null);
  const [formData, setFormData] = useState({ consultaDataHora: "" });
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

  const handleDelete = (consulta: Consulta) => {
    setSelectedConsulta(consulta);
    setShowConfirmDeleteModal(true);
  };

  const confirmDelete = async () => {
    if (selectedConsulta) {
      await fetch(`/api/consultations/${selectedConsulta._id}`, { method: 'DELETE' });
      setConsultas(consultas.filter(consulta => consulta._id !== selectedConsulta._id));
      setShowConfirmDeleteModal(false);
      setSuccessMessage("Sua consulta foi cancelada com sucesso!"); // Define a mensagem de sucesso
      setShowSuccessModal(true); // Abre o modal de sucesso
    }
  };

  const handleEditClick = (consulta: Consulta) => {
    setSelectedConsulta(consulta);
    setFormData({ consultaDataHora: consulta.consultaDataHora });
    setShowModal(true);
  };

  const handleDateTimeChange = (date: Date | null) => {
    if (date) {
      setFormData({ consultaDataHora: date.toISOString() });
    }
  };

  const handleUpdateSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      consultationSchema.pick({ consultaDataHora: true }).parse(formData);

      const response = await fetch(`/api/consultations/${selectedConsulta?._id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ consultaDataHora: formData.consultaDataHora })
      });

      if (!response.ok) {
        throw new Error('Erro ao atualizar consulta');
      }

      setConsultas(consultas.map(c => c._id === selectedConsulta?._id ? { ...c, consultaDataHora: formData.consultaDataHora } : c));
      setShowModal(false);
      setSuccessMessage("Consulta atualizada com sucesso!"); // Define a mensagem de sucesso
      setShowSuccessModal(true); // Abre o modal de sucesso
    } catch (error) {
      if (error instanceof z.ZodError) {
        const formErrors = error.errors.reduce((acc, curr) => {
          acc[curr.path[0]] = curr.message; return acc;
        }, {} as { [key: string]: string });
        setErrors(formErrors);
      } else {
        console.error("Erro ao atualizar consulta:", error);
        alert("Erro ao atualizar consulta");
      }
    }
  };

  // Função para definir horários permitidos
  const filterPassedTime = (time: Date): boolean => {
    const currentDate = new Date();
    const selectedDate = new Date(time);

    // Permite apenas horários entre 9:00 e 18:00
    const hours = selectedDate.getHours();
    return hours >= 9 && hours < 18;
  };

  // Função para definir datas permitidas
  const filterPassedDate = (date: Date): boolean => {
    const currentDate = new Date();
    const selectedDate = new Date(date);

    // Permite apenas datas a partir de hoje
    if (selectedDate < currentDate) {
      return false;
    }

    // Permite apenas de segunda a sábado
    const day = getDay(selectedDate);
    return day !== 0;
  };

  return (
    <Container className={styles.container}>
      <Image src="/images/consultas/banner.jpg" fluid className={styles.bannerImage} alt="Banner de Consultas" />
      <h2 className={styles.title}>Consultas Agendadas</h2>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Paciente</th>
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
                  <Button className={styles.editButton} onClick={() => handleEditClick(consulta)}>Editar</Button>
                  <Button className={styles.deleteButton} onClick={() => handleDelete(consulta)}>Cancelar</Button>
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
              <CustomDatePicker
                selected={formData.consultaDataHora ? new Date(formData.consultaDataHora) : null}
                onChange={handleDateTimeChange}
                minDate={new Date()}
                maxDate={addDays(new Date(), 30)}
                filterDate={filterPassedDate}
                filterTime={filterPassedTime}
                showTimeSelect
                dateFormat="Pp"
              />
              <Form.Control.Feedback type="invalid">
                {errors.consultaDataHora}
              </Form.Control.Feedback>
            </Form.Group>
            {/* Botão de Submissão */}
            <Button variant="primary" type="submit" className="mt-3">Salvar Alterações</Button>
          </Form>
        </Modal.Body>
      </Modal>

      {/* Modal de confirmação de exclusão */}
      <Modal show={showConfirmDeleteModal} onHide={() => setShowConfirmDeleteModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Confirmar Cancelamento</Modal.Title>
        </Modal.Header>
        <Modal.Body>Você tem certeza que deseja cancelar esta consulta?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowConfirmDeleteModal(false)}>
            Cancelar
          </Button>
          <Button variant="danger" onClick={confirmDelete}>
            Confirmar
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Modal de Sucesso */}
      <Modal show={showSuccessModal} onHide={() => setShowSuccessModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Sucesso!</Modal.Title>
        </Modal.Header>
        <Modal.Body>{successMessage}</Modal.Body> {/* Mensagem de sucesso */}
        <Modal.Footer>
          <Button variant="primary" onClick={() => setShowSuccessModal(false)}>
            Fechar
          </Button>
        </Modal.Footer>
      </Modal>

    </Container>
  );
};

export default ConsultasAgendadas;