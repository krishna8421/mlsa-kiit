import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import blogsData from "../data/blogs.json";

export const hashPassword = async (password: string) => {
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);
  return hash;
};

const prisma = new PrismaClient();

export async function seed() {
  const password = "dev@krishnaaa.com";
  const hashedPassword = await hashPassword(password);
  await prisma.user.deleteMany({});
  await prisma.user.create({
    data: {
      name: "Krishna Kumar",
      email: "dev@krishnaaa.com",
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

  await prisma.blogs.deleteMany({});
  await prisma.blogs.createMany({
    data: blogsData,
  });
}

seed();
