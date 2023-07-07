// <<<<<<< HEAD
// <<<<<<< HEAD
// import { Button } from "@nextui-org/button";
// import AlumuniCard from "@/components/AlumniCard";
// import OurAlumuni from "@/components/Alumni";

// export default function Home() {
//   return (
//     <main>
//       {/* Home page */}
//       {/* <Button color="primary">Click me</Button> */}
//       <OurAlumuni />
//     </main>
//   );
// =======
// import OurAlumuni from "@/components/Alumni";
// import ContactUs from "@/components/ContactUs";
// import Landing from "@/components/Landing";
// import ScrollAnimationCode from "@/components/ScrollAnimationCode";
// export default function Home(){
//   return (<div><Landing/>
//   <ContactUs/>
//   {/* <OurAlumuni/> */}
//   <ScrollAnimationCode/>
//   </div>);
// // >>>>>>> 52ec67a61a0921ec9574da54013d5a2f0c5cd574
// =======
import About from "@/components/About";
// import FeatureProject from "@/components/EventsHero";
import Hero from "@/components/Hero";
import ScrollAnimationCode from "@/components/ScrollAnimationCode";
export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      {/* <FeatureProject/> */}
      <ScrollAnimationCode />
    </div>
  );
// >>>>>>> b2b7caee71d5078d3f4c57ff0a0ad45539e8dc11
}
