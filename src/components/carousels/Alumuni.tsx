"use client";

import { useEffect, useState } from "react";
import AlumuniCard from "./AlumuniCard";

import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper-bundle.min.css";

const OUR_ALUMNI = [
  {
    image: "/hero2.png",
    name: "Anvit Dubey",
    position: "Associate Software Engg",
    company: "Mappa",
    message:
      "I am so grateful that I got to be a part of this society and work with such amazing people. I made some great friends and learnt so much from each and every one of them.",
  },
  {
    image: "/circle2.png",
    name: "Anvit Dubey",
    position: "Associate Software Engg",
    company: "Mappa",
    message:
      "I am so grateful that I got to be a part of this society and work with such amazing people. I made some great friends and learnt so much from each and every one of them.",
  },
  {
    image: "/circle3.png",
    name: "Anvit Dubey",
    position: "Associate Software Engg",
    company: "Mappa",
    message:
      "I am so grateful that I got to be a part of this society and work with such amazing people. I made some great friends and learnt so much from each and every one of them.",
  },
  {
    image: "/hero2.png",
    name: "Anvit Dubey",
    position: "Associate Software Engg",
    company: "Mappa",
    message:
      "I am so grateful that I got to be a part of this society and work with such amazing people. I made some great friends and learnt so much from each and every one of them.",
  },
  {
    image: "/circle2.png",
    name: "Anvit Dubey",
    position: "Associate Software Engg",
    company: "Mappa",
    message:
      "I am so grateful that I got to be a part of this society and work with such amazing people. I made some great friends and learnt so much from each and every one of them.",
  },
  {
    image: "/circle3.png",
    name: "Anvit Dubey",
    position: "Associate Software Engg",
    company: "Mappa",
    message:
      "I am so grateful that I got to be a part of this society and work with such amazing people. I made some great friends and learnt so much from each and every one of them.",
  },
];

const OurAlumuni = () => {
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
    <div className="relative py-[117px]">
      <img src="/quoteLeft.png" alt="quoted" className="absolute left-0 top-[11%] h-48 w-52" />
      <div className="py-5  text-center">
        <h1 className="mb-14 text-3xl font-semibold">
          Message From <span className="text-[#3B61CF]">Our Alumni</span>
        </h1>
        <Swiper
          spaceBetween={10}
          slidesPerView="auto"
          cssMode={true}
          mousewheel={true}
          className="ml-16 "
          loop={false}
          navigation={true}
          modules={[Navigation]}
        >
          {OUR_ALUMNI.map((Lead, index) => {
            return (
              <SwiperSlide key={index} className=" w-[460px] overflow-visible">
                <AlumuniCard {...Lead} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <img
        src="/quoteLeft.png"
        alt="quoted"
        className="absolute bottom-[1.1%]  right-0 h-48 w-52 rotate-180"
      />
    </div>
  );
};

export default OurAlumuni;
