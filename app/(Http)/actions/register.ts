"use server";
import * as z from "zod";
import { RegisterSchema } from "@/lib/validation";

export const register = async (values: z.infer<typeof RegisterSchema>) => {
    const validation = RegisterSchema.safeParse(values);
    if (!validation.success)
        return { error: "Invalid fields" };
    return {success: "Email sent"}
}
// starTransition would be useful if i any next cache or revalidation or redirects here revalidatePath or revalidateTag you cant cache the end of then using .then but startTransition can tell you when the post has ended
