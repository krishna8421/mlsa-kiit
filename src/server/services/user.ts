import { prisma } from "@/server/db";

export const getUser = async (email: string) => {
  const user = await prisma.user.findUnique({
    where: {
      personalEmail: email,
    },
  });
  return user;
};
