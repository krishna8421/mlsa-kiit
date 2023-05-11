"use client";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineGithub } from "react-icons/ai";

interface Props {
  bgColor: string;
  img: string;
  ProjectName: string;
  // tech: string[];
  techStack1: string;
  techStack2: string;
  link: string;
  techImg: string;
  techImg2: string;
}

const ProjectCard = ({
  bgColor,
  img,
  ProjectName,
  techStack1,
  techStack2,
  link,
  techImg,
  techImg2,
}: Props) => {
  const containerStyle = {
    width: "calc(100% - 16px)",
  };
  const maindivBG = {
    backgroundColor: bgColor,
  };
  //   w-event-width h-event-height
  return (
    <div
      className={` m-3 mr-5 h-[302px] w-[304px] overflow-visible rounded-[10px] border-[1.6px] border-white text-start transition duration-300 ease-in-out hover:border-[1.6px] hover:border-black hover:shadow-project`}
      style={maindivBG}
    >
      <div className="mx-auto pt-2" style={containerStyle}>
        <Image src={img} alt="event item" width={1440} height={720} className="w-full"></Image>
        <div className="ml-[18px]   pt-3">
          <div>
            <h2 className="text-lg">{ProjectName}</h2>
            <div className="mt-1.5 flex flex-col text-[16px] font-[350] leading-[20px]">
              {/* {tech.map((techStack) => {
                return <p>{techStack}</p>;
              })} */}
              <span>{techStack1}</span>
              <span>{techStack2}</span>
            </div>
          </div>
          <div className="relative mt-3 flex cursor-pointer items-center justify-between text-lg font-normal">
            <div className="flex">
              <img
                src={techImg}
                alt="Techstack"
                // width={20}
                // height={20}
                className="  h-4 w-[15px] bg-white  "
              ></img>
              <img
                src={techImg2}
                alt="Techstack"
                // width={20}
                // height={20}
                className="   left-12 z-30 h-4 w-[15px] bg-white "
              ></img>
            </div>
            <Link href={link}>
              <AiOutlineGithub className=" h-6 w-6 text-white" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
