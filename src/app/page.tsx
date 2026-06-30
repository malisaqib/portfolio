import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Experience } from "@/components/Experience";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Projects } from "@/components/Projects";
import { StackSection } from "@/components/StackSection";

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[linear-gradient(180deg,#050505_0%,#07110d_45%,#050505_100%)]">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <StackSection />
        <Experience />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
