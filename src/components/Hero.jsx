import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState, useMemo } from "react";

const ROLES = ["Software Developer", "Full-Stack Engineer", "AI Enthusiast"];

const SOCIAL_LINKS = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
      </svg>
    ),
    link: "https://github.com/Sherwin333",
    color: "hover:text-white",
    label: "GitHub"
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
    link: "https://www.linkedin.com/in/sherwindsouza0511",
    color: "hover:text-blue-400",
    label: "LinkedIn"
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="4" width="20" height="16" rx="2"/>
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
      </svg>
    ),
    link: "mailto:sherwinashton33@gmail.com",
    color: "hover:text-red-400",
    label: "Email"
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0c1.285 0 9.75 4.886 10.392 6.39.642 1.503.288 3.126-.945 4.36-1.233 1.233-2.857 1.587-4.36.945C15.583 10.991 12 9.75 12 9.75s-3.583 1.241-5.087 1.945c-1.503.642-3.127.288-4.36-.945-1.233-1.234-1.587-2.857-.945-4.36C2.25 4.886 10.715 0 12 0zm0 12.75s3.583 1.242 5.087 1.945c1.503.642 3.127.288 4.36-.945 1.233-1.233 1.587-2.857.945-4.36C21.75 7.886 13.285 3 12 3s-9.75 4.886-10.392 6.39c-.642 1.503-.288 3.127.945 4.36 1.233 1.233 2.857 1.587 4.36.945C8.417 13.992 12 12.75 12 12.75z"/>
      </svg>
    ),
    link: "https://www.hackerrank.com/profile/sherwinashton33",
    color: "hover:text-green-400",
    label: "HackerRank"
  },
];

export default function Hero() {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const particleCount = useMemo(() => {
    if (typeof window !== 'undefined') {
      return window.innerWidth < 768 ? 10 : 20;
    }
    return 20;
  }, []);

  useEffect(() => {
    const currentText = ROLES[currentRole];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayText.length < currentText.length) {
            setDisplayText(currentText.slice(0, displayText.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), 1500);
          }
        } else {
          if (displayText.length > 0) {
            setDisplayText(displayText.slice(0, -1));
          } else {
            setIsDeleting(false);
            setCurrentRole((prev) => (prev + 1) % ROLES.length);
          }
        }
      },
      isDeleting ? 50 : 100
    );
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRole]);

  const scrollToSection = (id) => {
    const section = document.querySelector(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[90vh] flex flex-col md:flex-row items-center justify-center gap-12 md:gap-20 px-6 py-16 overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute top-0 left-0 w-96 h-96 bg-fuchsia-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {!shouldReduceMotion && [...Array(particleCount)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-white/40 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -40, 0],
            opacity: [0.2, 0.8, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 3 + Math.random() * 3,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
          aria-hidden="true"
        />
      ))}

      <motion.div
        className="max-w-xl text-center md:text-left relative z-10"
        initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: shouldReduceMotion ? 0 : 0.8 }}
      >
        <motion.div
          initial={{ scale: shouldReduceMotion ? 1 : 0, rotate: shouldReduceMotion ? 0 : -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ delay: shouldReduceMotion ? 0 : 0.2, type: "spring", stiffness: 200 }}
          className="inline-block mb-6"
        >
          <div className="px-5 py-2.5 rounded-full bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border border-emerald-500/30 backdrop-blur-md">
            <div className="flex items-center gap-2.5">
              <motion.span
                animate={shouldReduceMotion ? {} : { scale: [1, 1.3, 1], opacity: [1, 0.5, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-lg shadow-emerald-400/50"
                aria-label="Available status indicator"
              />
              <span className="text-sm font-medium text-emerald-300 tracking-wide">
                Available for Opportunities
              </span>
            </div>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: shouldReduceMotion ? 0 : 0.4 }}
          className="text-5xl md:text-7xl font-black leading-tight mb-4"
        >
          <span className="text-white">Hi, I'm </span>
          <span className="relative inline-block">
            <span className="relative z-10 bg-gradient-to-r from-fuchsia-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
              Sherwin
            </span>
            {!shouldReduceMotion && (
              <motion.span
                className="absolute -inset-1 bg-gradient-to-r from-fuchsia-500/20 to-indigo-500/20 blur-xl -z-10"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                aria-hidden="true"
              />
            )}
          </span>
        </motion.h1>

        <div className="h-20 flex items-center justify-center md:justify-start">
          <h2 className="text-3xl md:text-5xl font-bold text-indigo-400" aria-live="polite">
            {displayText}
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.5, repeat: Infinity }}
              className="inline-block w-1 h-10 md:h-14 ml-1 bg-indigo-400 align-middle"
              aria-hidden="true"
            />
          </h2>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: shouldReduceMotion ? 0 : 0.8 }}
          className="text-xl text-gray-300 mb-8 leading-relaxed"
        >
          I craft{" "}
          <span className="text-fuchsia-400 font-semibold">interactive</span>,{" "}
          <span className="text-indigo-400 font-semibold">modern</span>, and{" "}
          <span className="text-purple-400 font-semibold">scalable</span> web
          experiences.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: shouldReduceMotion ? 0 : 1 }}
          className="flex flex-wrap gap-4 justify-center md:justify-start mb-8"
        >
          <motion.button
            onClick={() => scrollToSection("#projects")}
            whileHover={shouldReduceMotion ? {} : { scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="group relative px-8 py-4 rounded-xl bg-gradient-to-r from-indigo-500 to-fuchsia-500 text-white font-semibold shadow-xl shadow-indigo-500/30 overflow-hidden"
            aria-label="View my projects"
          >
            <span className="relative z-10">View Projects</span>
            {!shouldReduceMotion && (
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-fuchsia-600 to-indigo-600 opacity-0 group-hover:opacity-100"
                transition={{ duration: 0.3 }}
              />
            )}
          </motion.button>

          <motion.a
            href="https://drive.google.com/file/d/1-wuaWu0pHsQ_b6NeusMQaj-ENGaAQOrz/view"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={shouldReduceMotion ? {} : { scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="px-8 py-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 text-white font-semibold hover:bg-white/10 transition-all shadow-lg"
            aria-label="View resume"
          >
            Resume
          </motion.a>

          <motion.a
            href="https://drive.google.com/file/d/1ajquss3YNw-E0XLIrtn0E2X5fcLaowGa/view"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={shouldReduceMotion ? {} : { scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="px-8 py-4 rounded-xl bg-gradient-to-r from-amber-500 to-pink-500 text-white font-semibold shadow-xl shadow-amber-500/30"
            aria-label="View detailed resume"
          >
            Detailed Resume
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: shouldReduceMotion ? 0 : 1.2 }}
          className="flex gap-5 justify-center md:justify-start"
        >
          {SOCIAL_LINKS.map((social, i) => (
            <motion.a
              key={i}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: shouldReduceMotion ? 0 : 1.3 + i * 0.1 }}
              whileHover={shouldReduceMotion ? {} : { y: -4, scale: 1.1 }}
              className={`p-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 text-gray-400 ${social.color} transition-all`}
              aria-label={social.label}
            >
              {social.icon}
            </motion.a>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: shouldReduceMotion ? 0 : 0.8, delay: shouldReduceMotion ? 0 : 0.3 }}
        className="relative z-10"
      >
        <div className="relative">
          <div className="absolute -inset-4 bg-gradient-to-tr from-fuchsia-500/30 via-purple-500/30 to-indigo-500/30 rounded-3xl blur-2xl" aria-hidden="true"></div>
          
          <motion.div
            whileHover={shouldReduceMotion ? {} : { scale: 1.02, rotate: 1 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-2 border border-white/20 shadow-2xl"
          >
            <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-2xl overflow-hidden bg-gradient-to-br from-indigo-500/20 to-purple-500/20">
              <img
                src={`${process.env.PUBLIC_URL}/images/13.jpg`}
                alt="Sherwin D'Souza - Software Developer"
                className={`w-full h-full object-cover transition-opacity duration-500 ${
                  imageLoaded ? 'opacity-100' : 'opacity-0'
                }`}
                onLoad={() => {
                  setImageLoaded(true);
                  console.log("✅ Image loaded successfully!");
                }}
                onError={(e) => {
                  console.error("❌ Failed to load image from:", e.target.src);
                  e.target.style.display = 'none';
                }}
                loading="lazy"
              />
              
              {!imageLoaded && (
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/30 to-purple-500/30 animate-pulse" aria-label="Loading profile image"></div>
              )}
              
              {!shouldReduceMotion && (
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-indigo-900/50 to-transparent opacity-0 hover:opacity-100 transition-opacity"
                  aria-hidden="true"
                />
              )}
            </div>
          </motion.div>

          {!shouldReduceMotion && (
            <>
              <motion.div
                animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-6 -right-6 w-20 h-20 bg-gradient-to-br from-fuchsia-500 to-purple-600 rounded-2xl blur-xl opacity-60"
                aria-hidden="true"
              />
              <motion.div
                animate={{ y: [0, 10, 0], rotate: [0, -5, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-6 -left-6 w-24 h-24 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl blur-xl opacity-60"
                aria-hidden="true"
              />
            </>
          )}
        </div>
      </motion.div>
    </section>
  );
}
