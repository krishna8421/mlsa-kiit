import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Sponsors from "@/components/sponsors";

import { ILayoutProps } from "@/types";
export default function HomeLayout({ children }: ILayoutProps) {
  return (
    <>
      <Navbar />
      {children}
      <Sponsors />
      <Footer />
    </>
  );
}
