"use client";
import Image from "next/image";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation } from "swiper";
import { Swiper } from "swiper/react";
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
          {/* <Link href="">
            <span>
              <button className="absolute rounded-full bg-gradient-blue px-4 py-1.5 text-sm font-normal text-white md:mt-6 md:px-7 md:py-3 md:text-[22px] lg:left-[-10px]">
                Join Us Now
              </button>
            </span>
          </Link> */}
        </div>
      </div>
      <div className="scrollbar relative bottom-4 mx-auto flex flex-col flex-wrap items-center overflow-auto px-3 sm:right-7 md:absolute md:w-auto md:items-start">
        <h1 className="absolute mb-4 pl-2 text-start text-lg font-semibold md:my-2.5 md:block md:text-2xl md:text-white ">
          Recent Events
        </h1>
        <div className="  h-[50vw] w-[40vw] ">
          {/* {EVENTS2023.slice(0, 2).map((event, eventIndex) => (
            <EventSlideItem
              key={eventIndex}
              bgColor={event.bgColor}
              img={event.img}
              ProjectName={event.ProjectName}
              date={event.date}
              numParticipants={event.numParticipants}
              isButton={event.isButton}
              isHero={true}
              link={event.link}
            />
          ))} */}
          <Swiper
            spaceBetween={18}
            slidesPerView={1}
            // cssMode={true}
            mousewheel={true}
            // className=" px-4 sm:ml-16 sm:px-2"
            loop={false}
            navigation={true}
            modules={[Navigation]}
            // breakpoints={{
            //   400: {
            //     slidesPerView: 1.1,
            //     spaceBetween: 2,
            //     slidesPerGroup: 1,
            //   },
            //   420: {
            //     slidesPerView: "auto",
            //     spaceBetween: 2,
            //   },
            //   786: {
            //     slidesPerView: "auto",
            //     slidesPerGroup: 2,
            //   },
            //   1400: {
            //     slidesPerView: "auto",
            //     slidesPerGroup: 3,
            //   },
            // }}
          >
            {/* {EVENTS2023.slice(0, 10).map((event, eventIndex) => {
              return (
                <SwiperSlide key={eventIndex} className="w-[320px]  ">
                  <EventSlideItem
                    key={eventIndex}
                    bgColor={event.bgColor}
                    img={event.img}
                    ProjectName={event.ProjectName}
                    date={event.date}
                    numParticipants={event.numParticipants}
                    isButton={event.isButton}
                    isHero={true}
                    link={event.link}
                  />
                </SwiperSlide>
              );
            })} */}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Hero;
