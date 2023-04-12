// import { prisma } from "@/server/db";

export const GET = async (_req: Request) => {
  // await prisma.$connect();
  // await prisma.$disconnect();
  return new Response("Hello world!");
};
