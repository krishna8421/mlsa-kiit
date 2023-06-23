import { authOptions } from "@/server/auth/authOptions";
import { getServerSession } from "next-auth";
import LogoutButton from "./LogoutButton";
import { redirect } from "next/navigation";

const Admin = async () => {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/admin/auth");
  }

  return (
    <div>
      <pre>
        <code>
          <pre>{JSON.stringify(session, null, 2)}</pre>
        </code>
      </pre>
      <LogoutButton />
    </div>
  );
};

export default Admin;
