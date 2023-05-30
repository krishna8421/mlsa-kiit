import { ILayoutProps } from "@/types";
import Link from "next/link";

interface NavbarItemProps extends ILayoutProps {
  href: string;
  type?: "button" | "link";
  className?: string;
  mobileView?: boolean;
}

const NavbarItem = ({
  children,
  href,
  type = "link",
  className = "",
  mobileView,
}: NavbarItemProps) => {

  if (type === "button") {
    return (
      <Link href={href}>
        <button
          className={`2xl:text-md rounded-full bg-gradient-blue px-7 py-2 text-sm
          ${mobileView ? "drop-shadow-md": "text-white"}`}
        >
          {children}
        </button>
      </Link>
    );
  }

  return (
    <Link
      href={href}
    >
      <div
        className={`2xl:text-md  cursor-pointer text-sm transition hover:text-gray-500
        ${className} ${mobileView && "w-full text-center text-white"} 
      `}
      >
        {children}
      </div>
    </Link>
  );
};

export default NavbarItem;
