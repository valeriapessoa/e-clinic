import { getToken } from "next-auth/jwt";
import { consultationSchema } from "@/models/consultationSchema";
import Consultation from "@/models/Consultation";
import { connectDB } from "@/lib/mongodb";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } },
) {
  try {
    const token = await getToken({ req: request });
    if (!token) {
      return NextResponse.json({ message: "Não autorizado" }, { status: 401 });
    }

    const userId = token.id;
    const { id } = params;
    const data = await request.json();
    consultationSchema.pick({ consultaDataHora: true }).parse(data);

    await connectDB();

    const consultaAtualizada = await Consultation.findOneAndUpdate(
      { _id: id, userId },
      { consultaDataHora: data.consultaDataHora },
      { new: true },
    );

    return NextResponse.json(consultaAtualizada);
  } catch (error) {
    console.error("Erro ao atualizar consulta:", error);
    return NextResponse.json(
      { message: "Erro ao atualizar consulta" },
      { status: 500 },
    );
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } },
) {
  try {
    const token = await getToken({ req: request });
    if (!token) {
      return NextResponse.json({ message: "Não autorizado" }, { status: 401 });
    }

    const userId = token.id;
    const { id } = params;

    await connectDB();

    await Consultation.deleteOne({ _id: id, userId });

    return NextResponse.json(
      { message: "Consulta excluída com sucesso" },
      { status: 200 },
    );
  } catch (error) {
    console.error("Erro ao excluir consulta:", error);
    return NextResponse.json(
      { message: "Erro ao excluir consulta" },
      { status: 500 },
    );
  }
}
