import { OUR_SPONSORS } from "@/constants";
import Image from "next/image";
import Link from "next/link";

const Sponsors = () => {
  return (
    <div className="mt-24 flex-col justify-around overflow-x-auto pl-8">
      <div className="flex justify-center gap-3 text-[30px] font-semibold">
        <div>Our</div>
        <div className="text-[#3B61CF]">Sponsors</div>
      </div>
      <div className="flex items-center justify-center gap-[43px] px-10 pt-10">
        <Link href={OUR_SPONSORS[0].site} target="_blank">
          <Image
            src={OUR_SPONSORS[0].image}
            alt="snapchat"
            width={500}
            height={500}
            loading="eager"
            className="aspect-w-16 aspect-h-9 h-[37px] w-[134px]"
          ></Image>
        </Link>
        <Link href={OUR_SPONSORS[1].site} target="_blank">
          <Image
            src={OUR_SPONSORS[1].image}
            alt="RedBull"
            width={500}
            height={500}
            loading="eager"
            className="aspect-w-16 aspect-h-9 h-[72px] w-[223px]"
          ></Image>
        </Link>
        <Link href={OUR_SPONSORS[2].site} target="_blank">
          <Image
            src={OUR_SPONSORS[2].image}
            alt="Snapchat"
            width={500}
            height={500}
            loading="eager"
            className="aspect-w-16 aspect-h-9 h-[85px] w-[128px]"
          ></Image>
        </Link>
        <Link href={OUR_SPONSORS[3].site} target="_blank">
          <Image
            src={OUR_SPONSORS[3].image}
            alt="MLSA Logo"
            width={91}
            height={91}
            loading="eager"
            className="aspect-w-16 aspect-h-9 h-[91px] w-[91px]"
          ></Image>
        </Link>
        <Link href={OUR_SPONSORS[4].site} target="_blank">
          <Image
            src={OUR_SPONSORS[4].image}
            alt="MLSA Logo"
            width={149}
            height={41}
            loading="eager"
            className="aspect-w-16 aspect-h-9 h-[41px] w-[149px]"
          ></Image>
        </Link>
        <Link href={OUR_SPONSORS[5].site} target="_blank">
          <Image
            src={OUR_SPONSORS[5].image}
            alt="MLSA Logo"
            width={146}
            height={55}
            loading="eager"
            className="aspect-w-16 aspect-h-9 h-[55px] w-[146px]"
          ></Image>
        </Link>
      </div>
    </div>
  );
};

export default Sponsors;
