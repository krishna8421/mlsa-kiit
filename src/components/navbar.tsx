"use client";

import { YOUTUBE_URL } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import NavbarItem from "./NavbarItem";

const Navbar = () => {
  return (
    <nav className="fixed left-0 right-0 top-0 z-40 w-screen px-6 py-3 backdrop-blur-md">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="/">
            <Image src="/mlsa-logo.png" alt="MLSA Logo" width={40} height={40} loading="eager" />
          </Link>
        </div>
        <div className="hidden items-center gap-8 md:flex">
          <NavbarItem href="/events">Events</NavbarItem>
          <NavbarItem href="/projects">Projects</NavbarItem>
          <NavbarItem href="/blogs">Blog</NavbarItem>
          <NavbarItem href="/gallery">Gallery</NavbarItem>
          <NavbarItem href="/teams">Teams</NavbarItem>
          <NavbarItem href={YOUTUBE_URL}>Youtube</NavbarItem>
          <NavbarItem href="/contact" type="button">
            Contact
          </NavbarItem>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
