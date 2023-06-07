"use client";

// import QuoteLeft from ".../assets/QuoteLeft.png";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import BLOGS from "../../app/(home)/blogs/blog.json";
import BlogsCard from "./BlogsCard";

import "swiper/swiper-bundle.min.css";

// import "swiper/css/bundle";
const OurBlogs = () => {
  return (
    <div className=" sm-ml-5 mx-3 text-center  sm:mr-0 sm:mt-5">
      <h1 className="mb-10 text-lg font-semibold md:text-3xl">
        Our<span className="text-[#3B61CF]"> Blogs</span>
      </h1>
      <Swiper
        spaceBetween={18}
        slidesPerView={3.4}
        // cssMode={true}
        // mousewheel={true}
        className="flex items-center justify-center "
        loop={false}
        navigation={true}
        modules={[Navigation]}
        centeredSlides={true}
        breakpoints={{
          360: {
            slidesPerView: 1,
            spaceBetween: 100,
          },
          400: {
            spaceBetween: 2,
            // slidesPerGroup: 1,
          },
          420: {
            slidesPerView: 2,
            spaceBetween: 2,
          },
          786: {
            slidesPerView: 3,
            spaceBetween: 100,
            // slidesPerGroup: 2,
          },
          1400: {
            // slidesPerView: 2,
            slidesPerGroup: 3,
          },
        }}
      >
        {BLOGS.slice(0, 10).map((Lead, index) => {
          return (
            <SwiperSlide key={index} className="w-[320px] overflow-visible sm:ml-3 sm:w-[345px]">
              <BlogsCard {...Lead} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default OurBlogs;
