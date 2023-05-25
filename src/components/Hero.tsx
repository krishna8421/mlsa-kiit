"use client";
import Image from "next/image";
import Link from "next/link";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { FreeMode, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import { HERO_SECTION_EVENTS } from "@/constants";
import EventSlideItem from "./EventSlideItem";

const Hero = () => {
  return (
    <>
      <div className="relative mb-4 h-[245px] w-screen md:mb-12 md:h-screen">
        <Image
          src="/Corrugated_Glass.png"
          alt="Hero Image"
          width={1920}
          height={1080}
          className="absolute z-0 h-[245px] w-full object-cover md:h-screen"
        />
        <div className="z-29 absolute left-[6vw] top-[13vh] flex h-screen w-full flex-col gap-3 text-[15px] font-semibold leading-[10px] transition-all duration-150 delay-100 md:left-[11vw] md:top-[25vh] md:text-4xl lg:top-[40vh] lg:leading-[40px] 2xl:leading-[6vh]">
          <div>
            Microsoft Learn
            <span className="ml-2 text-[#3B61CF]">Student</span>
          </div>
          <span>Ambassadors</span>
          <span className="font-normal">KIIT Chapter</span>
          <Link href="">
            <span>
              <button className="absolute rounded-full bg-gradient-blue px-4 py-2 text-[15px] font-normal text-white md:mt-6 md:px-7 md:py-1 md:text-[22px] lg:left-[-10px]">
                Join Us Now
              </button>
            </span>
          </Link>
        </div>
      </div>
      <div className="bottom-[-2rem] mx-auto w-full sm:right-7 sm:w-[520px] md:absolute">
        <h1 className="pl-3 text-lg font-semibold md:my-2.5 md:pl-8 md:text-2xl md:text-white lg:text-[2.3vw]">
          Recent Events
        </h1>
        <div className="relative">
          <Swiper
            slidesPerView="auto"
            freeMode={true}
            loop={true}
            spaceBetween={5}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation, FreeMode]}
            className="hero-swiper"
            breakpoints={{
              420: {
                slidesPerView: "auto",
                spaceBetween: 1,
              },
            }}
          >
            {HERO_SECTION_EVENTS.map((item, index) => (
              <SwiperSlide key={index} className="h-[258px] w-[254px]">
                <EventSlideItem
                  bgColor={item.bgColor}
                  img={item.img}
                  ProjectName={item.ProjectName}
                  date={item.date}
                  numParticipants={item.numParticipants}
                  isButton={item.isButton}
                  isHero={true}
                  link=""
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Hero;
