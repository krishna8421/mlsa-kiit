"use client";

import { OUR_ALUMNI } from "@/constants";
import Image from "next/image";
import AlumuniCard from "./AlumniCard";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/swiper-bundle.min.css";

import { motion, useAnimation } from "framer-motion";

import React, { useEffect } from "react";
// import "swiper/swiper-bundle.min.css";


const Alumni1: React.FC = () => {
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

<div className="">
<motion.div
            initial={{ opacity: 0, x: 1000, y: 0 }} //initial position of text with opacity 0
            animate={textControls} //text conntrol animation triggered.
            transition={{ duration: 1 }}
          >
<h1 className="sm:mb-[7px] ml-[11px] sm:ml-[15px] lg:ml-[30px] 2xl:ml-[53px] text-[12px] sm:text-[18px] font-semibold md:mb-[20px] md:text-3xl items-start text-[#FFFFFF] 2xl:text-[2.1vw] ">
  Message From <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A03BCF] to-[#6F5BFF]">Our Alumni</span>
</h1>
</motion.div>

<div className="flex   flex-wrap justify-center items-center 2xl:gap-7 pl-[11px] sm:pl-[23px] md:pl-[36px] 2xl:pl-[77px]">

                    {/* <h1>Hi</h1> */}
<Swiper
          spaceBetween={10}
          // slidesPerView={2.5}
          cssMode={true}
          mousewheel={true}
          className="sm:ml-20 "
          loop={false}
          navigation={true}
          modules={[Navigation]}
          // centeredSlides={true}
          // centerInsufficientSlides={true}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 100,
            },
            // when window width is >= 480px
            480: {
              slidesPerView: 1,
              spaceBetween: 30,
            },
            // when window width is >= 640px
            640: {
              slidesPerView: 1.8,
              spaceBetween: 80,
            },
            760: {
              slidesPerView: 1.9,
              spaceBetween: 180,
            },
            800: {
              slidesPerView: 2.1,
              spaceBetween: 150,
            },
            820: {
              slidesPerView: 2.5,
              spaceBetween: 350,
            },
            900: {
              slidesPerView: 2.1,
              spaceBetween: 220,
            },
            1000: {
              slidesPerView:2.4,
              // slidesPerView:'auto',
              spaceBetween: 280,
            },
            1200: {
              slidesPerView: 3.2,
              // slidesPerView:'auto',
              spaceBetween: 450,
            },
            1400: {
              slidesPerView: 3.4,
              spaceBetween: 150,
            },
          }}
        >
          {OUR_ALUMNI.map((Lead, index) => {

            return (
             
              <SwiperSlide key={index} className="  sm:w-[460px]">
                <motion.div
                    // key={index}
                    // className="flex justify-center"
                    initial={{ opacity: 0, y: 1000 }} 
                    animate={controls} 
                    transition={{ duration: 1.2 }} 
                    onAnimationComplete={handleSliderAnimationComplete}
                  >
                 
                
                  <AlumuniCard {...Lead} />
                  </motion.div>
                  
              </SwiperSlide>
            );
          })}
        </Swiper>
        {/* </motion.div> */}
  
</div>
</div>
</div>
</div>
</>
  );
};

export default Alumni1;
