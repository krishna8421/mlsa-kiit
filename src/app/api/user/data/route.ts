import { NextResponse } from "next/server";
import { getServerSession } from "@/server/auth";

export const GET = async (req: Request) => {
  const session = await getServerSession();

  if (!session) {
    return NextResponse.json({
      error: true,
      message: "Unauthorized",
    });
  }
};
