import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import Philosophy from "@/components/Philosophy";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Expertise from "@/components/Expertise";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen font-sans overflow-hidden selection:bg-[#E86C3F] selection:text-white">
      
      <Hero />
      
      <Intro />
      
      <Philosophy />
      
      <Projects />

      {/* Education and Expertise share a grid container */}
      <section className="px-4 md:px-12 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 my-24">
        <Education />
        <Expertise />
      </section>

      <Experience />
      
      <Skills />
      
      <Footer />

    </main>
  );
}