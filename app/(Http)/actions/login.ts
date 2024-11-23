"use server";
import * as z from "zod";
import { LoginSchema } from "@/lib/validation";
import { signIn } from "@/auth";
import { DEFAULT_LOGIN_REDIRECT } from "@/config/route";
import { AuthError } from "next-auth";

export const login = async (values: z.infer<typeof LoginSchema>) => {
  const validation = LoginSchema.safeParse(values);
  if (!validation.success) return { error: "Invalid fields" };
  const { email, password } = validation.data;
  try {
    await signIn("credentials", {
      email,
      password,
      redirectTo: DEFAULT_LOGIN_REDIRECT,
    });
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return { error: "Invalid Credentials" };
        default:
          return { error: "Something went wrong" };
      }
    }
    throw error; //throw the error otherwise it would not redirect
  }
};
// starTransition would be useful if i any next cache or revalidation or redirects here revalidatePath or revalidateTag you cant cache the end of then using .then but startTransition can tell you when the post has ended
