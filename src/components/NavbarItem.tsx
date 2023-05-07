import React from "react";

interface NavbarItemsProps {
  item: string;
}

const NavbarItem: React.FC<NavbarItemsProps> = ({ item }) => {
  return (
    <div className="cursor-pointer text-sm transition hover:text-gray-500 2xl:text-[1vw]">
      {item}
    </div>
  );
};

export default NavbarItem;
