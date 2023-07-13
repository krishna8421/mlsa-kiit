"use client";

// import { OUR_ALUMNI } from "@/constants";
import { OUR_LEADS } from "@/constants";
import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/pagination";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import LeadsCard from "./LeadsCard";
// import "swiper/swiper-bundle.min.css";

import { motion, useAnimation } from "framer-motion";

import React, { useEffect } from "react";
// import "swiper/swiper-bundle.min.css";


const Leads: React.FC = () => {
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
    const controls2 = useAnimation();

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY; //determines how much the user has scrolled
            const windowHeight = window.innerHeight; //determines the height of the  device the user is using

            window.addEventListener("scroll", function () {
                var scrollPosition = window.scrollY;
                if (scrollPosition > windowHeight / .4) {
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

            if (scrollPosition > windowHeight / .4) {
                controls.start({ opacity: 1, y: 0, x: 0 }); //Final position for slider
                controls1.start({ opacity: 1, y: 0, x: 0 }); //Final position for slider
                controls1.start({ opacity: 1, y: 0, x: 0 });
            } else {
                controls.start({ opacity: 0, y: 200, x: 0 }); //Initial starting positionn for slider
                controls2.start({ opacity: 0, y: 0, x: 150 }); //Initial starting positionn for slider
                controls2.start({ opacity: 0, y: 0, x: 0 });

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
            <div className=" mt-24  flex pl-4  md:pl-[50px] lg:pl-[80px] xl:pl-[90px] 2xl:pl-[80px] ">
                <motion.div
                    className="flex justify-center"
                    initial={{ opacity: 0, y: 230 }} //before scrolling position of slider
                    animate={controls} //refer to line 20
                    transition={{ duration: 1 }} //slider duration for popping up. if you are changinng duration then make sure to change delay of glow adder so thatt  the gow starts after animation is complete
                    onAnimationComplete={handleSliderAnimationComplete}
                >
                    <div className="flex flex-col items-center">
                        <div
                            className="flex h-[30px] w-[30px] md:h-[41px] md:w-[41px] items-center justify-center rounded-full bg-[#2CC4F5] bg-gradient-to-b from-[#20FF87]  to-[#fff]/30 shadow-dotShadowBlue duration-700 transition 
              "
                        >
                            <div className="h-[12px] w-[12px] self-center rounded-full bg-white"></div>
                        </div>
                        <div className=" w-[5px]  bg-gradient-to-b from-[#2CC4F5] to-transparent duration-700 transition h-full"></div>
                    </div>
                </motion.div>

                <div className="overflow-hidden">
                    <motion.div
                        initial={{ opacity: 0 }} //initial position of text with opacity 0
                        animate={controls1} //text conntrol animation triggered.
                        transition={{ duration: 1.5 }}
                    >
                        <h1 className="sm:mb-[7px] ml-[11px] sm:ml-[15px] lg:ml-[30px] 2xl:ml-[53px]  text-xl  font-semibold md:mb-[20px] md:text-4xl items-start text-[#FFFFFF] 2xl:text-[2.1vw] ">
                            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#21FD8B] to-[#2CC4F2]">Leads</span>
                        </h1>
                    </motion.div>


                    <div className="md:ml-8 ">
                        <motion.div
                            initial={{ opacity: 0 }} //initial position of text with opacity 0
                            animate={controls1} //text conntrol animation triggered.
                            transition={{ duration: 4 }}>
                            <Swiper
                                className="px-3 md:ml-20"
                                spaceBetween={10}
                                slidesPerView={1}
                                // centeredSlides={true}
                                cssMode={true}
                                loop={false}
                                mousewheel={true}
                                navigation={true}
                                // autoplay={{
                                //   delay: 2500,
                                //   disableOnInteraction: true,
                                // }}
                                breakpoints={{
                                    350: {
                                        slidesPerView: 1,
                                        spaceBetween: 10,

                                    },
                                    640: {
                                        slidesPerView: 2.3,
                                        spaceBetween: 10,
                                    },
                                    768: {
                                        slidesPerView: 3,
                                        spaceBetween: 10,
                                    },
                                    1024: {
                                        slidesPerView: 4,
                                    },
                                    1280: {
                                        slidesPerView: 4.7,
                                        spaceBetween: 10,
                                    },
                                    1440: {
                                        slidesPerView: 5.7,
                                        spaceBetween: 5,
                                    },
                                }}
                                modules={[Autoplay, Navigation]}
                            >
                                {OUR_LEADS.map((Lead, index) => {
                                    return (
                                        <SwiperSlide key={index}>
                                            <motion.div
                                                // key={index}
                                                className="mx-4 md:mx-8 lg:mx-14"
                                                initial={{ opacity: 0, y: 800 }}
                                                animate={controls}
                                                transition={{ duration: 0.5 + (index * 0.1) }}
                                                onAnimationComplete={handleSliderAnimationComplete}
                                            >
                                                <LeadsCard {...Lead} index={index} />
                                            </motion.div>
                                        </SwiperSlide>
                                    );
                                })}
                            </Swiper>
                        </motion.div>
                    </div>

                </div>
            </div>

        </>
    );
};

export default Leads;
