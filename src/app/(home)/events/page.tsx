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
        <div className="relative">
          <div className="mb-6 mt-20">
            <div className="xl:h-[451px] relative mt-16 h-[220px] md:h-[300px] lg:h-[400px] 2xl:h-[600px]">
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
                  <h1 className="cursor-default text-xl md:text-3xl 2xl:text-4xl">
                    Our <span className="text-[#286FD9]">Events</span>
                  </h1>
                  <Image
                    src="/projects/Arrow.png"
                    alt="projects heading arrow"
                    width={200}
                    height={200}
                    className="h-7 w-7 md:h-10 md:w-10"
                  ></Image>
                </div>
                <p className="mt-4 w-[70vw] text-sm font-normal md:text-xl lg:w-[542px] lg:text-2xl 2xl:w-[55vw]">
                  Success is a shared experience, and in a thriving community, successful events
                  become the cornerstone of progress and growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
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
            <span className="ml-2 text-[#286FD9]">Events</span>
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
