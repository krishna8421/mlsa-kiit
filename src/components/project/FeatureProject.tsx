import Image from "next/image";
import Link from "next/link";
import { AiFillPlayCircle, AiOutlineGithub } from "react-icons/ai";
const FeatureProject = () => {
  return (
    <div className="mb-[81px] ml-[107px] mr-8 mt-[34px] ">
      <h1 className=" pb-4 text-3xl font-semibold ">
        Feature <span className="text-[#286FD9]">Project</span>
      </h1>

      <div className="relative box-border flex justify-between rounded-lg bg-gradient-white text-white shadow-gray">
        <Image
          src="/Projects/featureProject.png"
          alt="feature Image"
          width={261}
          height={261}
          className="ml-5 h-[261px] w-[261px]"
        />
        <Link href="/">
          <button className="absolute left-[79px] top-[198px] flex h-[52px] w-[160px] items-center justify-center rounded-[102px] bg-white transition duration-300 ease-in-out hover:scale-[1.15]">
            <AiFillPlayCircle className="h-[45px] w-[45px]  text-[#F94545]" />{" "}
            <p className="pl-1 pr-3 text-[15px] font-semibold text-black "> Watch Demo</p>
          </button>
        </Link>
        <div className="relative pr-4 pt-5 text-right text-xl font-[350px] ">
          <h1 className="text-3xl font-semibold leading-10">Bubble Pod</h1>
          <Image
            src="/Projects/projectVector.png"
            alt="v"
            width={300}
            height={300}
            className=" my-2 h-[1.4px] w-[445px]"
          />
          <p>Languages Used</p>
          <p>React, Flask Backend</p>
          <AiOutlineGithub className="absolute right-[16px] top-[136px] h-6 w-6" />
          <h1 className="mt-[88px] text-xl  text-[#BED8FF]">Project Is Under Construction</h1>
        </div>
      </div>
    </div>
  );
};

export default FeatureProject;
