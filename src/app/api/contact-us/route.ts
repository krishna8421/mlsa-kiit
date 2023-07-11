import { contactUsSchema } from "@/schemas/contactUs";
import { prisma } from "@/server/db";
import { NextResponse } from "next/server";

export const POST = async (request: Request) => {
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

  const parseData = contactUsSchema.safeParse(data);

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

  const { name, email, message } = data;

  try {
    await prisma.contactUs.create({
      data: {
        name,
        email,
        message,
      },
    });

    return NextResponse.json(
      {
        success: true,
        message: "Message sent successfully.",
      },
      {
        status: 200,
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
};
