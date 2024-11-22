"use server";
import * as z from "zod";
import { LoginSchema } from "@/lib/validation";

export const login = async (values: z.infer<typeof LoginSchema>) => {
    const validation = LoginSchema.safeParse(values);
    if (!validation.success)
        return { error: "Invalid fields" };
    return {success: "Email sent"}
}
// starTransition would be useful if i any next cache or revalidation or redirects here revalidatePath or revalidateTag you cant cache the end of then using .then but startTransition can tell you when the post has ended
