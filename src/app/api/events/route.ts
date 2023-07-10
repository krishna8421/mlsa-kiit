import { eventSchema } from "@/schemas/event";
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

  const parseData = eventSchema.safeParse(data);

  if (!parseData.success) {
    return NextResponse.json(
      {
        success: parseData.success,
        message: "Invalid data provided",
      },
      {
        status: 400,
      },
    );
  }

  const {
    name,
    imageUrl,
    description,
    startDate,
    registerStartDate,
    registerEndDate,
    venue,
    hosts,
    sponsors,
    registeredUsers,
  } = data;

  //   const eventExists = await prisma.events.findUnique({
  //     where: {
  //       ,
  //     },
  //   });

  //   if (eventExists) {
  //     return NextResponse.json(
  //       {
  //         success: false,
  //         message: "Event already exists",
  //       },
  //       {
  //         status: 400,
  //       },
  //     );
  //   }

  try {
    await prisma.event.create({
      data: {
        name,
        imageUrl,
        description,
        startDate,
        registerStartDate,
        registerEndDate,
        venue,
        hosts,
        sponsors,
        registeredUsers,
      },
    });

    return NextResponse.json(
      {
        success: true,
        message: "Event created successfully",
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

export async function GET() {
  const events = await prisma.event.findMany({
    select: {
      name: true,
      imageUrl: true,
      description: true,
      startDate: true,
      registerStartDate: true,
      registerEndDate: true,
      venue: true,
      hosts: true,
      sponsors: true,
    },
  });

  return NextResponse.json({ events });
}
