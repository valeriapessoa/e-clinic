import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const user = await prisma.user.findUnique({
          where: { email: credentials?.email ?? undefined }, // Corrigido
        });

        if (!user) {
          throw new Error("Usuário não encontrado");
        }

        const isValidPassword = await bcrypt.compare(
          credentials!.password,
          user.password!
        );

        if (!isValidPassword) {
          throw new Error("Senha inválida");
        }

        return user;
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async session({ session, token }) {
      // Garante que 'session.user' e 'email' existam
      if (session?.user?.email) {
        const user = await prisma.user.findUnique({
          where: { email: session.user.email },
        });
        if (user) {
          session.user.id = user.id; // Adiciona o 'id' ao objeto da sessão
        }
      }
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id; // Adiciona o 'id' ao token
      }
      return token;
    },
  },
  pages: {
    signIn: "/auth/login", // Redirecionamento para a página de login personalizada
  },
});

