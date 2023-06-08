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
    <div className="carousel-div  all mx-3 my-4 box-border h-[387px] min-h-[380px] w-[310px] overflow-hidden rounded-[10px] bg-white px-4 py-4 text-start shadow-gray hover:shadow-blue xsm:ml-6 sm:w-[324px]">
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
        <div className="mt-1 flex items-center text-sm leading-5 text-[#838383]">
          <BsCalendar4Week />
          <span className=" pl-1.5 ">{date}</span>
        </div>
      </div>

      <p className="overflow-hidden font-sans text-sm font-[350] leading-5">{summary}</p>
    </div>
  );
};

export default BlogsCard;
