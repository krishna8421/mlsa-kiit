// import { prisma } from "@/server/db";
import { NextResponse } from "next/server";

export const GET = async (_req: Request) => {
  try {
    // const members = await prisma.user.findMany({
    //   select: {
    //     name: true,
    //     imageUrl: true,
    //     githubUrl: true,
    //     linkedinUrl: true,
    //     portfolioUrl: true,
    //     position: true,
    //     role: true,
    //   },
    // });

    return NextResponse.json({});
  } catch (error) {
    return NextResponse.json({
      error: true,
      message: "Something went wrong",
    });
  }
};
