import Image from "next/image";
import Link from "next/link";
import React from "react";

interface EventSlideItemProps {
  bgColor: string;
  img: string;
  ProjectName: string;
  date: any;
  numParticipants: string;
  link: string;
  isButton: boolean;
  isHero: boolean;
}

const EventSlideItem: React.FC<EventSlideItemProps> = ({
  bgColor,
  img,
  ProjectName,
  date,
  numParticipants,
  link,
  isButton,
  isHero,
}) => {
  const containerStyle = {
    width: "calc(100% - 16px)",
  };
  const mainDivBG = {
    backgroundColor: bgColor,
  };

  return (
    <div
      className={`${
        isHero ? "h-[230px] w-hero-width md:h-hero-height" : "h-event-height w-event-width"
      } rounded-xl`}
      style={mainDivBG}
    >
      <div className="mx-auto pt-2" style={containerStyle}>
        <Image
          src={img}
          alt="event item"
          width={1200}
          height={720}
          className={`h-[134px] w-full object-cover rounded-xl object-top ${isHero ? "h-[105px]":""}`}
        ></Image>
        <div className="ml-[12px] pt-3">
          <div>
            <h2 className="text-xs md:text-lg">{ProjectName}</h2>
            <div className="mt-1.5 flex flex-col text-xs font-[350] leading-[20px] md:text-[16px]">
              <span className="">{date}</span>
              <span className="">{numParticipants}</span>
            </div>
          </div>
          <div className="mt-3 cursor-pointer text-xs font-normal md:text-lg">
            <Link href={link}>
              {!isButton ? (
                <div className="hover:font-medium">View More</div>
              ) : (
                <button className="border-0 bg-none font-semibold text-[#3B61CF] outline-0">
                  Register Now
                </button>
              )}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventSlideItem;