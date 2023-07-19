"use client"

import { Card, CardFooter, Image } from "@nextui-org/react"
import { Montserrat } from "next/font/google"

const montserrat = Montserrat({ subsets: ['latin'] })

interface IProps {
  email: string | undefined
}

export default function QRCodeCard({ email }: IProps) {
  return (
    <Card
      radius="lg"
      className="border-1 border-gray-600 m-2 relative z-0"
      isFooterBlurred
      isHoverable
    >
      <div className="absolute z-50 flex justify-center m-auto left-0 right-0 mt-5">
        <Image
          src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${email}`}
          alt="QRCode"
          width={300}
          height={300}
          shadow="md"
          className="rounded-md border-2 border-gray-300 brightness-90 hover:scale-105 transition-all duration-300 ease-in-out"
        />
      </div>
      <Image
        alt="QR Code background"
        className="object-cover"
        height={600}
        src="/qrcode-bg.png"
        width={350}
      />
      <CardFooter className="h-20 justify-center before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
        <p className={`text-lg font-bold text-white/80 ${montserrat.className}`}>My Digital Pass</p>
      </CardFooter>
    </Card>
  )
}
