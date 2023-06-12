"use client";
// import { Link } from "lucide-react";
// import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { AiOutlineGithub } from "react-icons/ai";

interface Props {
  bgColor: string;
  img: string;
  ProjectName: string;
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
  return (
    <div>
      <Link href={link}>
    <div
      className={`mr-5 h-[302px] w-[304px] overflow-hidden rounded-[10px] border-2 border-[1.6px] border-black border-white text-start transition duration-300 ease-in-out hover:border-[1.6px] hover:border-black hover:shadow-project xsm:ml-5 lg:m-3 `}
      style={maindivBG}
    >
      <div className="mx-auto pt-2" style={containerStyle}>
        <Image
          src={img}
          alt="event item"
          width={1440}
          height={720}
          className="h-[134px] w-full rounded-lg"
        ></Image>
        <div className="ml-[18px] pt-3">
          <div>
            <h2 className="cursor-pointer text-lg">{ProjectName}</h2>
            <div className="mt-1.5 flex cursor-default flex-col text-[16px] font-[350] leading-[20px]">
              <span>{techStack1}</span>
              <span>{techStack2}</span>
            </div>
          </div>
          <div className="mt-6 flex items-center justify-between text-lg font-normal">
            <div className="relative flex w-11 ">
              <div className="tech-stack-container relative">
                <style jsx>{`
                  .tech-stack-container::after {
                    background-color: ${bgColor};
                  }
                `}</style>
                <Image
                  src={techImg}
                  alt="tech stack image"
                  width={100}
                  height={100}
                  className="tech-stack-left absolute left-[4px] top-[6px] h-[13px] w-[13px] rounded-full"
                ></Image>
              </div>
              <div className="tech-stack-container relative">
                <style jsx>{`
                  .tech-stack-container::after {
                    background-color: ${bgColor};
                  }
                `}</style>
                <Image
                  src={techImg2}
                  alt="tech stack image"
                  width={100}
                  height={100}
                  className="tech-stack-left absolute left-[4px] top-[6px] h-[13px] w-[13px] rounded-full"
                ></Image>
              </div>
              <Image
                src={techImg2}
                alt="tech stack image"
                width={100}
                height={100}
                className="absolute right-[-24px] ml-2 h-6 w-6 rounded-full bg-white px-1 py-2"
              ></Image>
            </div>
            <a href={link} target="_blank">
              <AiOutlineGithub className=" h-6 w-6 text-white" />
            </a>
          </div>
        </div>
      </div>
    </div>
    </Link>
    </div>
    
    
  );
};

export default ProjectCard;
