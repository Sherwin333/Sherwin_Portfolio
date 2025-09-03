import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");

  // ✅ Correct order of sections (Education added)
  const links = [
    { href: "#home", label: "Home" },
    { href: "#skills", label: "Skills" },
    { href: "#about", label: "About" },
    { href: "#education", label: "Education" }, // ✅ new link
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  // Improved scroll detection
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + 150; // adjust offset for navbar
      let current = "#home";

      links.forEach((l) => {
        const section = document.querySelector(l.href);
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;

          if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
            current = l.href;
          }
        }
      });

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // run once on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-4 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex items-center justify-between rounded-2xl bg-black/40 backdrop-blur-md border border-white/10 px-5 py-3 shadow-lg">
          {/* Logo */}
          <a href="#home" className="text-xl font-extrabold tracking-tight">
            <span className="bg-gradient-to-r from-fuchsia-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
              Sherwin.dev
            </span>
          </a>

          {/* Hamburger */}
          <button
            className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg border border-white/10 hover:bg-white/10 transition"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            ☰
          </button>

          {/* Desktop Links */}
          <ul className="hidden md:flex items-center gap-6 text-sm relative">
            {links.map((l) => (
              <li key={l.href} className="relative">
                <a
                  href={l.href}
                  className={`transition-colors ${
                    active === l.href ? "text-white" : "text-gray-300 hover:text-white"
                  }`}
                >
                  {l.label}
                </a>
                {active === l.href && (
                  <motion.div
                    layoutId="activeLink"
                    className="absolute left-0 right-0 -bottom-1 h-[2px] bg-gradient-to-r from-indigo-500 to-fuchsia-500 rounded-full"
                  />
                )}
              </li>
            ))}
            <li>
              <a
                href="https://github.com/Sherwin333"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/10 transition"
              >
                GitHub
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <motion.ul
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="md:hidden mx-4 mt-2 rounded-2xl bg-black/60 backdrop-blur-lg border border-white/10 shadow-lg px-4 py-4 space-y-3"
        >
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className={`block px-3 py-2 rounded-lg transition ${
                  active === l.href
                    ? "bg-gradient-to-r from-indigo-500/20 to-fuchsia-500/20 text-white"
                    : "hover:bg-white/10 text-gray-300"
                }`}
                onClick={() => setOpen(false)}
              >
                {l.label}
              </a>
            </li>
          ))}
        </motion.ul>
      )}
    </nav>
  );
}
