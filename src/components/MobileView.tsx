"use client";

import { YOUTUBE_URL } from "@/constants";
import NavbarItem from "./NavbarItem";

type MobileMenuProps = {
    visible?: boolean
}

const MobileView = ({visible}: MobileMenuProps) => {
    if (!visible) {
        return null;
    }
  return (
    <>
      <div className="fixed md:hidden font-semibold flex flex-col gap-2 right-[24px] pb-3 bg-gradient-blue w-[160px] mt-2 pt-2 text-center rounded-md">
        <NavbarItem href="/events" mobileView={true} >Events</NavbarItem>
        <NavbarItem href="/projects" mobileView={true}>Projects</NavbarItem>
        <NavbarItem href="/blogs" mobileView={true}>Blog</NavbarItem>
        <NavbarItem href="/gallerys" mobileView={true}>Gallery</NavbarItem>
        <NavbarItem href={YOUTUBE_URL} mobileView={true}>Youtube</NavbarItem>
        <NavbarItem href="/contact" type="button" mobileView={true}>
          Contact
        </NavbarItem>
      </div>
    </>
  );
};

export default MobileView;
