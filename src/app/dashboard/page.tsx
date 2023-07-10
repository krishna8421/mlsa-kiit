import { getServerSession } from "next-auth";
import SignOut from "./SignOut"
import Link from "next/link";

const Dashboard = async () => {
  const session = await getServerSession();

  return (
    <div>
      <h1>Dashboard</h1>
      <pre>
        <code>
          <pre>{JSON.stringify(session, null, 2)}</pre>
        </code>
      </pre>
      <SignOut />
      <Link
        href="/auth/login"
      >
        Login
      </Link>

    </div>
  )
}

export default Dashboard
