"use client";

import { OUR_DOMAINS } from "@/constants";
import Image from "next/image";
import DomainCard from "./DomainCard";
import { motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";


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

      if (scrollPosition > windowHeight / .8) {
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


  return (
    <>


      <div className="min-h-[100px] h-auto md:pb-[222px] pb-[128px] relative z-0 flex flex-row max-w-[1920px] justify-center items-center mx-auto">


        <div className="mx-auto flex -translate-y-[60vh] md:-translate-y-[30vh] sm:ml-[80px]">
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, y: 1000 }} //before scrolling position of slider
            animate={controls} //refer to line 20
            transition={{ duration: 1 }} //slider duration for popping up. if you are changinng duration then make sure to change delay of glow adder so thatt  the gow starts after animation is complete
            onAnimationComplete={handleSliderAnimationComplete}
          >
            <div className="flex flex-col items-center">
              <div
                className="flex h-[41px] w-[41px] items-center justify-center rounded-full bg-[#A93BCF] bg-gradient-to-b from-[#473BCF]  to-[#fff]/30 shadow-dotShadowBlue duration-700 transition 
              "
              >
                <div className="h-[12px] w-[12px] self-center rounded-full bg-white"></div>
              </div>
              <div className="h-full w-[5px]  bg-gradient-to-b from-[#533BD0] to-transparent duration-700 transition lg:h-[80vh]"></div>
            </div>
          </motion.div>
          {/* <div className="h-full ml-[7px] sm:ml-[31px] md:ml-[53px] 2xl:[120px] flex flex-col items-center ">
 <div className="md:w-[84px] md:h-[84px] w-[48] h-[48] border border-cyan-300">
    <Image src="/domainLogos/Dot.png" alt="no img" width={84} height={84} className="object-contain -scale-150 md:w-[84px] md:h-[84px] sm:w-[48] sm:h-[48] w-[35px] h-[35px]"></Image>
    </div>
  <div className="h-full  z-20 -mx-10 w-[2px] bg-[blue] ">

  </div>
</div> */}
          <div className="">
            <motion.div
              initial={{ opacity: 0 }} //initial position of text with opacity 0
              animate={textControls} //text conntrol animation triggered.
              transition={{ duration: 2 }}
            >
              <h1 className="sm:mb-[7px] ml-[11px] sm:ml-[15px] lg:ml-[30px] 2xl:ml-[53px] text-[12px] sm:text-[18px] font-semibold md:mb-[20px] md:text-3xl items-start text-[#FFFFFF] 2xl:text-[2.1vw] ">
                Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A03BCF] to-[#6F5BFF]">Domain</span>
              </h1>
            </motion.div>

            <div className="flex w-[80vw]  flex-wrap  gap-4 md:gap-5 2xl:gap-7 pl-[11px] sm:pl-[23px] md:pl-[77px] 2xl:pl-[47px]">
              {OUR_DOMAINS.map((domain, index) => {
                return (
                  <motion.div
                    key={index}
                    className="flex justify-center"
                    initial={{ opacity: 0, y: 100 }}
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
