import React from "react";
import { Form } from "react-bootstrap";
import styles from "./FormAgendarConsulta.module.css";

type FormControlElement =
  | HTMLInputElement
  | HTMLSelectElement
  | HTMLTextAreaElement;

interface FormSelectProps {
  label: string;
  name: string;
  value: string;
  onChange: React.ChangeEventHandler<FormControlElement>;
  options: { value: string; label: string }[];
  isInvalid?: boolean;
  errorMessage?: string;
}

const FormSelect: React.FC<FormSelectProps> = ({
  label,
  name,
  value,
  onChange,
  options,
  isInvalid,
  errorMessage,
}) => {
  return (
    <Form.Group controlId={name} className={styles.formGroup}>
      <Form.Label className={styles.label}>{label}</Form.Label>
      <Form.Control
        as="select"
        name={name}
        value={value}
        onChange={onChange}
        isInvalid={isInvalid}
        className={styles.select}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </Form.Control>
      <Form.Control.Feedback type="invalid" className={styles.error}>
        {errorMessage}
      </Form.Control.Feedback>
    </Form.Group>
  );
};

export default FormSelect;
