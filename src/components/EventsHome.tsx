type eventHomeProps = {
  Classname: string;
  eventName: string;
  registrationClosed?: boolean;
};

const EventHome = ({ Classname, eventName, registrationClosed = false }: eventHomeProps) => {
  return (
    <div className={`mx-auto flex w-full justify-center ${Classname}`}>
      <div className="flex h-[50px] md:h-[65px] w-[95%] items-center justify-between rounded-md border-[1px] border-[#5f5f5f] bg-[#111111] bg-opacity-40 px-4 text-xl md:text-2xl">
        <div className="border-l-4 border-green-500 py-1 pl-4 text-white text-lg md:text-xl">{eventName}</div>
        <div className="cursor-pointer bg-gradient-to-r from-[#0070C5] to-[#3BABCF] bg-clip-text text-lg md:text-xl font-semibold text-transparent hover:from-[#3BABCF] hover:to-[#0070C5]">
          {registrationClosed ? "Registration Closed" : "Register Now"}
        </div>
      </div>
    </div>
  );
};

export default EventHome;
