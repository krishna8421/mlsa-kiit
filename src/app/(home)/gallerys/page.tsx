"use client";

import GalleryFadeShow from "@/components/gallery/GalleryFadeShow";
import Image from "next/image";
// import GalleryHeroCarousel from "@/components/gallery/GalleryHeroCarousel";
import GalleryCards from "@/components/gallery/GalleryCards";
import { useEffect, useState } from "react";
import { BiSolidChevronLeftCircle, BiSolidChevronRightCircle } from "react-icons/bi";

const Gallery = () => {
  const [rojectsCounter, setProjectsCounter] = useState(0);
  const [sponsersCounter, setSponsersCounter] = useState(0);
  const [pictureState, setPictureState] = useState(0);
  console.log("log", pictureState);

  useEffect(() => {
    const numCounter = () => {
      if (rojectsCounter < 10) {
        setProjectsCounter((num) => num + 1);
      }

      if (sponsersCounter < 20) {
        setSponsersCounter((num) => num + 1);
      }
    };

    const intervalId = setInterval(numCounter, 5);

    return () => clearInterval(intervalId);
  }, [rojectsCounter, sponsersCounter]);

  const LeftChevronClick = () => {
    if (pictureState > 0) {
      setPictureState((prev) => prev - 1);
    }
  };

  const RightChevronClick = () => {
    if (pictureState < 2) {
      setPictureState((next) => next + 1);
    }
  };

  return (
    <>
      <div className="absolute inset-0 max-w-[1920px] mx-auto">
        <Image
          src="/heroLeft.png"
          alt="hero left gradient"
          width={700}
          height={700}
          className="z-1 absolute left-[-10rem] top-0 h-[60%] w-[80%] md:h-full md:w-[50%] max-w-[1920px] "
        />
        <div className="z-2 absolute right-0 top-[11rem] h-[120vh] w-[50%] max-w-[1920px] lg:h-[150vh] lg:w-[40%]">
          <Image
            src="/heroRight.png"
            alt="hero right gradient"
            width={1000}
            height={800}
            className="h-full w-full"
          />
        </div>
      </div>
      <div className="flex 2xl:h-screen mt-[100px] md:mt-[120px] 2xl:mt-[30px] 2xl:items-center md:pl-2 lg:pl-14 3xl:pl-16 max-w-[1920px] mx-auto">
        <div className="flex md:flex-row flex-col justify-between items-center pb-[45px] md:pb-[100px] 2xl:pb-[0px] w-full ">
          <div className="flex flex-col items-center md:items-start ">
            <h1 className="bg-gradient-to-b from-[#5051F9] to-[#AE86E0] bg-clip-text  font-bold text-transparent text-[30px] sm:text-4xl lg:text-5xl  3xl:text-7xl h-[2.8rem]  md:h-[3rem] lg:h-[3.6rem] 3xl:h-[5.2rem]">
              Gallery
            </h1>
            <div className="text-md mt-1 lg:mt-2 md:text-lg lg:text-xl">
              <p className="text-xl md:tracking-wider md:text-[25px] 2xl:text-4xl 3xl:text-[40px]">Our beautiful memories</p>
              <div className=" mt-[18px] md:mt-[30px] lg:mt-[58px]  flex md:gap-14 3xl:gap-16 justify-between md:justify-start ">
                <div className="flex flex-col">
                  <span className="bg-gradient-to-b from-[#5051F9] to-[#AE86E0] bg-clip-text text-transparent text-2xl font-bold md:text-3xl 3xl:text-5xl">{rojectsCounter}+</span>
                  <span className="bg-gradient-to-b from-[#5051F9] to-[#AE86E0] bg-clip-text text-transparent text-xl md:text-2xl 3xl:text-4xl">Sponsors</span>
                </div>
                <div className="flex flex-col">
                  <span className="bg-gradient-to-b from-[#5051F9] to-[#AE86E0] bg-clip-text text-transparent text-2xl font-bold md:text-3xl  3xl:text-5xl">{sponsersCounter}+</span>
                  <span className="bg-gradient-to-b from-[#5051F9] to-[#AE86E0] bg-clip-text text-transparent text-xl md:text-2xl  3xl:text-4xl">Events</span>
                </div>
              </div>
            </div>
          </div>
          <div className="relative mx-auto md:mx-[0px] mt-[23px] md:ml-[0px] md:mt-0 md:mr-[7vw] h-[345px] sm:h-[350px] lg:h-[430px] 2xl:h-[500px] 3xl:h-[600px] -translate-x-3 sm:-translate-x-6 md:-translate-x-0 w-[80vw] sm:w-[75vw] md:w-[50%] object-cover lg:max-h-[600px] 2xl:max-w-[650px] 3xl:w-[45%] 3xl:max-w-[800px]">
            <div className="w-full h-full bg-[#111]/20 absolute inset-0 z-40 rounded-2xl"></div>
            <div className="absolute inset-0 z-40 flex h-full w-full items-center justify-between px-12 text-3xl">
              <BiSolidChevronLeftCircle className={` cursor-pointer ${pictureState === 0 ? "opacity-50" : "opacity-100"}`} onClick={LeftChevronClick} />
              <BiSolidChevronRightCircle className={` cursor-pointer ${pictureState === 2 ? "opacity-50" : "opacity-100"}`} onClick={RightChevronClick} />
            </div>
            <Image
              src="/gallery/hero/1.jpg"
              alt="project hero image"
              width={1080}
              height={1080}
              className={`duration-2000 absolute left-1/2 top-1/2 z-30 h-full w-full rounded-2xl -translate-x-1/2 -translate-y-1/2 ease-out transition-all 
              ${pictureState > 0 ? "-translate-x-[140%] opacity-0" : "opacity-1"}
            `}
            />
            <Image
              src="/gallery/hero/2.jpg"
              alt="project hero image"
              width={1080}
              height={1080}
              className={`duration-2000 absolute rounded-2xl top-1/2 z-20 -translate-x-1/2 object-center -translate-y-1/2 ease-out transition-all
                ${pictureState > 0 ? "left-[50%] h-full w-full" : "left-[60%] h-[90%] w-[90%]"} 
                ${pictureState > 1 ? "-translate-x-[140%] opacity-0" : "opacity-1"}
              `}
            />
            <div 
            className={`absolute object-cover top-1/2 z-10 overflow-hidden -translate-x-1/2 rounded-xl -translate-y-1/2 duration-2000 ease-out transition-all
              ${pictureState > 0 ? "left-[62%] h-[90%] w-[90%]" : "left-[69%] h-[69%] w-[80%]"} 
              ${pictureState === 2 ? "left-[48.9%] h-full w-full -translate-x-[62%]" : "left-[56%] h-[79%]"}
            `}>
              <Image
                src="/gallery/hero/3.jpg"
                alt="project hero image"
                width={1080}
                height={1080}
                className="object fit rounded-2xl h-full"     
              />
              <div className="absolute inset-0 bg[#111]/30 w-full h-full"></div>
            </div>
          </div>
        </div>
      </div>
      <GalleryFadeShow />
      <GalleryCards />
    </>
  );
};

export default Gallery;
