import { useEffect, useState, useRef } from "react";
import { motion, useReducedMotion, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const [scroll, setScroll] = useState(0);
  const shouldReduceMotion = useReducedMotion();
  const rafRef = useRef(null);

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
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);

  return (
    <div 
      className="fixed top-0 left-0 w-full h-1 z-[9999] bg-transparent pointer-events-none"
      role="progressbar"
      aria-label="Page scroll progress"
      aria-valuenow={Math.round(scroll)}
      aria-valuemin="0"
      aria-valuemax="100"
    >
      <motion.div
        className="h-full bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-pink-500 shadow-[0_0_15px_rgba(192,38,211,0.8)] relative overflow-hidden"
        style={{ 
          width: shouldReduceMotion ? `${scroll}%` : smoothProgress,
          scaleX: scroll > 0 ? 1 : 0,
          transformOrigin: "left"
        }}
        initial={{ scaleX: 0 }}
        transition={{ duration: 0.1 }}
      >
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
          animate={shouldReduceMotion ? {} : {
            x: ["-100%", "200%"],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{ width: "50%" }}
        />
      </motion.div>

      {scroll > 0 && (
        <motion.div
          className="absolute right-4 top-1/2 -translate-y-1/2"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-black/80 backdrop-blur-sm border border-white/10 text-xs text-white font-medium">
            <svg 
              className="w-3 h-3 text-fuchsia-400" 
              fill="currentColor" 
              viewBox="0 0 20 20"
              aria-hidden="true"
            >
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z" clipRule="evenodd" />
            </svg>
            {Math.round(scroll)}%
          </div>
        </motion.div>
      )}
    </div>
  );
}
