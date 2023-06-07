
import DevopsGal from "@/components/gallery/DevopsGal";
import EyespyGal from "@/components/gallery/EyeSpyGal";
import FrontendWithBenifitsGal from "@/components/gallery/FrontendWithBenifitsGal";
import ProjectWingGal from "@/components/gallery/ProjectWingGal";
import Image from "next/image";
import { EventLine } from "../events/page";

const Gallerys = () => {
    return (
      <>
        <div className="m-auto max-w-[1920px]">
          <div className="relative">
            <div className="mb-6 mt-20">
              <div className="relative mt-16 h-[220px] md:h-[300px] lg:h-[400px] xl:h-[451px] 2xl:h-[600px]">
                <Image
                  src="/projects/projectHeroArrow.png"
                  alt="project hero white background"
                  width={1920}
                  height={1080}
                  className="absolute left-0 right-0 h-full"
                ></Image>
                <Image
                  src="/projects/projectHero.png"
                  alt="project hero arrow"
                  width={1920}
                  height={1080}
                  className="absolute left-0 right-0 h-full"
                ></Image>
              </div>
              <div className="z-4 absolute top-[-20%] ml-4 mt-12 h-full cursor-default font-semibold md:left-[60px] md:ml-0 lg:left-[90px]">
                <div className="flex h-full flex-col justify-center">
                  <div className="flex gap-5">
                    <h1 className="cursor-default text-2xl md:text-3xl 2xl:text-4xl">
                      Our <span className="text-[#286FD9]">Gallery</span>
                    </h1>
                    <Image
                      src="/projects/Arrow.png"
                      alt="projects heading arrow"
                      width={200}
                      height={200}
                      className="h-7 w-7 md:h-10 md:w-10"
                    ></Image>
                  </div>
                  <p className="mt-4 w-[70vw] text-lg font-normal md:text-xl lg:w-[542px] lg:text-2xl 2xl:w-[55vw]">
                  Galleries are frightening places, places of evaluation, of judgement.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 flex items-center justify-center gap-8">
          <h1 className="font-semibold md:text-2xl  lg:text-[25px] 2xl:text-[2.1vw]">
            Eye S.Py
            <span className="ml-2 text-[#286FD9]">Squid</span>
          </h1>
        </div>
        <EventLine year={2023} lineNum={1} />
        <EyespyGal/>
        


        <div className="mt-16 flex items-center justify-center gap-8">
          <h1 className="font-semibold md:text-2xl  lg:text-[25px] 2xl:text-[2.1vw]">
            Frontend with
            <span className="ml-2 text-[#286FD9]">Benefits</span>
          </h1>
        </div>
        <EventLine year={2022} lineNum={2} />

        <FrontendWithBenifitsGal/>



        <div className="mt-16 flex items-center justify-center">
          <h1 className="font-semibold md:text-2xl  lg:text-[25px] 2xl:text-[2.1vw]">
            Dev<span className=" text-[#286FD9]">ops</span>
          </h1>
        </div>
        <EventLine year={2022} lineNum={3} />
        <DevopsGal/>



        <div className="mt-16 flex items-center justify-center gap-8">
          <h1 className="font-semibold md:text-2xl  lg:text-[25px] 2xl:text-[2.1vw]">
            Project
            <span className="ml-2 text-[#286FD9]">Wing</span>
          </h1>
        </div>
        <EventLine year={2022} lineNum={4} />
        <ProjectWingGal/>

      </>
    );
  };
  
  export default Gallerys;
  
