import { OUR_SPONSORS } from "@/constants";
import Image from "next/image";
import Link from "next/link";

const Sponsors = () => {
  return (
    <div className="mt-24 flex-col justify-around overflow-x-auto md:pl-8">
      <div className="mb-8 flex justify-center gap-3 text-3xl font-semibold">
        <div>Our Top</div>
        <div className="text-[#3B61CF]">Sponsors</div>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-12 px-10 pt-10">
        {OUR_SPONSORS.map((sponsor) => (
          <Link href={sponsor.site} key={sponsor.site} target="_blank">
            <Image
              src={sponsor.image}
              alt={sponsor.name}
              width={sponsor.w}
              height={sponsor.h}
            ></Image>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sponsors;
