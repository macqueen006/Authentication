import type { NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { LoginSchema } from "@/lib/validation";
import UserModel from "@/app/models/UserModel";
import bcryptjs from "bcryptjs";

export const authConfig = {
  providers: [
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

 // pages: {
  //   error: "/",
  //   signIn: "/",
  //   signOut: "/",
  // },
  // callbacks: {
  //   authorized({ auth }) {
  //     const isAuthenticated = !!auth?.user;
  //     return isAuthenticated;
  //   },
  // },