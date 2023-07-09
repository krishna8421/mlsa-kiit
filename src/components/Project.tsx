"use client";

import { OUR_PROJECTS1 } from "@/constants";
import { motion, useAnimation } from "framer-motion";
import React, { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";


const Project: React.FC = () => {

  const textControls = useAnimation();
  const sliderControls = useAnimation();
  const handleSliderAnimationComplete = () => {
    textControls.start({ opacity: 1, x: 30, y: 0 }); //determines final  positionn of text after completion of animation
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      sliderControls.start({ opacity: 1, x: 200 });
    }, 0);

    return () => clearTimeout(timer);
  });
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY; //determines how much the user has scrolled
      const windowHeight = window.innerHeight; //determines the height of the  device the user is using

      window.addEventListener("scroll", function () {
        var scrollPosition = window.scrollY;
        if (scrollPosition > windowHeight / 2.4) {
          const element = document.getElementById("myElement"); // gets the circle on top of the slider

          if (element) {
            setTimeout(() => {
              element.classList.add("shadow-magenta"); // Glow adder for slider
            }, 2500); // adds delay to the glow so that the glow starts after animation is complete
          }
        } else {
          const element = document.getElementById("myElement"); // gets the circle on top of the slider

          if (element) {
            element.classList.remove("shadow-magenta"); // Glow remover for slider
          }
        }
      });

      if (scrollPosition > windowHeight / 1.3) {
        controls.start({ opacity: 1, y: 0, x: 0 }); //Final position for slider
      } else {
        controls.start({ opacity: 0, y: 1300, x: 0 }); //Initial starting positionn for slider
      }
    };
    console.log("scroll", window.scrollY);
    console.log("inner", window.innerHeight);

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  let bgIndex: number = 0;
  const bgColorArr: Array<string> = ["#DBAEFF", "#9CE1FF", "#D9FF9C", "#FFCC9C"];

  const [showMoreClick, setShowMoreClick] = useState(7);

  const changeShowMore = () => {
    setShowMoreClick(showMoreClick + 3);
  };

  return (
    <div className="mt-[177px] max-w-[1920px] mx-auto">
      <div
        className="z-1 absolute left-[-50%] top-[-60%] h-[700px] md:h-[1100px] w-[100vw] md:w-[1100px] rounded-full bg-gradient-to-r 
        from-[#c273eb]/80 to-transparent blur-3xl"
      ></div>
      <div
        className="z-1 absolute left-[-10%] top-[-30%] h-[700px] md:h-[900px] w-[50vw] md:w-[700px] rounded-full 
        bg-gradient-to-l from-[#4662e0]/40 to-transparent opacity-80 blur-3xl"
      ></div>
      <div
        className="z-1 absolute right-[-35%] top-[5%] h-[70vh] md:h-[900px] w-[70vw] md:w-[80vw] rounded-full bg-gradient-to-l 
        from-[#c273eb]/50 to-transparent blur-3xl"
      ></div>
      <div
        className="z-1 absolute right-[-35%] top-[5%] h-[50vh] md:h-[900px] w-[70vw] md:w-[1100px] rounded-full bg-gradient-to-l 
        from-[#4662e0]/40 to-transparent blur-3xl"
      ></div>
      <div className="md:ml-[5.98vw] 3xl:ml-[115px] mx-auto">
        <div className="md:pb-[291.5px] 3xl:gap-[50px] gap-[2.6vw] pt-11 pb-[128px] flex flex-wrap items-center justify-center md:items-start md:justify-normal  3xl:pr-[117px] mx-auto">

          {OUR_PROJECTS1.map((project, index) => {
            {
              if (index + 1 < showMoreClick) {
                {
                  if (bgIndex > 3) {
                    bgIndex = 0;
                  }
                }

                return (
                  <motion.div
                    className="flex justify-center"
                    initial={{ opacity: 0, y: 1000 }} //before scrolling position of slider
                    animate={controls} //refer to line 20
                    transition={{ duration: 1.2 }} //slider duration for popping up. if you are changinng duration then make sure to change delay of glow adder so thatt  the gow starts after animation is complete
                    onAnimationComplete={handleSliderAnimationComplete}
                  >
                    <ProjectCard
                      bgColor={`${bgColorArr[bgIndex++]}`}
                      img={project.img}
                      ProjectName={project.ProjectName}
                      // tech={project.tech}
                      techStack1={project.techStack1}
                      techStack2={project.techStack2}
                      link="#"
                      techImg={project.techImg}
                      techImg2={project.techImg2}
                    />

                  </motion.div>
                );
              }
            }
          })}
          <motion.div
            className={`mx-auto mt-[30px] md:mt-[90px] flex w-full cursor-pointer group items-center mr-[5.8vw] 3xl:mr-[0px]`}
            initial={{ opacity: 0, y: 200 }} //before scrolling position of slider
            animate={controls} //refer to line 20
            transition={{ duration: 1.2 }} //slider duration for popping up. if you are changinng duration then make sure to change delay of glow adder so thatt  the gow starts after animation is complete
            onAnimationComplete={handleSliderAnimationComplete}
            onClick={changeShowMore}
          >
            {/* <div className={`mx-auto mt-[30px] md:mt-[90px] flex w-full cursor-pointer group items-center mr-[5.8vw] 3xl:mr-[0px]`}
                 onClick={changeShowMore}> */}
            <div className={`h-[1px] w-[100%] my-auto bg-[#FFFFFF] group-hover:bg-gray-300 ${showMoreClick >= OUR_PROJECTS1.length ? "hidden" : "visible"
              }`}></div>
            <div
              className={`flex-shrink-0  ml-2 text-[17px] lg:text-[20px] 2xl:text-[25px] 3xl:-[35px] capitalize font-normal leading-none text-white transition duration-300 group-hover:text-[#828282] ${showMoreClick >= OUR_PROJECTS1.length ? "hidden" : "visible"
                } `}
            >
              View More
            </div>
            {/* </div> */}
          </motion.div>
        </div>
      </div>
    </div>




  )
}

export default Project
