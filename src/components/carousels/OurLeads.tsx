"use client";

import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import LeadsCard from "./LeadsCard";

import "swiper/swiper-bundle.min.css";
// import "swiper/css/bundle";
const OUR_LEADS = [
  {
    image: "/Leads/Anvitdubey.jpg",
    name: "Anvit Dubey",
    domain: "Lead",
    message: "lending my hands in developing a better technical society",
    link: "https://www.linkedin.com/in/anvit-dubey-b0a205200",
  },
  {
    image: "/Leads/saniya.jpg",
    name: "Saniya Bhargav",
    domain: "Vice Lead",
    message: "lending my hands in developing a better technical society",
    link: "hhttps://www.linkedin.com/in/saniya-bhargav-a660111bb",
  },
  {
    image: "/hero4.png",
    name: "Prashant Upadhyay",
    domain: "Tech Lead",
    message: "lending my hands in developing a better technical society",
    link: "https://www.linkedin.com/in/anvit-dubey-b0a205200",
  },
  {
    image: "/Leads/atig.jpeg",
    name: "Atig Purohit",
    domain: "Tech Lead",
    message: "lending my hands in developing a better technical society",
    link: "https://www.linkedin.com/in/atig-purohit-a83233183/",
  },
  {
    image: "/Leads/mayank.png",
    name: "Mayank Jain",
    domain: "Creative Lead",
    message: "lending my hands in developing a better technical society",
    link: "https://www.linkedin.com/in/mayank-jain-688409208/",
  },
  {
    image: "/Leads/aradhya.jpg",
    name: "Aradhya Kumar",
    domain: "Content Lead",
    message: "lending my hands in developing a better technical society",
    link: "https://www.linkedin.com/in/aradhya-kumar-84078a21b/",
  },
  {
    image: "/Leads/sagar.jpg",
    name: "Sagar Satapathy",
    domain: "Treasurer Lead",
    message: "lending my hands in developing a better technical society",
    link: "https://www.linkedin.com/in/sagar-satapathy-a4579b173/",
  },
  {
    image: "/hero4.png",
    name: "Ayush Raj",
    domain: "Marketing Lead",
    message: "lending my hands in developing a better technical society",
    link: "https://www.linkedin.com/in/anvit-dubey-b0a205200",
  },
  {
    image: "/hero4.png",
    name: "Akshita Sah",
    domain: "Tech Lead",
    message: "lending my hands in developing a better technical society",
    link: "https://www.linkedin.com/in/anvit-dubey-b0a205200",
  },
  {
    image: "/hero4.png",
    name: "Swasktika Bishnoi",
    domain: "Executive",
    message: "lending my hands in developing a better technical society",
    link: "https://www.linkedin.com/in/anvit-dubey-b0a205200",
  },
  {
    image: "/hero4.png",
    name: "Rishab Barik",
    domain: "PR/CR Lead",
    message: "lending my hands in developing a better technical society",
    link: "https://www.linkedin.com/in/anvit-dubey-b0a205200",
  },
];

const OurLeads = () => {
  // const [LeadsData, setLeadsData] = useState([]);
  // useEffect(() => {
  //   const fetachLeads = async () => {
  //     const response = await fetch("https://locahost:3000/api/alumuni");
  //     const data = await response.json();
  //     setLeadsData(data);
  //   };
  //   // fetachLeads();
  // }, []);
  return (
    <div className=" text-center">
      <h1 className="mb-9 text-3xl font-semibold">
        Our <span className="text-[#3B61CF]">Leads</span>
      </h1>
      <Swiper
        className="ml-8 px-3 md:ml-20"
        spaceBetween={14}
        slidesPerView="auto"
        cssMode={true}
        loop={false}
        mousewheel={true}
        navigation={true}
        modules={[Navigation]}
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
