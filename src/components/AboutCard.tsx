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
        className={`md:max-w-[330px] md:w-[35vw] flex-shrink-0 lg:w-[30vw] lg:max-w-[350px] sm:max-w-[500px] 3xl:max-w-[423px] xl:w-[20vw] lg:min-w-[280px] w-full group rounded-xl bg-[#252525]/50 px-4 py-3 md:py-6 lg:py-4 duration-400 transition shadow-lg hover:shadow-aboutContainerShadow ${Classname}`}
      >
        {/* <Image src="/Rectangle.png" alt="" width={700} height={700} className="absolute top-0"></Image> */}
        <div className="flex items-center justify-between">
          <div className="rounded-full bg-[#252525] px-4 py-4 md:px-5 md:py-5 text-[#3B61CF] md:shadow-aboutLogoShadowBlue duration-400 transition shadow-mobileAboutShadow">
            <span>{icon}</span>
          </div>
          <div className="mr-2 h-[3px] md:h-[5px] w-full bg-gradient-to-l from-[#4b8ff4] to-transparent"></div>
          <div className="text-xl md:text-2xl text-white 3xl:text-3xl">{label}</div>
        </div>
        <p className="cursor-default pt-4 md:pt-8 text-[#7d8590] duration-400 transition text-base group-hover:text-white 3xl:text-lg leading-[25px]">
          {content}
        </p>
      </div>
    </>
  );
};

export default AboutCard;
