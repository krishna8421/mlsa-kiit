
import About from "@/components/About";

// import OurAlumuni from "@/components/Alumni";
import Alumni1 from "@/components/Alm";
import JoinUs from "@/components/JoinUs";
import Hero from "@/components/Hero";
import Domain from "@/components/Domain"
import ScrollAnimationCode from "@/components/ScrollAnimationCode";
export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Domain/>
      <JoinUs/>
      {/* <OurAlumuni/> */}
      <Alumni1/>
      <ScrollAnimationCode/>
    </div>
  ) 
}

