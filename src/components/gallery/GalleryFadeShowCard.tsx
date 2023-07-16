import "@/styles/globals.css";
import Image from "next/image";
import { useEffect, useState } from "react";
import { ProjectWing_GALLERY } from "./data";

type GalleryImage = {
  img: string;
};

type GalleryFadeShowCardProps = {
  imgArray: GalleryImage[];
  title: string,
  num: number,
  timer: number,
}

const GalleryFadeShowCard = ({ imgArray, title, num, timer }: GalleryFadeShowCardProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % ProjectWing_GALLERY.length);
    }, timer); // Set the desired interval time (in milliseconds)

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="relative h-[35vh] lg:h-[55vh] max-h-[600px] group overflow-hidden border border-gray-400 mb-[15px] w-full md:w-[40vw] lg:w-[22vw] 4xl:w-[400px] rounded-lg object-cover object-center">
      {imgArray.slice()
        .map((pic, index) => (
          <Image
            key={index}
            src={pic.img}
            alt={title}
            width={700}
            height={700}
            loading="lazy"
            className={`scale[80%] absolute inset-0 h-full group-hover:scale-105 transition-all opacity-1 duration-2000 ease-in-out w-full rounded-lg object-cover object-center transform
            ${index === currentIndex ? "opacity-1" : "opacity-0"}
          `}
          ></Image>
        ))}
      <div className="absolute bottom-0 h-[25%] w-full bg-gradient-to-t from-black to-transparent"></div>

      <div className="absolute inset-0 flex h-full w-full justify-between">
        <div className="self-end pb-4 pl-4 text-xl md:text-2xl xl:text-3xl font-medium">{title}</div>
        <div className="bg-gradient-to-l from-black to-transparent flex flex-col items-end justify-center gap-4">
          <div className="mr-[13px] h-[75%] w-[1px] bg-white opacity-50"></div>
          <div className="transform text-2xl md:text-3xl xl:text-4xl -rotate-90 number-gap font-bold text-gray-300">0{num}.</div>
        </div>
      </div>
    </div>
  );
};

export default GalleryFadeShowCard;