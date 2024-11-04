import { connectDB } from "@/lib/mongodb";
import Consulta from "@/models/Consulta"; // Importa o modelo de consulta
import { NextRequest, NextResponse } from "next/server"; // Importa os tipos corretos

export async function GET(request: NextRequest) {
  try {
      await connectDB(); // Conecta ao banco de dados antes de buscar as consultas.
      const consultas = await Consulta.find(); // Busca todas as consultas no banco de dados.
      return NextResponse.json(consultas); // Retorna as consultas encontradas como resposta.
  } catch (error) {
      console.error("Erro ao buscar consultas:", error);
      return NextResponse.error(); // Retorna um erro se algo der errado.
  }
}