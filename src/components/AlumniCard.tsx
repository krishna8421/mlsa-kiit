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
  height: 53,
  width: 53,
  objectFit: "cover",
  objectPosition: "center",
};

const AlumuniCard = ({ image, name, position, company, message }: Props) => {
  return (
    <div className=" w-[500px] h-[320px]">
      
      <div className="backdrop-blur-[5px]  hover:shadow-blue2 mx-3 my-24 box-border flex flex-col rounded-[10px] border-[1px] border-solid border-white bg-[#25252580] px-5 py-4 text-start font-sans  font-normal text-white">
        <div className="flex pb-7 ">
          <Image
            src={image}
            height={84}
            width={84}
            className="  rounded-full "
            style={imgStyle}
            alt="name"
          />
          <div className="pl-6">
            <h1 className="text-2xl ">{name}</h1>
            <h2 className="text-lg leading-6">
              {position} {company}
            </h2>
          </div>
        </div>
        <div className="flex px-3">
          <div className="h-[100px] w-[2px] bg-blue-600 text-blue-600">.</div>
          <p className="pl-5 text-lg leading-6">{message}</p>
        </div>
      </div>
      </div>
      
  );
};

export default AlumuniCard;
