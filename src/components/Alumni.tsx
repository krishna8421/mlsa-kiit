"use client";

import { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/swiper-bundle.min.css";
import AlumuniCard from "./AlumniCard";
import { motion, useAnimation } from "framer-motion";
import { OUR_ALUMNI } from "@/constants";

// import "swiper/swiper-bundle.min.css";


const OurAlumuni = () => {
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
        controls.start({ opacity: 0, y: 1800, x: 0 }); //Initial starting positionn for slider
      }
    };
    console.log("scroll", window.scrollY);
    console.log("inner", window.innerHeight);

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });
  
  const [AlumniData, setAlumniData] = useState([]);
  useEffect(() => {
    const fetachAlumni = async () => {
      const response = await fetch("https://locahost:3000/api/alumni");
      const data = await response.json();
      setAlumniData(data);
    };
    // fetachAlumni();
  });
  return (
    <div className="  pl-20 my-[10px]">


      <motion.div
                  initial={{ opacity: 0, x: 1000, y: 0 }} //initial position of text with opacity 0
                  animate={textControls} //text conntrol animation triggered.
                  transition={{ duration: 1 }}
                >
      <h1 className="sm:mb-[7px] ml-[11px] sm:ml-[15px] lg:ml-[30px] 2xl:ml-[53px] text-[12px] sm:text-[18px] font-semibold md:mb-[20px] md:text-3xl items-start text-[#FFFFFF] 2xl:text-[2.1vw] ">
        Message From <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A03BCF] to-[#6F5BFF]">Our Alumni</span>
      </h1>
      </motion.div>

      {/* <div className="flex   flex-wrap justify-center items-center 2xl:gap-7 pl-[11px] sm:pl-[23px] md:pl-[36px] 2xl:pl-[77px]"> */}

      <div className="pl-20">
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
                  320: {
                    slidesPerView: 1,
                    // spaceBetween: 100,
                  },
                  // when window width is >= 480px
                  570: {
                    slidesPerView: 1.3,
                    spaceBetween: 30,
                  },
                  // when window width is >= 640px
                  640: {
                    slidesPerView: 1.5,
                    spaceBetween: 80,
                  },
                  760: {
                    slidesPerView: 1.7,
                    spaceBetween: 180,
                  },
                  800: {
                    slidesPerView: 1.9,
                    spaceBetween: 150,
                  },
                  820: {
                    slidesPerView: 1.9,
                    spaceBetween: 350,
                  },
                  900: {
                    slidesPerView: 1.9,
                    spaceBetween: 220,
                  },
                  1000: {
                    slidesPerView:1.9,
                    // slidesPerView:'auto',
                    spaceBetween: 280,
                  },
                  1200: {
                    slidesPerView: 2.3,
                    // slidesPerView:'auto',
                    spaceBetween: 150,
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
                          initial={{ opacity: 0, y: 600 }} 
                          animate={controls} 
                          transition={{ duration: 1+(index*0.1) }} 
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
  );
};

export default OurAlumuni;
