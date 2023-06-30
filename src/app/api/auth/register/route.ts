import { hashPassword } from "@/lib/bcrypt";
import { registerSchema } from "@/schemas/auth";
import { prisma } from "@/server/db";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  let data;
  try {
    data = await request.json();
  } catch (error) {
    return NextResponse.json(
      {
        message: "No data provided",
      },
      {
        status: 400,
      },
    );
  }

  const parseData = registerSchema.safeParse(data);

  if (!parseData.success) {
    return NextResponse.json(
      {
        success: parseData.success,
        message: "Invalid data provided",
        // issues: [
        //   ...parseData.error.issues.map((issue) => ({
        //     [issue.path[0]]: {
        //       message: issue.message,
        //     },
        //   })),
        // ],
      },
      {
        status: 400,
      },
    );
  }

  const {
    name,
    personalEmail,
    kiitEmail,
    phoneNumber,
    password,
    githubUrl,
    linkedinUrl,
    portfolioUrl,
    currentYear,
    branch,
  } = data;

  const userExists = await prisma.user.findUnique({
    where: {
      personalEmail,
    },
  });

  if (userExists) {
    return NextResponse.json(
      {
        success: false,
        message: "User already exists",
      },
      {
        status: 400,
      },
    );
  }

  try {
    const hashedPassword = await hashPassword(password);
    await prisma.user.create({
      data: {
        name,
        personalEmail,
        kiitEmail,
        phoneNumber,
        password: hashedPassword,
        githubUrl,
        linkedinUrl,
        portfolioUrl,
        currentYear,
        branch,
      },
    });

    return NextResponse.json(
      {
        success: true,
        message: "Registered successfully",
      },
      {
        status: 201,
      },
    );
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
}
