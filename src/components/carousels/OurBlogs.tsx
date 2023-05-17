"use client";

// import QuoteLeft from ".../assets/QuoteLeft.png";
import { useEffect, useState } from "react";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
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
  const [BolgsData, setBlogsData] = useState([]);
  useEffect(() => {
    const fetachBlogs = async () => {
      const response = await fetch("https://locahost:3000/api/blogs");
      const data = await response.json();
      setBlogsData(data);
    };
    // fetachBlogs();
  });
  return (
    <div className="mt-5 text-center">
      <h1 className="mb-10 text-3xl font-semibold">
        Our<span className="text-[#3B61CF]"> Blogs</span>
      </h1>
      <Swiper
        spaceBetween={18}
        slidesPerView={4}
        cssMode={true}
        mousewheel={true}
        className="ml-16 pl-3"
        loop={false}
        navigation={true}
        modules={[Navigation]}
        // breakpoints={{
        //   320: {
        //     width: 320,
        //     slidesPerView: 1,
        //   },
        //   720: {
        //     width: 720,
        //     slidesPerView: 1.7,
        //   },
        //   // 1200: {
        //   //   width: 1200,
        //   //   slidesPerView: 3.4,
        //   // },
        // }}
      >
        {OUR_BLOGS.map((Lead, index) => {
          return (
            <SwiperSlide key={index} className=" w-[345px] overflow-visible">
              <BlogsCard {...Lead} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default OurBlogs;
