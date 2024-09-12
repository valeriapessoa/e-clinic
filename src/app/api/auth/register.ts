import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { email, password, name } = req.body;

    // Verifica se o email já está cadastrado
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return res.status(400).json({ message: "Usuário já existe" });
    }

    // Cria um hash da senha
    const hashedPassword = await bcrypt.hash(password, 10);

    try {
      // Cria o usuário no banco de dados
      const newUser = await prisma.user.create({
        data: {
          email,
          name,
          password: hashedPassword, // Armazena a senha com hash
        },
      });

      // Retorna sucesso ao criar o usuário
      return res.status(201).json({ message: "Usuário criado com sucesso", user: newUser });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Erro ao criar o usuário" });
    }
  } else {
    // Retorna erro se o método não for POST
    return res.status(405).json({ message: "Método não permitido" });
  }
}
