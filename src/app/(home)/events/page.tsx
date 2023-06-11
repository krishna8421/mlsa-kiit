import EventSlideItem from "@/components/EventSlideItem";
import { EVENTS2020, EVENTS2021, EVENTS2022, EVENTS2023 } from "@/constants";
import Image from "next/image";
import React from "react";
import { RiHeart2Fill } from "react-icons/ri";

interface eventLineProp {
  year: number;
  lineNum: number;
}

export const EventLine: React.FC<eventLineProp> = ({ year, lineNum }) => {
  return (
    <div className="mx-auto flex w-[95vw] items-center justify-between lg:w-[90vw]">
      <div className="flex w-full items-center pr-8">
        <div className="flex h-11 w-12 items-center justify-center rounded-[50%] bg-[#083475] text-white md:h-[61px] md:w-[61px] md:text-2xl lg:text-[25px] 2xl:text-[2.1vw]">
          {lineNum}
        </div>
        <div className="h-[3px] w-full bg-blue-line  "></div>
      </div>
      <div className="text-lg font-semibold">
        Year
        <span className="ml-2 text-[#286FD9]">{year}</span>
      </div>
    </div>
  );
};

const Events = () => {
  const eventSections = [
    { year: 2023, events: EVENTS2023 },
    { year: 2022, events: EVENTS2022 },
    { year: 2021, events: EVENTS2021 },
    { year: 2020, events: EVENTS2020 },
  ];

  return (
    <>
      <div className="m-auto max-w-[1920px]">
        {/* for live events */}
        {/* <EventsHero
          eventName="Android Development Submit"
          eventDate="12 March 2023"
          lastDate="9 March 2023"
          isLive={true}
        /> */}

        <div className="mb-4 mt-16 flex items-center justify-center gap-8 md:mb-0">
          <h1 className="font-semibold md:text-2xl lg:text-[25px] 2xl:text-[2.1vw]">
            Our Past
            <span className="ml-2 text-[#286FD9]">Successful Events</span>
          </h1>
          <RiHeart2Fill className="text-lg text-[#286FD9]" />
        </div>

        {eventSections.map((section, index) => (
          <React.Fragment key={index}>
            <EventLine year={section.year} lineNum={index + 1} />
            <div className="scrollbar mx-auto mb-8 mt-10 flex w-auto flex-wrap gap-8 overflow-auto px-4 md:gap-12 md:px-6  lg:w-[1010px] lg:flex-wrap lg:px-0">
              <Image
                src="/eventImages/eventsBgLogo.png"
                alt="events design"
                width={600}
                height={600}
                className={
                  section.year % 2 !== 0
                    ? "absolute left-[-126px] z-[-10] hidden h-[254px] w-[254px] md:block"
                    : "absolute right-[-126px] z-[-10] hidden h-[254px] w-[254px] md:block"
                }
              ></Image>
              {section.events.map((event, eventIndex) => (
                <EventSlideItem
                  key={eventIndex}
                  bgColor={event.bgColor}
                  img={event.img}
                  ProjectName={event.ProjectName}
                  date={event.date}
                  numParticipants={event.numParticipants}
                  isButton={false}
                  description={event.description}
                  isHero={false}
                  link=""
                />
              ))}
            </div>
          </React.Fragment>
        ))}
      </div>
    </>
  );
};

export default Events;
