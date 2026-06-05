import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function Preloader() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const start = Date.now();
    const duration = 2200;

    const tick = setInterval(() => {
      const pct = Math.min(((Date.now() - start) / duration) * 100, 100);
      setProgress(pct);
      if (pct >= 100) { clearInterval(tick); setDone(true); }
    }, 16);

    const exit = setTimeout(() => {
      setLoading(false);
      document.body.style.overflow = "unset";
    }, 2800);

    return () => { clearInterval(tick); clearTimeout(exit); document.body.style.overflow = "unset"; };
  }, []);

  return (
    <AnimatePresence mode="wait">
      {loading && (
        <motion.div
          className="fixed inset-0 z-[99999] flex flex-col items-center justify-center"
          style={{ background: "#07070a" }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Background glow */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full blur-[120px]"
              style={{ background: "radial-gradient(ellipse, rgba(99,102,241,0.15), rgba(168,85,247,0.10), transparent 70%)" }}
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 flex flex-col items-center gap-10"
          >
            {/* Monogram */}
            <div className="relative">
              <motion.div
                className="w-16 h-16 rounded-2xl flex items-center justify-center text-2xl font-bold"
                style={{
                  background: "linear-gradient(135deg, rgba(99,102,241,0.2), rgba(168,85,247,0.2))",
                  border: "1px solid rgba(99,102,241,0.3)",
                  color: "#a5b4fc",
                }}
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                S
              </motion.div>
              <motion.div
                className="absolute -inset-2 rounded-2xl blur-xl -z-10"
                style={{ background: "rgba(99,102,241,0.2)" }}
                animate={{ opacity: [0.3, 0.7, 0.3] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>

            {/* Name */}
            <div className="text-center">
              <h1 className="text-[38px] font-semibold tracking-[-0.04em] text-white mb-1"
                style={{ fontFamily: "-apple-system, BlinkMacSystemFont, sans-serif" }}>
                Sherwin D'Souza
              </h1>
              <p className="text-[12px] tracking-[0.2em] uppercase font-light" style={{ color: "rgba(165,180,252,0.5)" }}>
                Portfolio
              </p>
            </div>

            {/* Progress */}
            <div className="w-48 flex flex-col items-center gap-2">
              <div className="w-full h-[1px] rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.07)" }}>
                <motion.div
                  className="h-full rounded-full"
                  style={{
                    width: `${progress}%`,
                    background: "linear-gradient(90deg, #6366f1, #a855f7)",
                    boxShadow: "0 0 12px rgba(99,102,241,0.6)",
                  }}
                />
              </div>
              <span className="text-[11px] font-light tabular-nums" style={{ color: "rgba(255,255,255,0.2)" }}>
                {Math.floor(progress)}%
              </span>
            </div>

            {/* Done check */}
            <AnimatePresence>
              {done && (
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="w-8 h-8 rounded-full flex items-center justify-center"
                  style={{ background: "rgba(34,197,94,0.15)", border: "1px solid rgba(34,197,94,0.3)" }}
                >
                  <svg className="w-4 h-4" fill="none" stroke="#4ade80" viewBox="0 0 24 24">
                    <motion.path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"
                      initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.4 }} />
                  </svg>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}