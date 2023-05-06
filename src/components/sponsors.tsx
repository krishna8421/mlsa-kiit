import Image from "next/image";
import { OUR_SPONSORS } from "@/constants";
const sponsors = () => {
  return (
    <div className="flex-col justify-around">
      <div className="flex justify-center gap-3 text-[30px] font-semibold">
        <div>Our</div>
        <div className="text-[#3B61CF]">Sponsors</div>
      </div>
      <div className="flex flex-wrap content-center justify-around p-10">
        <Image
          src={OUR_SPONSORS[0].image}
          alt="snapchat"
          width={104}
          height={37}
          loading="eager"
        ></Image>
        <Image
          src={OUR_SPONSORS[1].image}
          alt="MLSA Logo"
          width={223}
          height={72}
          loading="eager"
        ></Image>
        <Image
          src={OUR_SPONSORS[2].image}
          alt="MLSA Logo"
          width={70}
          height={70}
          loading="eager"
        ></Image>
        <Image
          src={OUR_SPONSORS[3].image}
          alt="MLSA Logo"
          width={91}
          height={91}
          loading="eager"
        ></Image>
        <Image
          src={OUR_SPONSORS[4].image}
          alt="MLSA Logo"
          width={149}
          height={41}
          loading="eager"
        ></Image>
        <Image
          src={OUR_SPONSORS[5].image}
          alt="MLSA Logo"
          width={146}
          height={55}
          loading="eager"
        ></Image>
      </div>
    </div>
  );
};

export default sponsors;
