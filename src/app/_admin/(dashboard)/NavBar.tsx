"use client";

import Logo from "@/components/Logo";
import { Avatar, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from "@nextui-org/react";
import { User } from "@prisma/client";
import { signOut } from "next-auth/react";

interface IProps {
  user: User;
}

const NavBar = ({ user }: IProps) => {
  console.log(user);
  return (
    <nav className="flex items-center justify-between border-b border-gray-700 p-4">
      <Logo />
      <Dropdown>
        <DropdownTrigger>
          <Avatar
            as="button"
            className="transition-transform"
            color="primary"
            isBordered
            radius="full"
            src={`${user.githubUrl}.png`}
          />
        </DropdownTrigger>
        <DropdownMenu aria-label="User Actions">
          <DropdownItem
            key="profile"
            className="h-14 gap-2"
          // startContent=
          >
            <p className="font-bold">Signed in as</p>
            <p className="font-bold">{user.personalEmail}</p>
          </DropdownItem>
          {/* <DropdownItem key="settings" showDivider> */}
          <DropdownItem key="settings" >
            Settings
          </DropdownItem>
          <DropdownItem key="team_settings">Team Settings</DropdownItem>
          {/* <DropdownItem key="analytics" showDivider> */}
          <DropdownItem key="analytics" >
            Analytics
          </DropdownItem>
          <DropdownItem key="system">System</DropdownItem>
          <DropdownItem key="configurations">Configurations</DropdownItem>
          {/* <DropdownItem key="help_and_feedback" showDivider> */}
          <DropdownItem key="help_and_feedback" >
            Help & Feedback
          </DropdownItem>
          {/* <DropdownItem key="logout" showDivider color="danger" onPress={() => signOut()}> */}
          <DropdownItem key="logout"  color="danger" onPress={() => signOut()}>
            Log Out
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </nav>
  );
};

export default NavBar;
