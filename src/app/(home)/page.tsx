
import About from "@/components/About";


// import OurAlumuni from "@/components/Alumni";
import Alumni1 from "@/components/Alm";
import JoinUs from "@/components/JoinUs";
import Leads from "@/components/LeadsAnimated";
import OurLeads from "@/components/OurLeads";
import Hero from "@/components/Hero";
import ScrollAnimationLead from "@/components/ScrollAnimationLeads";
import Domain from "@/components/Domain"



import ScrollAnimationCode from "@/components/ScrollAnimationCode";

export default function Home() {
  return (
    <div>
      <Hero />
      <About />

      <Domain />

      <Leads />
      <JoinUs />
      {/* <ScrollAnimationLead /> */}
      {/* <OurAlumuni/> */}
      <Alumni1 />
      {/* <ScrollAnimationCode/> */}



      <ScrollAnimationCode />

    </div>
  )
}

