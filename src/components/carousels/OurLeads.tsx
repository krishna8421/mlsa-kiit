"use client";

import { OUR_LEADS } from "@/constants";
import { Autoplay, Navigation } from "swiper";
import "swiper/css/bundle";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import LeadsCard from "./LeadsCard";

const OurLeads = () => {
  return (
    <div className=" h-[40vh] w-[100vw] text-center  ">
      <h1 className="mb-9 text-lg font-semibold md:text-3xl">
        Our <span className="text-[#3B61CF]">Leads</span>
      </h1>
      <Swiper
        className="ml-[10%] flex h-[100%] w-[90%] items-center justify-center  px-4 md:ml-20  "
        spaceBetween={14}
        slidesPerView={2.6}
        cssMode={true}
        loop={false}
        mousewheel={true}
        navigation={true}
        centeredSlides={true}
        // Autoplay={true}
        modules={[Navigation, Autoplay]}
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
          800: {
            slidesPerView: 2.1,
            spaceBetween: 90,
          },
          900: {
            slidesPerView: 2.3,
            spaceBetween: 90,
          },
          1000: {
            slidesPerView: 3.1,
            spaceBetween: 250,
          },
          1200: {
            slidesPerView: 3.34,
            spaceBetween: 250,
          },
        }}
      >
        {OUR_LEADS.map((Lead, index) => {
          return (
            <SwiperSlide key={index} className="w-[460px]">
              <LeadsCard {...Lead} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default OurLeads;
