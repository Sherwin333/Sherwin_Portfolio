import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll } from "framer-motion";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#education", label: "Education" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("#home");
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      const offset = window.scrollY + 120;
      let current = "#home";
      links.forEach(({ href }) => {
        const el = document.querySelector(href);
        if (el && offset >= el.offsetTop) current = href;
      });
      setActive(current);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      {/* Scroll progress — indigo */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] z-[9999] pointer-events-none origin-left"
        style={{
          scaleX: scrollYProgress,
          background: "linear-gradient(90deg, #6366f1, #a855f7, #ec4899)",
        }}
      />

      <motion.nav
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 inset-x-0 z-[90] pt-3"
        style={{ fontFamily: "-apple-system, BlinkMacSystemFont, sans-serif" }}
      >
        <div className="mx-auto max-w-5xl px-4">
          <motion.div
            animate={{
              backgroundColor: scrolled ? "rgba(7,7,10,0.92)" : "rgba(7,7,10,0.55)",
              borderColor: scrolled ? "rgba(99,102,241,0.18)" : "rgba(255,255,255,0.07)",
            }}
            transition={{ duration: 0.3 }}
            className="flex items-center justify-between px-5 py-2.5 rounded-2xl border backdrop-blur-2xl shadow-lg"
            style={{ boxShadow: scrolled ? "0 8px 32px rgba(0,0,0,0.4), 0 0 0 1px rgba(99,102,241,0.08)" : "none" }}
          >
            {/* Logo */}
            <a href="#home" onClick={() => setOpen(false)}
              className="text-[15px] font-semibold tracking-[-0.02em] group"
              style={{ color: "rgba(255,255,255,0.85)" }}>
              Sherwin
              <span className="transition-colors" style={{ color: "#818cf8" }}>.dev</span>
            </a>

            {/* Desktop links */}
            <ul className="hidden md:flex items-center gap-0.5">
              {links.map(({ href, label }) => {
                const isActive = active === href;
                return (
                  <li key={href}>
                    <a href={href}
                      className="relative px-3.5 py-1.5 text-[13px] rounded-xl transition-colors duration-200 inline-block font-medium"
                      style={{ color: isActive ? "#fff" : "rgba(255,255,255,0.38)" }}>
                      {isActive && (
                        <motion.span layoutId="pill"
                          className="absolute inset-0 rounded-xl"
                          style={{ background: "rgba(99,102,241,0.15)", border: "1px solid rgba(99,102,241,0.3)" }}
                          transition={{ type: "spring", stiffness: 500, damping: 40 }} />
                      )}
                      <span className="relative z-10">{label}</span>
                    </a>
                  </li>
                );
              })}
            </ul>

            {/* GitHub CTA */}
            <a href="https://github.com/Sherwin333" target="_blank" rel="noopener noreferrer"
              className="hidden md:flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-[13px] font-semibold transition-all duration-200"
              style={{ background: "linear-gradient(135deg, #6366f1, #a855f7)", color: "#fff", boxShadow: "0 0 20px rgba(99,102,241,0.3)" }}
              onMouseEnter={e => e.currentTarget.style.boxShadow = "0 0 28px rgba(99,102,241,0.5)"}
              onMouseLeave={e => e.currentTarget.style.boxShadow = "0 0 20px rgba(99,102,241,0.3)"}
            >
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
              GitHub
            </a>

            {/* Mobile hamburger */}
            <button className="md:hidden p-2 rounded-lg transition-all" style={{ color: "rgba(255,255,255,0.5)" }}
              onClick={() => setOpen(v => !v)} aria-label="Toggle menu">
              {open
                ? <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" /></svg>
                : <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 8h16M4 16h16" /></svg>
              }
            </button>
          </motion.div>
        </div>
      </motion.nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/75 backdrop-blur-sm md:hidden z-[80]"
              onClick={() => setOpen(false)} />
            <motion.div
              initial={{ opacity: 0, y: -12, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -12, scale: 0.97 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="fixed top-[4.5rem] left-4 right-4 md:hidden z-[85] rounded-2xl overflow-hidden border"
              style={{ background: "rgba(9,9,13,0.97)", borderColor: "rgba(99,102,241,0.2)", backdropFilter: "blur(24px)" }}
            >
              {links.map(({ href, label }, i) => (
                <motion.a key={href} href={href} onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04 }}
                  className="flex items-center justify-between px-5 py-3.5 text-[15px] border-b border-white/5 last:border-0 transition-colors"
                  style={{ color: active === href ? "#fff" : "rgba(255,255,255,0.38)" }}>
                  {label}
                  {active === href && <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#818cf8" }} />}
                </motion.a>
              ))}
              <div className="px-4 py-3 border-t border-white/8">
                <a href="https://github.com/Sherwin333" target="_blank" rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-[14px] font-semibold"
                  style={{ background: "linear-gradient(135deg, #6366f1, #a855f7)", color: "#fff" }}>
                  GitHub Profile
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}