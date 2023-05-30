import Image from "next/image";
import Link from "next/link";
import { AiFillPlayCircle, AiOutlineGithub } from "react-icons/ai";
const FeatureProject = () => {
  return (
    <div className="mb-[81px] ml-10 mr-8 mt-[34px]  sm:ml-[107px]">
      <h1 className=" cursor-default pb-4 text-3xl font-semibold">
        Feature <span className="text-[#286FD9]">Project</span>
      </h1>
      <div className="relative m-auto box-border flex w-[99%] justify-between rounded-lg bg-gradient-white text-white shadow-gray  lg:w-[100%] ">
        <Image
          src="/projects/featureProject.png"
          alt="feature Image"
          width={1000}
          height={1000}
          className="h-[131px]  w-[131px] mix-blend-multiply sm:ml-5 sm:h-[261px] sm:w-[261px] "
        />
        <Link href="/">
          <button className="absolute bottom-[10px] left-[10px] flex h-[40px] w-[140px] items-center justify-center rounded-[102px] bg-white transition duration-300 ease-in-out hover:scale-[1.15] sm:left-[5vw] sm:h-[52px] sm:w-[160px]">
            <AiFillPlayCircle className="h-[45px] w-[45px]  text-[#F94545]" />{" "}
            <p className="pl-1 pr-3 text-[10px] font-semibold text-black sm:text-[15px] ">
              {" "}
              Watch Demo
            </p>
          </button>
        </Link>
        <div className="flex cursor-default flex-col   justify-between pr-4  pt-5 text-right text-xl font-[350px]">
          <div className="flex flex-col">
            <h1 className="text-[15px] font-semibold leading-5 sm:text-3xl">Bubble Pod</h1>
            <div className="duration-50 mb-2 mt-1 h-[2px] w-full bg-white-line transition hover:bg-white sm:mt-2 "></div>
            <p className="text-xs sm:text-xl">Languages Used</p>
            <p className="text-xs sm:text-xl">React, Flask Backend</p>
            <Link href="" className="self-end">
              <AiOutlineGithub className="mt-2 h-6 w-6" />
            </Link>
          </div>
          <span className="mb-4 text-xs text-[#BED8FF] sm:text-xl ">
            Project Is Under Construction
          </span>
        </div>
      </div>
    </div>
  );
};

export default FeatureProject;
