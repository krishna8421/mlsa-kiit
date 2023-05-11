"use client";
import About from "@/components/About";
import ContactUs from "@/components/ContactUs";
import Domain from "@/components/Domain";
import Hero from "@/components/Hero";
import Sponsors from "@/components/Sponsors";
import OurAlumuni from "@/components/carousels/Alumuni";
import OurBlogs from "@/components/carousels/OurBlogs";
import OurLeads from "@/components/carousels/OurLeads";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <div className="overflow-x-hidden">
        <Hero />
        <About />
        <Domain />
      </div>
      <OurLeads />
      <ContactUs />
      <OurAlumuni />
      <OurBlogs />
      <Sponsors />
    </main>
  );
}
