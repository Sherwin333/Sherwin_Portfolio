import { useState, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

const links = [
  { href: "#home", label: "Home" },
  { href: "#skills", label: "Skills" },
  { href: "#about", label: "About" },
  { href: "#education", label: "Education" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");
  const [scrolled, setScrolled] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 50);

      const scrollOffset = scrollY + 150;
      let current = "#home";

      links.forEach((l) => {
        const section = document.querySelector(l.href);
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;

          if (scrollOffset >= sectionTop && scrollOffset < sectionTop + sectionHeight) {
            current = l.href;
          }
        }
      });

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [open]);

  const closeMenu = () => setOpen(false);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: shouldReduceMotion ? 0 : 0.5 }}
      className="fixed top-4 inset-x-0 z-50"
    >
      <div className="mx-auto max-w-7xl px-4">
        <motion.div
          animate={{
            backgroundColor: scrolled
              ? "rgba(0, 0, 0, 0.6)"
              : "rgba(0, 0, 0, 0.4)",
          }}
          transition={{ duration: 0.3 }}
          className="flex items-center justify-between rounded-2xl backdrop-blur-md border border-white/10 px-5 py-3 shadow-lg"
        >
          <a
            href="#home"
            className="text-xl font-extrabold tracking-tight"
            aria-label="Home"
          >
            <span className="bg-gradient-to-r from-fuchsia-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
              Sherwin.dev
            </span>
          </a>

          <button
            className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg border border-white/10 hover:bg-white/10 transition-colors"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <motion.div
              animate={{ rotate: open ? 90 : 0 }}
              transition={{ duration: 0.2 }}
            >
              {open ? "✕" : "☰"}
            </motion.div>
          </button>

          <ul className="hidden md:flex items-center gap-6 text-sm relative">
            {links.map((l) => (
              <li key={l.href} className="relative">
                <a
                  href={l.href}
                  className={`transition-colors duration-200 ${
                    active === l.href
                      ? "text-white"
                      : "text-gray-300 hover:text-white"
                  }`}
                  aria-current={active === l.href ? "page" : undefined}
                >
                  {l.label}
                </a>
                {active === l.href && !shouldReduceMotion && (
                  <motion.div
                    layoutId="activeLink"
                    className="absolute left-0 right-0 -bottom-1 h-[2px] bg-gradient-to-r from-indigo-500 to-fuchsia-500 rounded-full"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  />
                )}
              </li>
            ))}
            <li>
              <motion.a
                href="https://github.com/Sherwin333"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={shouldReduceMotion ? {} : { scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/10 transition-colors"
              >
                GitHub
              </motion.a>
            </li>
          </ul>
        </motion.div>
      </div>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm md:hidden"
              onClick={closeMenu}
              aria-hidden="true"
            />

            <motion.ul
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="md:hidden mx-4 mt-2 rounded-2xl bg-black/80 backdrop-blur-lg border border-white/10 shadow-2xl px-4 py-4 space-y-2"
            >
              {links.map((l, i) => (
                <motion.li
                  key={l.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: shouldReduceMotion ? 0 : i * 0.05 }}
                >
                  <a
                    href={l.href}
                    className={`block px-3 py-2 rounded-lg transition-colors ${
                      active === l.href
                        ? "bg-gradient-to-r from-indigo-500/20 to-fuchsia-500/20 text-white"
                        : "hover:bg-white/10 text-gray-300"
                    }`}
                    onClick={closeMenu}
                    aria-current={active === l.href ? "page" : undefined}
                  >
                    {l.label}
                  </a>
                </motion.li>
              ))}
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: shouldReduceMotion ? 0 : links.length * 0.05 }}
              >
                <a
                  href="https://github.com/Sherwin333"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-3 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white text-center transition-colors"
                  onClick={closeMenu}
                >
                  GitHub
                </a>
              </motion.li>
            </motion.ul>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
