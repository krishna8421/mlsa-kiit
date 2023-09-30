"use client";

import { Marketing1 } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React,{ useState } from "react";
import GithubIcon from "../../../public/Github.svg";
import LinkdIcon from "../../../public/LinkedIn.svg";
import InstaIcon from "../../../public/instagram.svg";

const imgStyle: any = {
  objectPosition: "center",
  objectFit: "cover",
};

const Item = ({ into, isActive, onClick }: any) => {

  const handleImageClick = () => {
    onClick();

  };


  return (
    <div className="h-[220px] md:h-[270px] lg:h-[350px] 2xl:h-[400px] w-full rounded-md md:rounded-xl" >
      <div className="image-members rounded-md md:rounded-xl hover:cursor-pointer z-40 relative h-[175px] md:h-[230px] lg:h-[290px] 2xl:h-[340px] w-full" onClick={handleImageClick}>
        <Image
          src={into.img}
          style={imgStyle}
          className={isActive ? "h-full z-30  w-full rounded-t-md rounded-b-none md:rounded-t-xl md:rounded-b-none" : "h-full z-30  w-full rounded-md md:rounded-xl"}
          width={700}
          height={700}
          alt="name"
        ></Image>

      </div>

      <div className={isActive ? "-translate-y-[70px] lg:-translate-y-16 scale-100 2xl:-translate-y-14 pb-[5px] md:pb-[5px] backdrop-blur-[5px] bg-[#25252580] min-h-[100px] w-full p-[3px] flex rounded-[10px] justify-between items-end transition  transform ease-in-out delay-400 z-10" : " flex items-center backdrop-blur-[5px] bg-[#25252580] scale-0 min-h-[100px] justify-between transition transform ease-in-out delay-400  -translate-y-40 z-0"}>
        <div className="flex items-center relative w-full justify-between">
          <div className="bottom-[-10px] md:bottom-[-15px] left-[0%] absolute w-[200px] h-[20px] z-40">
            <Image src="/Subtract.png"
              alt="event item"
              width={169}
              height={30}
              className="w-[140px] md:w-[200px] h-[30px] fill-white z-40 blur-[10px]  object-fit"></Image>
          </div>
          <div className="text-[12px] lg:text-[16.5px] 2xl:text-[20px] text-[#FFF] font-normal leading-none capitalize">{into.name}</div>

          <div className="flex items-center gap-[2px] md:gap-1 ">
            <Link href={into.instagram ||""}>
              <Image src={InstaIcon} alt="icon" className={into.instagram === "" ? "hidden" :  "transition duration-100 hover:scale-110 h-[15px] w-[15px] md:h-[17px] md:w-[17px] 2xl:h-[24px] 2xl:w-[24px]"} />
            </Link>
            <Link href={into.linkedIn || ""}>
              <Image src={LinkdIcon} alt="icon" className={into.linkedIn === "" ? "hidden" :  "transition duration-100 hover:scale-110 h-[15px] w-[15px] md:h-[17px] md:w-[17px] 2xl:h-[24px] 2xl:w-[24px]"} />
            </Link>
            <Link href={into.github || ""}>
              <Image src={GithubIcon} alt="icon" className={into.github === "" ? "hidden" :  "transition duration-100 hover:scale-110 h-[15px] w-[15px] md:h-[17px] md:w-[17px] 2xl:h-[24px] 2xl:w-[24px]"} />
            </Link>
          </div>

        </div>
      </div>
    </div>


  );


}


const Marketing:any = () => {
  const [activeCard, setActiveCard] = useState(null);

  const handleCardClick = (into: any) => {
    setActiveCard(into === activeCard ? null : into);
  };
  return (
    <div className="flex ">
      <div className="flex flex-col items-center px-2 md:px-0">
        <div className="h-[15px] w-[15px] shadow-dotShadowPurple self-center rounded-full bg-white"></div>

        <div className=" w-[5px]  bg-gradient-to-b from-[#533BD0] to-transparent duration-700 transition h-full"></div>
      </div>
      <div className="max-w-[1920px] mx-auto flex">
        <div className="ml-[5px] sm:ml-[10px] md:ml-[40px] lg:ml-[70px]">

        </div>
        <div className="flex flex-col">
          <div className="text-[16px] md:text-2xl lg:text-3xl mb-[30px] leading-normal text-[#FFF] font-semibold ">Marketing</div>
          <div className="grid mr-0 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 w-full gap-2 md:gap-4 lg:gap-8">

            {Marketing1.map((into, index) => {
              return <Item into={into} key={index} isActive={into === activeCard}
                onClick={() => handleCardClick(into)} />
            })}

          </div>
        </div>

      </div>
    </div>
  )
}

export default Marketing
