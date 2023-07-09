import { getServerSession } from "@/server/auth";
import { ILayoutProps } from "@/types";
import { redirect } from "next/navigation";
import { Toaster } from "react-hot-toast";

export default async function AuthLayout({ children }: ILayoutProps) {

  const session = await getServerSession()
  if (session) redirect("/dashboard")

  return (
    <div className="min-h-screen mt-40 flex flex-col items-center">
      <Toaster position="bottom-right" reverseOrder={false} />
      {children}
    </div>
  )
}
