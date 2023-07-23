import React from "react";

interface Props {
  isHome: boolean;
  logo: React.ReactNode | number;
  heading: string;
  about: string;
}

const DomainCard = ({ isHome, logo, heading, about }: Props) => {
  const logoTyp = typeof logo;
  return (
    <>
      <div
        className={`${isHome ? "4xl:h-[319px] 4xl:max-w-[475px] " : " h-[120%] shadow-blue"
          } relative group transition duration-200 rounded-[8px] 2xl:rounded-[15px] pb-1 pt-[10.93px] pr-[6.53px] md:pr-[17px] bg-[#111]  border-[#838383] border gradient-border   hover:shadow-blue  2xl:min-h-[280px] 2xl:max-w-[370px] w-[93%]  md:max-w-[300px] xl:max-w-[300px] md:mt-[60px] 2xl:mt-[122px] sm:mt-[44px] mt-[38px] `}
      >
        <div
          className={`${logoTyp === "number"
            ? " lg:top-[-30px] lg:h-[58px] lg:w-[58px] lg:text-lg text-black"
            : " 2xl:top-[-48px] 2xl:h-[96px] 2xl:w-[96px] lg:text-4xl text-[#3B61CF] "
            } absolute left-[12px] top-[-33px] h-[66px] w-[66px] flex items-center justify-center rounded-full border-2 border-[#286FD9] bg-[#111111] px-3 py-3  font-semibold sm:text-2xl text-md lg:px-4  2xl:px-6 2xl:py-4`}
        >
          {logo}
        </div>
        <h1
          className={`${isHome ? "4xl:text-4xl 4xl:h-[3rem] " : ""
            } md:mr-[6.86px] sm:mr-[9px] mr-[2px] text-end  md:font-semibold font-[550] text-transparent bg-clip-text bg-gradient-to-r from-[#286FD9] to-[#50CAFF]  md:text-2xl text-xl`}
        >
          {heading}
        </h1>
        <p
          className={`${isHome ? "md:ml-[32px]  4xl:text-xl" : "mx-5  text-xl "
            } ml-[9px] sm:ml-[12.92px]  2xl:mt-[46px] mb-1 lg:mt-[44px] md:mt-[35px] sm:mt-[25.83px] mt-[12.35px] text-[#7d8590] duration-400 transition text-base group-hover:text-white 4xl:text-lg leading-[25px]`}
        >
          {about}
        </p>
      </div>
    </>
  );
};

export default DomainCard;