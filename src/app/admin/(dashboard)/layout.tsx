import { ILayoutProps } from "@/types";
import NavBar from "./NavBar";
// import { getServerSession } from "next-auth";
// import { authOptions } from "@/server/auth/authOptions";

const AdminDashboardLayout = async ({ children }: ILayoutProps) => {
    // const session = await getServerSession(authOptions);
    return (
    <main>
        <NavBar  />
        {children}
    </main>
  )
}

export default AdminDashboardLayout