import { ILayoutProps } from "@/types";
import Link from "next/link";

interface NavbarItemProps extends ILayoutProps {
  href: string;
}

const NavbarItem = ({ children, href }: NavbarItemProps) => {
  return (
    <Link href={href}>
      <div className="cursor-pointer text-sm transition hover:text-gray-500 2xl:text-md">
        {children}
      </div>
    </Link>
  );
};

export default NavbarItem;
