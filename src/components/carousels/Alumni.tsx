"use client";

import AlumniCard from "./AlumniCard";

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

const OurAlumni = () => {
  // const [AlumniData, setAlumniData] = useState([]);
  // useEffect(() => {
  //   const fetachAlumni = async () => {
  //     const response = await fetch("https://locahost:3000/api/alumni");
  //     const data = await response.json();
  //     setAlumniData(data);
  //   };
  //   // fetachAlumni();
  // });
  return (
    <div className="relative mx-3 pt-16 md:py-[117px] ">
      <img
        src="/quoteLeft.png"
        alt="quoted"
        className="left-0 top-[11%] hidden h-48 w-52 md:absolute"
      />
      <div className="py-5  text-center">
        <h1 className="mb-14 text-lg font-semibold md:text-3xl">
          Message From <span className="text-[#3B61CF]">Our Alumni</span>
        </h1>
        <Swiper
          spaceBetween={10}
          slidesPerView={1}
          cssMode={true}
          mousewheel={true}
          className=" px-3 md:ml-16 "
          loop={false}
          navigation={true}
          modules={[Navigation]}
          breakpoints={{
            480: {
              slidesPerView: "auto",
              spaceBetween: 2,
            },
          }}
        >
          {OUR_ALUMNI.map((Lead, index) => {
            return (
              <SwiperSlide key={index} className=" overflow-visible sm:w-[460px]">
                <AlumniCard {...Lead} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <img
        src="/quoteLeft.png"
        alt="quoted"
        className="bottom-[1.1%] right-0  hidden  h-48 w-52 rotate-180 md:absolute"
      />
    </div>
  );
};

export default OurAlumni;
