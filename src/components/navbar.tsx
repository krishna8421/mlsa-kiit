import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-4">
      <div className="flex items-center gap-4">
        <Image src="/mlsa-logo.png" alt="MLSA Logo" width={40} height={40} loading="eager" />
        <span className="bg-gradient-to-r from-[#0070C5] to-[#3BABCF] bg-clip-text text-2xl font-semibold text-transparent">
          MLSA KIIT
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
