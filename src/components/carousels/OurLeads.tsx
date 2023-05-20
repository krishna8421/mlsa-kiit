"use client";

import { useEffect, useState } from "react";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import LeadsCard from "./LeadsCard";

import "swiper/swiper-bundle.min.css";
// import "swiper/css/bundle";
const OUR_LEADS = [
  {
    image: "/hero1.png",
    name: "Anvit Dubey",
    domain: "Tech Lead",
    message: "lending my hands in developing a better technical society",
  },
  {
    image: "/hero3.png",
    name: "Anvit Dubey",
    domain: "Tech Lead",
    message: "lending my hands in developing a better technical society",
  },
  {
    image: "/hero4.png",
    name: "Anvit Dubey",
    domain: "Tech Lead",
    message: "lending my hands in developing a better technical society",
  },
  {
    image: "/hero1.png",
    name: "Anvit Dubey",
    domain: "Tech Lead",
    message: "lending my hands in developing a better technical society",
  },
  {
    image: "/hero3.png",
    name: "Anvit Dubey",
    domain: "Tech Lead",
    message: "lending my hands in developing a better technical society",
  },
  {
    image: "/hero4.png",
    name: "Anvit Dubey",
    domain: "Tech Lead",
    message: "lending my hands in developing a better technical society",
  },
];

const OurLeads = () => {
  const [LeadsData, setLeadsData] = useState([]);
  useEffect(() => {
    const fetachLeads = async () => {
      const response = await fetch("https://locahost:3000/api/alumuni");
      const data = await response.json();
      setLeadsData(data);
    };
    // fetachLeads();
  });
  return (
    <div className="mx-auto max-w-[1440px] text-center pl-[80px]">
      <h1 className="mb-9 text-3xl font-semibold">
        Our <span className="text-[#3B61CF]">Leads</span>
      </h1>
      <Swiper
        className="ml-20 !w-full"
        spaceBetween={14}
        slidesPerView={1}
        cssMode={true}
        mousewheel={true}
        navigation={true}
        modules={[Navigation]}
        breakpoints={{
          670: {
            slidesPerView: 1.5,
          },
          950: {
            slidesPerView: 2,
          },
          1240: {
            slidesPerView: 2.5,
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
