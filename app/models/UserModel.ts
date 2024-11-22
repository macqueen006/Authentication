import prisma from "@/lib/database/client";

const UserModel = {
  async getUserByEmail(email: string) {
    try {
      const user = await prisma.user.findUnique({ where: { email } });
      return user;
    } catch {
      return null;
    }
  },
  async getUserById(id: string) {
    try {
      const user = await prisma.user.findUnique({ where: { id } });
      return user;
    } catch {
      return null;
    }
  },
};

export default UserModel;
