"use client";
import ContactUs from "@/components/ContactUs";
import OurAlumuni from "@/components/carousels/Alumuni";
import OurBlogs from "@/components/carousels/OurBlogs";
import OurLeads from "@/components/carousels/OurLeads";
export default function Home() {
  return (
    <main>
      <OurLeads />
      <ContactUs />
      <OurAlumuni />
      <OurBlogs />
    </main>
  );
}
