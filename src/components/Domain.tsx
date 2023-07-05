import { OUR_DOMAINS } from "@/constants";
import Image from "next/image";
import DomainCard from "./DomainCard";

const Domain = () => {
  return (
    <>
    {/* <div className="mb-[100px] flex flex-col items-center justify-center">
      <h1 className="mb-12 text-center text-xl font-semibold md:mb-0 md:text-3xl lg:leading-[40px] 2xl:text-[2.1vw] 2xl:leading-[6vh]">
        Our <span className="text-[#3B61CF]">Domain</span>
      </h1>
      <div className="flex w-[325px] flex-wrap gap-7 md:w-[672px] lg:w-[1020px]">
        {OUR_DOMAINS.map((domain, index) => {
          return (
            <DomainCard
              key={index}
              logo={<Image src={domain.imgSrc} alt="support" width={500} height={500}></Image>}
              heading={domain.name}
              about={domain.about}
            ></DomainCard>
          );
        })}
      </div>
    </div> */}

<div className="min-h-[100px] h-auto md:pb-[222px] pb-[128px] relative z-0 flex flex-row max-w-[1920px] justify-center items-center mx-auto">
<div className="h-[439px] w-[439px] absolute z-10 rounded full -top-[300px] -left-[578px]">
<Image src="/domainLogos/Rectangle.png" alt="gradient" width={739} height={739} className="object-fit h-[739px] w-[739px] rounded-full bg-no-repeat object-cover blur-[155.5px]"></Image>
</div>
<div className="h-full ml-[7px] sm:ml-[31px] md:ml-[53px] 2xl:[120px] flex flex-col items-center ">
 <div className="md:w-[84px] md:h-[84px] w-[48] h-[48] border border-cyan-300">
    <Image src="/domainLogos/Dot.png" alt="no img" width={84} height={84} className="object-contain -scale-150 md:w-[84px] md:h-[84px] sm:w-[48] sm:h-[48] w-[35px] h-[35px]"></Image>
    </div>
  <div className="h-full  z-20 -mx-10 w-[2px] bg-[blue] ">

  </div>
</div>
<div className="">
<h1 className="sm:mb-[7px] ml-[11px] sm:ml-[15px] lg:ml-[30px] 2xl:ml-[53px] text-[12px] sm:text-[18px] font-semibold md:mb-[20px] md:text-3xl items-start text-[#FFFFFF] 2xl:text-[2.1vw] ">
  Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A03BCF] to-[#6F5BFF]">Domain</span>
</h1>
<div className="flex   flex-wrap gap-4 md:gap-5 2xl:gap-7 pl-[11px] sm:pl-[23px] md:pl-[36px] 2xl:pl-[77px]">
  {OUR_DOMAINS.map((domain, index) => {
    return (
      <DomainCard
        isHome={true}
        key={index}
        logo={<Image src={domain.imgSrc} alt="support" width={500} height={500}></Image>}
        heading={domain.name}
        about={domain.about}
      ></DomainCard>
    );
  })}
  
</div>
</div>
</div>
</>
  );
};

export default Domain;
