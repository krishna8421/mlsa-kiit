"use client";

import AlumniCard from "./AlumniCard";
import Image from "next/image";
import { OUR_ALUMNI } from "@/constants";

import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper-bundle.min.css";

// const OUR_ALUMNI = [
//   {
//     image: "	https://drive.google.com/uc?export=view&id=1F7PBkc6aicMS58DJ0mQTS-7aruCfBCF7",
//     name: "Parnav Shekar",
//     position: "USI Consultant",
//     company: "Deloitte",
//     message:
//       "MSC community helped me embrace self-discovery and learn the significance of humility over power and intelligence, leading to personal growth and fearlessness.",
//   },
//   {
//     image: "	https://drive.google.com/uc?export=view&id=1hJAHISB0oFlVp1NNi49bStWEz-RPZFZG",
//     name: "Ayush Padia",
//     position: "Associate Software Engg-1",
//     company: "Highradius Technologies",
//     message:
//       "I My journey at MSC has been one of growth , learning and fun. From being a part of the founding team of MSAC to leading one of the most talented societies in KIIT , this journey has been amazing and extremely rewarding. I believe that the experience I gained and the connections I made while working for this organisation especially as a part of the project wrong will always play a major role in my career ahead. I hope that our society keeps growing further and we keep making a positive impact for students of not only KIIT but for students across the globe.",
//   },
//   {
//     image: "	https://drive.google.com/uc?export=view&id=1XYcjEjmY97czJeaIS_DFBKultJdpQvuz",
//     name: "Rajatav Dutta",
//     position: "Associate Developer",
//     company: "SAP Labs India",
//     message:
//       " MSC has been a huge part of me and it had its fair share in moulding me into what I’m today. Throughout this journey, I came across many bright minds and got to learn from them too. What kept me involved in this community was my passion for it, and I'm looking forward to seeing what new highs this community goes to. ",
//   },
//   {
//     image: "https://drive.google.com/uc?export=view&id=1MXVbcLMP9eiKr2H_N4L94h--Se17SNU8",
//     name: "Anshika Verma",
//     position: "Software Developer",
//     company: "IBN ISL Role",
//     message:
//       " MSC not only gave me a career that I am proud of but also gave me memories to cherish all my life. We the children of the corporate world live in the cocoons build around us and communities like MSC gives us the ability to break free from the cocoon and also gives us wings to fly into the independent free world. I will always admire the three musketeers ~ Pranav, Simran, Anshika. They both added life to my dead college days, virtually!! Cannot stop explaining the joy of meeting this family , my juniors, my seniors. I will always be in tears for this hardest goodbye.",
//   },
//   {
//     image: "	https://drive.google.com/uc?export=view&id=1XH11vD0tx3_zMgVeUSJkLR8tpTkh3GfS",
//     name: "Ankita Bera",
//     position: "Software Developer",
//     company: "Optum United Health Group",
//     message:
//       "You come as a rookie, but you leave like a bawse!, my journey with MSC has been nothing short of incredible with a pinch of awesome.",
//   },
//   {
//     image: "	https://drive.google.com/uc?export=view&id=1tZiCIEC8VIi80IDMiAMPnM9b7THOKMgr",
//     name: "Abhinav Srivastav",
//     position: "SDE-1",
//     company: "Highradius Technologies",
//     message:
//       "Imagining my college life without MSC is hard. We both grew together. It feels more like a family than a community.",
//   },
//   {
//     image: "	https://drive.google.com/uc?export=view&id=16-TS1iQNgKDSqiGma7JtqPnNvag-mcGu",
//     name: "M Taneesh",
//     position: "Associate Software Engineer - I",
//     company: "Highradius Technologies",
//     message:
//       "Had fun building the society during this online era made a few long lasting friendships and experiences :)",
//   },
//   {
//     image: "https://drive.google.com/uc?export=view&id=1mecDyPBcbMPpM4MvdqvD9zVF4ElgR1V4",
//     name: "Simran Banerjee",
//     position: "USI Consultant",
//     company: "Deloitte",
//     message:
//       "I am so grateful that I got to be a part of this society and work with such amazing people. I made some great friends and learnt so much from each and everyone of them. ",
//   },
// ];

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
    <div className="relative mx-3 pt-16 sm:mx-0 md:py-[117px] ">
      <Image
        width={20}
        height={20}
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
          className="  md:ml-16 "
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
      <Image
        width={20}
        height={20}
        src="/quoteLeft.png"
        alt="quoted"
        className="bottom-[1.1%] right-0  hidden  h-48 w-52 rotate-180 md:absolute"
      />
    </div>
  );
};

export default OurAlumni;
