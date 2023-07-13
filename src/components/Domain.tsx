"use client";

import { OUR_DOMAINS } from "@/constants";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import React, { useEffect } from "react";
import DomainCard from "./DomainCard";


const Domain: React.FC = () => {
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
        if (scrollPosition > windowHeight / .9) {
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

      if (scrollPosition > windowHeight / .7) {
        controls.start({ opacity: 1, y: 0, x: 0 }); //Final position for slider
      } else {
        controls.start({ opacity: 0, y: 200, x: 0 }); //Initial starting positionn for slider
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
      {/* <div className="mb-[100px] flex flex-col items-center justify-center">
      <h1 className="mb-12 text-center text-xl font-semibold md:mb-0 md:text-3xl lg:leading-[40px] 2xl:text-[2.1vw] 2xl:leading-[6vh]">
        Our <span className="text-[#3B61CF]">Domain</span>
      </h1>
      <div className="flex w-[325px] flex-wrap gap-7 md:w-[672px] lg:w-[1020px]">
        {OUR_DOMAINS.map((domain, index) => {
          return (
            <DomainCard
              key={index}
              logo={<Image src={domain.imgSrc} alt="support" width={500} height={500}></Image>}
              heading={domain.name}
              about={domain.about}
            ></DomainCard>
          );
        })}
      </div>
    </div> */}

      <div className="min-h-[100px] pl-8 overflow-y-hidden pt-10 md:pl-[50px] lg:pl-[80px] xl:pl-[90px] 2xl:pl-[130px] mt-[20px] h-auto md:pb[222px] pb-[128px] relative z-0 flex flex-row max-w-[1920px] justify-center items-center mx-auto">
        {/* <div className="h-[439px] w-[439px] absolute z-10 rounded full -top-[300px] -left-[578px]">
<div className="md:pb-[222px] pb-[128px] relative z-0 flex flex-row justify-center items-center mx-auto">
{/* <div className="h-[439px] w-[439px] absolute z-10 rounded full -top-[300px] -left-[578px]">
<Image src="/domainLogos/Rectangle.png" alt="gradient" width={739} height={739} className="object-fit h-[739px] w-[739px] rounded-full bg-no-repeat object-cover blur-[155.5px]"></Image>
</div> */}

        <div className="mx-auto flex w-full h-full">
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, y: 300 }} //before scrolling position of slider
            animate={controls} //refer to line 20
            transition={{ duration: 0.6 }} //slider duration for popping up. if you are changinng duration then make sure to change delay of glow adder so thatt  the gow starts after animation is complete
            onAnimationComplete={handleSliderAnimationComplete}
          >
            <div className="flex flex-col items-center ">
              <div
                className="flex h-[41px] w-[41px] items-center justify-center rounded-full bg-[#A93BCF] bg-gradient-to-b from-[#473BCF]  to-[#fff]/30 shadow-dotShadowBlue duration-700 transition 
              "
              >
                <div className="h-[12px] w-[12px] self-center rounded-full bg-white"></div>
              </div>
              <div className=" w-[5px]  bg-gradient-to-b from-[#533BD0] to-transparent duration-700 transition h-full"></div>
            </div>
          </motion.div>

          <div className="">
            {/* <motion.div
            initial={{ opacity: 0, x: 500, y: 0 }} //initial position of text with opacity 0
            animate={textControls} //text conntrol animation triggered.
            transition={{ duration: 0.5 }}
          > */}
            <h1 className="sm:mb-[7px] ml-[11px] sm:ml-[15px] lg:ml-[30px] 2xl:ml-[53px] text-[12px] sm:text-[18px] font-semibold md:mb-[20px] md:text-4xl items-start text-[#FFFFFF] 2xl:text-[2.1vw] ">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A03BCF] to-[#6F5BFF]">Domain</span>
            </h1>
            {/* </motion.div> */}

            <div className="flex w-full 2xl:w-[100%] 3xl:w-[90%] flex-wrap gap-4 md:gap-5 2xl:gap-[30px] pl-8 md:pl-10 lg:pl-12 xl:w-[90%] 2xl:pl-[70px] pb-8 ">
              {OUR_DOMAINS.map((domain, index) => {
                return (
                  <motion.div
                    key={index}
                    className="flex justify-center"
                    initial={{ opacity: 0, y: 200 }}
                    animate={controls}
                    transition={{ duration: 0.5 + (index * 0.1) }}
                    onAnimationComplete={handleSliderAnimationComplete}
                  >
                    <DomainCard
                      isHome={true}
                      key={index}
                      logo={<Image src={domain.imgSrc} alt="support" width={500} height={500}></Image>}
                      heading={domain.name}
                      about={domain.about}
                    ></DomainCard>
                  </motion.div>
                );
              })}

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Domain;