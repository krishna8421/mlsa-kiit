"use client";

import Link from "next/link"
import Image from "next/image"
import { videoedit } from "@/constants";
import {useState} from "react";
import InstaIcon from "../../../public/instagram.svg";
import GithubIcon from "../../../public/Github.svg";
import LinkdIcon from "../../../public/LinkedIn.svg";

const imgStyle: any = {
    objectPosition: "center",
    objectFit: "cover",
  };
const videoediting = () => {
  
  return (
    
    <div className="max-w-[1920px] mx-auto flex">
        <div className="ml-[10px] sm:ml-[20px] md:ml-[60px] lg:ml-[120px]">

        </div>
        <div className="flex flex-col">
            <div className="text-[16px] md:text-2xl lg:text-3xl mb-[30px] leading-normal text-[#FFF] font-semibold ">Videoediting</div>
            <div className="grid mr-0 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 w-full gap-2 md:gap-4 lg:gap-8">
                {videoedit.map((into, index) => {
                    const [showDetail, setShowDetail] = useState(false);

                    const handleImageClick = () => {
                        setShowDetail(!showDetail);
                      };
                        return( 
                        <div className="h-[250px] md:h-[300px] lg:h-[350px] 2xl:h-[400px]   w-full rounnded-xl"  key={index}>
                            <div className="image-members rounded-xl z-10 relative h-[210px] md:h-[250px] lg:h-[290px] 2xl:h-[340px] w-full" onClick={handleImageClick}>
                               <Image 
                               src={into.img}
                               style={imgStyle}
                               className="h-full z-20 w-full rounded-xl"
                               width={700}
                               height={700}
                               alt="name"
                                ></Image>
                                
                            </div>

                            <div className={showDetail ? "-translate-y-[70px] lg:-translate-y-16 scale-100 2xl:-translate-y-14 pb-[5px] md:pb-[5px] backdrop-blur-[5px] bg-[#25252580] min-h-[100px] w-full p-[3px] flex rounded-[10px] justify-between items-end transition  transform ease-in-out delay-400 z-10" : " flex items-center backdrop-blur-[5px] bg-[#25252580] scale-0 min-h-[100px] justify-between transition transform ease-in-out delay-400  -translate-y-40 z-0"}>
                            <div className="flex items-center relative w-full justify-between">
                            <div className="bottom-[-10px] md:bottom-[-15px] left-[0%] absolute w-[200px] h-[20px] z-40">
                            <Image src="/Subtract.png"
                                   alt="event item"
                                   width={169}
                                   height={30}
                                   className="w-[140px] md:w-[200px] h-[30px] fill-white z-40 blur-[10px]  object-fit"></Image>
                            </div>
                            <div className="text-[12px] lg:text-[16.5px] 2xl:text-[20px] text-[#FFF] font-medium leading-none capitalize">{into.name}</div>
                            
                            <div className="flex items-center gap-[2px] md:gap-1 ">
                            <Link href={"/"}>
                                <Image src={InstaIcon} alt="icon" className="h-[15px] w-[15px] md:h-[17px] md:w-[17px] 2xl:h-[24px] 2xl:w-[24px]"/>
                            </Link>
                            <Link href={""}>
                             <Image src={LinkdIcon} alt="icon" className="h-[15px] w-[15px] md:h-[17px] md:w-[17px] 2xl:h-[24px] 2xl:w-[24px]"/>
                             </Link>
                            <Link href={""}>
                              <Image src={GithubIcon} alt="icon" className="h-[15px] w-[15px] md:h-[17px] md:w-[17px] 2xl:h-[24px] 2xl:w-[24px]"/>
                            </Link>
                            </div>
                            
                            </div>
                            </div>
                            </div>
                            
                        
                        );
                              
                              
                        })}
                   
                
            </div>
        </div>
      
    </div>
  )
}

export default videoediting;