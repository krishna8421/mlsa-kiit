import Image from "next/image";
import Link from "next/link";
const ContactUs = () => {
  return (
    <div className="mt-36 flex h-[339px] mr-10 items-center ">
      <div className="w-[63%] ">
        <div className="pl-[80px] pt-[70px] text-[45px] font-bold">
          <h1 className="text-[#286FD9]">Join</h1>
          <div className="mt-2 h-[2px] w-[78%] bg-gradient-blue text-blue-500">.</div>
          <h1>
            Micrsoft Learn <span className=" text-[#286FD9]">Student</span>
          </h1>
          <h1>Amabasder</h1>
          <h1 className="font-normal">KIIT Chapter</h1>
        </div>
        <Link href="#" className="">
          <button className="text-md my-[15px] ml-[82px]  flex items-center justify-center whitespace-nowrap rounded-[100px]  bg-gradient-blue px-4 py-[7px]  text-white ">
            Contact Us
          </button>
        </Link>
      </div>
      <Image width={300} height={300} src="/mlsaLogo.png" alt="rectangle " className="w-[40%] h-[40%]" />
    </div>
  );
};

export default ContactUs;
