"use client";

import { useSession, signOut } from "next-auth/react";
import { Form, Container, Image } from "react-bootstrap";
import styles from "./FormAgendarConsulta.module.css";
import { addDays, getDay } from "date-fns";
import FormInput from "./FormInput";
import FormSelect from "./FormSelect";
import FormDatePicker from "./FormDatePicker";
import FormButton from "./FormButton";
import useFormAgendarConsulta from "@/hooks/useFormAgendarConsulta";
import { redirect } from "next/navigation";

const FormAgendarConsulta = () => {
  const { data: session } = useSession();
  const {
    formData,
    errors,
    handleFormChange,
    handleDateTimeChange,
    handleFormSubmit,
  } = useFormAgendarConsulta();

  if (!session) {
    return redirect(`/login`);
  }

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
    <Container className={styles.formContainer}>
      <Image
        src="/images/consultas/banner-clinica.png"
        alt="Banner de Consultas"
        className={styles.banner}
        fluid
      />
      <h2 className={styles.title}>Agendar Consulta</h2>
      <p className={styles.description}>
        Preencha o formulário abaixo para agendar uma consulta na E-Clinic.
      </p>

      <Form onSubmit={handleFormSubmit}>
        <FormInput
          label="Nome do Paciente"
          name="pacienteNome"
          type="text"
          value={formData.pacienteNome}
          onChange={handleFormChange}
          isInvalid={!!errors.pacienteNome}
          errorMessage={errors.pacienteNome}
          required
        />

        <FormInput
          label="Celular"
          name="numeroCelular"
          type="tel"
          value={formData.numeroCelular}
          onChange={handleFormChange}
          isInvalid={!!errors.numeroCelular}
          errorMessage={errors.numeroCelular}
          required
          maxLength={11}
        />

        <FormSelect
          label="Convênio"
          name="convenio"
          value={formData.convenio}
          onChange={handleFormChange}
          options={[
            { value: "SulAmérica", label: "SulAmérica" },
            { value: "Mediservice", label: "Mediservice" },
            { value: "Cassi", label: "Cassi" },
            { value: "Bradesco", label: "Bradesco" },
            { value: "Amil", label: "Amil" },
            { value: "One health", label: "One health" },
            { value: "Lincx", label: "Lincx" },
            { value: "Careplus", label: "Careplus" },
            { value: "Intermédica", label: "Intermédica" },
            { value: "Unimed", label: "Unimed" },
            { value: "Seguros Unimed", label: "Seguros Unimed" },
            { value: "Porto Seguro", label: "Porto Seguro" },
            { value: "Allianz Saúde", label: "Allianz Saúde" },
            { value: "Capep Saúde", label: "Capep Saúde" },
          ]}
          isInvalid={!!errors.convenio}
          errorMessage={errors.convenio}
        />

        <FormInput
          label="Número da Carteirinha"
          name="carteirinhaNumero"
          type="text"
          value={formData.carteirinhaNumero}
          onChange={handleFormChange}
          isInvalid={!!errors.carteirinhaNumero}
          errorMessage={errors.carteirinhaNumero}
          required
          maxLength={10}
        />

        <FormSelect
          label="Unidade"
          name="unidade"
          value={formData.unidade}
          onChange={handleFormChange}
          options={[
            { value: "Morumbi", label: "Morumbi" },
            { value: "Centro", label: "Centro" },
            { value: "Vila Olímpia", label: "Vila Olímpia" },
            { value: "Pinheiros", label: "Pinheiros" },
            { value: "Brooklin", label: "Brooklin" },
          ]}
          isInvalid={!!errors.unidade}
          errorMessage={errors.unidade}
        />

        <FormSelect
          label="Especialidade"
          name="especialidade"
          value={formData.especialidade}
          onChange={handleFormChange}
          options={[
            { value: "Cardiologia", label: "Cardiologia" },
            { value: "Dermatologia", label: "Dermatologia" },
            { value: "Endocrinologia", label: "Endocrinologia" },
            { value: "Gastroenterologia", label: "Gastroenterologia" },
            { value: "Ginecologia", label: "Ginecologia" },
            { value: "Ortopedia", label: "Ortopedia" },
            { value: "Pediatria", label: "Pediatria" },
            { value: "Psiquiatria", label: "Psiquiatria" },
          ]}
          isInvalid={!!errors.especialidade}
          errorMessage={errors.especialidade}
        />

        <FormDatePicker
          label="Data/Hora da Consulta"
          selected={formData.consultaDataHora ? new Date(formData.consultaDataHora) : null}
          onChange={handleDateTimeChange}
          minDate={new Date()}
          maxDate={addDays(new Date(), 30)}
          filterDate={filterPassedDate}
          filterTime={filterPassedTime}
          showTimeSelect
          dateFormat="Pp"
          isInvalid={!!errors.consultaDataHora}
          errorMessage={errors.consultaDataHora}
        />

        <FormButton
          label="Agendar Consulta"
          variant="primary"
          type="submit"
          className={styles.button}
        />

        <FormButton
          label="Sair"
          variant="danger"
          onClick={() => signOut()}
          className={`rounded-lg btn btn-danger px-5 py-1 mt-3`}
        />
      </Form>
    </Container>
  );
};

export default FormAgendarConsulta;