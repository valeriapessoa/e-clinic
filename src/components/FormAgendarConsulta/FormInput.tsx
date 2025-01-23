import React from "react";
import { Form } from "react-bootstrap";
import styles from "./FormAgendarConsulta.module.css";

interface FormInputProps {
  label: string;
  name: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isInvalid?: boolean;
  errorMessage?: string;
  required?: boolean;
  maxLength?: number;
}

const FormInput: React.FC<FormInputProps> = ({
  label,
  name,
  type,
  value,
  onChange,
  isInvalid,
  errorMessage,
  required,
  maxLength,
}) => {
  return (
    <Form.Group controlId={name} className={styles.formGroup}>
      <Form.Label className={styles.label}>{label}</Form.Label>
      <Form.Control
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        isInvalid={isInvalid}
        required={required}
        maxLength={maxLength}
        className={styles.input}
      />
      <Form.Control.Feedback type="invalid" className={styles.error}>
        {errorMessage}
      </Form.Control.Feedback>
    </Form.Group>
  );
};

export default FormInput;
