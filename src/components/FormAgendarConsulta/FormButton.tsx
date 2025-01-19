import React from "react";
import { Button } from "react-bootstrap";
import styles from "./FormAgendarConsulta.module.css";

interface FormButtonProps {
  label: string;
  variant?: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  className?: string;
}

const FormButton: React.FC<FormButtonProps> = ({
  label,
  variant = "primary",
  type = "button",
  onClick,
  className,
}) => {
  return (
    <Button
      variant={variant}
      type={type}
      onClick={onClick}
      className={`${className}`}
    >
      {label}
    </Button>
  );
};

export default FormButton;