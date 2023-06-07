"use client";
import Image from "next/image";
import Link from "next/link";
import { BsCalendar4Week } from "react-icons/bs";

interface Props {
  img: string;
  title: string;
  date: string;
  summary?: string;
  link: string;
}
const imgStyle: any = {
  objectFit: "cover",
  objectPosition: "center",
};
const BlogsCard = ({ date, img, title, summary, link }: Props) => {
  return (
    <div className="carousel-div  mx-3 my-4 box-border w-[310px] overflow-hidden rounded-[10px] bg-white px-4 py-4 text-start shadow-gray all hover:shadow-blue h-[387px] min-h-[380px] sm:w-[324px]">
      <div className="pb-4">
        <Link href={link} target="_blank">
          <Image
            src={img}
            height={700}
            width={700}
            className=" h-[157px] w-[99%] rounded-lg"
            style={imgStyle}
            alt="name"
          />
          <h1 className="pt-3 text-xl font-normal capitalize leading-7">{title}</h1>
        </Link>
        <div className="flex items-center text-sm mt-1 leading-5 text-[#838383]">
          <BsCalendar4Week />
          <span className=" pl-1.5 ">{date}</span>
        </div>
      </div>

      <p className="font-sans text-sm font-[350] leading-5 overflow-hidden">{summary}</p>
    </div>
  );
};

export default BlogsCard;
