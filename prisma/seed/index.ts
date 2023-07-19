import { OUR_SPONSORS } from "./../../src/constants/index";
import { PrismaClient } from "@prisma/client";
import blogsData from "../data/blogs.json";

const prisma = new PrismaClient();

export async function seed() {
  await prisma.blog.deleteMany();
  await prisma.blog.createMany({
    data: blogsData,
  });
}

seed();
