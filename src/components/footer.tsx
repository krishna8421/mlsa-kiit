import { INSTAGRAM_URL, LINKEDIN_URL, TWITTER_URL } from "@/constants";
import Image from "next/image";

const Footer = () => {
  return (
    <div>
    <div className="ml-8 flex gap-24">
      <div className="flex gap-4">
        <div className="flex-col justify-center">
          <Image src="/mlsa-logo.png" alt="MLSA Logo" width={72} height={82} loading="eager" />
          <div className="flex justify-center content-center mt-3 ">
            <svg width="2" height="209" viewBox="0 0 2 209" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1.5V208" stroke="url(#paint0_linear_277_89)" stroke-width="2" stroke-linecap="round"/>
            <defs>
            <linearGradient id="paint0_linear_277_89" x1="1" y1="1.49998" x2="1" y2="207" gradientUnits="userSpaceOnUse">
            <stop stop-color="#286FD9"/>
            <stop offset="1" stop-color="#286FD9" stop-opacity="0"/>
            </linearGradient>
            </defs>
            </svg>
          </div>
        </div>
        <div className="flex-col">
          <div className="text-2xl font-semibold text-[#286FD9]">
            MLSA
            <div className="text-[#0070C5] text-xs font-semibold">
              We encourage young minds <br /> to pursue knowledge and <br /> excellence in unique
              ways.
            </div>
          </div>
        </div>
      </div>
      <div className="flex-col text-xl font-normal ">
        <div className="flex gap-2 text-2xl font-semibold">
          {" "}
          <div> Follow </div>
          <div className="font-semibold text-[#286FD9]">
            Us
          </div>
        </div>
        <div className="mt-2">
          <a href={INSTAGRAM_URL}>Instagram</a>
        </div>
        <div className="mt-1">
          <a href={LINKEDIN_URL}>LinkedIn</a>
        </div>
        <div className=" mt-1">
          <a href={TWITTER_URL}>Twitter</a>
        </div>
      </div>
      <div className="flex-col text-xl font-normal">
        <div className="flex gap-2 text-2xl font-semibold">
          {" "}
          <div>Contact </div>
          <div className="font-semibold text-[#286FD9]">
            Us
          </div>
        </div>
        <div className=" mt-2">T : +91 080045 09825</div>
        <div className=" mt-1">F : +91 080031 99063</div>
        <div className=" mt-1">E : MSCKIIT@OUTLOOK.COM</div>
      </div>
      <div className="flex-col text-xl font-normal ">
        <div className="flex gap-2 text-2xl font-semibold">
          {" "}
          <div>Visit </div>
          <div className="font-semibold text-[#286FD9]">
            Us
          </div>
          <div>At</div>
        </div>
        <div className="mt-2">KIIT University</div>
        <div className="mt-1">Odisha</div>
        <div className="mt-1">India</div>
      </div>
    </div>
    <div className="flex-col justfy-center content-center font-[12px]">
    <div className="flex justify-center">© 2023 mLSAKIIT</div>
    <div className="flex justify-center">Designed by MSC KIIT DESIGN TEAM</div>
    </div>
    </div>
  );
};

export default Footer;

