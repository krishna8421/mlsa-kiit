import Navbar from "./NavBar";
import { ILayoutProps } from "@/types";
import { getServerSession } from "@/server/auth";
import { prisma } from "@/server/db";
import { redirect } from "next/navigation";

const getUserData = async (personalEmail: string) => {
  try {
    const user = await prisma.user.findUnique({
      where: {
        personalEmail: personalEmail,
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
    return user
  } catch (error) {
    return null
  }
}

export default async function HomeLayout({ children }: ILayoutProps) {
  const session = await getServerSession();

  if (!session?.user?.personalEmail) redirect("/auth/login")

  const user = await getUserData(session?.user?.personalEmail);

  if (!user) return (
    <div className="flex justify-center items-center h-screen">
      <div className="text-2xl font-bold text-gray-700">
        ⚠️ Something went wrong ⚠️
      </div>
    </div>
  )


  return (
    <>
      <Navbar user={user} />
      <div
        className="mt-24"
      >{children}</div>
    </>
  );
}
