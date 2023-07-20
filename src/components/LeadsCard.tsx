"use client";
import Image from "next/image";
// #50CAFF
import Link from "next/link";
import { useState } from "react";
import GithubIcon from "../../public/Github.svg";
import LinkdIcon from "../../public/LinkedIn.svg";
import InstaIcon from "../../public/instagram.svg";
interface Props {
  image: string;
  name: string;
  domain: string;
  message: string;
  linkedIn: string;
  instagram: string;
  facebook: string;
  github: string;
  index: number;
  isActive: boolean;
  onClick: Function;
}
const imgStyle: any = {
  objectPosition: "center",
  objectFit: "cover",
};
const LeadsCard = ({ image, name, domain, index, isActive, onClick, instagram, linkedIn, facebook,github }: Props) => {
  const [showDetail, setShowDetail] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleImageClick = () => {
    // setShowDetail(!showDetail);
    // setActiveIndex(index === activeIndex ? -1 : index);
    // if (index === -1) {
    //   setShowDetail(false);
    // }
    // else {
    //   setShowDetail(true);
    // }
    onClick();
  };
  return (
    <div className="h-[26rem]  w-[14rem]  rounded-imageradius" >
      <div className="relative h-[20rem] hover:cursor-pointer w-full rounded-imageradius mt-[4rem] z-10 hover:shadow-leadsCardShadow  transition-all" onClick={handleImageClick}>
        <Image
          src={image}
          style={imgStyle}
          className="h-full  w-full rounded-imageradius border border-[#5F5E5E] grayscale"
          width={700}
          height={700}
          alt="name"
        />
        <div className="cursor-pointer absolute bottom-0 left-0 h-full w-full rounded-imageradius bg-gradient-to-t from-black via-transparent to-transparent">
          {" "}
        </div>
        <div className="absolute bottom-4 w-full">
          <h1 className=" bold  text-center text-[1rem] text-[#FFFFFF]">{name}</h1>
          {isActive && (
            <h1 className="bold  text-center text-[0.8rem] text-[#9CE1FF]">{domain}</h1>
          )}
        </div>
      </div>
      {/* -translate-y-32 */}
      <div className={isActive ? "mt-[1.4rem] flex items-center justify-evenly transition transform ease-in-out delay-400 z-10" : " flex  items-center justify-evenly mt-[1.4rem] transition transform ease-in-out delay-400  -translate-y-32 z-0"}>
        <Link href={instagram} target="_blank">
          <div className="bg-[#111111] bg-opacity-50 flex h-[3rem] w-[3rem] items-center justify-center rounded-[6rem] border border-[#3D3D3D] backdrop-blur-[17.5px] hover:bg-[#3D3D3D]">
            <Image src={InstaIcon} alt="icon" />
          </div>
        </Link>
        <Link href={linkedIn} target="_blank">
          <div className="bg-[#111111] bg-opacity-50 flex h-[3rem] w-[3rem] items-center justify-center rounded-[6rem] border border-[#3D3D3D] backdrop-blur-[17.5px] hover:bg-[#3D3D3D]">
            <Image src={LinkdIcon} alt="icon" />
          </div>
        </Link>
        <Link href={github} target="_blank">
          <div className="bg-[#111111] bg-opacity-50 flex h-[3rem] w-[3rem] items-center justify-center rounded-[6rem] border border-[#3D3D3D] backdrop-blur-[17.5px] hover:bg-[#3D3D3D]">
            <Image src={GithubIcon} alt="icon" />
          </div>
        </Link>

      </div>
    </div>
  );
};

export default LeadsCard;
