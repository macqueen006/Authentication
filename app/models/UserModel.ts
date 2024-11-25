import prisma from "@/lib/database/client";

const UserModel = {
  async getUserByEmail(email: string) {
    try {
      return await prisma.user.findUnique({where: {email}});
    } catch {
      return null;
    }
  },
  async getUserById(id: string) {
    try {
      return await prisma.user.findUnique({where: {id}});
    } catch {
      return null;
    }
  },
};

export default UserModel;
