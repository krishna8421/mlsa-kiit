"use client";

import { YOUTUBE_URL } from "@/constants";
import Image from "next/image";
import NavbarItem from "./NavbarItem";

const Navbar = () => {
  return (
    <nav className="fixed left-0 right-0 top-0 z-40 w-screen px-6 py-3 backdrop-blur-md">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Image src="/mlsa-logo.png" alt="MLSA Logo" width={40} height={40} loading="eager" />
        </div>
        <div className="flex items-center gap-10 2xl:gap-[2.3vw]">
          <div className="hidden items-center gap-10 font-normal lg:flex">
            <NavbarItem href="/events">Events</NavbarItem>
            <NavbarItem href="/projects">Projects</NavbarItem>
            <NavbarItem href="/blogs">Blog</NavbarItem>
            <NavbarItem href="/gallery">Gallery</NavbarItem>
            <NavbarItem href="/teams">Teams</NavbarItem>
            <NavbarItem href={YOUTUBE_URL}>Youtube</NavbarItem>
          </div>
          <button className="2xl:text-md rounded-full bg-gradient-blue px-7 py-2 text-sm text-white">
            Contact
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
