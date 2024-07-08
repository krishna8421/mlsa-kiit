import { HERO_SECTION_PROJECTS } from "@/constants"

import HeroProjectCard from "./HeroProjectCard"

const LatestProjects = () => {
    return (
        <div className='projectsAnimation duration-500 ease-out flex gap-8 flex-row justify-center flex-wrap w-[100vw] mx-auto'>
            {HERO_SECTION_PROJECTS.map((project, index) => (
                <HeroProjectCard key={index} project={project} />
            ))}
        </div>

    )
}

export default LatestProjects