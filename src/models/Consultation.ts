import { Schema, model, models } from "mongoose";

export interface ConsultationDocument {
  pacienteNome: string;
  numeroCelular: string;
  convenio: string;
  carteirinhaNumero: string;
  unidade: string;
  especialidade: string;
  consultaDataHora: Date;
  userId: string; // ID do usuário que agendou
}

const ConsultationSchema = new Schema<ConsultationDocument>(
  {
    pacienteNome: { type: String, required: true },
    numeroCelular: { type: String, required: true },
    convenio: { type: String, required: true },
    carteirinhaNumero: { type: String, required: true },
    unidade: { type: String, required: true },
    especialidade: { type: String, required: true },
    consultaDataHora: { type: Date, required: true },
    userId: { type: String, required: true }, // Armazena o ID do usuário que agendou a consulta.
  },
  {
    timestamps: true, // Adiciona campos createdAt e updatedAt automaticamente
  },
);

const Consultation =
  models.Consultation ||
  model<ConsultationDocument>("Consultation", ConsultationSchema);

export default Consultation;
