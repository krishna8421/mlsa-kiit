import Link from "next/link";

type eventHomeProps = {
  Classname: string;
  eventName: string;
  registrationClosed?: boolean;
  registrationName?: string;
  registrationLink?: string;
  display?: boolean;
  rules?: string;
  discord?: string;
};

const EventHome = ({
  Classname,
  eventName,
  registrationName,
  registrationClosed = true,
  display = true,
  registrationLink,
  rules,
}: eventHomeProps) => {
  return (
    <div
      className={`flex w-full justify-center px-4 sm:pl-6 sm:pr-6 lg:pl-8 lg:pr-10 ${Classname}`}
    >
      <div className="flex w-full items-center justify-between rounded-md border-[1px] border-[#5f5f5f] bg-[#111111] bg-opacity-40 px-4 py-2 text-xl md:h-[65px] md:py-0 md:text-2xl">
        <div
          className={`cursor-default border-l-4 border-green-500 py-1 pl-4 font-semibold  text-white
          ${display ? "text-base" : "text-lg md:text-xl 2xl:text-[1.4vw] 3xl:text-[25px]"} 
        `}
        >
          {eventName}
        </div>
        <div className=" flex flex-row gap-4 sm:text-xs md:text-xs">
          <div
            className={`3xl:text-[25px block cursor-pointer bg-gradient-to-r from-[#0070C5] to-[#3BABCF] bg-clip-text text-lg font-semibold text-transparent hover:from-[#3BABCF] hover:to-[#0070C5] md:text-xl
        2xl:text-[1.4vw]
      `}
          >
            <Link href={`${rules}`} target="_blank">
              {" "}
              {rules ? "Rules" : ""}
            </Link>
          </div>
          <div
            className={`3xl:text-[25px block cursor-pointer bg-gradient-to-r from-[#0070C5] to-[#3BABCF] bg-clip-text text-lg font-semibold  text-transparent hover:from-[#3BABCF] hover:to-[#0070C5] md:text-xl 2xl:text-[1.4vw]
          `}
          >
            <Link href={`${registrationLink}`}>
              {registrationClosed ? "Registeration Closed" : `${registrationName}`}
            </Link>
          </div>
          <div className={`cursor-pointer bg-gradient-to-r from-[#0070C5] to-[#3BABCF] bg-clip-text text-lg md:text-xl 2xl:text-[1.4vw] 3xl:text-[25px font-semibold text-transparent hover:from-[#3BABCF] hover:to-[#0070C5]
        block
      `}>
            {/*           <Link href={"https://forms.office.com/r/DvkW3C0Ff0"}>{registrationClosed ? "Register Now" : "Registeration Closed"}</Link> */}


          </div>
        </div>
      </div>
    </div>
  );
};

export default EventHome;
