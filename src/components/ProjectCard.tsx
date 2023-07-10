"use client";
import Image from "next/image";
import Link from "next/link";
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
    width: "calc(100% - 2vw)",
  };
  
  return (
    <div className="relative hover:shadow-blue3  md:hover:shadow-blue2  pb-3 md:pb-5 min-h-[23.75vw] 3xl:min-h-[456px] w-[300px] md:w-[24.39vw] z-20 group 3xl:w-[27vw] rounded-[7px] lg:rounded-[15px] lg:w-[20vw]  border border-[#878787] text-start transition duration-300 ease-in-out backdrop-blur-[5px] bg-[#25252580] sm:w-[25.8vw] smm:w-[250px]">
      <div className="transition duration-300 ease-in-out hidden group-hover:block top-[0px] left-[0px] absolute w-[300px] md:w-[30vw] md:h-[30vw] -z-40">
        <Image src="/Projects/Rectangle (6).svg"
          alt="event item"
          width={555}
          height={555}
          className=" w-full h-full object-fit rounded-full"></Image>
        {/* <div className="h-[25vw] w-[25vw] hidden group-hover:visible absolute top-[5vw] left-[5vw] rounded-full bg-blue-300 -z-10 "></div> */}
      {/* <style jsx>{`
                  .hover-shadow{
                    border-radius: 553.5px;
                    background: url("/domainLogos/Rectangle (5).png"), cover no-repeat;
                    filter: blur(200px);
                    height: 30vw;
                    width: 30vw;
                    z-index:30;
                  }
                `}</style> */}
      </div>
      <div className="mx-auto pt-[1.35vw] 3xl:pt-[26px]" style={containerStyle}>
        <Image
          src={img}
          alt="event item"
          width={1920}
          height={1080}
          className="h-[100px] md:h-[11.04vw] 3xl:h-[212px] w-full rounded-[10px] "
        ></Image>
        <div className=" ml-[.57vw] 3xl:ml-[11px] pt-[1.45vw] 3xl:pt-7 text-[#FFF]">
          <div>
            <h2 className="cursor-pointer text-[15px] lg:text-[1.1rem] sm:text-[0.7rem] md:text-[1rem] 2xl:text-3xl font-normal leading-normal capitalize">{ProjectName}</h2>
            <div className=" mt-[.62vw] 3xl:mt-3 flex cursor-default flex-col text-[13px] lg:text-[18px] 2xl:text-[25px] font-[350] leading-normal">
              <span>{techStack1}</span>
              <span>{techStack2}</span>
            </div>
          </div>
          <div className="mt-[15px] flex items-center justify-between">
            <div className="relative flex w-16 ">
              <div className="tech-stack-container relative">
              <style jsx>{`
                  .tech-stack-container::after {
                    // background-color: black;
                    background-color: #252525;
                  }
                `}</style>
                <Image
                  src={techImg}
                  alt="tech stack image"
                  width={100}
                  height={100}
                  className="tech-stack-left absolute left-[1.5px] top-[3.8px] h-[10px] w-[10px] lg:left-[3px] lg:top-[7.5px] lg:h-[21px] lg:w-[21px] bg-white rounded-full"
                ></Image>
              </div>
              <div className="tech-stack-container relative ml-[-5px] lg:ml-[-10px]">
                {/* <style jsx>{`
                  .tech-stack-container::after {
                    background-color: black;
                  }
                `}</style> */}
                <Image
                  src={techImg2}
                  alt="tech stack image"
                  width={100}
                  height={100}
                  className="tech-stack-left absolute left-[3px] top-[3px] h-[11.5px] w-[11.5px] lg:left-[6px] lg:top-[6px] lg:h-[23px] lg:w-[23px] bg-white rounded-full"
                ></Image>
              </div>
              {/* <Image
                src={techImg2}
                alt="tech stack image"
                width={100}
                height={100}
                className="absolute right-[-24px] ml-2 h-[23px] w-[23px] rounded-full bg-white px-1 py-2"
              ></Image> */}
            </div>
            <Link href={link}>
              <AiOutlineGithub className=" mr-2 h-[17px] w-[17px] lg:h-[35px] lg:w-[35px] text-white" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;