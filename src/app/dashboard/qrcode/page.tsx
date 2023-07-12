import Image from 'next/image'
import { getServerSession } from "@/server/auth"

export default async function QRCode() {
  const session = await getServerSession();
  return (
    <div>
      <h1>QRCode</h1>
      <Image
        src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${session?.user?.personalEmail}`}
        alt="QRCode"
        width={300}
        height={300}
        className="rounded-md border-2 border-gray-300"
      />
    </div >
  )
}
