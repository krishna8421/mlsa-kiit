"use client";

// import QuoteLeft from ".../assets/QuoteLeft.png";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import BLOGS from "../../app/(home)/blogs/blog.json";
import BlogsCard from "./BlogsCard";

import "swiper/swiper-bundle.min.css";

// import "swiper/css/bundle";
const OUR_BLOGS = [
  {
    image: "/banner.png",
    title: "All about android 13 go",
    date: "12-april-2023",
    message:
      "With Android 13 (Go edition), we're bringing Google Play System Updates to Go devices which helps ensure devices can  ...",
  },
  {
    image: "/banner2.png",
    title: "All about android 13 go",
    date: "12-april-2023",
    message:
      "With Android 13 (Go edition), we're bringing Google Play System Updates to Go devices which helps ensure devices can  ...",
  },
  {
    image: "/banner3.png",
    title: "All about android 13 go",
    date: "12-april-2023",
    message:
      "With Android 13 (Go edition), we're bringing Google Play System Updates to Go devices which helps ensure devices can  ...",
  },
  {
    image: "/banner.png",
    title: "All about android 13 go",
    date: "12-april-2023",
    message:
      "With Android 13 (Go edition), we're bringing Google Play System Updates to Go devices which helps ensure devices can  ...",
  },
  {
    image: "/banner2.png",
    title: "All about android 13 go",
    date: "12-april-2023",
    message:
      "With Android 13 (Go edition), we're bringing Google Play System Updates to Go devices which helps ensure devices can  ...",
  },
];

const OurBlogs = () => {
  return (
    <div className=" mx-3 text-center sm:mr-0  sm:mt-5">
      <h1 className="mb-10 text-lg font-semibold md:text-3xl">
        Our<span className="text-[#3B61CF]"> Blogs</span>
      </h1>
      <Swiper
        spaceBetween={18}
        slidesPerView={1}
        cssMode={true}
        mousewheel={true}
        className=" px-4 sm:ml-16 sm:px-2"
        loop={false}
        navigation={true}
        modules={[Navigation]}
        breakpoints={{
          400: {
            slidesPerView: 1.1,
            spaceBetween: 2,
            slidesPerGroup: 1,
          },
          420: {
            slidesPerView: "auto",
            spaceBetween: 2,
          },
          786: {
            slidesPerView: "auto",
            slidesPerGroup: 2,
          },
          1400: {
            slidesPerView: "auto",
            slidesPerGroup: 3,
          },
        }}
      >
        {BLOGS.slice(0, 10).map((Lead, index) => {
          return (
            <SwiperSlide key={index} className="w-[320px] overflow-visible sm:w-[345px]">
              <BlogsCard {...Lead} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default OurBlogs;
