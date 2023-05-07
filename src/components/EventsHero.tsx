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
    <div className="relative mx-auto mt-[8rem] h-[275px] w-[98vw] rounded-xl ">
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
        className="absolute left-0 top-0 h-full w-full"
      ></Image>
      {isLive && (
        <div className="absolute flex items-center gap-1.5 px-1.5 py-1.5">
          <div className="h-[15px] w-[15px] rounded-full bg-[#F94545]"></div>
          <div className="text-lg text-[#F94545]">LIVE</div>
        </div>
      )}
      <div className="absolute right-0 top-0 flex flex-col justify-end px-7 py-6 text-right">
        <h1 className="font-semibold text-white md:text-2xl  lg:text-[25px] 2xl:text-[2.1vw]">
          {eventName}
        </h1>
        <div className="flex items-center justify-end gap-2.5">
          <RxCalendar className="text-2xl text-white"></RxCalendar>
          <h1 className="mt-1 font-normal text-white md:text-2xl lg:text-[25px] 2xl:text-[2.1vw] ">
            {eventDate}
          </h1>
        </div>
        <div className="duration-50 mb-[21px] mt-3.5 h-[2px] w-[382px] bg-white-line transition hover:bg-white"></div>
        <div className="flex items-center justify-end gap-2.5">
          <RxCalendar className="text-2xl text-white"></RxCalendar>
          <h1 className="font-normal text-white md:text-2xl lg:text-[25px] 2xl:text-[2.1vw]">
            {lastDate}
          </h1>
        </div>
        <h3 className="text-lg text-white">Last day to register</h3>
        <div className="mt-[18px] flex justify-end">
          <Link href="">
            <button className="h-[45px] w-[170px] rounded-full bg-gradient-green px-[27px] py-[8px] text-lg text-white">
              Register Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EventsHero;
