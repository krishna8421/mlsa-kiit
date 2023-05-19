"use client";

import FeatureProject from "@/components/project/FeatureProject";
import ProjectCarousel1 from "@/components/project/ProjectCarousel1";
import ProjectCarousel2 from "@/components/project/ProjectCarousel2";
import ProjectCommunity from "@/components/project/ProjectCommunity";
import Image from "next/image";

const Projects = () => {
  return (
    <div>
      <div className="relative mb-6 mt-20 h-[455px]">
        <Image
          src="/projects/projectHeroArrow.png"
          alt="project hero white background"
          width={1920}
          height={1080}
          className="absolute left-0 right-0"
        ></Image>
        <Image
          src="/projects/projectHero.png"
          alt="project hero arrow"
          width={1920}
          height={1080}
          className="absolute left-0 right-0"
        ></Image>
        <div className="absolute left-[100px] h-full cursor-default font-semibold">
          <div className="flex h-full flex-col justify-center">
            <div className="flex gap-5">
              <h1 className="cursor-default text-3xl">
                Our <span className="text-[#286FD9]">Projects</span>
              </h1>
              <Image
                src="/projects/Arrow.png"
                alt="projects heading arrow"
                width={200}
                height={200}
                className="h-10 w-10"
              ></Image>
            </div>
            <p className="mt-4 w-[542px] text-2xl font-normal">
              Go through our amazing projects, ranging from Web Development to Machine Learning to
              Augmented and Virtual Reality
            </p>
          </div>
        </div>
      </div>
      <ProjectCommunity />
      <FeatureProject />
      <ProjectCarousel1 />
      <ProjectCarousel2 />
    </div>
  );
};

export default Projects;
