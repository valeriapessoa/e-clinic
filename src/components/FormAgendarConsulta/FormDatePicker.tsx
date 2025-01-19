import React from "react";
import { Form } from "react-bootstrap";
import CustomDatePicker from "@/components/CustomDatePicker/CustomDatePicker";
import styles from "./FormAgendarConsulta.module.css";

interface FormDatePickerProps {
  label: string;
  selected: Date | null;
  onChange: (date: Date | null) => void;
  minDate: Date;
  maxDate: Date;
  filterDate: (date: Date) => boolean;
  filterTime: (time: Date) => boolean;
  showTimeSelect: boolean;
  dateFormat: string;
  isInvalid?: boolean;
  errorMessage?: string;
}

const FormDatePicker: React.FC<FormDatePickerProps> = ({
  label,
  selected,
  onChange,
  minDate,
  maxDate,
  filterDate,
  filterTime,
  showTimeSelect,
  dateFormat,
  isInvalid,
  errorMessage,
}) => {
  return (
    <Form.Group controlId="consultaDataHora" className={styles.formGroup}>
      <Form.Label className={styles.label}>{label}</Form.Label>
      <CustomDatePicker
        selected={selected}
        onChange={onChange}
        minDate={minDate}
        maxDate={maxDate}
        filterDate={filterDate}
        filterTime={filterTime}
        showTimeSelect={showTimeSelect}
        dateFormat={dateFormat}
      />
      <Form.Control.Feedback type="invalid" className={styles.error}>
        {errorMessage}
      </Form.Control.Feedback>
    </Form.Group>
  );
};

export default FormDatePicker;