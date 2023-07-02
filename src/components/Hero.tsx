"use client";
import Link from "next/link";
import EventHome from "./EventsHome";
import HeroTextAnimation from "./HeroTextAnimation";

const MlsaTexts = ["text1", "text2", "text3", "Student"];

const Hero = () => {

  return (
    <>
      <div className="relative h-screen">
        <div
          className="z-1 absolute left-[-50%] top-[-60%] h-[1100px] w-[1100px] rounded-full bg-gradient-to-r 
        from-[#c273eb]/80 to-transparent blur-3xl"
        ></div>
        <div
          className="z-1 absolute left-[-10%] top-[-30%] h-[900px] w-[700px] rounded-full 
        bg-gradient-to-l from-[#4662e0]/40 to-transparent opacity-80 blur-3xl"
        ></div>
        <div
          className="z-1 absolute right-[-35%] top-[20%] h-[900px] w-[1100px] rounded-full bg-gradient-to-l 
        from-[#c273eb]/50 to-transparent blur-3xl"
        ></div>
        <div
          className="z-1 absolute right-[-35%] top-[20%] h-[900px] w-[1100px] rounded-full bg-gradient-to-l 
        from-[#4662e0]/40 to-transparent blur-3xl"
        ></div>
        <EventHome
          Classname="absolute top-24"
          eventName="Flutter Verse 2.0"
          registrationClosed={false}
        />
        <div className="z-29 absolute flex h-screen w-screen flex-col items-center justify-center font-semibold text-2xl text-white delay-100 duration-150 transition-all  md:text-4xl lg:leading-[40px] 2xl:leading-[6vh]">
          <div className="flex">
            Microsoft Learn
            <HeroTextAnimation texts={MlsaTexts} />
          </div>
          <span>Ambassadors</span>
          <span className="font-normal">KIIT Chapter</span>
          <Link href="">
            <span>
              <button className="bg-gradient-blue rounded-full bg-gradient-to-r  from-[#0070C5] to-[#3BABCF] px-4 py-1.5 text-sm font-normal text-white md:px-7 md:py-3 md:text-[22px] lg:mt-8">
                Join Us Now
              </button>
            </span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Hero;
