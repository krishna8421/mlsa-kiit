"use client";

import { OUR_ALUMNI } from "@/constants";
import Image from "next/image";
import AlumuniCard from "./AlumniCard";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/pagination";
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
  const controls1 = useAnimation();
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY; //determines how much the user has scrolled
      const windowHeight = window.innerHeight; //determines the height of the  device the user is using

      window.addEventListener("scroll", function () {
        var scrollPosition = window.scrollY;
        if (scrollPosition > windowHeight / .37) {
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

      if (scrollPosition > windowHeight / .2) {
        controls.start({ opacity: 1, y: 0, x: 0 }); //Final position for slider
        controls1.start({ opacity: 1, y: 0, x: 0 }); //Final position for slider
      } else {
        controls.start({ opacity: 0, y: 700, x: 0 }); //Initial starting positionn for slider
        controls1.start({ opacity: 0, y: 0, x: 150 }); //Initial starting positionn for slider
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
      <div className="mx-auto flex pl-4 md:pl-[50px] lg:pl-[80px] xl:pl-[90px] 2xl:pl-[130px]">
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, y: 200 }} //before scrolling position of slider
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
            <div className="h-[30vh] md:h-[60vh] w-[5px]  bg-gradient-to-b from-[#533BD0] to-transparent duration-700 transition lg:h-[80vh]"></div>
          </div>
        </motion.div>

        <div className="overflow-hidden">
          <motion.div
            initial={{ opacity: 0 }} //initial position of text with opacity 0
            animate={controls1} //text conntrol animation triggered.
            transition={{ duration: 1 }}
          >
            <h1 className="sm:mb-[7px] ml-[11px] sm:ml-[15px] lg:ml-[30px] 2xl:ml-[53px] text-xl font-semibold md:mb-[20px] md:text-4xl items-start text-[#FFFFFF] 2xl:text-[2.1vw] ">
              Message From <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A03BCF] to-[#6F5BFF]">Our Alumni</span>
            </h1>
          </motion.div>


          <div className=" md:pl-8">
            <Swiper
              spaceBetween={10}
              // slidesPerView={2.5}
              cssMode={true}
              mousewheel={true}
              // className="sm:pl-40 "
              loop={false}
              navigation={true}
              modules={[Navigation]}
              // centeredSlides={true}
              // centerInsufficientSlides={true}
              breakpoints={{
                300: {
                  slidesPerView: 1,
                  // spaceBetween: 100,
                },
                382: {
                  slidesPerView: 1.1,
                  // spaceBetween: 100,
                },
                437: {
                  slidesPerView: 1.3,
                  // spaceBetween: 100,
                },
                480: {
                  slidesPerView: 1.4,
                  // spaceBetween: 100,
                },
                516: {
                  slidesPerView: 1.5,
                  // spaceBetween: 100,
                },
                570: {
                  slidesPerView: 1.7,
                  // spaceBetween: 100,
                },
                // when window width is >= 480px
                624: {
                  slidesPerView: 1.9,
                  // spaceBetween: 30,
                },
                // when window width is >= 640px
                692: {
                  slidesPerView: 2.1,
                  // spaceBetween: 80,
                },
                768: {
                  slidesPerView: 1.3,
                  // spaceBetween: 180,
                },
                // 800: {
                //   slidesPerView: 1.3,
                //   // spaceBetween: 150,
                // },
                820: {
                  slidesPerView: 1.5,
                  // spaceBetween: 150,
                },
                900: {
                  slidesPerView: 1.7,
                  // spaceBetween: 150,
                },
                1000: {
                  slidesPerView: 1.8,
                  // slidesPerView:'auto',
                  // spaceBetween: 150,
                },
                1100: {
                  slidesPerView: 2.0,
                  // slidesPerView:'auto',
                  // spaceBetween: 150,
                },
                1200: {
                  slidesPerView: 2.2,
                  // slidesPerView:'auto',
                  // spaceBetween: 180,
                },
                1290: {
                  slidesPerView: 2.4,
                  // slidesPerView:'auto',
                  // spaceBetween: 180,
                },
                1400: {
                  slidesPerView: 2.6,
                  // spaceBetween: 150,
                },
                1600: {
                  slidesPerView: 2.9,
                  // spaceBetween: 150,
                },
                1800: {
                  slidesPerView: 3.3,
                  // spaceBetween: 150,
                },
              }}
            >
              {OUR_ALUMNI.map((Lead, index) => {

                return (

                  <SwiperSlide key={index} className=" sm:w-[260px] md:w-[460px]">
                    <motion.div
                      // key={index}
                      // className="flex justify-center"
                      initial={{ opacity: 0, y: 300 }}
                      animate={controls}
                      transition={{ duration: 0.5 + (index * 0.2) }}
                      onAnimationComplete={handleSliderAnimationComplete}
                    >


                      <AlumuniCard {...Lead} />
                    </motion.div>

                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>

        </div>
      </div>

    </>
  );
};

export default Alumni1;
