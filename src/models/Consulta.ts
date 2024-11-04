import { Schema, model, models } from "mongoose";

// Interface que define a estrutura do documento Consulta
export interface ConsultaDocument {
    pacienteNome: string;
    numeroCelular: string;
    convenio: string;
    carteirinhaNumero: string;
    unidade: string;
    especialidade: string;
    consultaDataHora: Date;
    userId: string; // ID do usuário que agendou
}

// Definição do esquema da consulta
const ConsultaSchema = new Schema<ConsultaDocument>({
    pacienteNome: { type: String, required: true },
    numeroCelular: { type: String, required: true },
    convenio: { type: String, required: true },
    carteirinhaNumero: { type: String, required: true },
    unidade: { type: String, required: true },
    especialidade: { type: String, required: true },
    consultaDataHora: { type: Date, required: true },
    userId: { type: String, required: true }, // Armazena o ID do usuário que agendou a consulta.
}, {
    timestamps: true, // Adiciona campos createdAt e updatedAt automaticamente
});

// Verifica se o modelo já foi criado para evitar erros de recompilação
const Consulta = models.Consulta || model<ConsultaDocument>('Consulta', ConsultaSchema);

export default Consulta;