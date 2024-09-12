import NextAuth, { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string; // Adiciona a propriedade 'id' ao tipo Session
    } & DefaultSession["user"];
  }
}
