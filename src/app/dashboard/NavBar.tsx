"use client";

import Image from "next/image";
import Link from "next/link";
import { Avatar, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from "@nextui-org/react";
import { signOut } from "next-auth/react";
import { UserWithoutPassword } from "@/types";
import { useRouter } from "next/navigation";

interface IProps {
  user: UserWithoutPassword;
}

const Navbar = ({ user }: IProps) => {
  const router = useRouter();
  return (
    <nav
      className="fixed left-0 right-0 top-0 z-40  w-screen max-w-full py-4 pl-2 pr-4 sm:pl-4 sm:pr-6 lg:pl-6 lg:pr-10 lg:max-w-[1920px] backdrop-blur-md"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="/">
            <Image
              src="/mscNewLogo.png"
              alt="MLSA Logo"
              width={400}
              height={400}
              loading="eager"
              className="h-[35px] w-[140px] md:h-[40px] md:w-[160px] lg:h-[50px] lg:w-[197px]"
            />
          </Link>
        </div>
        <Dropdown>
          <DropdownTrigger>
            <Avatar
              as="button"
              className="transition-transform"
              color="primary"
              isBordered
              radius="full"
              src={`${user.githubUrl}.png` || "/mlsa-logo.png"}
            />
          </DropdownTrigger>
          <DropdownMenu aria-label="User Actions">
            <DropdownItem
              key="dashboard"
              className="h-14 gap-2"
              color="primary"
              onPress={() => router.push("/dashboard")}
            >
              <p className="font-bold">Signed in as</p>
              <p className="font-bold">{user.personalEmail}</p>
            </DropdownItem>
            <DropdownItem key="my-details" onPress={() => router.push("/dashboard/my-details")} >
              My Details
            </DropdownItem>
            <DropdownItem key="qrcode" onPress={() => router.push("/dashboard/qrcode")} >
              QR Code
            </DropdownItem>
            <DropdownItem key="contact-us" onPress={() => router.push("/contact-us")} >
              Contact Us
            </DropdownItem>
            <DropdownItem key="logout" color="danger" onPress={() => signOut()}>
              Log Out
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
    </nav >
  );
};

export default Navbar;
