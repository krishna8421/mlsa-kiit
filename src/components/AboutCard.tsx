import React from "react";

type aboutCardProps = {
  icon: React.ReactNode;
  label: string;
  Classname: string;
  content: string;
};

const AboutCard = ({ icon, label, Classname, content }: aboutCardProps) => {
  return (
    <>
      <div
        className={`md:max-w-[400px] flex-shrink-0 lg:w-[30vw] lg:max-w-[350px] 2xl:max-w-[423px] xl:w-[23vw] group rounded-xl bg-[#252525]/50 px-4 py-8  duration-400 transition shadow-lg hover:shadow-aboutContainerShadow ${Classname}`}
      >
        {/* <Image src="/Rectangle.png" alt="" width={700} height={700} className="absolute top-0"></Image> */}
        <div className="flex items-center justify-between">
          <div className="rounded-full bg-[#252525] px-4 py-4 md:px-5 md:py-5 text-[#3B61CF] shadow-aboutLogoShadowBlue duration-400 transition">
            <span>{icon}</span>
          </div>
          <div className="mr-2 h-[3px] md:h-[5px] w-full bg-gradient-to-l from-[#4b8ff4] to-transparent"></div>
          <div className="text-xl md:text-2xl text-white 3xl:text-3xl">{label}</div>
        </div>
        <p className="pt-8 text-[#7d8590] duration-400 transition text-base xl:text-md group-hover:text-white 2xl:text-lg 3xl:text-xl">
          {content}
        </p>
      </div>
    </>
  );
};

export default AboutCard;
