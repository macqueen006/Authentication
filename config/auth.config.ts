import type { NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { LoginSchema } from "@/lib/validation";
import UserModel from "@/app/models/UserModel";
import bcryptjs from "bcryptjs";
import Google from "next-auth/providers/google";
import GitHub from "next-auth/providers/github";

export const authConfig = {
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
    GitHub({
      clientId: process.env.AUTH_GITHUB_ID,
      clientSecret: process.env.AUTH_GITHUB_SECRET,
    }),
    Credentials({
      async authorize(credentials) {
        const validation = LoginSchema.safeParse(credentials);
        if (validation.success) {
          const { email, password } = validation.data;
          const user = await UserModel.getUserByEmail(email);
          console.log(user);

          if (!user || !user.password) return null;
          const passwordMatched = await bcryptjs.compare(
            password,
            user.password
          );
          if (passwordMatched) return user;
        }
        return null;
      },
    }),
  ],
} satisfies NextAuthConfig;
