"use client";

import { Avatar } from "@nextui-org/react";
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem} from "@nextui-org/react";
import Logo from "@/components/Logo"


const NavBar = () => {
  return (
    <nav className="flex justify-between items-center p-4 border-b border-gray-700">
      <Logo/>
      <Dropdown>
      <DropdownTrigger>
      <Avatar className="cursor-pointer" color="primary" isBordered radius="full" src="https://github.com/krishna8421.png" />
      </DropdownTrigger>
      <DropdownMenu aria-label="Static Actions">
        <DropdownItem key="new">New file</DropdownItem>
        <DropdownItem key="copy">Copy link</DropdownItem>
        <DropdownItem key="edit">Edit file</DropdownItem>
        <DropdownItem key="delete" className="text-danger" color="danger">
          Delete file
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
    </nav>
  );
};

export default NavBar;
