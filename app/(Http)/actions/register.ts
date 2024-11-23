"use server";
import UserModel from "@/app/models/UserModel";
import prisma from "@/lib/database/client";
import { RegisterSchema } from "@/lib/validation";
import bcryptjs from "bcryptjs";
import * as z from "zod";

export async function register(values: z.infer<typeof RegisterSchema>) {

  const validation = RegisterSchema.safeParse(values);
  if (!validation.success) return { error: "Invalid fields" };

  const { email, name, password } = validation.data;

  const hashedPassword = await bcryptjs.hash(password, 12);

  try {
    const user = await UserModel.getUserByEmail(email)
    if (user) return { error: "Email already in use" };

    await prisma.user.create({
      data: { name, email, password: hashedPassword },
    });

    return { success: "User Created" };
  } catch {
    return { error: "An unexpected error occurred." };
  }
}

// starTransition would be useful if i any next cache or revalidation or redirects here revalidatePath or revalidateTag you cant cache the end of then using .then but startTransition can tell you when the post has ended
