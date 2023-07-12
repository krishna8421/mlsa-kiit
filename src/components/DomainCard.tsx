import React from "react";


interface Props {
  isHome: boolean;
  logo: React.ReactNode | number;
  heading: string;
  about: string;
}

const DomainCard = ({ isHome,logo, heading, about }: Props) => {
  const logoTyp = typeof logo;
  return (
    <>
      {/* <div className="relative mt-[50px] h-[260px] w-[320px] rounded-md pb-2 pt-3 shadow-gray transition duration-300 hover:shadow-blue md:mt-[100px]">
        <div
          className={`${
            logoTyp === "number" ? " text-black" : "text-[#3B61CF]"
          } absolute left-[12px] top-[-48px] flex h-[96px] w-[96px] items-center justify-center rounded-full border-2 border-[#286FD9] bg-white px-5 py-5 text-4xl font-semibold  md:px-6 md:py-4`}
        >
          {logo}
        </div>
        <h1 className="mr-[32px] text-end text-xl font-semibold text-[#286FD9]">{heading}</h1>
        <p className="ml-[25px] mr-0 mt-[35px] h-[140px] w-[243px] text-[15px] leading-[20px]">
          {about}
        </p>
      </div> */}

<div
        className={`${
          isHome ? "4xl:h-[319px] 4xl:max-w-[450px] " : " h-[120%]"
        } relative group rounded-[5px]  lg:rounded-[8px] 2xl:rounded-[15px] pb-2 pt-[10.93px] pr-[6.53px] md:pr-[17px] bg-[#111]  border-[#838383] border gradient-border  transition duration-100 hover:shadow-blue h-180px md:h-[200px] xl:h-[235px] 2xl:h-[280px] 2xl:max-w-[380px] sm:max-w-[191px] max-w-[138px] h-[121px] md:max-w-[280px] lg:max-w-[280px] md:mt-[60px] 2xl:mt-[122px] sm:mt-[44px] mt-[38px] `}
      >
        <div
          className={`${
            logoTyp === "number"
              ? " lg:top-[-30px] lg:h-[58px] lg:w-[58px] lg:text-lg text-black"
              : " 2xl:top-[-48px] 2xl:h-[96px] 2xl:w-[96px] lg:text-4xl text-[#3B61CF] "
          } absolute left-[12px] sm:top-[-25px] sm:h-[50px] sm:w-[50px] h-[35px] w-[35px] top-[-17.5px] md:top-[-33px] md:h-[66px] md:w-[66px] flex items-center justify-center rounded-full md:border-2 border-[.5px] border-[#286FD9] bg-[#111111] sm:px-3 sm:py-3 px-2 py-1  font-semibold sm:text-2xl text-md lg:px-4 lg:py- 2xl:px-6 2xl:py-4`}
        >
          {logo}
        </div>
        <h1
          className={`${
            isHome ? "4xl:text-[35px] " : ""
          } text-[10px] sm:text-[13px] md:mr-[6.86px] sm:mr-[9px] mr-[2px] text-end md:font-semibold font-[350] text-transparent bg-clip-text bg-gradient-to-r from-[#286FD9] to-[#50CAFF]  2xl:text-[25px] md:text-[17px]`}
        >
          {heading}
        </h1>
        <p
          className={`${
            isHome ? "md:ml-[32px]  4xl:text-xl" : "mx-5  pb-5 text-xl "
          } ml-[9px] sm:ml-[12.92px] 2xl:mt-[46px] mb-1 lg:mt-[44px] md:mt-[35px] sm:mt-[25.83px] mt-[12.35px] 2xl:leading-[26.6px] md:leading-[15px] leading-normal font-light 2xl:text-[16px] md:text-[13px] text-[7px] text-[#c8c7c7]  transition duration-500 group-hover:text-[#FFFFFF]`}
        >
          {about}
        </p>
      </div>
    </>
  );
};

export default DomainCard;
