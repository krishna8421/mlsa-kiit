"use client";

import BlogsItem from "@/components/BlogsItem";
import Image from "next/image";
import { useState } from "react";
import blog from "./blog.json";

const generateBlogItems = (startIndex: number, endIndex: number) => {
  const isFirstPair = startIndex % 4 === 3 && endIndex % 4 === 0;
  const firstDivWidth = isFirstPair ? "w-[40%]" : "w-[60%]";
  const secondDivWidth = isFirstPair ? "w-[60%]" : "w-[40%]";

  if (endIndex >= blog.length) {
    // Render only the first item if there is no pair
    return (
      <div key={startIndex} className="mx-auto flex flex-col gap-4 lg:w-[1050px] lg:flex-row" >
        <div className={`lg:${firstDivWidth} w-screen lg:min-w-[420px]`}>
          <BlogsItem classname="h-[350px] w-full" data={blog[startIndex]} />
        </div>
      </div>
    );
  }

  // Render both items in a pair
  return (
    <div key={startIndex} className="mx-auto flex flex-col gap-4 lg:w-[1050px] lg:flex-row">
      <div className={`lg:${firstDivWidth} w-screen lg:min-w-[420px]`}>
        <BlogsItem classname="h-[350px] w-full" data={blog[startIndex]} />
      </div>
      <div className={`lg:${secondDivWidth} w-screen lg:min-w-[420px]`} >
        <BlogsItem classname="h-[350px] w-full" data={blog[endIndex]} />
      </div>
    </div>
  );
};

const Blogs = () => {
  const [showMoreClick, setShowMoreClick] = useState(6);

  const changeShowMore = () => {
    setShowMoreClick(showMoreClick + 6);
  };

  return (
    <>
      <div className="mx-auto max-w-[1920px]">
        <Image
          src="/blogs/blogsHero.png"
          alt="blog image"
          width={1440}
          height={720}
          quality={100}
          className="mt-[64px] h-[200px] w-[100vw] object-cover"
        ></Image>
        <hr className="my-4 mt-16" />
        <div className="flex flex-col gap-4">
          <BlogsItem
            blogContent="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis consectetur earum
              minus, modi eaque rerum distinctio tempore excepturi animi. Quibusdam dolore cum
              architecto?"
            isMain={true}
            classname="h-[450px] mx-auto"
            data={blog[0]}
          />
          {blog.map((_, index) => {
            if (index % 2 === 1 && index + 1 < showMoreClick) {
              return generateBlogItems(index, index + 1);
            } else {
              return null;
            }
          })}
        </div>
        <div className="mx-auto mt-[90px] flex w-screen items-center">
          <div className="h-[1px] w-[100%] bg-gray-300"></div>
          <div
            className={`flex-shrink-0 cursor-pointer rounded-md bg-[#3B61CF] px-4 py-1 text-lg text-white ${
              showMoreClick >= blog.length ? "bg-gray-500" : ""
            }`}
            onClick={changeShowMore}
          >
            View More
          </div>
          <div className="h-[1px] w-[100%] bg-gray-300"></div>
        </div>
      </div>
    </>
  );
};

export default Blogs;
