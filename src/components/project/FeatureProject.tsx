import Image from "next/image";
import Link from "next/link";
import { AiFillPlayCircle, AiOutlineGithub } from "react-icons/ai";
const FeatureProject = () => {
  return (
    <div className="mb-[81px] ml-10 mr-8 mt-[34px] md:ml-[107px]">
      <h1 className=" cursor-default pb-4 text-3xl font-semibold">
        Feature <span className="text-[#286FD9]">Project</span>
      </h1>

      <div className="relative box-border flex justify-between rounded-lg bg-gradient-white text-white shadow-gray">
        <Image
          src="/projects/featureProject.png"
          alt="feature Image"
          width={1000}
          height={1000}
          className="ml-5 h-[261px] w-[261px] mix-blend-multiply"
        />
        <Link href="/">
          <button className="absolute left-[79px] top-[198px] flex h-[52px] w-[160px] items-center justify-center rounded-[102px] bg-white transition duration-300 ease-in-out hover:scale-[1.15]">
            <AiFillPlayCircle className="h-[45px] w-[45px]  text-[#F94545]" />{" "}
            <p className="pl-1 pr-3 text-[15px] font-semibold text-black "> Watch Demo</p>
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
          <h1 className="mb-4 text-xl text-[#BED8FF]">Project Is Under Construction</h1>
        </div>
      </div>
    </div>
  );
};

export default FeatureProject;
