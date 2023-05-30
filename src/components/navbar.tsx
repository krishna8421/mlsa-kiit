"use client";

import { YOUTUBE_URL } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import NavbarItem from "./NavbarItem";
import MobileView from "./MobileView";
import { VscChromeClose } from 'react-icons/vsc'

const OFFSET = 66;

const Navbar = () => {
  const [showBackground, setShowBackground] = useState(false);
  const [showMobileMenu , setShowmobileMenu] = useState(false)


  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= OFFSET) {
        setShowBackground(true);
      } else setShowBackground(false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMobileMenu = useCallback(() => {
    setShowmobileMenu((current) => !current)
  }, [])


  return (
    <nav
      className={`fixed left-0 right-0 top-0 z-40 m-auto w-screen max-w-[1920px] px-6 py-3 ${
        showBackground ? "backdrop-blur-md" : ""
      }`}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="/">
            <Image src="/mlsa-logo.png" alt="MLSA Logo" width={400} height={400} loading="eager"  className="w-[40px] h-[40px]"/>
          </Link>
          <span className="bg-gradient-to-r from-[#0070C5] to-[#3BABCF] bg-clip-text text-[20px] font-semibold text-transparent lg:text-[1.7vw]">
            MLSA <span className="hidden md:inline-block">KIIT</span>
          </span>
        </div>
        <div onClick={toggleMobileMenu}>
          {!showMobileMenu ? (
            <Image
              src="/menu_duo_alt.png"
              alt="navbar menu"
              width={200}
              height={200}
              className="h-6 w-6 md:hidden relative"
            ></Image>
          ): (
            <VscChromeClose />
          )}
          <MobileView visible={showMobileMenu}/>
        </div>
        <div className="hidden md:items-center gap-8 md:flex">
          <NavbarItem href="/events">Events</NavbarItem>
          <NavbarItem href="/projects">Projects</NavbarItem>
          <NavbarItem href="/blog">Blog</NavbarItem>
          <NavbarItem href="/gallery">Gallery</NavbarItem>
          <NavbarItem href="/teams">Teams</NavbarItem>
          <NavbarItem href={YOUTUBE_URL}>Youtube</NavbarItem>
          <NavbarItem href="/contact" type="button">Contact</NavbarItem>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;