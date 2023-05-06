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
    <div className="  text-center">
      <h1 className="mb-9 text-3xl font-semibold">
        Our <span className="text-[#3B61CF]">Leads</span>
      </h1>
      <Swiper
        className="ml-20 px-4"
        spaceBetween={14}
        slidesPerView="auto"
        cssMode={true}
        mousewheel={true}
        loop={false}
        navigation={true}
        modules={[Navigation]}
        // breakpoints={{
        //   320: {
        //     width: 320,
        //     slidesPerView: 1,
        //   },
        //   520: {
        //     width: 320,
        //     slidesPerView: 1.3,
        //   },
        //   720: {
        //     width: 720,
        //     slidesPerView: 1.7,
        //   },
        //   1200: {
        //     width: 1200,
        //     slidesPerView: 2.55,
        //   },
        // }}
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
