import { PrismaAdapter } from "@auth/prisma-adapter";
import NextAuth from "next-auth";
import { authConfig } from "@/config/auth.config";
import prisma from "@/lib/database/client";
import Credentials from "next-auth/providers/credentials";

export const { signIn, signOut, auth, handlers: {GET, POST} } = NextAuth({
  adapter: PrismaAdapter(prisma),
  ...authConfig,
  providers: [
    Credentials({
      credentials: {
        email: { label: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize({ request }) {
        const response = await fetch(request);
        if (!response.ok) return null;
        return (await response.json()) ?? null;
      },
    }),
  ]
});
