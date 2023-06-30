"use client";

import { useEffect, useState } from "react";
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
        <div className="scrollC flex overflow-x-scroll">
          {OUR_ALUMNI.map((Lead, index) => {
            return (
              <div key={index} className="">
                <AlumuniCard  {...Lead} />
              </div>
            );
          })}
        </div>
   
    </div>
  );
};

export default OurAlumuni;
