import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

export const hashPassword = async (password: string) => {
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);
  return hash;
};

const prisma = new PrismaClient();

export async function seed() {
  const password = "krishnakumarlal8421@gmail.com";
  const hashedPassword = await hashPassword(password);
  await prisma.user.deleteMany({});
  await prisma.user.create({
    data: {
      name: "Krishna Kumar",
      email: "krishnakumarlal8421@gmail.com",
      kiitEmail: "2105203",
      password: hashedPassword,
      imageUrl: "https://github.com/krishna8421.png",
      githubUrl: "https://github.com/krishna8421",
      linkedinUrl: "http://linkedin.com/in/krishnaaa8421/",
      portfolioUrl: "http://krishnaaa.com",
      position: "MEMBER",
      role: "BACKEND",
    },
  });
}

seed();
