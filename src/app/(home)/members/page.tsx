"use client";

import Image from "next/image";
import Webdev from "@/components/members/webdev"
import Appdev from "@/components/members/appdev"
import Videoediting from "@/components/members/videoediting"
import Marketing from "@/components/members/marketing"
import MachineLearning from "@/components/members/machinelearning"
import GraphicDesign from "@/components/members/graphicdesign"
import Creative from "@/components/members/cerative"
import Arvr from "@/components/members/arvr"
import Cloud from "@/components/members/cloud"
import Youtube from "@/components/members/youtube"







const Members = () => {
  return (<>
    <div className="wrapper-outer h-[100vh]">
      <div className="wrapper h-full overflow-x-hidden ">
        
        <div className=" teams-gradient parallax-section min-h-[90vh] p-[5px] flex items-center justify-center w-[100vw] relative ">
          <div className=" parallax-bg absolute top-0 bottom-0 left-0 right-0 bg-cover -z-10 min-h-full object-fill"></div>
           <Image src="/members.png" width={3000} height={100} alt="members" className="parallax-bg absolute top-[-50px] bottom-0 left-0 right-0 bg-cover -z-10 min-h-full object-cover"></Image>
           <div className=" absolute w-full bg-black left-0 h-[60px] bottom-0 font-semibold text-[32px]  z-30"> <span className="ml-[10px] md:ml-[35px] xl:ml-[80px] leading-[2rem] lg:leading-[3rem]  md:text-[40px] lg:text-[60px] 3xl:text-[80px] text-transparent bg-clip-text bg-gradient-to-r from-[#5051F9] to-[#AE86E0]">Our Team</span></div>
          <Image src="/Rectangle-shadow.svg" width={400} height={400} alt="members" className=" hidden sm:block absolute right-0 bottom-[-450px] z-30"></Image>
          {/* md:w-[400px] md:h-[400px] */}
        </div>
        <div className="parallax-section pt-[30px] md:pt-[100px] bg-black -mt-1 min-h-[100vh] p-[50px]  w-[100vw] relative overflow-hidden">
        <Image src="/Rectangle-shadow.svg" width={400} height={400} alt="members" className="hidden sm:block absolute right-0 top-[-370px] "></Image>
          
          <Webdev />
          <Appdev />
          <Videoediting/>
          <Marketing />
          <MachineLearning />
          <GraphicDesign />
          <Creative />
          <Arvr />
          <Cloud />
          <Youtube />


        </div>
      </div>
    </div>








  
  </>
  )}

export default Members;
