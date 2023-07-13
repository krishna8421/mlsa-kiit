import { ILayoutProps } from "@/types";
import Link from "next/link";

interface NavbarItemProps extends ILayoutProps {
  href: string;
  type?: "button" | "link";
  className?: string;
  mobileView?: boolean;
  external?: boolean;
}

const NavbarItem = ({
  children,
  href,
  type = "link",
  className = "",
  mobileView,
  external = false
}: NavbarItemProps) => {
  if (type === "button") {
    return (
      <Link href={href}>
        <button
          className={`2xl:text-[1vw] rounded-full bg-gradient-blue px-7 py-1.5 text-md bg-gradient-to-r from-[#0070C5] to-[#3BABCF] 
          ${mobileView ? "text-white drop-shadow-md" : "text-white"}`}
        >
          {children}
        </button>
      </Link>
    );
  }
  // #0070C5
  return (
    <Link href={href} target={`${external ? "_blank" : ""}`}>
      <div
        className={`2xl:text-[1vw] text-md  cursor-pointer rounded-lg text-sm p-2   transition hover:bg-[#ffffff33] font-semibold hover:text-[#0000008a]
        ${className} ${mobileView && "w-full text-center text-white"} 
      `}
      >
        {children}
      </div>
    </Link>
  );
};

export default NavbarItem;
