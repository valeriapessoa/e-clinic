import { connectDB } from "@/lib/mongodb";
import Consulta from "@/models/Consulta";
import { NextRequest, NextResponse } from "next/server"; // Importa os tipos corretos

export async function POST(request: NextRequest) {
  try {
      await connectDB(); // Conecta ao banco de dados antes de salvar a consulta.
      const data = await request.json(); // Obtém os dados da requisição.

      const novaConsulta = new Consulta(data); // Cria uma nova consulta com os dados recebidos.
      await novaConsulta.save(); // Salva a nova consulta no banco de dados.

      return NextResponse.json(novaConsulta, { status: 201 }); // Retorna a consulta criada como resposta.
  } catch (error) {
      console.error("Erro ao agendar consulta:", error);
  }
}