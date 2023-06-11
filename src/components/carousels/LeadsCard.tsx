"use client";
import Image from "next/image";
interface Props {
  image: string;
  name: string;
  domain: string;
  message: string;
  link: string;
}
const imgStyle: any = {
  // height: 150,
  // width: 280,
  objectPosition: "center",
  objectFit: "cover",
};
const LeadsCard = ({ image, name, domain, message, link }: Props) => {
  return (
    <div className="carouselDiv  mt-2 box-border flex w-[330px] gap-x-[18px] rounded-[10px]  bg-white px-6 py-4 text-start font-sans font-normal shadow-gray transition duration-300 hover:shadow-blue lg:w-[400px] ">
      <Image
        src={image}
        style={imgStyle}
        className=" h-[150px] w-[150px] rounded-lg "
        width={700}
        height={700}
        alt="name"
      />
      <div className="flex flex-col  justify-center text-start">
        <a href={link} target="_blank">
          <h1 className="text-2xl font-bold leading-8 hover:cursor-pointer">{name}</h1>
        </a>
        <p className="mb-2 text-xl leading-[27px]">{domain}</p>
        {/* <p className="text-[15px] capitalize leading-5">{message}</p> */}
      </div>
    </div>
  );
};

export default LeadsCard;
