import Image from "next/image";
import { RiHeart2Fill } from "react-icons/ri";
import { ARVR, AndroidDevelopment, Creative, GraphicDesign, MachineLearning, Marketing, WebDevelopment, YT, cloud } from "../../../constants/index";
import { EventLine } from "../events/page";
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
      <div className="w-[80vw] ml-[10vw] mr-[10vw] mt-5 ">
        <EventLine name="Youtube Team" lineNum={5} />
        <div className="w-full grid gap-x-8 lg:gap-y-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xsm:grid-cols-2 ">
          {YT.map((item, index) => {
            return (
              <div className="w-[90%] lg:h-[40vh] md:h-[15vh] sm:h-[40vh] xsm:h-[20vh] mt-3 relative  " key={item.id} >
                <Image
                  fill
                  className="w-full  h-full z-10"
                  src={item.img}
                  alt={item.name}
                />
                <div className="absolute w-full h-[30%] flex justify-center items-center gradientImageHover z-20 bottom-0 text-center  ">
                  <p className="text-white" > {item.name}</p>
                  {/* <p className="text-white" > {item.domain}</p> */}
                </div>
              </div>
            )
          })}
        </div>
      </div>
      {/* Creative Team*/}
      <div className="w-[80vw] ml-[10vw] mr-[10vw] mt-5 ">
        <EventLine name="Creative Team" lineNum={6} />
        <div className="w-full grid gap-x-8 lg:gap-y-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xsm:grid-cols-2 ">
          {Creative.map((item, index) => {
            return (
              <div className="w-[90%] lg:h-[40vh] md:h-[15vh] sm:h-[40vh] xsm:h-[20vh] mt-3 relative  " key={item.id} >
                <Image
                  fill
                  className="w-full  h-full z-10"
                  src={item.img}
                  alt={item.name}
                />
                <div className="absolute w-full h-[30%] flex justify-center items-center gradientImageHover z-20 bottom-0 text-center  ">
                  <p className="text-white" > {item.name}</p>
                  {/* <p className="text-white" > {item.domain}</p> */}
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Graphic dDesign team */}
      {/* <div className="w-[80vw] ml-[10vw] mr-[10vw] mt-5 ">
        <EventLine name="Design Team" lineNum={7} />
        <div className="w-full grid gap-x-8 lg:gap-y-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xsm:grid-cols-2 ">
          {GraphicDesign.map((item, index) => {
            return (
              <div className="w-[90%] lg:h-[40vh] md:h-[15vh] sm:h-[40vh] xsm:h-[20vh] mt-3 relative  " key={item.id} >
                <Image
                  fill
                  className="w-full  h-full z-10"
                  src={item.img}
                  alt={item.name}
                />
                <div className="absolute w-full h-[30%] flex justify-center items-center gradientImageHover z-20 bottom-0 text-center  ">
                  <p className="text-white" > {item.name}</p>
                 
                </div>
              </div>
            )
          })}
        </div>
      </div> */}
      <CardSection team={GraphicDesign} lineNum={7} teamName={"Graphic Design"} />
      {/* MAchine Learning */}
      <div className="w-[80vw] ml-[10vw] mr-[10vw] mt-5 ">
        <EventLine name="ML Team" lineNum={8} />
        <div className="w-full grid gap-x-8 lg:gap-y-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xsm:grid-cols-2 ">
          {MachineLearning.map((item, index) => {
            return (
              <div className="w-[90%] lg:h-[40vh] md:h-[15vh] sm:h-[40vh] xsm:h-[20vh] mt-3 relative  " key={item.id} >
                <Image
                  fill
                  className="w-full  h-full z-10"
                  src={item.img}
                  alt={item.name}
                />
                <div className="absolute w-full h-[30%] flex justify-center items-center gradientImageHover z-20 bottom-0 text-center  ">
                  <p className="text-white" > {item.name}</p>
                  {/* <p className="text-white" > {item.domain}</p> */}
                </div>
              </div>
            )
          })}
        </div>
      </div>
      {/* Marketing */}
      <div className="w-[80vw] ml-[10vw] mr-[10vw] mt-5 ">
        <EventLine name="Marketing Team" lineNum={9} />
        <div className="w-full grid gap-x-8 lg:gap-y-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xsm:grid-cols-2 ">
          {Marketing.map((item, index) => {
            return (
              <div className="w-[90%] lg:h-[40vh] md:h-[15vh] sm:h-[40vh] xsm:h-[20vh] mt-3 relative  " key={item.id} >
                <Image
                  fill
                  className="w-full  h-full z-10"
                  src={item.img}
                  alt={item.name}
                />
                <div className="absolute w-full h-[30%] flex justify-center items-center gradientImageHover z-20 bottom-0 text-center  ">
                  <p className="text-white" > {item.name}</p>
                  {/* <p className="text-white" > {item.domain}</p> */}
                </div>
              </div>
            )
          })}
        </div>
      </div>
      {/* videoediting */}
      <div className="w-[80vw] ml-[10vw] mr-[10vw] mt-5 ">
        <EventLine name="Video Editing Team" lineNum={10} />
        <div className="w-full grid gap-x-8 lg:gap-y-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xsm:grid-cols-2 ">
          {videoediting.map((item, index) => {
            return (
              <div className="w-[90%] lg:h-[40vh] md:h-[15vh] sm:h-[40vh] xsm:h-[20vh] mt-3 relative  " key={item.id} >
                <Image
                  fill
                  className="w-full  h-full z-10"
                  src={item.img}
                  alt={item.name}
                />
                <div className="absolute w-full h-[30%] flex justify-center items-center gradientImageHover z-20 bottom-0 text-center  ">
                  <p className="text-white" > {item.name}</p>
                  {/* <p className="text-white" > {item.domain}</p> */}
                </div>
              </div>
            )
          })}
        </div>
      </div>

    </>
  )
}

export default page
