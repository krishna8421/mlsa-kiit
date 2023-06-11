import Image from "next/image";
import Link from "next/link";
const ContactUs = () => {
  return (
    <div className="mt-32 flex w-full flex-col md:mt-36 md:h-[339px] md:flex-row ">
      <Image
        width={1920}
        height={1080}
        src="/Rectangle.png"
        alt="rectangle "
        className="w-full md:w-[47%]"
      />

      <div className=" bg-[#f4f4f4] md:w-[63%]">
        <div className="pl-8 pt-[70px] text-2xl font-bold md:pl-[90px]">
          <h1 className="text-[#286FD9]">Join</h1>
          <h1>
            Microsoft Learn <span className=" text-[#286FD9]">Student</span>
          </h1>
          <h1>Ambassador</h1>
          <h1 className="font-normal">KIIT Chapter</h1>
        </div>
        <Link href="/contact" className="">
          <button className="my-[24px] mb-16 ml-8 flex h-[44px] w-[151px] items-center justify-center whitespace-nowrap rounded-[100px] bg-gradient-blue px-7 py-[15px] font-normal text-white sm:text-xl md:ml-[82px]  lg:text-2xl ">
            Contact Us
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ContactUs;
