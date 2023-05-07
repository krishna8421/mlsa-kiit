"use client";
import { HERO_SECTION_EVENTS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import SwiperCore, { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import EventSlideItem from "./EventSlideItem";

SwiperCore.use([Navigation]);

const Hero = () => {
  return (
    <>
      <div className="relative h-screen w-screen">
        <Image
          src="/Corrugated_Glass.png"
          alt="Hero Image"
          width={1920}
          height={1080}
          className="absolute z-0 h-full w-full"
        ></Image>
        <div className="z-29 absolute left-[7vw] top-[43vh] flex h-screen w-full flex-col font-semibold md:text-2xl lg:left-[11vw] lg:text-3xl lg:leading-[40px] 2xl:text-[2.1vw] 2xl:leading-[6vh]">
          <div className="">
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
        <div className="absolute bottom-9 right-7">
          <h1 className="my-3.5 pl-8 text-[25px] font-semibold text-white md:text-[2.3vw]">
            Recent Events
          </h1>
          <div className="relative pl-6">
            <Swiper
              spaceBetween={10}
              slidesPerView={2}
              cssMode={true}
              mousewheel={true}
              loop={true}
              navigation={true}
              modules={[Navigation]}
              className="w-[550px] pl-3"
            >
              {HERO_SECTION_EVENTS.map((item, index) => (
                <SwiperSlide key={index}>
                  <div>
                    <EventSlideItem
                      bgColor={item.bgColor}
                      img={item.img}
                      ProjectName={item.ProjectName}
                      date={item.date}
                      numParticipants={item.numParticipants}
                      isButton={item.isButton}
                      isHero={true}
                      link=""
                    ></EventSlideItem>
                  </div>
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
