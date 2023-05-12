"use client";

import FeatureProject from "@/components/project/FeatureProject";
import ProjectCarousel1 from "@/components/project/ProjectCarousel1";
import ProjectCarousel2 from "@/components/project/ProjectCarousel2";
import ProjectHero from "@/components/project/ProjectHero";
const Projects = () => {
  return (
    <div>
      <ProjectHero />
      <FeatureProject />
      <ProjectCarousel1 />
      <ProjectCarousel2 />
    </div>
  );
};

export default Projects;
