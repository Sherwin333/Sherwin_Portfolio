import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { label: "Home", href: "#home" }, { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" }, { label: "Education", href: "#education" },
  { label: "Projects", href: "#projects" }, { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const [showTop, setShowTop] = useState(false);
  const year = new Date().getFullYear();

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <footer className="relative px-6 py-16 border-t"
      style={{ background: "#07070a", borderColor: "rgba(255,255,255,0.05)", fontFamily: "-apple-system, BlinkMacSystemFont, sans-serif" }}>

      {/* Top gradient accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(99,102,241,0.5), rgba(168,85,247,0.5), transparent)" }} />

      <div className="mx-auto max-w-5xl">
        <div className="flex flex-col md:flex-row md:justify-between gap-10 mb-12">
          {/* Brand */}
          <div>
            <p className="text-[17px] font-semibold tracking-[-0.02em] mb-2">
              <span style={{ color: "rgba(255,255,255,0.7)" }}>Sherwin</span>
              <span style={{ color: "#818cf8" }}>.dev</span>
            </p>
            <p className="text-[13px] font-light max-w-[200px] leading-relaxed" style={{ color: "rgba(255,255,255,0.22)" }}>
              Full-stack developer. Based in Mangalore, Karnataka.
            </p>
          </div>

          {/* Nav */}
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {links.map(l => (
              <li key={l.href}>
                <a href={l.href} className="text-[13px] font-light transition-colors"
                  style={{ color: "rgba(255,255,255,0.25)" }}
                  onMouseEnter={e => e.target.style.color = "#818cf8"}
                  onMouseLeave={e => e.target.style.color = "rgba(255,255,255,0.25)"}>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 pt-8"
          style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
          <p className="text-[12px] font-light" style={{ color: "rgba(255,255,255,0.15)" }}>
            © {year} Sherwin D'Souza. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-[11px]" style={{ color: "rgba(255,255,255,0.15)" }}>
            Built with
            {[{ label: "React", color: "#22d3ee" }, { label: "Tailwind", color: "#818cf8" }, { label: "Framer Motion", color: "#c084fc" }].map(t => (
              <span key={t.label} className="px-2 py-0.5 rounded-md text-[10px] font-medium"
                style={{ background: `${t.color}12`, color: t.color, border: `1px solid ${t.color}25` }}>
                {t.label}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Back to top */}
      <AnimatePresence>
        {showTop && (
          <motion.button initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Back to top"
            className="fixed bottom-8 right-8 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 z-50"
            style={{ background: "rgba(99,102,241,0.15)", border: "1px solid rgba(99,102,241,0.3)", color: "#818cf8" }}
            whileHover={{ scale: 1.1, boxShadow: "0 0 20px rgba(99,102,241,0.35)" }}
            whileTap={{ scale: 0.95 }}>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 15l7-7 7 7" />
            </svg>
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
}