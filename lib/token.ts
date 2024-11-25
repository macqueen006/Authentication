import {v4 as uuidv4} from 'uuid';
import VerificationTokenModel from "@/app/models/VerificationTokenModel";
import prisma from "@/lib/database/client";

export const generateVerificationToken = async (email: string) => {
    const token = uuidv4();
    const expires = new Date(new Date().getTime() + 3600 * 1000); // expires in 1hour

    const existingToken = await VerificationTokenModel.getVerificationTokenByEmail(email);
    // check existing token
    if (existingToken) {
        await prisma.verificationToken.delete({
            where: {
                id: existingToken.id
            }
        })
    }
//     generate new verification token
    return prisma.verificationToken.create({
        data: {
            email,
            token,
            expires
        }
    });
}