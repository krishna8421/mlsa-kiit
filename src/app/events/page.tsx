import React from "react";
import EventSlideItem from "@/components/EventSlideItem";
import EventsHero from "@/components/EventsHero";
import Navbar from "@/components/navbar";
import Link from "next/link";
import { RiHeart2Fill } from "react-icons/ri";

interface eventLineProp {
  year: number;
  lineNum: number;
  yearLink: string;
}

const EventLine: React.FC<eventLineProp> = ({ year, lineNum, yearLink }) => {
  return (
    <div className="ml-12 mr-[100px] flex items-center justify-between">
      <div className="flex w-full items-center pr-8">
        <div className="flex h-[61px] w-[61px] items-center justify-center rounded-full bg-[#083475] text-white md:text-2xl lg:text-[25px] 2xl:text-[2.1vw]">
          {lineNum}
        </div>
        <div className="h-[3px]  w-full bg-blue-line hover:bg-[#286FD9]"></div>
      </div>
      <div className="text-lg font-semibold">
        Year
        <Link href={yearLink}>
          <span className="ml-2 cursor-pointer text-[#286FD9] hover:text-[#1d55a9]">{year}</span>
        </Link>
      </div>
    </div>
  );
};

const Events = () => {
  return (
    <>
      <Navbar />
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
      <div className="mb-8 mt-10 w-full justify-center">
        <div className="mx-auto flex w-[1010px] gap-12">
          <EventSlideItem
            bgColor="#9CE7FF"
            img="/eventImages/img1.png"
            ProjectName="Flutter Verse 1.0"
            date="1st-28th Feb 2022"
            numParticipants="280+ participants"
            isButton={false}
            isHero={false}
            link=""
          ></EventSlideItem>
          <EventSlideItem
            bgColor="#9CFFE1"
            img="/eventImages/img2.png"
            ProjectName="Flutter Verse 1.0"
            date="1st-28th Feb 2022"
            numParticipants="280+ participants"
            isButton={false}
            isHero={false}
            link=""
          ></EventSlideItem>
          <EventSlideItem
            bgColor="#FFCC9C"
            img="/eventImages/img3.png"
            ProjectName="Flutter Verse 1.0"
            date="1st-28th Feb 2022"
            numParticipants="280+ participants"
            isButton={false}
            isHero={false}
            link=""
          ></EventSlideItem>
        </div>
      </div>
      <EventLine year={2022} lineNum={2} yearLink="" />
      <div className="mb-8 mt-10 w-full justify-center">
        <div className="mx-auto flex w-[1010px] gap-12">
          <EventSlideItem
            bgColor="#DBAEFF"
            img="/eventImages/img4.png"
            ProjectName="Flutter Verse 1.0"
            date="1st-28th Feb 2022"
            numParticipants="280+ participants"
            isButton={false}
            isHero={false}
            link=""
          ></EventSlideItem>
          <EventSlideItem
            bgColor="#9CE1FF"
            img="/eventImages/img5.png"
            ProjectName="Flutter Verse 1.0"
            date="1st-28th Feb 2022"
            numParticipants="280+ participants"
            isButton={false}
            isHero={false}
            link=""
          ></EventSlideItem>
          <EventSlideItem
            bgColor="#D9FF9C"
            img="/eventImages/img6.png"
            ProjectName="Flutter Verse 1.0"
            date="1st-28th Feb 2022"
            numParticipants="280+ participants"
            isButton={false}
            isHero={false}
            link=""
          ></EventSlideItem>
        </div>
      </div>
      <EventLine year={2021} lineNum={3} yearLink="" />
      <div className="mb-8 mt-10 w-full justify-center">
        <div className="mx-auto flex w-[1010px] gap-12">
          <EventSlideItem
            bgColor="#DBAEFF"
            img="/eventImages/img7.png"
            ProjectName="Flutter Verse 1.0"
            date="1st-28th Feb 2022"
            numParticipants="280+ participants"
            isButton={false}
            isHero={false}
            link=""
          ></EventSlideItem>
          <EventSlideItem
            bgColor="#9CE1FF"
            img="/eventImages/img8.png"
            ProjectName="Flutter Verse 1.0"
            date="1st-28th Feb 2022"
            numParticipants="280+ participants"
            isButton={false}
            isHero={false}
            link=""
          ></EventSlideItem>
          <EventSlideItem
            bgColor="#D9FF9C"
            img="/eventImages/img9.png"
            ProjectName="Flutter Verse 1.0"
            date="1st-28th Feb 2022"
            numParticipants="280+ participants"
            isButton={false}
            isHero={false}
            link=""
          ></EventSlideItem>
        </div>
      </div>
    </>
  );
};

export default Events;
