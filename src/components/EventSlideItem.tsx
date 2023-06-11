import Image from "next/image";
import React from "react";

interface EventSlideItemProps {
  bgColor: string;
  img: string;
  ProjectName: string;
  date: any;
  numParticipants: string;
  link: string;
  description: string;
  isButton: boolean;
  isHero?: boolean;
}

const formatDate = (inputString: any) => {
  const regex = /(\b[A-Za-z]+)/g;
  const formattedString = inputString.replace(regex, (match: any) => {
    if (match.length > 1) {
      const firstLetter = match.charAt(0).toUpperCase();
      const restOfString = match.slice(1).toLowerCase();
      return `${firstLetter}${restOfString}`;
    }
    return match;
  });
  return formattedString;
};

const EventSlideItem: React.FC<EventSlideItemProps> = ({
  bgColor,
  img,
  ProjectName,
  date,
  numParticipants,
  link,
  description,
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
        isHero
          ? "h-[230px] w-hero-width md:h-hero-height"
          : "h-[200px] w-[159px] md:h-event-height md:w-event-width"
      } shrink-0 rounded-xl `}
      style={mainDivBG}
    >
      <div className="mx-auto pt-2" style={containerStyle}>
        <Image
          src={img}
          alt="event item"
          width={1200}
          height={720}
          className={`rounded-xl object-cover object-top ${
            isHero ? "h-[105px]" : "h-[71px] md:h-[134px]"
          }`}
        ></Image>
        <div className="ml-1 pt-3 md:ml-[16px]">
          <div>
            <h2 className="text-xs md:text-lg">{ProjectName}</h2>
            <div className="flex flex-col font-[450] leading-[20px] xsm:hidden md:text-[12px] lg:block lg:text-[14px] ">
              <span className="">{description}</span>
            </div>
            <div className="mt-1 flex text-xs font-[350] leading-[20px] xsm:flex-col md:text-[12px] lg:flex-row lg:justify-between lg:text-[12px]">
              <span className="">{formatDate(date)}</span>
              <span className=""> {formatDate(numParticipants)}</span>
            </div>
          </div>
          {/* <div className="mt-3 cursor-pointer text-xs font-normal md:text-lg">
            <Link href={link}>
              {!isButton ? (
                <div className="hover:font-medium">View More</div>
              ) : (
                <button className="border-0 bg-none font-semibold text-[#3B61CF] outline-0">
                  Register Now
                </button>
              )}
            </Link>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default EventSlideItem;
