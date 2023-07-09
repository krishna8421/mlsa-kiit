"use client";

import Image from "next/image";
interface Props {
  image: string;
  name: string;
  position: string;
  company: string;
  message: string;
}
const imgStyle: any = {
  // height: 53,
  // width: 53,
  objectFit: "cover",
  objectPosition: "center",
};

const AlumuniCard = ({ image, name, position, company, message }: Props) => {
  return (
    <div className=" w-[270px] md:w-[480px] mx-8 sm:mx-6 md:mx-10 h-[150px] md:h-[320px]">
      
      <div className="backdrop-blur-[5px] h-[109px] md:h-[240px] overflow-hidden hover:shadow-blue2 mx-1 md:mx-3 my-10 md:my-24 box-border flex flex-col rounded-[10px] border-[1px] border-solid border-white bg-[#25252580] px-4 md:px-5 py-4 text-start font-sans  font-normal text-white">
        <div>
        <div className="flex pb-[17px] md:pb-7 ">
          <Image
            src={image}
            height={84}
            width={84}
            className="  md:h-[53px] md:w-[53px] h-[20px] w-[20px] rounded-full "
            style={imgStyle}
            alt="name"
          />
          <div className="pl-[14px] md:pl-6">
            <h1 className="text-[10px] md:text-2xl ">{name}</h1>
            <h2 className="text-[9px] md:text-lg md:leading-6">
              {position} {company}
            </h2>
          </div>
        </div>
        <div className="flex relative  md:px-3">
          <div className=" h-[35px] md:h-24 w-[2px] bg-blue-600 text-blue-600">.</div>
          <p className="pl-5 text-[7px] md:text-base md:leading-6">{message}</p>
        </div>
      </div>
      </div>
      </div>
      
  );
};

export default AlumuniCard;
