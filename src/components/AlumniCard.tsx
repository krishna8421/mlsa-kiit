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
    <div className="text-black mx-3 my-10 box-border flex w-[600px]  flex-col rounded-[10px] bg-white px-5 py-4 text-start  font-sans font-normal">
      <div className="relative pb-7 flex ">
        <Image
          src={image}
          height={84}
          width={84}
          className="   rounded-full "
          style={imgStyle}
          alt="name"
        />
        <div className="">
          <h1 className="text-2xl ">{name}</h1>
          <h2 className="text-lg leading-6">{position}</h2>
          <h2 className=" text-lg leading-6">{company}</h2>
        </div>
      </div>
      <p className="text-lg leading-6">{message}</p>
    </div>
  );
};

export default AlumniCard;
