import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { ILayoutProps } from "@/types";

export default function HomeLayout({ children }: ILayoutProps) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
