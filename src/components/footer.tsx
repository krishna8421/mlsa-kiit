import Image from "next/image";
import { TWITTER_URL, INSTAGRAM_URL, LINKEDIN_URL } from "@/constants";
const Footer = () => {
  return (
    <div className="fix bottom-0 ml-8 flex gap-24">
      <div className="flex h-20 gap-4">
        <Image src="/mlsa-logo.png" alt="MLSA Logo" width={72} height={82} loading="eager" />
        <div className="flex-col">
          <div className="bg-gradient-to-r from-[#0070C5] to-[#3BABCF] bg-clip-text text-2xl font-semibold text-transparent">
            MLSA
            <div className="bg-gradient-to-r from-[#0070C5] to-[#3BABCF] bg-clip-text text-xs font-semibold text-transparent">
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
          <div className="bg-gradient-to-r from-[#286FD9] to-[#286FD9] bg-clip-text font-semibold text-transparent">
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
          <div className="bg-gradient-to-r from-[#286FD9] to-[#286FD9] bg-clip-text font-semibold text-transparent">
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
          <div className="bg-gradient-to-r from-[#286FD9] to-[#286FD9] bg-clip-text font-semibold text-transparent">
            Us
          </div>
          <div>At</div>
        </div>
        <div className="mt-2">KIIT University</div>
        <div className="mt-1">Odisha</div>
        <div className="mt-1">India</div>
      </div>
    </div>
  );
};

export default Footer;
