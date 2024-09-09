import NextAuth from "next-auth";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import CredentialsProvider from "next-auth/providers/credentials";
import { prisma } from "../../../../lib/prisma";
import { NextApiRequest, NextApiResponse } from 'next';
import { SessionStrategy } from "next-auth";

let userAccount;
const options = {
  providers: [
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials, req) {
        if (!credentials) {
          return null;
        }

        const userCredentials = {
          email: credentials.email,
          password: credentials.password,
        };

        const res = await fetch(
          `${process.env.NEXT_PUBLIC_NEXTAUTH_URL}/api/user/login`,
          {
            method: "POST",
            body: JSON.stringify(userCredentials),
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const user = await res.json();

        if (res.ok && user) {
          userAccount = user;
          console.log(userAccount);
          return user;
        } else {
          return null;
        }
      },
    }),
  ],

  adapter: PrismaAdapter(prisma),
  secret: process.env.NEXTAUTH_SECRET,
  session: { strategy: "jwt" as SessionStrategy, maxAge: 24 * 60 * 60 },

  jwt: {
    secret: process.env.NEXTAUTH_SECRET,
    maxAge: 60 * 60 * 24 * 30,
    encryption: true,
  },

  pages: {
    signIn: "/login",
    signOut: "/login",
    error: "/login",
  },

  callbacks: {
    async session({ session, user, token }: { session: any, user: any, token: any }) {
      if (user !== null) {
        session.user = user;
      }
      return session;
    },

    async jwt({ token, user }: { token: any, user: any }) {
      if (user) {
        token.accessToken = `${user.id}-${user.email}-${user.name}`;
      }
      return token;
    },
  },
};

export default (req: NextApiRequest, res: NextApiResponse) => NextAuth(req, res, options);
