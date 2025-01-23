import React, { useState } from "react";
import { Modal, Form, Button } from "react-bootstrap";
import CustomDatePicker from "@/components/CustomDatePicker/CustomDatePicker";
import { addDays, getDay } from "date-fns";
import { consultationSchema } from "@/models/consultationSchema";
import { z } from "zod";

interface Consulta {
  _id: string;
  consultaDataHora: string;
}

interface EditConsultaModalProps {
  show: boolean;
  onHide: () => void;
  consulta: Consulta | null;
  onUpdate: (id: string, updatedData: Partial<Consulta>) => Promise<void>;
}

const EditConsultaModal: React.FC<EditConsultaModalProps> = ({
  show,
  onHide,
  consulta,
  onUpdate,
}) => {
  const [formData, setFormData] = useState({
    consultaDataHora: consulta?.consultaDataHora || "",
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleDateTimeChange = (date: Date | null) => {
    if (date) {
      setFormData({ consultaDataHora: date.toISOString() });
    }
  };

  const handleUpdateSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      consultationSchema.pick({ consultaDataHora: true }).parse(formData);
      await onUpdate(consulta?._id || "", {
        consultaDataHora: formData.consultaDataHora,
      });
      onHide();
    } catch (error) {
      if (error instanceof z.ZodError) {
        const formErrors = error.errors.reduce(
          (acc, curr) => {
            acc[curr.path[0]] = curr.message;
            return acc;
          },
          {} as { [key: string]: string },
        );
        setErrors(formErrors);
      } else {
        console.error("Erro ao atualizar consulta:", error);
        alert("Erro ao atualizar consulta");
      }
    }
  };

  const filterPassedTime = (time: Date): boolean => {
    const currentDate = new Date();
    const selectedDate = new Date(time);
    const hours = selectedDate.getHours();
    return hours >= 9 && hours < 18;
  };

  const filterPassedDate = (date: Date): boolean => {
    const currentDate = new Date();
    const selectedDate = new Date(date);
    if (selectedDate < currentDate) {
      return false;
    }
    const day = getDay(selectedDate);
    return day !== 0;
  };

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Editar Consulta</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleUpdateSubmit}>
          <Form.Group controlId="consultaDataHora">
            <Form.Label>Data/Hora da Consulta</Form.Label>
            <CustomDatePicker
              selected={
                formData.consultaDataHora
                  ? new Date(formData.consultaDataHora)
                  : null
              }
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
          <Button variant="primary" type="submit" className="mt-3">
            Salvar Alterações
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default EditConsultaModal;
