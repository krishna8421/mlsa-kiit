import Image from "next/image";
import Link from "next/link";
import React from "react";
import {  FaDiscord, FaGithub, FaInstagram, FaLinkedinIn, FaPhoneAlt, FaRegCopyright, FaTwitter } from "react-icons/fa";
import { HiMail } from "react-icons/hi";

type socialsProps = {
  logo: React.ReactNode
  src: string,
}

const Socials = ({ logo, src }: socialsProps) => {
  return (
    <Link href={src} target="_blank">
      <div className="w-[50px] h-[50px] bg-transparent border-transparent border-2 rounded-full flex justify-center items-center hover:border-[#d7d3d3] transition duration-1000">
        {logo}
      </div>
    </Link>

  )
}

const Footer = () => {
  return (
    <>
      <div id="footer" className="bg-[#111111] bg-opacity-70 custom-font tracking-[3px] pb-8">
        <div className="max-w-[1500px] mx-auto text-[#e7e4e4]">
          <div className="flex flex-col md:flex-row gap-8 md:gap-0 px-2 sm:px-4 justify-between  xl:px-16 py-8 md:py-6 xl:py-8">
            <div className="md:w-[50%] xl:w-[60%] flex flex-col items-center md:items-start">
              <Image
                src="/mlsaLogo.png"
                alt="footer logo"
                width={200}
                height={200}
                className=""
              ></Image>
              <p className="mt-4 ml-2.5 text-xs lg:text-sm text-center md:text-start">WE ENCOURAGE YOUNG MINDS TO<br/>PURSUE KNOWLEDGE AND EXCELLENCE <br/>IN UNIQUE WAYS </p>
              <div className="flex gap-2 mt-8 justify-center md:justify-normal">
                <Socials
                  logo={<FaGithub />}
                  src="https://github.com/MLSAKIIT"
                />
                <Socials
                  logo={<FaTwitter />}
                  src="https://x.com/mlsakiit"
                />
                <Socials
                  logo={<FaInstagram />}
                  src="https://www.instagram.com/mlsakiit/"
                />
                <Socials
                  logo={<FaLinkedinIn />}
                  src="https://www.linkedin.com/company/msckiit/mycompany/"
                />
                <Socials
                  logo={<FaDiscord />}
                  src="https://discord.com/invite/P6VCP2Ry3q"
                />
              </div>
            </div>
            <div className="flex flex-col sm:flex-row md:flex-col gap-8 md:gap-8 lg:flex-row text-center sm:text-start md:text-justify md:w-[300px] lg:w-[40%] sm:justify-around lg:items-center ">
              <div className="text-xs tracking-[2px] flex flex-col gap-[5px] font-medium items-center sm:items-start">
                <h1 className="text-base mb-2 font-bold">CONTACT US</h1>
                <span className="flex items-center gap-2 group">
                  <FaPhoneAlt className="group-hover:text-[#0070C5]" />
                  <p>+91 9835990548</p>
                </span>
                <span className="flex items-center gap-2 group">
                  <FaPhoneAlt className="group-hover:text-[#0070C5]" />
                  <p>+91 7631999254</p>
                </span>
                <span className="flex items-center gap-2 group">
                  <HiMail className="group-hover:text-[#0070C5]" />
                  <p>MlSAKIIT@OUTLOOK.COM</p>
                </span>
              </div>
              <div className="flex flex-col gap-1.5 text-xs tracking-[2px] font-medium">
                <h1 className="mb-1 text-base font-bold">VISIT US AT</h1>
                <p className="leading-[20px]">
                  KIIT UNIVERSITY<br />
                  ODISHA<br />
                  INDIA<br />
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-4">
            <div className="flex flex-col md:flex-row gap-1 md:gap-4 text-xs text-[#9e9b9b] tracking-[2px]">
              <span className="flex gap-2 items-center justify-center md:justify-start">
                <FaRegCopyright />
                <p className="text-center">2023 MLSA KIIT</p>
              </span>
              <span className="hidden md:block"> | </span>
              <p>DESIGNED BY MLSA KIIT TEAM</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
};

export default Footer;