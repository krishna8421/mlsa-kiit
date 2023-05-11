"use client";
import { OUR_PROJECTS } from "@/constants";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import ProjectCard from "./ProjectCard";

import "swiper/swiper-bundle.min.css";

const ProjectCarousel2 = () => {
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
    <div className="ml-[89px] mt-5  text-center">
      <Swiper
        spaceBetween={18}
        slidesPerView="auto"
        cssMode={true}
        mousewheel={true}
        loop={false}
        navigation={true}
        modules={[Navigation]}
      >
        {OUR_PROJECTS.map((project, index) => {
          {
            if (bgIndex > 3) {
              bgIndex = 0;
            }
          }
          return (
            <SwiperSlide key={index} className="w-[320px]">
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

export default ProjectCarousel2;
