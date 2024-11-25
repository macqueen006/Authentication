import prisma from "@/lib/database/client";

const VerificationTokenModel = {
    getVerificationTokenByEmail: async function (email: string) {
        try {
            return await prisma.verificationToken.findFirst({where: {email}});
        } catch {
            return null;
        }
    },
    getVerificationTokenByToken: async function (token: string) {
        try {
            return await prisma.verificationToken.findUnique({where: {token}});
        } catch {
            return null;
        }
    },
}

export default VerificationTokenModel;