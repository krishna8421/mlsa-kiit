"use client";

import Project from "@/components/Project";
import "@/styles/globals.css";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
const Projects = () => {
  const [projectsCounter, setProjectsCounter] = useState(0);
  const [sponsersCounter, setSponsersCounter] = useState(0);
  useEffect(() => {
    const numCounter = () => {
      if (projectsCounter < 20) {
        setProjectsCounter((num) => num + 1);
      }

      if (sponsersCounter < 63) {
        setSponsersCounter((num) => num + 1);
      }
    };

    const intervalId = setInterval(numCounter, 120);

    return () => clearInterval(intervalId);
  }, [projectsCounter, sponsersCounter]);

  const [isFirstScroll, setIsFirstScroll] = useState(true);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const scrollPosition = window.scrollY; //determines how much the user has scrolled
  //     const windowHeight = window.innerHeight; //determines the height of the  device the user is using

  //     window.addEventListener("scroll", function () {
  //       var scrollPosition = window.scrollY;
  //       if (scrollPosition > windowHeight / 1.3) {
  //         setIsFirstScroll(true)
  //         // const element = document.getElementById("myElement"); // gets the circle on top of the slider


  //       }
  //     });

  //     if (scrollPosition > windowHeight / 1.8) {
  //       setIsFirstScroll(true)
  //       //Final position for slider
  //     } else {
  //       //Initial starting positionn for slider
  //     }
  //   };
  //   console.log("scroll", window.scrollY);
  //   console.log("inner", window.innerHeight);

  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // });

  return (
    <>
      <div>
        <Image
          src="/projects/projectsHero.png"
          alt="Projects hero BG"
          width={1440}
          height={500}
          quality={100}
          className="projectsHeroSlideIn h-[20vh] w-screen md:h-full"
        ></Image>
      </div>
      <div className="projectsAnimation mt-8 flex flex-col items-center justify-center duration-500 ease-out smm:mt-2">
        <h1 className="animate-[fadeinout_5s] bg-gradient-to-b  from-[#5051F9] to-[#AE86E0] bg-clip-text text-3xl font-bold text-transparent smm:h-[2.5rem] md:h-[3rem] md:text-4xl lg:h-[4rem] lg:text-5xl">
          Projects
        </h1>
        <div className="text-md mt-2 md:text-lg lg:text-xl">
          <p className={`${isFirstScroll && 'animate-[fadeinout_1s'} text-center`}>
            <span>We are proud of our </span>
            <span className="bg-gradient-to-b from-[#5051F9] to-[#AE86E0] bg-clip-text font-semibold text-transparent">
              community members
            </span>
          </p>
          <div className="mt-4 flex animate-[fadeinout_4s] justify-between bg-gradient-to-b from-[#5051F9] to-[#AE86E0] bg-clip-text text-transparent">
            <div className="flex flex-col ">
              <span className="text-2xl font-bold md:text-3xl">{projectsCounter}+</span>
              <span className="text-xl font-semibold md:text-2xl">Finished projects</span>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold md:text-3xl">{sponsersCounter}</span>
              <span className="text-xl font-semibold md:text-2xl">Members</span>
            </div>
          </div>
        </div>
        <div className="mt-8 w-3/4 h-[1px] bg-[#d1d5db] md:h-[2px] rounded-full lg:hidden"></div>
        <div className="mt-6 w-1/4 h-[1px] bg-[#d1d5db] md:h-[2px] rounded-full hidden lg:block"></div>

        </div>
      <Project />
    </>
  );
};

export default Projects;
