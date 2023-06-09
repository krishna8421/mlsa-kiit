import Image from "next/image";
import { RiHeart2Fill } from "react-icons/ri";
import { ARVR, AndroidDevelopment, Creative, GraphicDesign, MachineLearning, Marketing, WebDevelopment, YT, cloud } from "../../../constants/index";
import { videoediting } from "../mem/mem";
import "./index.css";

import CardSection from "./CardSection";

const page = () => {
  return (
    <>
      <div className='w-[100vw] overflow-hidden '>
        <div className="relative">
          <div className="mb-6 mt-20">
            <div className="xl:h-[451px] relative mt-16 h-[220px] md:h-[300px] lg:h-[400px] 2xl:h-[600px]">
              <Image
                src="/projects/projectHeroArrow.png"
                alt="project hero white background"
                width={1920}
                height={1080}
                className="absolute left-0 right-0 h-full max-w-[1270px]"
              ></Image>
              <Image
                src="/projects/projectHero.png"
                alt="project hero arrow"
                width={1920}
                height={1080}
                className="absolute left-0 right-0 h-full md:w-full"
              ></Image>
            </div>
            <div className="z-4 absolute top-[-20%] ml-4 mt-12 h-full cursor-default font-semibold md:left-[60px] md:ml-0 lg:left-[90px]">
              <div className="flex h-full flex-col justify-center">
                <div className="flex gap-5">
                  <h1 className="cursor-default text-xl md:text-3xl 2xl:text-4xl">
                    Our <span className="text-[#286FD9]">Members</span>
                  </h1>
                  <Image
                    src="/projects/Arrow.png"
                    alt="projects heading arrow"
                    width={200}
                    height={200}
                    className="h-7 w-7 md:h-10 md:w-10"
                  ></Image>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="m-auto max-w-[1920px] px-4 md:px-6">

        <div className="mt-16 flex items-center justify-center gap-8">
          <h1 className="font-semibold md:text-2xl  lg:text-[25px] 2xl:text-[2.1vw]">
            Our
            <span className="ml-2 text-[#286FD9]">Members</span>
          </h1>
          <RiHeart2Fill className="text-lg text-[#286FD9]"></RiHeart2Fill>
        </div>
      </div>

      {/* web team */}
      <CardSection team={WebDevelopment} lineNum={1} teamName={"Web Team"} />
      {/* app team */}
      <CardSection team={AndroidDevelopment} lineNum={2} teamName={"App Team"} />
      {/* AR VR Team */}
      <CardSection team={ARVR} lineNum={3} teamName={"ARVR Team"} />
      {/* Cloud team */}
      <CardSection team={cloud} lineNum={4} teamName={"Cloud Team"} />
      {/* Youtube team */}
      <CardSection team={YT} lineNum={5} teamName={"Youtube Team"} />
      {/* Creative Team*/}
      <CardSection team={Creative} lineNum={6} teamName={"Creative Team"} />
      {/* GD team */}
      <CardSection team={GraphicDesign} lineNum={7} teamName={"Graphic Designing Team"} />
      {/* ML team */}
      <CardSection team={MachineLearning} lineNum={8} teamName={"Machine Learning Team"} />
      {/* Marketing Team */}
      <CardSection team={Marketing} lineNum={9} teamName={"Marketing Team"} />
      {/* Video Editing Team */}
      <CardSection team={videoediting} lineNum={10} teamName={"Video Editing Team"} />
    </>
  )
}

export default page
