import Hero from "@/components/Hero";
import About from "@/components/About";
import Domain from "@/components/Domain";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <div className="text-black text-xl">
        <Hero />
        <About />
        <Domain />
      </div>
    </main>
  );
}
