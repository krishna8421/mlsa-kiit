"use client";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Domain from "@/components/Domain";
import ContactUs from "@/components/ContactUs";
import OurAlumuni from "@/components/carousels/Alumuni";
import OurBlogs from "@/components/carousels/OurBlogs";
import OurLeads from "@/components/carousels/OurLeads";
import { Outdent } from "lucide-react";
import Sponsors from "@/components/Sponsors";

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
