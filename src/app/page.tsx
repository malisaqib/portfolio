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
    <div className="min-h-screen overflow-x-hidden bg-[radial-gradient(circle_at_50%_-12%,rgba(52,211,153,0.10),transparent_30%),#050505]">
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
