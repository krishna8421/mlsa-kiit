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
        <div className="pl-8 md:pl-[90px] pt-[70px] text-2xl font-bold">
          <h1 className="text-[#286FD9]">Join</h1>
          <h1>
            Micrsoft Learn <span className=" text-[#286FD9]">Student</span>
          </h1>
          <h1>Amabasder</h1>
          <h1 className="font-normal">KIIT Chapter</h1>
        </div>
        <Link href="#" className="">
          <button className="my-[24px] mb-16 ml-8 md:ml-[82px] flex h-[44px] w-[151px] items-center justify-center whitespace-nowrap rounded-[100px] bg-gradient-blue  px-7 py-[15px] text-2xl  text-white ">
            Contact Us
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ContactUs;

