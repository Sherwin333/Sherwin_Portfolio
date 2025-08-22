import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { SiHackerrank } from "react-icons/si";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-[84vh] flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16 px-6 py-16"
    >
      {/* Left: Intro */}
      <motion.div
        className="max-w-xl text-center md:text-left"
        initial={{ opacity: 0, x: -24 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
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
           Software{" "}
          <span className="underline decoration-indigo-500/60 decoration-4 underline-offset-8">
            Developer
          </span>{" "}
        
        </h1>

        <p className="mt-4 text-gray-300">
          I work with React to build responsive and interactive user interfaces.
        </p>

        <div className="mt-8 flex items-center gap-4 justify-center md:justify-start">
          <a
            href="#projects"
            className="px-5 py-3 rounded-2xl bg-gradient-to-r from-indigo-500 to-fuchsia-500 hover:from-indigo-400 hover:to-fuchsia-400 shadow-lg shadow-fuchsia-500/20"
          >
            View Projects
          </a>
          <a
            href="https://drive.google.com/file/d/1qUQG1a9NOoedR7_6PPD8mNu6wWI_7oAN/view?usp=sharing"
            className="px-5 py-3 rounded-2xl border border-white/15 hover:bg-white/10"
          >
            Resume
            
          </a>
        </div>

        {/* Social icons: GitHub, LinkedIn, Email, HackerRank */}
        <div className="mt-6 flex gap-6 justify-center md:justify-start text-2xl text-gray-300">
          <a
            href="https://github.com/Sherwin333"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-fuchsia-400"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/sherwindsouza0511"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-fuchsia-400"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:sherwinashton33@gmail.com"
            className="hover:text-fuchsia-400"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://www.hackerrank.com/profile/sherwinashton33"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-fuchsia-400"
          >
            <SiHackerrank />
          </a>
        </div>
      </motion.div>

      {/* Right: Profile */}
      <motion.div
        className="relative"
        initial={{ opacity: 0, x: 24 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        {/* Glow ring */}
        <div className="absolute -inset-2 bg-gradient-to-tr from-indigo-600 via-fuchsia-600 to-pink-600 rounded-full blur-2xl opacity-40 animate-pulse" />
        <img
          src={`${process.env.PUBLIC_URL}/images/12.jpg`} // put your image in public/images/profile.jpg
          alt="Sherwin"
          className="relative w-48 h-48 md:w-64 md:h-64 object-cover rounded-full border-4 border-white/10 shadow-2xl"
        />
      </motion.div>
    </section>
  );
}
