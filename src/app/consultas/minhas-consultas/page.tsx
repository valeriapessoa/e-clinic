"use client";

import React, { useState } from 'react';
import { Container, Image, Modal, Button } from 'react-bootstrap';
import styles from "../../styles/consultas/minhas-consultas.module.css";
import useConsultas, { Consulta } from "@/hooks/useConsultas";
import ConsultasTable from "@/components/ConsultasTable/ConsultasTable";
import EditConsultaModal from "@/components/EditConsultaModal";

const ConsultasAgendadas = () => {
  const { consultas, deleteConsulta, updateConsulta } = useConsultas();
  const [showModal, setShowModal] = useState(false);
  const [showConfirmDeleteModal, setShowConfirmDeleteModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [selectedConsulta, setSelectedConsulta] = useState<Consulta | null>(null);

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
      await deleteConsulta(selectedConsulta._id);
      setShowConfirmDeleteModal(false);
      setSuccessMessage("Sua consulta foi cancelada com sucesso!");
      setShowSuccessModal(true);
    }
  };

  const handleEditClick = (consulta: Consulta) => {
    setSelectedConsulta(consulta);
    setShowModal(true);
  };

  const handleUpdate = async (id: string, updatedData: Partial<Consulta>) => {
    await updateConsulta(id, updatedData);
    setSuccessMessage("Consulta atualizada com sucesso!");
    setShowSuccessModal(true);
  };

  return (
    <Container className={styles.container}>
      <Image src="/images/consultas/banner.jpg" fluid className={styles.bannerImage} alt="Banner de Consultas" />
      <h2 className={styles.title}>Consultas Agendadas</h2>
      <ConsultasTable
        consultas={consultas}
        onEdit={handleEditClick}
        onDelete={handleDelete}
        formatarDataHora={formatarDataHora}
      />

      <EditConsultaModal
        show={showModal}
        onHide={() => setShowModal(false)}
        consulta={selectedConsulta}
        onUpdate={handleUpdate}
      />

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

      <Modal show={showSuccessModal} onHide={() => setShowSuccessModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Sucesso!</Modal.Title>
        </Modal.Header>
        <Modal.Body>{successMessage}</Modal.Body>
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