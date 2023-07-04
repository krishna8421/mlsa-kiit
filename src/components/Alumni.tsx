"use client";

import { useEffect, useState } from "react";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import AlumuniCard from "./AlumniCard";

// import "swiper/swiper-bundle.min.css";

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
    <div className="  pl-20 my-[253px]">

        <h1 className="mb-14 text-[2.8rem] font-semibold">
          Message From <span className="bg-gradient-to-r from-purple-500 to-blue-500 text-transparent bg-clip-text">Our Alumni</span>
        </h1>
        <Swiper
          spaceBetween={10}
          // slidesPerView={2.5}
          cssMode={true}
          mousewheel={true}
          // className="sm:ml-20 "
          loop={false}
          navigation={true}
          modules={[Navigation]}
          // centeredSlides={true}
          // centerInsufficientSlides={true}
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
            760: {
              slidesPerView: 1.9,
              spaceBetween: 180,
            },
            800: {
              slidesPerView: 2.1,
              spaceBetween: 150,
            },
            820: {
              slidesPerView: 2.5,
              spaceBetween: 350,
            },
            900: {
              slidesPerView: 2.1,
              spaceBetween: 220,
            },
            1000: {
              slidesPerView:2.4,
              // slidesPerView:'auto',
              spaceBetween: 280,
            },
            1200: {
              slidesPerView: 3.2,
              // slidesPerView:'auto',
              spaceBetween: 450,
            },
            1400: {
              slidesPerView: 3.4,
              spaceBetween: 150,
            },
          }}
        >
          {OUR_ALUMNI.map((Lead, index) => {
            return (
              <SwiperSlide key={index} className=" overflow-visible sm:w-[460px]">
                <AlumuniCard {...Lead} />
              </SwiperSlide>
            );
          })}
        </Swiper>
        {/* <div className="scrollC flex overflow-x-scroll">
          {OUR_ALUMNI.map((Lead, index) => {
            return (
              <div key={index} className="">
                <AlumuniCard  {...Lead} />
              </div>
            );
          })}
        </div> */}
   
    </div>
  );
};

export default OurAlumuni;
