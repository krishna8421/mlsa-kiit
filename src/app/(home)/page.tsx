"use client";
import About from "@/components/About";
import ContactUs from "@/components/ContactUs";
import Domain from "@/components/Domain";
import Hero from "@/components/Hero";
import Sponsors from "@/components/Sponsors";
import OurAlumni from "@/components/carousels/Alumni";
import OurBlogs from "@/components/carousels/OurBlogs";
import OurLeads from "@/components/carousels/OurLeads";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <About />
      <Domain />
      <OurLeads />
      <ContactUs />
      <OurAlumni />
      <OurBlogs />
      <Sponsors />
    </main>
  );
}
