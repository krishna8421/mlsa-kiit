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
        className={`${
          isHome ? "h-[260px] w-[320px] " : " h-[120%] shadow-blue"
        } relative mt-[50px] rounded-md pb-2 pt-3 shadow-gray transition duration-300 hover:shadow-blue sm:h-[260px] sm:w-[320px] md:mt-[100px]`}
      >
        <div
          className={`${
            logoTyp === "number"
              ? " top-[-30px] h-[58px] w-[58px]    text-lg text-black"
              : "[96px] top-[-48px] h-[96px] w-[96px]  text-4xl text-[#3B61CF] "
          } absolute left-[12px] flex items-center justify-center rounded-full border-2 border-[#286FD9] bg-white px-5 py-5 font-semibold sm:top-[-48px] sm:h-[96px] sm:w-[96px] sm:text-4xl  md:px-6 md:py-4`}
        >
          {logo}
        </div>
        <h1
          className={`${
            isHome ? "text-xl" : "text-[15px]"
          } mr-[32px] text-end font-semibold  text-[#286FD9] sm:text-xl`}
        >
          {heading}
        </h1>
        <p
          className={`${
            isHome ? "ml-[25px] mr-0 h-[140px] w-[243px] text-[15px]" : "mx-5  pb-5 text-[12px] "
          } mt-[35px] leading-[20px] sm:ml-[25px] sm:mr-0 sm:h-[140px] sm:w-[243px]  sm:text-[15px]`}
        >
          {about}
        </p>
      </div>
    </>
  );
};

export default DomainCard;
