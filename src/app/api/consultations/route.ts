import { connectDB } from "@/lib/mongodb";
import Consultation from "@/models/Consultation";
import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";
import { consultationSchema } from "@/models/consultationSchema";
import { z } from "zod";

export async function POST(request: NextRequest) {
  try {
    const token = await getToken({ req: request });
    if (!token) {
      return NextResponse.json({ message: "Não autorizado" }, { status: 401 });
    }

    const userId = token.id;
    await connectDB();
    const data = await request.json();
    consultationSchema.parse({ ...data, userId });

    const novaConsulta = new Consultation({ ...data, userId });
    await novaConsulta.save();

    return NextResponse.json(novaConsulta, { status: 201 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ errors: error.errors }, { status: 400 });
    }

    console.error("Erro ao agendar consulta:", error);
    return NextResponse.error();
  }
}

export async function GET(request: NextRequest) {
  try {
    const token = await getToken({ req: request });
    if (!token) {
      return NextResponse.json({ message: "Não autorizado" }, { status: 401 });
    }

    const userId = token.id;
    await connectDB();
    const consultas = await Consultation.find({ userId });

    return NextResponse.json(consultas);
  } catch (error) {
    console.error("Erro ao buscar consultas:", error);
    return NextResponse.json(
      { message: "Erro ao buscar consultas" },
      { status: 500 },
    );
  }
}
