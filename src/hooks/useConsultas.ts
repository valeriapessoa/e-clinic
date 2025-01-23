import { useEffect, useState } from "react";

export interface Consulta {
  _id: string;
  pacienteNome: string;
  unidade: string;
  especialidade: string;
  consultaDataHora: string;
}

const useConsultas = () => {
  const [consultas, setConsultas] = useState<Consulta[]>([]);

  useEffect(() => {
    const fetchConsultas = async () => {
      try {
        const response = await fetch("/api/consultations");
        if (!response.ok) throw new Error("Erro ao buscar consultas");
        const data = await response.json();
        setConsultas(data);
      } catch (error) {
        console.error("Erro ao buscar consultas:", error);
      }
    };
    fetchConsultas();
  }, []);

  const deleteConsulta = async (id: string) => {
    await fetch(`/api/consultations/${id}`, { method: "DELETE" });
    setConsultas(consultas.filter((consulta) => consulta._id !== id));
  };

  const updateConsulta = async (id: string, updatedData: Partial<Consulta>) => {
    const response = await fetch(`/api/consultations/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedData),
    });

    if (!response.ok) {
      throw new Error("Erro ao atualizar consulta");
    }

    setConsultas(
      consultas.map((c) => (c._id === id ? { ...c, ...updatedData } : c)),
    );
  };

  return { consultas, deleteConsulta, updateConsulta };
};

export default useConsultas;
