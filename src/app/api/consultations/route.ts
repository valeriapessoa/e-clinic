import { connectDB } from "@/lib/mongodb";
import Consultation from "@/models/Consultation"; // Importa o modelo de consulta corretamente
import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";
import { consultationSchema } from "@/models/consultationSchema"; // Importa o schema de validação
import { z } from 'zod'; // Certifique-se de importar zod corretamente

// Endpoint para criar uma nova consulta (POST)
export async function POST(request: NextRequest) {
  try {
    const token = await getToken({ req: request });

    if (!token) {
      return NextResponse.json({ message: "Não autorizado" }, { status: 401 });
    }

    const userId = token.id;

    await connectDB(); // Conecta ao banco de dados antes de salvar a consulta.
    const data = await request.json(); // Obtém os dados da requisição.

    // Valida os dados usando o Zod, incluindo userId
    consultationSchema.parse({ ...data, userId });

    const novaConsulta = new Consultation({ ...data, userId }); // Cria uma nova consulta com os dados recebidos.
    await novaConsulta.save(); // Salva a nova consulta no banco de dados.

    return NextResponse.json(novaConsulta, { status: 201 }); // Retorna a consulta criada como resposta.
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ errors: error.errors }, { status: 400 }); // Retorna erros de validação se houver.
    }

    console.error("Erro ao agendar consulta:", error);
    return NextResponse.error(); // Retorna um erro genérico em caso de exceção.
  }
}

// Endpoint para buscar todas as consultas (GET)
export async function GET(request: NextRequest) {
  try {
    const token = await getToken({ req: request });

    if (!token) {
      return NextResponse.json({ message: "Não autorizado" }, { status: 401 });
    }

    const userId = token.id;

    await connectDB(); // Conecta ao banco de dados antes de buscar as consultas.
    const consultas = await Consultation.find({userId: userId}); // Busca todas as consultas no banco de dados.

    return NextResponse.json(consultas); // Retorna as consultas encontradas como resposta.
  } catch (error) {
    console.error("Erro ao buscar consultas:", error);
    return NextResponse.json({ message: "Erro ao buscar consultas" }, { status: 500 }); // Retorna um erro se algo der errado.
  }
}

// Endpoint para atualizar uma consulta (PUT)

// Endpoint para excluir uma consulta (DELETE)
