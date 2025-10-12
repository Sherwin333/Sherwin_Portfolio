import { useEffect, useState, useRef } from "react";
import { motion, useReducedMotion, useSpring, AnimatePresence } from "framer-motion";

export default function ScrollProgress() {
  const [scroll, setScroll] = useState(0);
  const [showBadge, setShowBadge] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  const rafRef = useRef(null);
  const timeoutRef = useRef(null);

  const smoothProgress = useSpring(scroll, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const handleScroll = () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }

      rafRef.current = requestAnimationFrame(() => {
        const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
        setScroll(progress);

        // Show badge on scroll, hide after 1.5s
        setShowBadge(true);
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        timeoutRef.current = setTimeout(() => setShowBadge(false), 1500);
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <div 
      className="fixed top-0 left-0 w-full h-0.5 z-[9999] bg-transparent pointer-events-none"
      role="progressbar"
      aria-label="Page scroll progress"
      aria-valuenow={Math.round(scroll)}
      aria-valuemin="0"
      aria-valuemax="100"
    >
      {/* Progress bar */}
      <motion.div
        className="h-full bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 shadow-[0_0_10px_rgba(168,85,247,0.6)] relative overflow-hidden"
        style={{ 
          width: shouldReduceMotion ? `${scroll}%` : smoothProgress,
          scaleX: scroll > 0 ? 1 : 0,
          transformOrigin: "left"
        }}
        initial={{ scaleX: 0 }}
        transition={{ duration: 0.1 }}
      >
        {/* Shimmer effect */}
        {!shouldReduceMotion && (
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
            animate={{ x: ["-100%", "200%"] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            style={{ width: "30%" }}
          />
        )}
      </motion.div>

      {/* Percentage badge - only shows on scroll */}
      <AnimatePresence>
        {scroll > 5 && showBadge && (
          <motion.div
            className="absolute right-4 top-2"
            initial={{ opacity: 0, scale: 0.8, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/90 backdrop-blur-md border border-white/20 text-xs text-white font-semibold shadow-lg">
              <svg className="w-3 h-3 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z" clipRule="evenodd" />
              </svg>
              <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                {Math.round(scroll)}%
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
