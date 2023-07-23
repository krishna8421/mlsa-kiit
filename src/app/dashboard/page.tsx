import { getServerSession } from "@/server/auth";
import SignOut from "./SignOut"
import Link from "next/link";

const Dashboard = async () => {
  const session = await getServerSession();

  return (
    <div>
      <h1>Dashboard</h1>
    </div>
  )
}

export default Dashboard;