"use client";
// import QuoteLeft from ".../assets/QuoteLeft.png";
import { OUR_PROJECTS1 } from "@/constants";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import ProjectCard from "./ProjectCard";

import "swiper/swiper-bundle.min.css";

// import "swiper/css/bundle";

const ProjectCarousel1 = () => {
  let bgIndex: number = 0;
  const bgColorArr: Array<string> = ["#DBAEFF", "#9CE1FF", "#D9FF9C", "#FFCC9C"];
  // const [BolgsData, setBlogsData] = useState([]);
  // useEffect(() => {
  //   const fetachBlogs = async () => {
  //     const response = await fetch("https://locahost:3000/api/blogs");
  //     const data = await response.json();
  //     setBlogsData(data);
  //   };
  //   // fetachBlogs();
  // });
  return (
    <div className="mx-auto mt-5 w-[350px] text-center sm:ml-10 sm:w-auto md:ml-[89px]">
      <Swiper
        spaceBetween={18}
        slidesPerView={4}
        cssMode={true}
        mousewheel={true}
        className="px-3"
        loop={false}
        navigation={true}
        modules={[Navigation]}
        // centerInsufficientSlides={true}
        // breakpoints={{
        //   360: {
        //     slidesPerView: 1,
        //     // centeredSlides = true,
        //     spaceBetween: 100,
        //   },
        //   400: {
        //     spaceBetween: 2,
        //     // slidesPerGroup: 1,
        //   },
        //   420: {
        //     slidesPerView: 2,
        //     spaceBetween: 2,
        //   },
        //   786: {
        //     slidesPerView: 3,
        //     spaceBetween: 100,
        //     // slidesPerGroup: 2,
        //   },
        //   1000: {
        //     slidesPerView: 3,
        //     spaceBetween: 40,
        //   },
        //   1400: {
        //     // slidesPerView: 2,
        //     slidesPerGroup: 3,
        //   },
        // }}
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
            slidesPerView:1.7,
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
          1100 :{
            slidesPerView: 3.4,
            spaceBetween: 100,
          },
          1200: {
            slidesPerView: 3.4,
            spaceBetween: 50,
          },
          1240: {
            slidesPerView:4,
            spaceBetween:40,
          },
        }}
      >
        {OUR_PROJECTS1.map((project, index) => {
          {
            if (bgIndex > 3) {
              bgIndex = 0;
            }
          }
          return (
            <SwiperSlide key={index} className=" w-[320px] ">
              <ProjectCard
                bgColor={`${bgColorArr[bgIndex++]}`}
                img={project.img}
                ProjectName={project.ProjectName}
                // tech={project.tech}
                techStack1={project.techStack1}
                techStack2={project.techStack2}
                link="#"
                techImg={project.techImg}
                techImg2={project.techImg2}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default ProjectCarousel1;
