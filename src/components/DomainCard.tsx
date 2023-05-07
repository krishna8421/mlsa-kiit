import React from "react";

interface domainDataProps {
  logo: React.ReactNode;
  heading: string;
  about: string;
}

const DomainCard: React.FC<domainDataProps> = ({ logo, heading, about }) => {
  return (
    <>
      <div className="relative mt-[50px] h-[260px] w-[320px] rounded-md pb-2 pt-3 shadow-gray transition duration-300 hover:shadow-blue md:mt-[100px]">
        <div className="absolute left-[12px] top-[-48px] flex h-[96px] w-[96px] cursor-pointer items-center justify-center rounded-full border-2 border-[#286FD9] bg-white px-5 py-5 text-[#3B61CF] md:px-6 md:py-4">
          {logo}
        </div>
        <h1 className="mr-[32px] text-end text-xl font-semibold text-[#286FD9]">{heading}</h1>
        <p className="ml-[25px] mt-[35px] h-[140px] w-[243px] text-[15px] leading-[20px] mr-0">
          {about}
        </p>
      </div>
    </>
  );
};

export default DomainCard;
