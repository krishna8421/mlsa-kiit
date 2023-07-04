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
        className={`group rounded-xl bg-[#252525]/50 px-4 py-6 duration-400 transition shadow-lg hover:shadow-aboutContainerShadow ${Classname}`}
      >
        {/* <Image src="/Rectangle.png" alt="" width={700} height={700} className="absolute top-0"></Image> */}
        <div className="flex items-center justify-between">
          <div className="rounded-full bg-[#252525] px-4 py-4 md:px-5 md:py-5 text-[#3B61CF] shadow-aboutLogoShadowBlue duration-400 transition">
            <span>{icon}</span>
          </div>
          <div className="mr-2 h-[3px] md:h-[5px] w-full bg-gradient-to-l from-[#4b8ff4] to-transparent"></div>
          <div className="text-xl md:text-2xl text-white">{label}</div>
        </div>
        <p className="pt-8 text-[#7d8590] duration-400 transition text-base group-hover:text-white">
          {content}
        </p>
      </div>
    </>
  );
};

export default AboutCard;
