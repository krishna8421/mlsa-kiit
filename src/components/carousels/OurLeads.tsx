"use client";

import { OUR_LEADS } from "@/constants";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import LeadsCard from "./LeadsCard";

import "swiper/swiper-bundle.min.css";
// import "swiper/css/bundle";

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
      <h1 className="mb-9 text-lg font-semibold md:text-3xl">
        Our <span className="text-[#3B61CF]">Leads</span>
      </h1>
      <Swiper
        className="px-3 md:ml-20"
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
