import { prisma } from "@/server/db";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    const sponsors = await prisma.sponsor.findMany({
      select: {
        name: true,
        logoUrl: true,
        description: true,
        link: true,
      },
    });

    return NextResponse.json({ sponsors });
  } catch (error) {
    return NextResponse.json({
      error: true,
      message: "Something went wrong",
    });
  }
};
