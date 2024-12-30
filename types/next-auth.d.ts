// next-auth.d.ts
import { Session as NextAuthSession } from "next-auth";

export interface UserDocument {
  image?: string | null;
  name?: string | null;
  email?: string | null;
}

declare module "next-auth" {
  interface Session extends NextAuthSession {
    user: UserDocument;
  }
}

export type Session = NextAuthSession & {
  user: UserDocument;
};
