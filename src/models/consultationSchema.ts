import { z } from "zod";

export const consultationSchema = z.object({
  pacienteNome: z.string().min(1, "Nome do paciente é obrigatório"),
  numeroCelular: z
    .string()
    .min(10, "Número de celular deve ter pelo menos 10 dígitos"),
  convenio: z.string().nonempty("Convênio é obrigatório"),
  carteirinhaNumero: z.string().nonempty("Número da carteirinha é obrigatório"),
  unidade: z.string().nonempty("Unidade é obrigatória"),
  especialidade: z.string().nonempty("Especialidade é obrigatória"),
  consultaDataHora: z.string().refine((val) => !isNaN(Date.parse(val)), {
    message: "Data/Hora da consulta inválida",
  }),
});
