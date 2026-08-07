import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Photography from "@/components/Photography";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="top" className="pt-24 sm:pt-28">
        <About />
        <Projects />
        <Photography />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
