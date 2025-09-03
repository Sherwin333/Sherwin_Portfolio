import { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp } from "react-icons/fa";
import { SiHackerrank } from "react-icons/si";
import { motion, AnimatePresence } from "framer-motion";

export default function Footer() {
  const year = new Date().getFullYear();
  const [showTop, setShowTop] = useState(false);

  // Track scroll to toggle button visibility
  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll back to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative px-6 py-10 bg-gradient-to-t from-black/95 via-black/90 to-black/80 border-t border-white/10 backdrop-blur-sm overflow-hidden">
      {/* Background glow blobs */}
      <div className="absolute top-0 left-10 w-[300px] h-[300px] bg-fuchsia-600/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-10 w-[300px] h-[300px] bg-indigo-600/10 rounded-full blur-3xl"></div>

      {/* Centered gradient divider line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-[3px] rounded-full bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-pink-500"></div>

      {/* Footer content */}
      <div className="relative mx-auto max-w-6xl flex flex-col items-center gap-4 z-10">
        {/* Social icons */}
        <div className="flex gap-6 text-xl text-gray-300">
          <a
            href="https://github.com/Sherwin333"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-fuchsia-400 transition-colors"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/sherwindsouza0511"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-fuchsia-400 transition-colors"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:sherwinashton33@gmail.com"
            className="hover:text-fuchsia-400 transition-colors"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://www.hackerrank.com/profile/sherwinashton33"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-fuchsia-400 transition-colors"
          >
            <SiHackerrank />
          </a>
        </div>

        {/* Text */}
        <p className="text-center text-sm text-gray-300">
          © {year}{" "}
          <span className="font-bold text-white" style={{ textShadow: "0 0 8px rgba(255,255,255,0.6)" }}>
            Sherwin
          </span>{" "}
          — Made with{" "}
          <span className="font-medium text-indigo-400" style={{ textShadow: "0 0 6px rgba(79,70,229,0.5)" }}>
            React
          </span>
          ,{" "}
          <span className="font-medium text-pink-400" style={{ textShadow: "0 0 6px rgba(236,72,153,0.5)" }}>
            Tailwind
          </span>{" "}
          &{" "}
          <span className="font-medium text-fuchsia-400" style={{ textShadow: "0 0 6px rgba(192,38,211,0.5)" }}>
            Framer Motion
          </span>
        </p>
      </div>

      {/* Smart Back to Top button */}
      <AnimatePresence>
        {showTop && (
          <motion.button
            onClick={scrollToTop}
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.7 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="fixed bottom-6 right-6 p-3 rounded-full bg-gradient-to-r from-indigo-500 to-fuchsia-500 text-white shadow-lg hover:shadow-fuchsia-500/30 transition"
            aria-label="Back to Top"
          >
            <FaArrowUp />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
}
