import { OUR_DOMAINS } from "@/constants";
import Image from "next/image";
import DomainCard from "./DomainCard";

const Domain = () => {
  return (
    <div className="mb-[100px] flex flex-col items-center justify-center">
      <h1 className="text-center text-3xl font-semibold lg:leading-[40px] 2xl:text-[2.1vw] 2xl:leading-[6vh]">
        Our <span className="text-[#3B61CF]">Domain</span>
      </h1>
      <div className="flex w-[325px] flex-wrap gap-7 md:w-[672px] lg:w-[1020px]">
        {OUR_DOMAINS.map((domain, index) => {
          return (
            <DomainCard
              key={index}
              logo={<Image src={domain.imgSrc} alt="support" width={50} height={50}></Image>}
              heading={domain.name}
              about={domain.about}
            ></DomainCard>
          );
        })}
      </div>
    </div>
  );
};

export default Domain;
