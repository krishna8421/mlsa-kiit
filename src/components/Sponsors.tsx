import { OUR_SPONSORS } from "@/constants";

function Sponsors() {
  return (
    <div className="flex flex-col md:ml-20 overflow-x-hidden">
      <span className="text-4xl font-inter font-semibold capitalize">
        Our{' '}
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#21FD8B] to-[#2CC4F2]">
          Sponsors
        </span>
      </span>
      <div className="flex flex-wrap justify-center mt-[20px] ml-[-37px]">
        {OUR_SPONSORS.map((sponsor, index) => (
          <a
            key={index}
            href={sponsor.site}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center mx-12 my-4"
          >
            <img
              src={sponsor.image}
              alt={sponsor.name}
              width={sponsor.w}
              height={sponsor.h}
              className="grayscale-img hover:grayscale-0 max-w-full h-auto filter grayscale"
            />
          </a>
        ))}
      </div>
    </div>
  );
}

export default Sponsors;