"use client";

import Image from "next/image";
import EventHome from "./EventsHome";
import HeroTextAnimation from "./HeroTextAnimation";

const MlsaTexts = ["Student", "Developer", "Leader", "Student"];

const Hero = () => {
  return (
    <>
      <div className="absolute inset-0 mx-auto max-w-[1920px]">
        <Image
          src="/heroLeft.png"
          alt=""
          width={700}
          height={700}
          className="z-1 absolute left-0 top-0 h-[60%] w-[80%] max-w-[1920px] md:h-full md:w-[50%] "
        />
        <div className="z-2 absolute right-0 top-0 h-[120vh] w-[50%] max-w-[1920px] lg:h-[150vh] lg:w-[40%]">
          <Image
            src="/heroRight.png"
            alt=""
            width={1000}
            height={800}
            className="h-[80%] w-full md:h-full"
          />
        </div>
        <Image
          src="/heroVector.png"
          alt="hero vector"
          width={1920}
          height={1080}
          className="absolute top-[25%] h-[40%] w-full lg:top-0 lg:h-full"
        />
      </div>
      <div className="relative mx-auto h-[75vh] w-screen max-w-[1920px] cursor-default select-none overflow-hidden  overflow-x-hidden md:h-[85vh] lg:h-screen">
        {/* <div className="absolute left-0 right-0 top-0 z-40 flex justify-center ">
          <EventHome
            Classname="z-30 mt-[100px]"
            eventName="Kryptic Hunt"
            registrationLink="https://kryptic-hunt.mlsakiit.com/"
            registrationClosed={false}
            display={true}
            registrationName="Register Now"
            rules="https://drive.google.com/file/d/1f5eZ9hy1GK-UnTOeJtYooRtZfGyWZL6c/view?usp=sharing" // Add know rules link here
          />
        </div> */}
        {/* <div className="absolute left-0 right-0 top-20 z-30 flex justify-center smm:top-14 md:top-20 ">
          <EventHome
            Classname="z-30 mt-[100px]"
            eventName="Kryptic Hunt Guide"
            registrationLink=""
            registrationClosed={false}
            registrationName="Know More"
            display={true}
          />
        </div> */}
        <div className="absolute left-0 right-0 top-20 z-20 flex justify-center md:top-20">
          <EventHome
            Classname="z-30 mt-[1.5rem]"
            eventName="D3FC0N is LIVE "
            registrationLink="https://linktr.ee/mlsakiit"
            registrationClosed={false}
            registrationName="Socials"
            display={true}
          />
        </div>
        <div className="absolute top-1/2 w-full text-center text-[25px] leading-[35px] sm:text-[30px] sm:leading-[40px] md:-translate-y-[5%] md:text-[40px] md:leading-[50px] lg:-translate-y-[35%] lg:text-[55px] lg:leading-[70px] xl:text-[70px] xl:leading-[90px]">
          <div className="flex justify-center font-bold md:font-semibold">
            <span>Microsoft Learn</span>
            <span className="w-[120px] text-start sm:w-[160px] md:w-[230px] lg:w-[285px] xl:w-[360px]">
              <HeroTextAnimation texts={MlsaTexts} />
            </span>
          </div>
          <div className="lg:mr-18 mr-4 flex flex-col sm:mr-8 md:mr-16 xl:mr-20">
            <span className="font-bold md:font-semibold">Ambassadors</span>
            <span>KIIT Chapter</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
