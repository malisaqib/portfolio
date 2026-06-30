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
    <div className="min-h-screen overflow-x-hidden bg-[radial-gradient(circle_at_50%_-20%,rgba(52,211,153,0.12),transparent_34%),linear-gradient(180deg,#050505_0%,#08100d_42%,#050505_100%)]">
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
