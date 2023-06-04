import Image from "next/image";
import React from "react";
import { RxCalendar } from "react-icons/rx";
import Link from "next/link";

interface EventsHeroProps {
  eventName: string;
  eventDate: string;
  lastDate: string;
  isLive: boolean;
}

const EventsHero: React.FC<EventsHeroProps> = ({ eventName, eventDate, lastDate, isLive }) => {
  return (
    <div className="relative mx-auto mt-[8rem] h-[200px] md:h-[275px] w-[98vw] max-w-[1920px] rounded-xl ">
      <Image
        src="/EventHeroAndroid.png"
        alt="Event Hero Android Image"
        width={1920}
        height={1080}
        className="absolute left-0 top-0 h-full object-cover md:w-full"
      ></Image>
      <Image
        src="/EventHero.png"
        alt="Event Hero Image"
        width={1920}
        height={1080}
        className="absolute left-0 top-0 h-full w-full "
      ></Image>
      {isLive && (
        <div className="absolute flex items-center gap-1.5 px-1.5 py-1.5">
          <div className="h-[15px] w-[15px] rounded-full bg-[#F94545]"></div>
          <div className="text-lg text-[#F94545]">LIVE</div>
        </div>
      )}
      <div className="absolute right-0 top-0 flex flex-col justify-end px-7 py-6 text-right">
        <h1 className="font-semibold text-white md:text-2xl  lg:text-[25px] 2xl:text-4xl 2xl:mb-2">
          {eventName}
        </h1>
        <div className="flex items-center justify-end gap-2.5">
          <RxCalendar className="text-2xl text-white"></RxCalendar>
          <h1 className="mt-1 font-normal text-white md:text-2xl lg:text-[25px] 2xl:text-3xl ">
            {eventDate}
          </h1>
        </div>
        <div className="duration-50 mb-2 md:mb-[21px] mt-2 md:mt-3.5 h-[2px] self-end w-[70vw] md:w-[50vw] lg:w-[30vw] 2xl:mb-2 2xl:mt-2  bg-white-line transition hover:bg-white"></div>
        <div className="flex items-center justify-end gap-2.5">
          <RxCalendar className="text-2xl text-white"></RxCalendar>
          <h1 className="font-normal text-white md:text-2xl lg:text-[25px] 2xl:text-3xl">
            {lastDate}
          </h1>
        </div>
        <h3 className="text-lg text-white">Last day to register</h3>
        <div className="mt-2 md:mt-5 flex justify-end">
          <Link href="">
            <button className="h-7 w-[105px] md:h-[45px] md:w-[170px] rounded-full bg-gradient-green md:px-[27px] md:py-[8px] text-xs md:text-lg text-white">
              Register Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EventsHero;
