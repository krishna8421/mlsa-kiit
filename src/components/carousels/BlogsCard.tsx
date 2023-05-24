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
    <div className="carousel-div mx-3 my-4 box-border rounded-[10px] bg-white px-4 py-4 text-start shadow-gray transition duration-300 hover:shadow-blue sm:h-[387px] sm:w-[324px]">
      <div className=" pb-6">
        <Image
          src={image}
          height={700}
          width={700}
          className=" h-[157px] w-[99%] rounded-lg"
          style={imgStyle}
          alt="name"
        />
        <h1 className="pt-3 text-xl font-normal capitalize leading-7">{title}</h1>
        <div className="flex items-center text-[15px] leading-5 text-[#838383]">
          <BsCalendar4Week />
          <span className=" pl-1.5 ">{date}</span>
        </div>
      </div>

      <p className="font-sans text-sm font-[350] leading-5 sm:text-base">{message}</p>
    </div>
  );
};

export default BlogsCard;
