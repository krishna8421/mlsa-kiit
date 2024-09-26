
import About from "@/components/About";

import { Analytics } from "@vercel/analytics/react"
// import OurAlumuni from "@/components/Alumni";
import Alumni1 from "@/components/Alm";
import JoinUs from "@/components/JoinUs";
import Leads from "@/components/LeadsAnimated";
// import Leads from "@/components/LeadsAnimated";
// import OurLeads from "@/components/OurLeads";
import Hero from "@/components/Hero";
import ScrollAnimationLead from "@/components/ScrollAnimationLeads";
import Domain from "@/components/Domain"
import CurrentLeads from "@/components/CurrentLeadsAnimated"



import ScrollAnimationCode from "@/components/ScrollAnimationCode";
import OurAlumuni from "@/components/Alumni";

export default function Home() {
  return (
    <div>
      <Hero />
      <Analytics />
      <About />
      <Domain />
      {/* <ScrollAnimationLead /> */}
      <CurrentLeads />
      <Leads />
      <JoinUs />
      <Alumni1 />
      <ScrollAnimationCode />
    </div>
  )
}

