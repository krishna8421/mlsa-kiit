import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import blogsData from "../data/blogs.json";
import sponsorsData from "../data/sponsors.json";
import eventsData from "../data/events.json";

export const hashPassword = async (password: string) => {
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);
  return hash;
};

const prisma = new PrismaClient();

export async function seed() {

  await prisma.blog.deleteMany({});
  await prisma.blog.createMany({
    data: blogsData,
  });

  await prisma.sponsor.deleteMany({});
  await prisma.sponsor.createMany({
    data: sponsorsData,
  });

  await prisma.event.deleteMany({});
  await prisma.event.createMany({
    data: eventsData,
  });


}

seed();
