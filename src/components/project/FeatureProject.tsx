import Image from "next/image";
import Link from "next/link";
import { AiFillPlayCircle, AiOutlineGithub } from "react-icons/ai";
const FeatureProject = () => {
  return (
    <div className="lg:ml-[107px] lg:mr-8 mt-[34px] mb-[81px] sm:mx-8">
      <h1 className=" pb-4 text-3xl font-semibold cursor-default">
        Feature <span className="text-[#286FD9]">Project</span>
      </h1>
      <div className="relative box-border flex justify-between rounded-lg bg-gradient-white text-white shadow-gray w-[97vw] lg:w-[100%] m-auto ">
        <Image
          src="/projects/featureProject.png"
          alt="feature Image"
          width={1000}
          height={1000}
          className="mix-blend-multiply ml-5 h-[261px] w-[261px] hidden md:block"
        />
        <Link href="/">
          <button className="absolute left-[10px] md:left-[5vw] bottom-[10px] flex h-[40px] md:h-[52px] w-[140px] md:w-[160px] items-center justify-center rounded-[102px] bg-white transition duration-300 ease-in-out hover:scale-[1.15]">
            <AiFillPlayCircle className="h-[45px] w-[45px]  text-[#F94545]" />{" "}
            <p className="pl-1 pr-3 text-[10px] md:text-[15px] font-semibold text-black "> Watch Demo</p>
          </button>
        </Link>
        <div className="flex cursor-default flex-col justify-between  pr-4 pt-5 text-right text-xl font-[350px]">
          <div className="flex flex-col">
            <h1 className="text-3xl font-semibold leading-10">Bubble Pod</h1>
            <div className="duration-50 mb-2 mt-2 h-[2px] w-[382px] bg-white-line transition hover:bg-white"></div>
            <p className="text-xl">Languages Used</p>
            <p className="text-xl">React, Flask Backend</p>
            <Link href="" className="self-end">
              <AiOutlineGithub className="mt-2 h-6 w-6" />
            </Link>
          </div>
          <h1 className="mb-4 text-lg text-[#BED8FF]">Project Is Under Construction</h1>
        </div>
      </div>
    </div>
  );
};

export default FeatureProject;