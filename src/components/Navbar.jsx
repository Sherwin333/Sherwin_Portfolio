import { useState, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion, useScroll } from "framer-motion";

const links = [
  { href: "#home", label: "Home", icon: "🏠", color: "from-pink-500 to-rose-500" },
  { href: "#about", label: "About", icon: "👤", color: "from-blue-500 to-cyan-500" },
  { href: "#skills", label: "Skills", icon: "⚡", color: "from-yellow-500 to-orange-500" },
  { href: "#education", label: "Education", icon: "🎓", color: "from-green-500 to-emerald-500" },
  { href: "#projects", label: "Projects", icon: "💻", color: "from-purple-500 to-indigo-500" },
  { href: "#contact", label: "Contact", icon: "📧", color: "from-fuchsia-500 to-pink-500" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");
  const [scrolled, setScrolled] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();

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
    document.body.style.overflow = open ? "hidden" : "unset";
    return () => { document.body.style.overflow = "unset"; };
  }, [open]);

  const closeMenu = () => setOpen(false);

  return (
    <>
      {/* Scroll progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 origin-left z-[100]"
        style={{ scaleX: scrollYProgress }}
      />

      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: shouldReduceMotion ? 0 : 0.6, ease: "easeOut" }}
        className="fixed top-3 inset-x-0 z-[90]"
      >
        <div className="mx-auto max-w-6xl px-4">
          <motion.div
            animate={{
              backgroundColor: scrolled ? "rgba(0, 0, 0, 0.85)" : "rgba(0, 0, 0, 0.5)",
            }}
            transition={{ duration: 0.3 }}
            className="relative flex items-center justify-between rounded-2xl backdrop-blur-xl border border-white/20 px-4 py-2.5 shadow-2xl overflow-hidden"
          >
            {/* Animated gradient background */}
            <div className="absolute inset-0 opacity-20 pointer-events-none">
              <motion.div
                className="absolute inset-0"
                animate={{
                  background: [
                    "radial-gradient(circle at 0% 0%, rgba(236, 72, 153, 0.3) 0%, transparent 50%)",
                    "radial-gradient(circle at 100% 0%, rgba(168, 85, 247, 0.3) 0%, transparent 50%)",
                    "radial-gradient(circle at 0% 0%, rgba(236, 72, 153, 0.3) 0%, transparent 50%)",
                  ],
                }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              />
            </div>

            {/* Logo - Compact */}
            <motion.a
              href="#home"
              className="relative text-lg font-black tracking-tight z-20 flex items-center gap-2"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={closeMenu}
            >
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-fuchsia-500 to-indigo-500 flex items-center justify-center text-sm">
                👨‍💻
              </div>
              <span className="bg-gradient-to-r from-fuchsia-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
                Sherwin.dev
              </span>
            </motion.a>

            {/* Mobile menu button - FIXED */}
            <motion.button
              className="md:hidden relative w-10 h-10 rounded-lg border border-white/20 hover:bg-white/10 flex items-center justify-center z-[100] touch-manipulation"
              onClick={(e) => {
                e.stopPropagation();
                setOpen((v) => !v);
              }}
              onTouchStart={(e) => {
                e.stopPropagation();
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Toggle menu"
              aria-expanded={open}
              style={{ WebkitTapHighlightColor: 'transparent' }}
            >
              <motion.div 
                animate={{ rotate: open ? 180 : 0 }} 
                transition={{ duration: 0.3 }}
                className="relative z-10"
              >
                {open ? (
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </motion.div>
            </motion.button>

            {/* Desktop nav - More compact */}
            <div className="hidden md:flex items-center gap-1.5 relative z-20">
              <ul className="flex items-center gap-1">
                {links.map((l) => {
                  const isActive = active === l.href;
                  return (
                    <motion.li key={l.href} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <a
                        href={l.href}
                        className={`group/link relative flex items-center gap-1.5 px-3 py-1.5 rounded-xl transition-all duration-300 overflow-hidden ${
                          isActive ? "text-white" : "text-gray-300 hover:text-white"
                        }`}
                      >
                        <span className="text-xs">{l.icon}</span>
                        <span className="font-semibold text-xs whitespace-nowrap">{l.label}</span>

                        {/* Active background */}
                        {isActive && (
                          <motion.div
                            layoutId="navBubble"
                            className={`absolute inset-0 rounded-xl bg-gradient-to-r ${l.color} opacity-20 border border-white/20 -z-10`}
                            transition={{ type: "spring", stiffness: 400, damping: 30 }}
                          />
                        )}

                        {/* Bottom indicator */}
                        {isActive && !shouldReduceMotion && (
                          <motion.div
                            layoutId="navIndicator"
                            className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-0.5 bg-gradient-to-r ${l.color} rounded-full`}
                            transition={{ type: "spring", stiffness: 400, damping: 30 }}
                          />
                        )}
                      </a>
                    </motion.li>
                  );
                })}
              </ul>

              {/* Separator */}
              <div className="w-px h-6 bg-gradient-to-b from-transparent via-white/30 to-transparent mx-1" />

              {/* GitHub button - Compact */}
              <motion.a
                href="https://github.com/Sherwin333"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gradient-to-r from-indigo-500 to-fuchsia-500 text-white font-semibold text-xs shadow-lg"
              >
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
                GitHub
              </motion.a>
            </div>
          </motion.div>
        </div>
      </motion.nav>

      {/* Mobile menu - FIXED Z-INDEX */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-md md:hidden z-[80]"
              onClick={closeMenu}
            />

            {/* Menu */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="fixed top-20 left-4 right-4 md:hidden z-[85] max-h-[calc(100vh-6rem)] overflow-y-auto"
            >
              <div className="relative rounded-2xl bg-black/95 backdrop-blur-xl border border-white/20 shadow-2xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-500/10 to-indigo-500/10 pointer-events-none" />
                
                <ul className="relative px-4 py-4 space-y-1">
                  {links.map((l, i) => {
                    const isActive = active === l.href;
                    return (
                      <motion.li
                        key={l.href}
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.05 }}
                      >
                        <motion.a
                          href={l.href}
                          className={`flex items-center gap-3 px-4 py-3 rounded-xl touch-manipulation ${
                            isActive
                              ? `bg-gradient-to-r ${l.color} text-white border border-white/20`
                              : "text-gray-300 hover:bg-white/5 active:bg-white/10"
                          }`}
                          onClick={closeMenu}
                          whileTap={{ scale: 0.98 }}
                          style={{ WebkitTapHighlightColor: 'transparent' }}
                        >
                          <span className="text-xl">{l.icon}</span>
                          <span className="font-semibold flex-1">{l.label}</span>
                          {isActive && (
                            <motion.div 
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              className="w-2 h-2 rounded-full bg-white" 
                            />
                          )}
                        </motion.a>
                      </motion.li>
                    );
                  })}

                  {/* GitHub link in mobile */}
                  <motion.li
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: links.length * 0.05 }}
                    className="pt-2"
                  >
                    <motion.a
                      href="https://github.com/Sherwin333"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-fuchsia-500 text-white font-bold touch-manipulation"
                      onClick={closeMenu}
                      whileTap={{ scale: 0.98 }}
                      style={{ WebkitTapHighlightColor: 'transparent' }}
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                      </svg>
                      GitHub Profile
                    </motion.a>
                  </motion.li>
                </ul>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
