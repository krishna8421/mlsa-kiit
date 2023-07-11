import { Just_Another_Hand } from "next/font/google";
import Image from "next/image";
import { BsCalendar4Week } from "react-icons/bs";
import { LuAlarmClock } from "react-icons/lu";
const anotherHand = Just_Another_Hand({
  subsets: ["latin"],
  weight: "400",
});
const EventHero = () => {
  return (
    <div className="relative">
      <div className=" no-repeat h-[92vh] w-full bg-[url('/EventHero.png')] bg-cover  bg-center bg-no-repeat">
        <div className="  mx-auto h-[100px] w-[93%]  text-right text-white">
          .
          <div className="  mx-auto mt-[5rem]  border-[1px] border-[#858585] border-solid flex items-center   justify-between rounded-xl bg-[#25252580] text-white shadow-gray  lg:w-[100%] ">
            <Image
              // src="/eventImages/android.png"
              src='/Mask.png'
              alt="feature Image"
              width={1000}
              height={1000}
              className="h-[125px]  w-[131px]  sm:ml-14 sm:h-[125px] sm:w-[130px] "
            />
            <div className="flex cursor-default flex-col  items-end justify-between pr-3 pt-3  text-right text-xl font-normal capitalize">
              <div className="flex flex-col">
                <h1 className="text-[15px] font-semibold leading-5 sm:text-2xl">
                  Android Development Submit
                </h1>

                <div className="my-2 flex items-center justify-end gap-1">
                  <BsCalendar4Week />
                  <p> 12 March 2023</p>
                </div>
                <div className="duration-50 mb-2 mt-1 h-[2px] w-[350px] bg-gradient-to-r from-transparent to-[#ffffff]  sm:my-3 "></div>
                <div className="flex items-center justify-end gap-1">
                  <LuAlarmClock />
                  <p className="text-xs sm:text-xl">9 march 2023</p>
                </div>

                <p className="py-3 text-xs font-[100px] sm:text-[18px]">Last day to register</p>
              </div>

              <button className=" mb-[15px]  flex  w-[35%] items-center justify-center whitespace-nowrap rounded-[100px] bg-gradient-to-r from-[#0070C5] to-[#3BABCF]   px-1 py-[4px] text-[15px]   ">
                Register Now
              </button>
            </div>
          </div>
          <div className={`${anotherHand.className} registerNow relative mr-[11%]  mt-6`}>
            <p className="text-[50px]">Register Now</p>
            <Image
              width={50}
              height={60}
              src="/arrow.svg"
              alt="arrow"
              className="absolute right-[-53px] top-[-22px]"
            />
          </div>

        </div>

      </div>
      <div className="text-left text-5xl capitalize  px-10 absolute bottom-[-3px] jj w-[100vw]">
        <h1 className="mx-[19px] bg-gradient-to-br from-[#5051F9]  to-[#DFDFFF] leading-20 font-semibold text-transparent bg-clip-text">Events</h1>
        <h2 className=" mx-[19px] text-[33px]">Our Past successfull events</h2>
      </div>
    </div>
  );
};

export default EventHero;
