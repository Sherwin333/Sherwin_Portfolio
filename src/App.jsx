import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Education from "./components/Education"; // ✅ new import
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollProgress from "./components/ScrollProgress";
import Preloader from "./components/Preloader";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <Preloader />
      ) : (
        <>
          <ScrollProgress />
          <Navbar />
          <main className="pt-20">
            <Hero />
            <Skills />
            <About />
            <Education /> {/* ✅ new section added here */}
            <Projects />
            <Contact />
          </main>
          <Footer />
        </>
      )}
    </>
  );
}
