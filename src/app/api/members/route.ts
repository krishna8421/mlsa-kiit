import { prisma } from "@/server/db";
import { NextResponse } from "next/server";

export const GET = async (_req: Request) => {
  try {
    const users = await prisma.member.findMany({
      select: {
        imageUrl: true,
        user: {
          select: {
            name: true,
            githubUrl: true,
            linkedinUrl: true,
            portfolioUrl: true,
          },
        },
      },
    });

    return NextResponse.json({ users });
  } catch (error) {
    return NextResponse.json({
      error: true,
      message: "Something went wrong",
    });
  }
};
