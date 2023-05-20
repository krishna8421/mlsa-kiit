"use client";
import Image from "next/image";
import Link from "next/link";
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
    <div className="carousel-div m-3 box-border flex w-[447px] gap-x-[18px] rounded-[10px] bg-white px-6 py-4 text-start font-sans font-normal shadow-gray transition duration-300 hover:shadow-blue">
      <Image
        src={image}
        style={imgStyle}
        className=" h-[150px] w-[150px] rounded-lg "
        width={700}
        height={700}
        alt="name"
      />
      <div className="flex flex-col  justify-center text-start">
        <Link href={link}>
          <h1 className="text-2xl leading-8">{name}</h1>
        </Link>
        <p className="mb-2 text-xl leading-[27px]">{domain}</p>
        <p className="text-[15px] capitalize leading-5">{message}</p>
      </div>
    </div>
  );
};

export default LeadsCard;
