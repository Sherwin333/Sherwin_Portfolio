import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { SiHackerrank } from "react-icons/si";
import { useEffect, useState } from "react";

export default function Hero() {
  // Typewriter effect roles
  const roles = ["Software Developer", "Full-Stack Engineer", "AI Enthusiast"];
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  // Smooth scroll helper
  const scrollToSection = (id) => {
    const section = document.querySelector(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[90vh] flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16 px-6 py-16 overflow-hidden"
    >
      {/* Background gradient blobs */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-fuchsia-600/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-indigo-600/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>

      {/* Left: Intro */}
      <motion.div
        className="max-w-xl text-center md:text-left relative z-10"
        initial={{ opacity: 0, x: -24 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <p className="text-sm tracking-wider text-gray-400 uppercase">
          Developer • React • Full-Stack • Python
        </p>

        <h1 className="mt-2 text-4xl md:text-6xl font-extrabold leading-tight">
          Hi, I’m{" "}
          <span className="bg-gradient-to-r from-fuchsia-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
            Sherwin
          </span>
          .
          <br />
          <motion.span
            key={currentRole}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-indigo-400"
          >
            {roles[currentRole]}
          </motion.span>
        </h1>

        <p className="mt-4 text-gray-300 text-lg">
          I craft interactive, modern, and scalable web experiences.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col md:flex-row items-center gap-4 justify-center md:justify-start">
          {/* View Projects → smooth scroll */}
          <motion.button
            onClick={() => scrollToSection("#projects")}
            whileHover={{ scale: 1.05, rotate: 1 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 rounded-2xl bg-gradient-to-r from-indigo-500 to-fuchsia-500 shadow-lg hover:shadow-2xl hover:shadow-fuchsia-500/30 text-white font-medium transition-all duration-300"
          >
            View Projects
          </motion.button>

          {/* Resume (new tab) */}
          <motion.a
            href="https://drive.google.com/file/d/1E01tNtqpUmPvkPNmS9DIEgAnQssIr6ib/view"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, rotate: 1 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 shadow-lg hover:shadow-2xl hover:shadow-emerald-500/30 text-white font-medium transition-all duration-300"
          >
            Resume
          </motion.a>

          {/* Detailed Resume (new tab) */}
          <motion.a
            href="https://drive.google.com/file/d/1kuKQN3N_oG0e0mmmVfxftYDHlik9A4ak/view"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, rotate: 1 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 rounded-2xl bg-gradient-to-r from-amber-500 to-pink-500 shadow-lg hover:shadow-2xl hover:shadow-amber-500/30 text-white font-medium transition-all duration-300"
          >
            Detailed Resume
          </motion.a>
        </div>

        {/* Social icons */}
        <div className="mt-6 flex gap-6 justify-center md:justify-start text-2xl text-gray-300">
          {[
            { icon: <FaGithub />, link: "https://github.com/Sherwin333" },
            { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/sherwindsouza0511" },
            { icon: <FaEnvelope />, link: "mailto:sherwinashton33@gmail.com" },
            { icon: <SiHackerrank />, link: "https://www.hackerrank.com/profile/sherwinashton33" },
          ].map((item, i) => (
            <motion.a
              key={i}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, y: -4 }}
              className="hover:text-fuchsia-400 transition-colors"
            >
              {item.icon}
            </motion.a>
          ))}
        </div>
      </motion.div>

      {/* Right: Profile */}
      <motion.div
        className="relative z-10"
        initial={{ opacity: 0, x: 24 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute -inset-3 bg-gradient-to-tr from-indigo-600 via-fuchsia-600 to-pink-600 rounded-full blur-3xl opacity-50"></div>
        <img
          src={`${process.env.PUBLIC_URL}/images/13.jpg`}
          alt="Sherwin"
          className="relative w-48 h-48 md:w-64 md:h-64 object-cover rounded-full border-4 border-white/10 shadow-2xl"
        />
      </motion.div>
    </section>
  );
}
