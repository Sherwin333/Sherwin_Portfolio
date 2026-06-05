import { useEffect, useState, useRef } from "react";
import { motion, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);
  const raf = useRef(null);
  const spring = useSpring(0, { stiffness: 120, damping: 30 });

  useEffect(() => {
    const onScroll = () => {
      if (raf.current) cancelAnimationFrame(raf.current);
      raf.current = requestAnimationFrame(() => {
        const total = document.documentElement.scrollHeight - window.innerHeight;
        const pct = total > 0 ? (window.scrollY / total) * 100 : 0;
        setProgress(pct);
        spring.set(pct);
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => { window.removeEventListener("scroll", onScroll); if (raf.current) cancelAnimationFrame(raf.current); };
  }, [spring]);

  return (
    <div className="fixed top-0 left-0 right-0 h-[2px] z-[9999] pointer-events-none"
      role="progressbar" aria-valuenow={Math.round(progress)} aria-valuemin={0} aria-valuemax={100}>
      <motion.div className="h-full origin-left" style={{
        scaleX: spring,
        background: "linear-gradient(90deg, #6366f1, #a855f7, #ec4899)",
        boxShadow: "0 0 8px rgba(99,102,241,0.6)",
      }} />
    </div>
  );
}