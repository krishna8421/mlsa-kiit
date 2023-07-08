"use client";

import { motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";
import { BsFillRocketTakeoffFill } from "react-icons/bs";
import { FaEye } from "react-icons/fa";
import { TbTargetArrow } from "react-icons/tb";
import AboutCard from "./AboutCard";

const About: React.FC = () => {
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
        if (scrollPosition > windowHeight / 1.3) {
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

      if (scrollPosition > windowHeight / 1.5) {
        controls.start({ opacity: 1, y: 0, x: 0 }); //Final position for slider
      } else {
        controls.start({ opacity: 0, y: 900, x: 0 }); //Initial starting positionn for slider
      }
    };
    console.log("scroll", window.scrollY);
    console.log("inner", window.innerHeight);

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <>
      <div className="mx-auto flex -translate-y-[60vh] md:-translate-y-[30vh] sm:ml-[80px] overflow-hidden pt-8">
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, y: 1000 }} //before scrolling position of slider
          animate={controls} //refer to line 20
          transition={{ duration: 1 }} //slider duration for popping up. if you are changinng duration then make sure to change delay of glow adder so thatt  the gow starts after animation is complete
          onAnimationComplete={handleSliderAnimationComplete}
        >
          <div className="flex flex-col items-center">
            <div
              className="flex h-[41px] w-[41px] items-center justify-center rounded-full bg-blue-600 bg-gradient-to-b from-[#0957cc] to-[#fff]/30 shadow-dotShadowBlue duration-700 transition 
              "
            >
              <div className="h-[12px] w-[12px] self-center rounded-full bg-white"></div>
            </div>
            <div className="h-full w-[5px] bg-gradient-to-b from-[#4b8ff4] to-transparent duration-700 transition lg:h-[80vh]"></div>
          </div>
        </motion.div>

        <div className="w-full">
          <motion.div
            initial={{ opacity: 0, x: 1000, y: 0 }} //initial position of text with opacity 0
            animate={textControls} //text conntrol animation triggered.
            transition={{ duration: 1 }}
          >
            <div className="sm:ml-12 text-white">
              <h1 className="js-build-in-item text-2xl md:text-3xl lg:text-4xl font-semibold">
                About<span className="ml-1 text-[#3B61CF]">Us</span>
              </h1>
              <p className="mt-6 text-md md:text-xl leading- md:leading-6 text-[#7d8590]">
                We have been doing projects
                <br />
                and events since 2017
              </p>
            </div>
          </motion.div>

          <div className="mt-16 flex flex-wrap justify-center gap-8 overflow-hidden py-8 pr-5 sm:pr-0 md:h-[70vh] xl:ml-[7vw] xl:justify-normal xl:pl-8">
            <motion.div
              className="flex justify-center"
              initial={{ opacity: 0, y: 1000 }} //before scrolling position of slider
              animate={controls} //refer to line 20
              transition={{ duration: 1 }} //slider duration for popping up. if you are changinng duration then make sure to change delay of glow adder so thatt  the gow starts after animation is complete
              onAnimationComplete={handleSliderAnimationComplete}
            >
              <AboutCard
                icon={<FaEye className="text-[30px] md:text-[40px]"></FaEye>}
                label="Vision"
                Classname="md:max-h-[340px] md:w-[25vw] sm:max-w-[310px] w-[100%] md:min-w-[260px] "
                content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates officia sit blanditiis dignissimos vitae minus magnam modi repellat, officiis totam alias odio ducimus iste iusto beatae consectetur, tenetur quae eius?"
              />
            </motion.div>
            <motion.div
              className="flex justify-center"
              initial={{ opacity: 0, y: 1000 }} //before scrolling position of slider
              animate={controls} //refer to line 20
              transition={{ duration: 1.2 }} //slider duration for popping up. if you are changinng duration then make sure to change delay of glow adder so thatt  the gow starts after animation is complete
              onAnimationComplete={handleSliderAnimationComplete}
            >
              <AboutCard
                icon={<TbTargetArrow className=" text-[30px] md:text-[40px]"></TbTargetArrow>}
                label="Goal"
                Classname="md:max-h-[340px] md:w-[25vw] sm:max-w-[310px] w-[100%] md:min-w-[260px]"
                content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates officia sit blanditiis dignissimos vitae minus magnam modi repellat, officiis totam alias odio ducimus iste iusto beatae consectetur, tenetur quae eius?"
              />
            </motion.div>
            <motion.div
              className="flex justify-center"
              initial={{ opacity: 0, y: 1000 }} //before scrolling position of slider
              animate={controls} //refer to line 20
              transition={{ duration: 1.4 }} //slider duration for popping up. if you are changinng duration then make sure to change delay of glow adder so thatt  the gow starts after animation is complete
              onAnimationComplete={handleSliderAnimationComplete}
            >
              <AboutCard
                icon={
                  <BsFillRocketTakeoffFill className="text-[30px] md:text-[40px]"></BsFillRocketTakeoffFill>
                }
                label="Mission"
                Classname="md:max-h-[340px] md:w-[25vw] sm:max-w-[310px] w-[100%] md:min-w-[260px]"
                content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates officia sit blanditiis dignissimos vitae minus magnam modi repellat, officiis totam alias odio ducimus iste iusto beatae consectetur, tenetur quae eius?"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
