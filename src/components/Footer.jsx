import { useState, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/Sherwin333",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/sherwindsouza0511",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
  },
  {
    name: "Email",
    href: "mailto:sherwinashton33@gmail.com",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
      </svg>
    ),
  },
  {
    name: "HackerRank",
    href: "https://www.hackerrank.com/profile/sherwinashton33",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 0c1.285 0 9.75 4.886 10.392 6.39.642 1.503.288 3.126-.945 4.36-1.233 1.233-2.857 1.587-4.36.945C15.583 10.991 12 9.75 12 9.75s-3.583 1.241-5.087 1.945c-1.503.642-3.127.288-4.36-.945-1.233-1.234-1.587-2.857-.945-4.36C2.25 4.886 10.715 0 12 0zm0 12.75s3.583 1.242 5.087 1.945c1.503.642 3.127.288 4.36-.945 1.233-1.233 1.587-2.857.945-4.36C21.75 7.886 13.285 3 12 3s-9.75 4.886-10.392 6.39c-.642 1.503-.288 3.127.945 4.36 1.233 1.233 2.857 1.587 4.36.945C8.417 13.992 12 12.75 12 12.75z"/>
      </svg>
    ),
  },
];

export default function Footer() {
  const year = new Date().getFullYear();
  const [showTop, setShowTop] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    
    setTimeout(() => {
      const skipLink = document.querySelector('a[href="#home"]');
      if (skipLink) {
        skipLink.focus();
      }
    }, 500);
  };

  return (
    <footer className="relative px-6 py-12 bg-gradient-to-t from-black via-gray-900/95 to-black border-t border-white/10 backdrop-blur-sm overflow-hidden">
      <div className="absolute top-0 left-10 w-[300px] h-[300px] bg-fuchsia-600/10 rounded-full blur-3xl" aria-hidden="true"></div>
      <div className="absolute bottom-0 right-10 w-[300px] h-[300px] bg-indigo-600/10 rounded-full blur-3xl" aria-hidden="true"></div>

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-[3px] rounded-full bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-pink-500" aria-hidden="true"></div>

      <div className="relative mx-auto max-w-6xl z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center gap-6"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold bg-gradient-to-r from-fuchsia-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
              Sherwin.dev
            </h2>
          </motion.div>

          <motion.div
            className="flex gap-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {socialLinks.map((social, i) => (
              <motion.a
                key={social.name}
                href={social.href}
                target={social.name !== "Email" ? "_blank" : undefined}
                rel={social.name !== "Email" ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + i * 0.1 }}
                whileHover={shouldReduceMotion ? {} : { y: -4, scale: 1.1 }}
                className="p-3 rounded-xl bg-white/5 border border-white/10 text-gray-300 hover:text-fuchsia-400 hover:bg-white/10 transition-all duration-300"
                aria-label={social.name}
              >
                {social.icon}
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            className="flex flex-col md:flex-row items-center gap-4 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <p className="text-sm text-gray-400">
              © {year}{" "}
              <span className="font-bold text-white bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-200">
                Sherwin D'Souza
              </span>
              . All rights reserved.
            </p>
            <span className="hidden md:inline text-gray-600">•</span>
            <p className="text-sm text-gray-400">
              Built with{" "}
              <span className="font-medium text-indigo-400">React</span>
              {", "}
              <span className="font-medium text-pink-400">Tailwind</span>
              {" & "}
              <span className="font-medium text-fuchsia-400">Framer Motion</span>
            </p>
          </motion.div>

          <motion.div
            className="flex flex-wrap justify-center gap-4 text-xs text-gray-500"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <a href="#home" className="hover:text-fuchsia-400 transition-colors">
              Home
            </a>
            <span>•</span>
            <a href="#about" className="hover:text-fuchsia-400 transition-colors">
              About
            </a>
            <span>•</span>
            <a href="#projects" className="hover:text-fuchsia-400 transition-colors">
              Projects
            </a>
            <span>•</span>
            <a href="#contact" className="hover:text-fuchsia-400 transition-colors">
              Contact
            </a>
          </motion.div>
        </motion.div>
      </div>

      <AnimatePresence>
        {showTop && (
          <motion.button
            onClick={scrollToTop}
            initial={{ opacity: 0, scale: 0.7, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.7, y: 20 }}
            whileHover={shouldReduceMotion ? {} : { scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="fixed bottom-8 right-8 p-4 rounded-full bg-gradient-to-r from-indigo-500 to-fuchsia-500 text-white shadow-2xl shadow-fuchsia-500/30 hover:shadow-fuchsia-500/50 transition-shadow z-50 group"
            aria-label="Back to top"
          >
            <svg
              className="w-5 h-5 group-hover:-translate-y-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
}
