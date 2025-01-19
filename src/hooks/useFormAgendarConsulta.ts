import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { consultationSchema } from "@/models/consultationSchema";
import { z } from "zod";

interface FormData {
  pacienteNome: string;
  numeroCelular: string;
  convenio: string;
  carteirinhaNumero: string;
  unidade: string;
  especialidade: string;
  consultaDataHora: string;
}

interface Errors {
  [key: string]: string;
}

const useFormAgendarConsulta = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const [formData, setFormData] = useState<FormData>({
    pacienteNome: "",
    numeroCelular: "",
    convenio: "SulAmérica",
    carteirinhaNumero: "",
    unidade: "Morumbi",
    especialidade: "Cardiologia",
    consultaDataHora: "",
  });

  const [errors, setErrors] = useState<Errors>({});

  const handleFormChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;

    // Filtra a entrada para permitir apenas dígitos
    if (name === "numeroCelular" || name === "carteirinhaNumero") {
      const filteredValue = value.replace(/\D/g, "");

      // Limita o número de caracteres
      if (name === "numeroCelular" && filteredValue.length > 11) {
        setErrors((prev) => ({
          ...prev,
          numeroCelular: "O número do celular deve ter no máximo 11 dígitos.",
        }));
        return;
      }
      if (name === "carteirinhaNumero" && filteredValue.length > 10) {
        setErrors((prev) => ({
          ...prev,
          carteirinhaNumero:
            "O número da carteirinha deve ter no máximo 10 dígitos.",
        }));
        return;
      }

      setFormData((prev) => ({ ...prev, [name]: filteredValue }));
      setErrors((prev) => ({ ...prev, [name]: "" })); // Limpa os erros ao mudar o valor
      return;
    }

    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" })); // Limpa os erros ao mudar o valor
  };

  const handleDateTimeChange = (date: Date | null) => {
    if (date) {
      setFormData({ ...formData, consultaDataHora: date.toISOString() });
    }
  };

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!session) {
      alert("Você precisa estar logado para agendar uma consulta.");
      return;
    }

    try {
      console.log("Form data:", formData);
      // Valida os dados do formulário usando o Zod
      consultationSchema.parse({ ...formData, userId: session.user.id });

      const response = await fetch("/api/consultations", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, userId: session.user.id }), // Envia os dados do formulário com o ID do usuário logado
      });

      if (response.ok) {
        alert("Consulta agendada com sucesso!");
        setFormData({
          pacienteNome: "",
          numeroCelular: "",
          convenio: "SulAmérica",
          carteirinhaNumero: "",
          unidade: "Morumbi",
          especialidade: "Cardiologia",
          consultaDataHora: "",
        });
        router.push("/consultas/minhas-consultas"); // Redireciona para a página de consultas agendadas
      } else {
        alert("Erro ao agendar consulta");
      }
    } catch (error) {
      if (error instanceof z.ZodError) {
        const formErrors = error.errors.reduce((acc, curr) => {
          acc[curr.path[0]] = curr.message;
          return acc;
        }, {} as { [key: string]: string });
        setErrors(formErrors);
      } else {
        console.error("Erro ao agendar consulta:", error);
        alert("Erro ao agendar consulta");
      }
    }
  };

  return {
    formData,
    errors,
    handleFormChange,
    handleDateTimeChange,
    handleFormSubmit,
  };
};

export default useFormAgendarConsulta;