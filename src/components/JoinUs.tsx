"use client";

import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";


const JoinUs: React.FC = () => {
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
  const controls2 = useAnimation();
  const controls3 = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY; //determines how much the user has scrolled
      const windowHeight = window.innerHeight; //determines the height of the  device the user is using
      let num: number;
      if (windowHeight > 720) {
        num = 0.3
      } else if (windowHeight > 650) {
        num = 0.25
      } else {
        num = 0.2
      }

      window.addEventListener("scroll", function () {
        var scrollPosition = window.scrollY;
        if (scrollPosition > windowHeight / .3) {
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

      if (scrollPosition > windowHeight / num) {
        controls.start({ opacity: 1, y: 0, x: 0 });
        controls2.start({ opacity: 1, y: 0, x: 0, scale: 1 });
        controls3.start({ opacity: 1, y: 0, x: 0 });
        // } //Final position for slider
      } else {
        controls.start({ opacity: 0, y: 260, x: 0 }); //Initial starting positionn for slider
        controls2.start({ opacity: 0, y: 0, x: 0, scale: 0.5 });
        controls3.start({ opacity: 0, y: 0, x: 0 });
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });


  return (
    <>
      <div className="min-h-[100px]  md:mt-[80px] pb-8 md:pb-20 relative z-0 flex flex-row max-w-[1920px] justify-center items-center mx-auto ">
        <div className="flex pt-12 pl-4 md:pl-[50px] lg:pl-[80px] xl:pl-[90px] 2xl:pl-[130px] w-full">
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, y: 260 }} //before scrolling position of slider
            animate={controls} //refer to line 20
            transition={{ duration: 1.5 }} //slider duration for popping up. if you are changinng duration then make sure to change delay of glow adder so thatt  the gow starts after animation is complete
            onAnimationComplete={handleSliderAnimationComplete}
          >
            <div className="flex flex-col items-center">
              <div
                className="flex h-[30px] w-[30px] md:h-[41px] md:w-[41px] items-center justify-center rounded-full bg-[#3BABCF] bg-gradient-to-b from-[#3B61CF]  to-[#fff]/30 shadow-dotShadowBlue duration-700 transition 
              "
              >
                <div className="h-[12px] w-[12px] self-center rounded-full bg-white"></div>
              </div>


              <div className="h-[330px] md:h-[500px] w-[5px]  bg-gradient-to-b from-[#3BABCF] to-transparent duration-700 transition ">

                <Image src='/joinus.svg' alt="vector" height={80} width={50} className="absolute h-[30%] 2xl:w-[3.5%]  w-[8%] sm:w-[5%] sm:h-[40%] top-[35%] md:top-[23%]" />
              </div>


            </div>
          </motion.div>

          <div className=" w-[85vw] ">
            <div className="flex  justify-between w-full items-center  pl-[11px] sm:pl-[9px] md:pl-[16px] 2xl:pl-[57px]">

              <motion.div

                className="w-[58%] md:w-[70%]"
                initial={{ opacity: 0 }}
                animate={controls3}
                transition={{ duration: 1.5 }}
                onAnimationComplete={handleSliderAnimationComplete}
              >
                <div className="mt-6 flex font-bold  md:mr-10 justify-between items-center ">
                  <div className=" ">
                    <div className="pl-6 sm:pl-[40px] md:pl-[60px] lg:pl-[80px] pt-[70px] text-sm sm:text-lg md:text-2xl lg:text-3xl font-semibold text-[24px]">
                      <h1 className="bg-gradient-to-r  from-[#0070C5] to-[#3BABCF] text-transparent bg-clip-text">Join</h1>
                      <div className="duration-50 my-2  h-[4px] w-[140%] bg-gradient-to-r from-[#456FDC] to-transparent  sm:my-3 "></div>

                      <h1>
                        Microsoft Learn <span className=" bg-gradient-to-r  from-[#0070C5] to-[#3BABCF] text-transparent bg-clip-text">Student</span>
                      </h1>
                      <h1>Ambassador</h1>
                      <h1 className="font-normal">KIIT Chapter</h1>
                    </div>
                    <Link href="#footer" className="">
                      <button className="text-xs sm:text-sm md:text-base lg:text-lg my-[15px]  ml-5 sm:ml-[42px] md:ml-[62px] lg:ml-[82px]  flex items-center justify-center whitespace-nowrap rounded-[100px]  bg-gradient-to-r font-normal from-[#0070C5] to-[#3BABCF] px-3 py-[5px] md:px-4 md:py-[7px]  text-white ">
                        Contact Us
                      </button>
                    </Link>
                  </div>
                </div>
              </motion.div>
              <motion.div
                className="flex w-[58%] md:w-[30%] justify-end"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={controls2}
                transition={{ duration: 0.8 }}
                onAnimationComplete={handleSliderAnimationComplete}
              >
                <Image width={400} height={400} src="/mlsaLogo2.png" alt="rectangle " className="w-[65%] h-[60%] max-w-[265px] mt-28 mr-3 md:mr-24" />
              </motion.div>


            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default JoinUs;
