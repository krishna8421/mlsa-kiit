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
      <div className="mx-auto flex w-screen max-w-[1920px] overflow-y-hidden bg-transparent pt-12 pl-8 md:pl-[50px] lg:pl-[80px] xl:pl-[90px] 2xl:pl-[130px]">
        <div className="flex w-full h-full pb-[80px] md:pb-[110px] xl:pb-[150px]">
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, y: 1000 }} //before scrolling position of slider
            animate={controls} //refer to line 20
            transition={{ duration: 1 }} //slider duration for popping up. if you are changinng duration then make sure to change delay of glow adder so thatt  the gow starts after animation is complete
            onAnimationComplete={handleSliderAnimationComplete}
          >
            <div className="flex flex-col items-center h-[125%]">
              <div
                className="flex h-[31px] w-[31px] md:h-[41px] md:w-[41px] items-center justify-center rounded-full bg-blue-600 bg-gradient-to-b from-[#0957cc] to-[#fff]/30 shadow-dotShadowBlue duration-700 transition 
              "
              >
                <div className="h-[12px] w-[12px] self-center rounded-full bg-white"></div>
              </div>
              <div className="h-full w-[3px] md:w-[5px] bg-gradient-to-b from-[#4b8ff4] to-transparent duration-700 transition lg:h-full"></div>
            </div>
          </motion.div>

          <div className="w-full">
            <div className="2xl:ml-12 xl:ml-8 text-white sm:ml-12">
              <h1 className="js-build-in-item text-2xl font-semibold md:text-3xl lg:text-4xl">
                About<span className="ml-1 text-[#3B61CF]">Us</span>
              </h1>
              <p className="text-md md:mt-6 text-[#7d8590] md:text-xl md:leading-6">
                We have been doing projects
                <br />
                and events since 2017
              </p>
            </div>
            <div className="flex flex-col md:flex-row md:flex-wrap gap-[40px] xl:gap-[30px] 2xl:gap-[50px] md:ml-[60px] mt-[100px] sm:ml-12  mr-4 ">
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
                  Classname=""
                  content="Microsoft Student Community, KIIT Chapter, is a technical community dedicatedly working towards elevating the coding culture of Kalinga Institute of Industrial Technology, Bhubaneswar by providing opportunities to students to work on projects and boost their analytical and logical skills along with the coding."
                />
              </motion.div>
              <motion.div
                className="flex justify-center"
                initial={{ opacity: 0, y: 1000 }} //before scrolling position of slider
                animate={controls} //refer to line 20
                transition={{ duration: 1.3 }} //slider duration for popping up. if you are changinng duration then make sure to change delay of glow adder so thatt  the gow starts after animation is complete
                onAnimationComplete={handleSliderAnimationComplete}
              >
                <AboutCard
                  icon={<TbTargetArrow className=" text-[30px] md:text-[40px]"></TbTargetArrow>}
                  label="Goal"
                  Classname=""
                  content="Microsoft Student Community, KIIT Chapter, is a technical community dedicatedly working towards elevating the coding culture of Kalinga Institute of Industrial Technology, Bhubaneswar by providing opportunities to students to work on projects and boost their analytical and logical skills along with the coding."
                />
              </motion.div>
              <motion.div
                className="flex justify-center"
                initial={{ opacity: 0, y: 1000 }} //before scrolling position of slider
                animate={controls} //refer to line 20
                transition={{ duration: 1.5 }} //slider duration for popping up. if you are changinng duration then make sure to change delay of glow adder so thatt  the gow starts after animation is complete
                onAnimationComplete={handleSliderAnimationComplete}
              >
                <AboutCard
                  icon={
                    <BsFillRocketTakeoffFill className="text-[30px] md:text-[40px]"></BsFillRocketTakeoffFill>
                  }
                  label="Mission"
                  Classname=""
                  content="Microsoft Student Community, KIIT Chapter, is a technical community dedicatedly working towards elevating the coding culture of Kalinga Institute of Industrial Technology, Bhubaneswar by providing opportunities to students to work on projects and boost their analytical and logical skills along with the coding."
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
