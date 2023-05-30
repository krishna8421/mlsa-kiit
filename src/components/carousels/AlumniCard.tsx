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
  height: 83,
  width: 83,
  objectFit: "cover",
  objectPosition: "center",
};

const AlumniCard = ({ image, name, position, company, message }: Props) => {
  return (
    <div className="mx-3 my-10 box-border flex  flex-grow-0 flex-col rounded-[8px] bg-white px-5 py-4 text-start font-sans font-normal shadow-gray transition duration-300  hover:shadow-blue sm:mr-0 sm:h-[249px] sm:w-[447px]">
      <div className="relative pb-7 ">
        <Image
          src={image}
          height={84}
          width={84}
          className=" absolute left-1 top-[-43%]  rounded-full "
          style={imgStyle}
          alt="name"
        />
        <div className="pl-28">
          <h1 className="text-lg sm:text-2xl ">{name}</h1>
          <h2 className="text-[15px] leading-6 sm:text-lg">{position}</h2>
          <h2 className=" text-lg leading-6">{company}</h2>
        </div>
      </div>
      <p className="text-xs leading-4 sm:text-lg sm:leading-6">{message}</p>
    </div>
  );
};

export default AlumniCard;
