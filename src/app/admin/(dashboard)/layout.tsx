import { getServerSession } from "@/server/auth";
import { getUser } from "@/server/services/user";
import { ILayoutProps } from "@/types";
import { redirect } from "next/navigation";
import NavBar from "./NavBar";

const AdminDashboardLayout = async ({ children }: ILayoutProps) => {
  const session = await getServerSession();

  if (!session) {
    redirect("/admin/auth");
  }

  const email = session?.user?.email;

  if (!email) {
    throw new Error("Missing email in session");
  }

  const user = await getUser(email)

  if (!user) {
    throw new Error("User not found");
  }

  return (
    <main>
      <NavBar user={user} />
      <pre>
        <code>
          <pre>{JSON.stringify(session, null, 2)}</pre>
        </code>
      </pre>
      <pre>
        <code>
          <pre>{JSON.stringify(user, null, 2)}</pre>
        </code>
      </pre>
      {children}
    </main>
  );
};

export default AdminDashboardLayout;
