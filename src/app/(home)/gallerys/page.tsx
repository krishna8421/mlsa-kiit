"use client";

import GalleryFadeShow from "@/components/gallery/GalleryFadeShow";
import Image from "next/image";
// import GalleryHeroCarousel from "@/components/gallery/GalleryHeroCarousel";
import GalleryCards from "@/components/gallery/GalleryCards";
import { useEffect, useState } from "react";
import { BiSolidChevronRightCircle, BiSolidChevronLeftCircle } from "react-icons/bi";

const Gallery = () => {
  const [rojectsCounter, setProjectsCounter] = useState(0);
  const [sponsersCounter, setSponsersCounter] = useState(0);
  const [pictureState, setPictureState] = useState(0);
  console.log("log", pictureState);

  useEffect(() => {
    const numCounter = () => {
      if (rojectsCounter < 80) {
        setProjectsCounter((num) => num + 1);
      }

      if (sponsersCounter < 300) {
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
      <div className="flex 2xl:h-screen mt-[100px] md:mt-[120px] 2xl:mt-[0px] 2xl:items-center md:pl-16 3xl:pl-16 max-w-[1920px] mx-auto">
        <div className="flex md:flex-row flex-col justify-between pb-[45px] md:pb-[100px] 2xl:pb-[0px] w-full items-center">
          <div className="flex flex-col items-center md:items-start">
            <h1 className="bg-gradient-to-b from-[#5051F9] to-[#AE86E0] bg-clip-text text-2xl font-bold text-transparent md:text-4xl lg:text-5xl  3xl:text-7xl h-[2rem] md:h-[2.8rem] lg:h-[3.6rem] 3xl:h-[5.2rem]">
              Gallery
            </h1>
            <div className="text-md mt-1 lg:mt-2 md:text-lg lg:text-xl">
              <p className="text-xl md:text-[27px] 2xl:text-3xl 3xl:text-[40px] font-medium">Our Past Successful Events</p>
              <div className=" mt-[18px] md:mt-[30px] lg:mt-[58px]  flex md:gap-16 justify-between md:justify-start ">
                <div className="flex flex-col">
                  <span className="bg-gradient-to-b from-[#5051F9] to-[#AE86E0] bg-clip-text text-transparent text-2xl font-bold md:text-3xl 3xl:text-5xl">{rojectsCounter}+</span>
                  <span className="bg-gradient-to-b from-[#5051F9] to-[#AE86E0] bg-clip-text text-transparent text-xl md:text-2xl 3xl:text-4xl">Members</span>
                </div>
                <div className="flex flex-col">
                  <span className="bg-gradient-to-b from-[#5051F9] to-[#AE86E0] bg-clip-text text-transparent text-2xl font-bold md:text-3xl  3xl:text-5xl">{sponsersCounter}+</span>
                  <span className="bg-gradient-to-b from-[#5051F9] to-[#AE86E0] bg-clip-text text-transparent text-xl md:text-2xl  3xl:text-4xl">Participants</span>
                </div>
              </div>
            </div>
          </div>
          <div className="relative mx-auto md:mx-[0px] mt-0 pt-[30px] md:ml-[0px] md:pt-0 md:mr-[7vw] h-[27vh] lg:h-[30vh] 2xl:h-[65vh] w-[250px] md:w-[40%] object-cover lg:max-h-[600px] 3xl:w-[45%] ">
            <div className="absolute inset-0 z-50 flex h-full text-bold w-full items-center justify-between px-8 text-[30px] text-white">
                <BiSolidChevronLeftCircle className={`cursor-pointer ${pictureState === 0 ? "opacity-[50%]": "opacity-1"}`} onClick={LeftChevronClick} />
                <BiSolidChevronRightCircle className={`cursor-pointer ${pictureState === 2 ? "opacity-[50%]": "opacity-1"}`} onClick={RightChevronClick} />
            </div>
            <Image
              src="/gallery/hero/1.png"
              alt="project hero image"
              width={1080}
              height={1080}
              className={`duration-2000 absolute left-1/2 top-1/2 z-30 h-full w-full -translate-x-1/2 -translate-y-1/2 ease-out transition-all 
              ${pictureState > 0 ? "-translate-x-[140%] opacity-0" : "opacity-1"}
            `}
            />
            <Image
              src="/gallery/hero/2.png"
              alt="project hero image"
              width={1080}
              height={1080}
              className={`duration-2000 absolute top-1/2 z-20 -translate-x-1/2 -translate-y-1/2 ease-out transition-all
                ${pictureState > 0 ? "left-[50%] h-full w-full" : "left-[62%] h-[90%] w-[90%]"} 
                ${pictureState > 1 ? "-translate-x-[140%] opacity-0" : "opacity-1"}
              `}
            />
            <Image
              src="/gallery/hero/3.png"
              alt="project hero image"
              width={1080}
              height={1080}
              className={`absolute top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 duration-2000 ease-out transition-all
              ${pictureState > 0 ? "left-[62%] h-[90%] w-[90%]" : "left-[73%] h-[80%] w-[80%]"} 
              ${pictureState > 1 ? "left-[49.8%] h-full w-full scale-[105%]" : ""}
            `}
            />
          </div>
        </div>
      </div>
      <GalleryFadeShow />
      <GalleryCards />
    </>
  );
};

export default Gallery;
