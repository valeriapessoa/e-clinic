"use client";

import { useSession } from "next-auth/react";
import { useState } from "react";
import { Form, Button, Container, Image } from "react-bootstrap";
import styles from "../../styles/consultas/form-agendar-consulta.module.css"; // Ajuste o caminho conforme necessário

const FormAgendarConsulta = () => {
  const { data: session } = useSession();
  const [formData, setFormData] = useState({
    pacienteNome: "",
    numeroCelular: "",
    convenio: "SulAmérica",
    carteirinhaNumero: "",
    unidade: "Morumbi",
    especialidade: "Cardiologia",
    consultaDataHora: ""
  });

  // Define o tipo do evento como ChangeEvent<FormControlElement>
  type FormInputElement = HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;

  const handleFormChange = (e: React.ChangeEvent<FormInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!session) {
      alert("Você precisa estar logado para agendar uma consulta.");
      return;
    }

    try {
      const response = await fetch('/api/agendar-consulta', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, userId: session.user.id }) // Envia os dados do formulário com o ID do usuário logado
      });

      if (response.ok) {
        alert("Consulta agendada com sucesso!"); // Mensagem de sucesso ao agendar consulta
        setFormData({
          pacienteNome: "",
          numeroCelular: "",
          convenio: "SulAmérica",
          carteirinhaNumero: "",
          unidade: "Morumbi",
          especialidade: "Cardiologia",
          consultaDataHora: ""
        }); // Reseta os campos do formulário após agendamento bem-sucedido
      } else {
        alert("Erro ao agendar consulta"); // Mensagem de erro caso falhe ao agendar consulta
      }
    } catch (error) {
      console.error("Erro ao agendar consulta:", error);
      alert("Erro ao agendar consulta"); // Mensagem de erro em caso de exceção na requisição
    }
  };

  return (
    <Container className={styles.formContainer}>
      <Image src="/images/consultas/banner-clinica.png" alt="Banner de Consultas" className={styles.banner} fluid />
      <h2 className={styles.title}>Agendar Consulta</h2>
      <p className={styles.description}>Preencha o formulário abaixo para agendar uma consulta na E-Clinic.</p>
      <Form onSubmit={handleFormSubmit}>
        <Form.Group controlId="pacienteNome" className={styles.formGroup}>
          <Form.Label className={styles.label}>Nome do Paciente</Form.Label>
          <Form.Control
            className={styles.input}
            type="text"
            name="pacienteNome"
            value={formData.pacienteNome}
            onChange={handleFormChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="numeroCelular" className={styles.formGroup}>
          <Form.Label className={styles.label}>Celular</Form.Label>
          <Form.Control
            className={styles.input}
            type="tel"
            name="numeroCelular"
            value={formData.numeroCelular}
            onChange={handleFormChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="convenio" className={styles.formGroup}>
          <Form.Label className={styles.label}>Convênio</Form.Label>
          <Form.Control as="select" name="convenio" value={formData.convenio} onChange={handleFormChange} className={styles.select}>
            <option value="SulAmérica">SulAmérica</option>
            <option value="Mediservice">Mediservice</option>
            <option value="Cassi">Cassi</option>
            <option value="Bradesco">Bradesco</option>
            <option value="Amil">Amil</option>
            <option value="One health">One health</option>
            <option value="Lincx">Lincx</option>
            <option value="Careplus">Careplus</option>
            <option value="Intermédica">Intermédica</option>
            <option value="Unimed">Unimed</option>
            <option value="Seguros Unimed">Seguros Unimed</option>
            <option value="Porto Seguro">Porto Seguro</option>
            <option value="Allianz Saúde">Allianz Saúde</option>
            <option value="Capep Saúde">Capep Saúde</option>
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="carteirinhaNumero" className={styles.formGroup}>
          <Form.Label className={styles.label}>Número da Carteirinha</Form.Label>
          <Form.Control
            className={styles.input}
            type="text"
            name="carteirinhaNumero"
            value={formData.carteirinhaNumero}
            onChange={handleFormChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="unidade" className={styles.formGroup}>
          <Form.Label className={styles.label}>Unidade</Form.Label>
          <Form.Control as="select" name="unidade" value={formData.unidade} onChange={handleFormChange} className={styles.select}>
            <option value="Morumbi">Morumbi</option>
            <option value="Centro">Centro</option>
            <option value="Vila Olímpia">Vila Olímpia</option>
            <option value="Pinheiros">Pinheiros</option>
            <option value="Brooklin">Brooklin</option>
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="especialidade" className={styles.formGroup}>
          <Form.Label className={styles.label}>Especialidade</Form.Label>
          <Form.Control as="select" name="especialidade" value={formData.especialidade} onChange={handleFormChange} className={styles.select}>
            <option value="Cardiologia">Cardiologia</option>
            <option value="Dermatologia">Dermatologia</option>
            <option value="Endocrinologia">Endocrinologia</option>
            <option value="Gastroenterologia">Gastroenterologia</option>
            <option value="Ginecologia">Ginecologia</option>
            <option value="Ortopedia">Ortopedia</option>
            <option value="Pediatria">Pediatria</option>
            <option value="Psiquiatria">Psiquiatria</option>
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="consultaDataHora" className={styles.formGroup}>
          <Form.Label className={styles.label}>Data/Hora da Consulta</Form.Label>
          <Form.Control
            className={styles.input}
            type="datetime-local"
            name="consultaDataHora"
            value={formData.consultaDataHora}
            onChange={handleFormChange}
            required
          />
        </Form.Group>

        <Button className={styles.button} variant="primary" type="submit">
          Agendar Consulta
        </Button>
      </Form>
    </Container>
  );
};

export default FormAgendarConsulta;
