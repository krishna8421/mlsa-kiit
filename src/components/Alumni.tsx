"use client";

import { useEffect, useState } from "react";
// import AlumuniCard from "./AlumniCard";
import AlumniCard from "./AlumniCard";
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
    <div className=" ">
      <div className="py-5  text-center">
        <h1 className="mb-14 text-[45px] font-semibold">
          Message From <span className="text-[#3B61CF]">Our Alumni</span>
        </h1>
        
        <div className="flex overflow-x-scroll">
          {OUR_ALUMNI.map((Lead, index) => {
            return <AlumniCard  key={index} {...Lead} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default OurAlumuni;
