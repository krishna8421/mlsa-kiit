import { ABOUT_US } from "@/constants";
import Link from "next/link";
import React from "react";
import { BsFillRocketTakeoffFill } from "react-icons/bs";
import { FaEye } from "react-icons/fa";
import { TbTargetArrow } from "react-icons/tb";

interface AboutLogoProps {
  icon: React.ReactNode;
  label: string;
  line: boolean;
}

const AboutLogo: React.FC<AboutLogoProps> = ({ icon, label, line }) => {
  return (
    <div className="flex flex-col justify-start">
      <div className="flex items-center">
        <div className="cursor-pointer self-center rounded-full px-5 py-5 text-[#3B61CF] shadow-gray transition duration-300 hover:shadow-blue md:px-7 md:py-7">
          {icon}
        </div>
        {line && (
          <span className="mx-4 h-0 w-[8vw] border-[1px] border-[#3B61CF] border-opacity-60 md:w-[15vw]"></span>
        )}
      </div>
      <span className="mt-6 w-[78px] text-center md:w-[96px] md:text-2xl lg:text-[25px] 2xl:text-[2.1vw]">
        {label}
      </span>
    </div>
  );
};

const About = () => {
  return (
    <>
      <div className="flex flex-col items-center py-[72px]">
        <h1 className="text-lg font-semibold md:text-3xl lg:leading-[40px] 2xl:text-[2.1vw] 2xl:leading-[6vh]">
          About <span className="text-[#3B61CF]">Us</span>
        </h1>
        <h2 className="mt-8 flex flex-col items-center gap-2 text-[15px] font-semibold leading-3 md:text-2xl lg:text-[25px] lg:leading-[33px] 2xl:text-[2.1vw] 2xl:leading-[4vh]">
          We Have Been Doing Projects And<span>Events since 2017.</span>
        </h2>
        <h3 className="leading-23 mx-auto mt-[18px] w-[90vw] text-center text-[15px] md:w-[65vw] md:text-[18px]">
          {ABOUT_US.description}
        </h3>
        <div className="relative mt-[56px] flex items-center md:flex-row">
          <AboutLogo
            icon={<FaEye className="text-[30px] md:text-[40px]"></FaEye>}
            label="Vision"
            line={true}
          ></AboutLogo>
          <AboutLogo
            icon={<TbTargetArrow className="text-[30px] md:text-[40px]"></TbTargetArrow>}
            label="Goal"
            line={true}
          ></AboutLogo>
          <AboutLogo
            icon={
              <BsFillRocketTakeoffFill className="text-[30px] md:text-[40px]"></BsFillRocketTakeoffFill>
            }
            label="Mission"
            line={false}
          ></AboutLogo>
        </div>
        <Link href="">
          <button className="mt-12 rounded-full bg-gradient-blue px-7 py-2 text-[22px] font-normal text-white">
            Know More
          </button>
        </Link>
      </div>
    </>
  );
};

export default About;
