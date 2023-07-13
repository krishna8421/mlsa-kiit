"use client";
import Image from "next/image";
import Link from "next/link";
// #50CAFF
import { useState } from "react";
import LinkdIcon from "../../public/LinkedIn.svg";
import FacebookIcon from "../../public/facebook.svg";
import InstaIcon from "../../public/instagram.svg";
interface Props {
  image: string;
  name: string;
  domain: string;
  message: string;
  link: string;
  index: number;
}
const imgStyle: any = {
  objectPosition: "center",
  objectFit: "cover",
};
const LeadsCard = ({ image, name, domain, index }: Props) => {
  const [showDetail, setShowDetail] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleImageClick = () => {
    setShowDetail(!showDetail);
  };
  return (
    <div className="h-[26rem]  w-[14rem]  rounded-imageradius" >
      <div className="relative h-[20rem] w-full rounded-imageradius mt-[4rem] z-10 hover:shadow-leadsCardShadow  transition-all" onClick={handleImageClick}>
        <Image
          src={image}
          style={imgStyle}
          className="h-full w-full rounded-imageradius border border-[#5F5E5E] grayscale"
          width={700}
          height={700}
          alt="name"
        />
        <div className="absolute bottom-0 left-0 h-full w-full rounded-imageradius bg-gradient-to-t from-black via-transparent to-transparent">
          {" "}
        </div>
        <div className="absolute bottom-4 w-full">
          <h1 className=" bold  text-center text-[1rem] text-[#FFFFFF]">{name}</h1>
          {showDetail && (
            <h1 className=" bold  text-center text-[0.8rem] text-[#9CE1FF]">{domain}</h1>
          )}
        </div>
      </div>
      {/* -translate-y-32 */}
      <div className={showDetail ? "mt-[1.4rem] flex items-center justify-evenly transition transform ease-in-out delay-400 z-10" : " flex  items-center justify-evenly mt-[1.4rem] transition transform ease-in-out delay-400  -translate-y-32 z-0"}>
        <Link href={"/"}>
          <div className="bg-[#111111] bg-opacity-50 flex h-[3rem] w-[3rem] items-center justify-center rounded-[6rem] border border-[#3D3D3D] backdrop-blur-[17.5px] hover:bg-[#3D3D3D]">
            <Image src={InstaIcon} alt="icon" />
          </div>
        </Link>
        <Link href={""}>
          <div className="bg-[#111111] bg-opacity-50 flex h-[3rem] w-[3rem] items-center justify-center rounded-[6rem] border border-[#3D3D3D] backdrop-blur-[17.5px] hover:bg-[#3D3D3D]">
            <Image src={LinkdIcon} alt="icon" />
          </div>
        </Link>
        <Link href={""}>
          <div className="bg-[#111111] bg-opacity-50 flex h-[3rem] w-[3rem] items-center justify-center rounded-[6rem] border border-[#3D3D3D] backdrop-blur-[17.5px] hover:bg-[#3D3D3D]">
            <Image src={FacebookIcon} alt="icon" />
          </div>
        </Link>

      </div>
    </div>
  );
};

export default LeadsCard;
