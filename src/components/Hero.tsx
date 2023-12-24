'use client'

import Image from "next/image";
import EventHome from "./EventsHome";
import HeroTextAnimation from "./HeroTextAnimation";

const MlsaTexts = ["Student", "Developer", "Leader", "Student"];

const Hero = () => {
  return (
    <>
      <div className="absolute inset-0 max-w-[1920px] mx-auto">
        <Image
          src="/heroLeft.png"
          alt=""
          width={700}
          height={700}
          className="z-1 absolute left-0 top-0 h-[60%] w-[80%] md:h-full md:w-[50%] max-w-[1920px] "
        />
        <div className="z-2 absolute right-0 top-0 h-[120vh] w-[50%] max-w-[1920px] lg:h-[150vh] lg:w-[40%]">
          <Image
            src="/heroRight.png"
            alt=""
            width={1000}
            height={800}
            className="h-[80%] md:h-full w-full"
          />
        </div>
        <Image
          src="/heroVector.png"
          alt="hero vector"
          width={1920}
          height={1080}
          className="h-[40%] top-[25%] lg:top-0 lg:h-full w-full absolute"
        />
      </div>
      <div className="relative mx-auto h-[75vh] md:h-[85vh] cursor-default select-none lg:h-screen w-screen  max-w-[1920px] overflow-x-hidden overflow-hidden">
        <div className="absolute left-0 right-0 top-0 z-40 flex justify-center ">
          <EventHome
            Classname="z-30 mt-[100px]"
            eventName="Kryptic Hunt"
            registrationLink="https://kryptic-hunt.mlsakiit.com/"
            registrationClosed={false}
            display={true}
            registrationName="Register Now"
          //rules="https://kryptic-hunt.mlsakiit.com/" // Add know rules link here        
          />
        </div>
        <div className="absolute left-0 right-0 top-20 smm:top-14 md:top-20 z-30 flex justify-center ">
          <EventHome
            Classname="z-30 mt-[100px]"
            eventName="Join our discord"
            registrationLink="https://discord.gg/BW28wXGfsZ"
            registrationClosed={false}
            registrationName="Discord"
            display={true}
          />
        </div>
        <div className="w-full text-[25px] sm:text-[30px] md:text-[40px] lg:text-[55px] xl:text-[70px] leading-[35px] sm:leading-[40px] md:leading-[50px] lg:leading-[70px] xl:leading-[90px] text-center absolute top-1/2 md:-translate-y-[5%] lg:-translate-y-[35%]">
          <div className="font-bold md:font-semibold flex justify-center">
            <span>Microsoft Learn</span>
            <span className="text-start w-[120px] sm:w-[160px] md:w-[230px] lg:w-[285px] xl:w-[360px]">
              <HeroTextAnimation texts={MlsaTexts} />
            </span>
          </div>
          <div className="flex flex-col mr-4 sm:mr-8 md:mr-16 lg:mr-18 xl:mr-20">
            <span className="font-bold md:font-semibold">Ambassadors</span>
            <span>KIIT Chapter</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;

