import Image from 'next/image'
import { getServerSession } from "@/server/auth"

export default async function QRCode() {
  const session = await getServerSession();
  return (
    <div>

    </div >
  )
}
