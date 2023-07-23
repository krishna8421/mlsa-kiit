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
<div className="min-h-[100px] pl-4 overflow-y-hidden pt-10 md:pl-[50px] lg:pl-[80px] xl:pl-[90px] 2xl:pl-[130px] mt-[20px] h-auto md:pb[222px] pb-[128px] relative z-0 flex flex-row max-w-[1920px] justify-center items-center mx-auto">
       

         <div className="mx-auto flex w-full h-full">
           <motion.div
             className="flex justify-center"
             initial={{ opacity: 0, y: 150 }} //before scrolling position of slider
             animate={controls} //refer to line 20
             transition={{ duration: 0.6 }} //slider duration for popping up. if you are changinng duration then make sure to change delay of glow adder so thatt  the gow starts after animation is complete
             onAnimationComplete={handleSliderAnimationComplete}
           >
             <div className="flex flex-col items-center ">
               <div
                 className="flex h-[30px] w-[30px] md:h-[41px] md:w-[41px] items-center justify-center rounded-full bg-[#A93BCF] bg-gradient-to-b from-[#473BCF]  to-[#fff]/30 shadow-dotShadowBlue duration-700 transition 
               "
               >
                 <div className="h-[12px] w-[12px] self-center rounded-full bg-white"></div>
              </div>
               <div className=" w-[5px]  bg-gradient-to-b from-[#533BD0] to-transparent duration-700 transition h-full"></div>
             </div>
           </motion.div>

          <div className="">
            
            <h1 className=" ml-[11px] sm:ml-[15px] lg:ml-[30px] 2xl:ml-[53px] text-[12px]  font-semibold mb-[20px]  items-start text-[#FFFFFF] md:text-4xl text-xl  2xl:text-[2.1vw] ">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A03BCF] to-[#6F5BFF]">Domains</span>
            </h1>
            {/* </motion.div> */}

            <div className="flex w-full 2xl:w-[100%] 3xl:w-[90%] flex-wrap gap-3 md:gap-1 2xl:gap-[30px]  sm:pl-10 lg:pl-12 xl:w-[90%] 2xl:pl-[70px] pb-8 ">
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