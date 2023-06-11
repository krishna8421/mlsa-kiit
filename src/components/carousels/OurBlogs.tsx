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
          320: {
            slidesPerView: 1,
            spaceBetween: 100,
          },
          // when window width is >= 480px
          480: {
            slidesPerView: 1.3,
            spaceBetween: 30,
          },
          500: {
            slidesPerView: 1.7,
            spaceBetween: 30,
          },
          // when window width is >= 640px
          640: {
            slidesPerView: 2.1,
            spaceBetween: 30,
          },
          800: {
            slidesPerView: 2.4,
            spaceBetween: 30,
          },
          900: {
            slidesPerView: 2.7,
            spaceBetween: 30,
          },
          1000: {
            slidesPerView: 3.1,
            spaceBetween: 100,
          },
          1100: {
            slidesPerView: 3.4,
            spaceBetween: 100,
          },
          1200: {
            slidesPerView: 3.4,
            spaceBetween: 50,
          },
          1240: {
            slidesPerView: 4,
            spaceBetween: 40,
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
