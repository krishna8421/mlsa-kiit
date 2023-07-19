import { NextResponse } from "next/server";
import { getServerSession } from "@/server/auth";
import { prisma } from "@/server/db";

export const GET = async () => {
  const session = await getServerSession();
  console.log({ session });
  if (!session?.user?.personalEmail) {
    return NextResponse.json({
      error: true,
      message: "Unauthorized",
    });
  }

  try {
    const user = await prisma.user.findUnique({
      where: {
        personalEmail: session.user.personalEmail,
      },
      select: {
        id: true,
        name: true,
        personalEmail: true,
        kiitEmail: true,
        phoneNumber: true,
        githubUrl: true,
        linkedinUrl: true,
        portfolioUrl: true,
        currentYear: true,
        branch: true,
        isMember: true,
      },
    });

    return NextResponse.json({
      user,
    });
  } catch (error) {
    console.log({ register: error });
    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong.",
      },
      {
        status: 500,
      },
    );
  }
};
