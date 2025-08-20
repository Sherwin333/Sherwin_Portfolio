import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <main className="pt-20"> {/* push content below sticky nav */}
        <Hero />
        <Skills />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
