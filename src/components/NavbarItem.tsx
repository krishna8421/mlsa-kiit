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
          className={`2xl:text-[1vw] rounded-full bg-gradient-blue px-7 py-1.5 text-md bg-gradient-to-r from-[#0070C5] to-[#3BABCF] hover:from-[#1e00c7] hover:to-[#52a8ff]
          ${mobileView ? "text-white drop-shadow-md text-xl" : "text-white"}`}
        >
          {children}
        </button>
      </Link>
    );
  }
  // #0070C5
  return (
    <Link href={href} target={`${external ? "_blank" : ""}`}>
      <div className="flex flex-col items-center group">
        <div className="bg-white w-full h-[2px] -translate-y-[-10px] group-hover:-translate-y-0 opacity-0 group-hover:opacity-70 trasnition-opacity duration-300"></div>
        <div
          className={`2xl:text-[1vw] text-md  cursor-pointer text-sm md:px-2 lg:px-4 font-medium group-hover:bg-[#111]/40 py-1.5 transition duration-300 hover:duration-500 ease-in-out
        ${className} ${mobileView && "w-full text-center text-white text-xl"} 
      `}
        >
          {children}
        </div>
        <div className="bg-white w-full h-[2px] translate-y-[-10px] group-hover:translate-y-0 opacity-0 group-hover:opacity-70 trasnition-opacity duration-300"></div>

      </div>
    </Link>
  );
};

export default NavbarItem;
