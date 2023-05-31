"use client";

import FeatureProject from "@/components/project/FeatureProject";
import ProjectCarousel1 from "@/components/project/ProjectCarousel1";
import ProjectCarousel2 from "@/components/project/ProjectCarousel2";
import ProjectCommunity from "@/components/project/ProjectCommunity";
import Image from "next/image";

const Projects = () => {
  return (
    <>
      <div className="m-auto max-w-[1920px]">
        <div className="relative">
          <div className="mb-6 mt-20">
            <div className="xl:h-[451px] relative mt-16 h-[220px] md:h-[300px] lg:h-[400px] 2xl:h-[600px]">
              <Image
                src="/projects/projectHeroArrow.png"
                alt="project hero white background"
                width={1920}
                height={1080}
                className="absolute left-0 right-0 h-full"
              ></Image>
              <Image
                src="/projects/projectHero.png"
                alt="project hero arrow"
                width={1920}
                height={1080}
                className="absolute left-0 right-0 h-full"
              ></Image>
            </div>
            <div className="z-4 absolute top-[-20%] ml-4 mt-12 h-full cursor-default font-semibold md:left-[60px] md:ml-0 lg:left-[90px]">
              <div className="flex h-full flex-col justify-center">
                <div className="flex gap-5">
                  <h1 className="cursor-default text-xl md:text-3xl 2xl:text-4xl">
                    Our <span className="text-[#286FD9]">Projects</span>
                  </h1>
                  <Image
                    src="/projects/Arrow.png"
                    alt="projects heading arrow"
                    width={200}
                    height={200}
                    className="h-7 w-7 md:h-10 md:w-10"
                  ></Image>
                </div>
                <p className="mt-4 w-[70vw] text-sm font-normal md:text-xl lg:w-[542px] lg:text-2xl 2xl:w-[55vw]">
                  Go through our amazing projects, ranging from Web Development to Machine Learning
                  to Augmented and Virtual Reality
                </p>
              </div>
            </div>
          </div>
        </div>
        <ProjectCommunity />
        <FeatureProject />
        <ProjectCarousel1 />
        <ProjectCarousel2 />
      </div>
    </>
  );
};

export default Projects;
