import Hero from "@components/components/Hero";
import About from "@components/components/About";
import Projects from "@components/components/Projects";
import FloatingNav  from "@components/components/Floating-Navbar";
import Footer from "@components/components/Footer";
import Services from "@components/components/Services";

export default function Home() {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden bg-darkBlue">
    <FloatingNav/>
    <Hero/>
    <About/>
    <Projects />
    <Services/>
    <Footer />
    </main>
  );
}
