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
      personalEmail: "dev@krishnaaa.com",
      kiitEmail: "2105203@kiit.ac.in",
      phoneNumber: "8603808548",
      password: hashedPassword,
      githubUrl: "https://github.com/krishna8421",
      linkedinUrl: "http://linkedin.com/in/krishnaaa8421/",
      portfolioUrl: "http://krishnaaa.com",
      currentYear: 3,
      branch: "CSE",
    },
  });

  await prisma.blog.deleteMany({});
  await prisma.blog.createMany({
    data: blogsData,
  });
}

seed();
