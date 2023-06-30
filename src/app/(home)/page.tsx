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
import OurAlumuni from "@/components/Alumni";
import ContactUs from "@/components/ContactUs";
import Landing from "@/components/Landing";
// import ScrollAnimationCode from "@/components/ScrollAnimationCode";
export default function Home(){
  return (<div><Landing/>
  <ContactUs/>
  <OurAlumuni/>
  </div>);
// >>>>>>> 52ec67a61a0921ec9574da54013d5a2f0c5cd574
}
