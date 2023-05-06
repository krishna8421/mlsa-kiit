"use client";

import Image from "next/image";
import { BsCalendar4Week } from "react-icons/bs";
interface Props {
  image: string;
  title: string;
  date: string;
  message: string;
}
const imgStyle: any = {
  objectFit: "cover",
  objectPosition: "center",
};
const BlogsCard = ({ image, title, date, message }: Props) => {
  return (
    <div className="shadowCard mx-3 my-4 box-border h-[387px] w-[324] rounded-[10px] bg-white px-4 py-4 text-start">
      <div className=" pb-6">
        <Image
          src={image}
          height={157}
          width={100}
          className=" h-[157px] w-[291px] rounded-lg"
          style={imgStyle}
          alt="name"
        />
        <h1 className="pt-3 text-xl font-normal capitalize leading-7">{title}</h1>
        <div className="flex items-center text-[15px] leading-5 text-[#838383]">
          <BsCalendar4Week />
          <span className=" pl-1.5 ">{date}</span>
        </div>
      </div>

      <p className="font-sans text-base font-[350] leading-5">{message}</p>
    </div>
  );
};

export default BlogsCard;
