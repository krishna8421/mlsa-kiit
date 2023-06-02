"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

type blogsItemsProps = {
  classname: string;
  isMain?: boolean;
  data: any;
  blogContent?: string;
};

const BlogsItem = ({ classname, isMain = false, data, blogContent }: blogsItemsProps) => {
  const [checkImageUrl, setCheckImageUrl] = useState(false);
  useEffect(() => {
    if (data.img.length === 0) {
      setCheckImageUrl(true);
    }
  }, [data.img]);

  return (
    <>
      <div className={`relative mx-auto max-w-[1050px] ${checkImageUrl ? "bg-gray-700" : ""}`}>
        <Link href={data.link} target="_blank">
          <div className="group">
            <Image
              src={!checkImageUrl ? data.img : "/grayImage.jpg"}
              alt="blog image"
              width={1920}
              height={1080}
              quality={100}
              className={`object-cover brightness-[70%] lg:max-w-[1050px] ${classname}`}
            ></Image>
            <div className="absolute right-0 top-0 z-30 hidden h-full w-[40%] items-center justify-center overflow-x-hidden bg-black opacity-[70%] transition-all duration-500 ">
              <span className="text-2xl font-semibold text-[#3162f3] transition-all duration-500 md:text-3xl lg:text-4xl">
                Read Me
              </span>
            </div>
            <div
              className={`absolute bottom-0 mb-4 ml-4 lg:ml-12 ${!isMain ? "bottom-[10%]" : ""}`}
            >
              <h1 className="w-[90%] text-2xl font-semibold text-white md:text-3xl lg:w-[80%] lg:text-4xl 3xl:text-[2.5vw]">
                {data.title}
                <span className="text-[#557df6]"></span>
              </h1>
              {isMain && (
                <>
                  <p className="mt-2 text-xl font-medium text-white sm:w-[80%] md:text-2xl lg:w-[60%] lg:text-2xl 3xl:text-[2vw]">
                    {blogContent}
                  </p>
                </>
              )}
              <div className="ml-1 mt-4 flex items-center text-base text-white">
                <span>{data.writer}</span>
                <div className="ml-3 h-2 w-2 rounded-full bg-white"></div>
                <span className="ml-1">{data.date}</span>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default BlogsItem;
