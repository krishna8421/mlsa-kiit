import EventSlideItem from "@/components/EventSlideItem";
import EventsHero from "@/components/EventsHero";
import { EVENTS2021, EVENTS2022, EVENTS2023, EVENTS2020 } from "@/constants";
import Image from "next/image";
import React from "react";
import { RiHeart2Fill } from "react-icons/ri";

interface eventLineProp {
  year: number;
  lineNum: number;
  yearLink: string;
}

const EventLine: React.FC<eventLineProp> = ({ year, lineNum, yearLink }) => {
  return (
    <div className="mx-auto flex w-[90vw] items-center justify-between">
      <div className="flex w-full items-center pr-8">
        <div className="flex h-[61px] w-[61px] items-center justify-center rounded-full bg-[#083475] text-white md:text-2xl lg:text-[25px] 2xl:text-[2.1vw]">
          {lineNum}
        </div>
        <div className="h-[3px] w-full bg-blue-line hover:bg-[#286FD9] "></div>
      </div>
      <div className="text-lg font-semibold">
        Year
        <span className="ml-2 text-[#286FD9]">{year}</span>
      </div>
    </div>
  );
};

const Events = () => {
  return (
    <>
      <div className="m-auto max-w-[1920px] px-4 md:px-6">
        <EventsHero
          eventName="Android Development Submit"
          eventDate="12 March 2023"
          lastDate="9 March 2023"
          isLive={true}
        />
        <div className="mt-16 flex items-center justify-center gap-8">
          <h1 className="font-semibold md:text-2xl  lg:text-[25px] 2xl:text-[2.1vw]">
            Our Past
            <span className="ml-2 text-[#286FD9]">Successful Events</span>
          </h1>
          <RiHeart2Fill className="text-lg text-[#286FD9]"></RiHeart2Fill>
        </div>
        <EventLine year={2023} lineNum={1} yearLink="" />
        <div className="mx-auto mb-8 mt-10 flex w-[1010px] flex-wrap gap-12 overflow-auto">
          <Image
            src="/eventImages/eventsBgLogo.png"
            alt="events design"
            width={600}
            height={600}
            className="absolute left-[-126px] z-[-10] h-[254px] w-[254px]"
          ></Image>
          {EVENTS2023.map((event, index) => (
            <EventSlideItem
              key={index}
              bgColor={event.bgColor}
              img={event.img}
              ProjectName={event.ProjectName}
              date={event.date}
              numParticipants={event.numParticipants}
              isButton={false}
              isHero={false}
              link=""
            ></EventSlideItem>
          ))}
        </div>
        <EventLine year={2022} lineNum={2} yearLink="" />
        <div className="relative mb-8 mt-10 w-full flex-wrap justify-center overflow-hidden">
          <div className="mx-auto flex w-[1010px] flex-wrap gap-12">
            <Image
              src="/eventImages/eventsBgLogo.png"
              alt="events design"
              width={600}
              height={600}
              className="absolute right-[-126px] z-[-10] h-[254px] w-[254px]"
            ></Image>
            {EVENTS2022.map((event, index) => (
              <EventSlideItem
                key={index}
                bgColor={event.bgColor}
                img={event.img}
                ProjectName={event.ProjectName}
                date={event.date}
                numParticipants={event.numParticipants}
                isButton={false}
                isHero={false}
                link=""
              ></EventSlideItem>
            ))}
          </div>
        </div>
        <EventLine year={2021} lineNum={3} yearLink="" />
        <div className="mb-8 mt-10 w-full flex-wrap justify-center overflow-hidden">
          <div className="mx-auto flex w-[1010px] flex-wrap gap-12">
            <Image
              src="/eventImages/eventsBgLogo.png"
              alt="events design"
              width={600}
              height={600}
              className="absolute left-[-126px] z-[-10] h-[254px] w-[254px] rotate-180"
              style={{ transformOrigin: "center", transform: "rotate(-90deg)" }}
            ></Image>
            {EVENTS2021.map((event, index) => (
              <EventSlideItem
                key={index}
                bgColor={event.bgColor}
                img={event.img}
                ProjectName={event.ProjectName}
                date={event.date}
                numParticipants={event.numParticipants}
                isButton={false}
                isHero={false}
                link=""
              ></EventSlideItem>
            ))}
          </div>
        </div>
        <EventLine year={2020} lineNum={4} yearLink="" />
        <div className="mb-8 mt-10 w-full flex-wrap justify-center overflow-hidden">
          <div className="mx-auto flex w-[1010px] flex-wrap gap-12">
            <Image
              src="/eventImages/eventsBgLogo.png"
              alt="events design"
              width={600}
              height={600}
              className="absolute left-[-126px] z-[-10] h-[254px] w-[254px] rotate-180"
              style={{ transformOrigin: "center", transform: "rotate(-90deg)" }}
            ></Image>
            {EVENTS2020.map((event, index) => (
              <EventSlideItem
                key={index}
                bgColor={event.bgColor}
                img={event.img}
                ProjectName={event.ProjectName}
                date={event.date}
                numParticipants={event.numParticipants}
                isButton={false}
                isHero={false}
                link=""
              ></EventSlideItem>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Events;