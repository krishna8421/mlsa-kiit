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
      <div className="relative mb-12 h-screen w-screen">
        <Image
          src="/Corrugated_Glass.png"
          alt="Hero Image"
          width={1920}
          height={1080}
          className="absolute z-0 h-full w-full object-cover"
        />
        <div className="z-29 absolute left-[6vw] top-[25vh] flex h-screen w-full flex-col gap-3 text-2xl font-semibold transition-all duration-150 delay-100 sm:text-3xl md:left-[11vw] md:text-4xl lg:top-[40vh]  lg:leading-[40px] 2xl:leading-[6vh]">
          <div>
            Microsoft Learn
            <span className="ml-2 text-[#3B61CF]">Student</span>
          </div>
          <span>Ambassadors</span>
          <span className="font-normal">KIIT Chapter</span>
          <Link href="">
            <span>
              <button className="absolute mt-6 rounded-full bg-gradient-blue px-7 py-1 text-[22px] font-normal text-white lg:left-[-10px]">
                Join Us Now
              </button>
            </span>
          </Link>
        </div>
        <div className="absolute bottom-[-5rem] w-full sm:right-7 sm:w-[520px]">
          <h1 className="my-3.5 pl-8 text-[25px] font-semibold text-white md:text-[2.3vw]">
            Recent Events
          </h1>
          <div className="relative">
            <Swiper
              slidesPerView={2}
              freeMode={true}
              loop={true}
              spaceBetween={10}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Pagination, Navigation, FreeMode]}
              className="hero-swiper"
            >
              {HERO_SECTION_EVENTS.map((item, index) => (
                <SwiperSlide key={index}>
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
      </div>
    </>
  );
};

export default Hero;
