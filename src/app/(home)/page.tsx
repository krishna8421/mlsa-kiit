import About from "@/components/About";
import Domain from "@/components/Domain";
import Hero from "@/components/Hero";
import ScrollAnimationCode from "@/components/ScrollAnimationCode";
import ScrollAnimationLead from "@/components/ScrollAnimationLeads";
export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Domain />
      <ScrollAnimationLead/>
      <ScrollAnimationCode />
    </div>
  );
}
