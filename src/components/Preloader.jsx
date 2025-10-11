import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Preloader() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 5;
      });
    }, 40);

    const timer = setTimeout(() => {
      setLoading(false);
      document.body.style.overflow = "unset";
    }, 2000);

    document.body.style.overflow = "hidden";

    return () => {
      clearTimeout(timer);
      clearInterval(progressInterval);
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <AnimatePresence mode="wait">
      {loading && (
        <motion.div
          className="fixed inset-0 z-[99999] flex flex-col items-center justify-center overflow-hidden bg-black"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          role="alert"
          aria-live="assertive"
          aria-label="Loading content"
        >
          <div className="absolute w-[500px] h-[500px] bg-fuchsia-600/30 rounded-full blur-3xl animate-blob top-[-150px] left-[-150px]" aria-hidden="true"></div>
          <div className="absolute w-[500px] h-[500px] bg-indigo-600/30 rounded-full blur-3xl animate-blob animation-delay-2000 bottom-[-150px] right-[-150px]" aria-hidden="true"></div>
          <div className="absolute w-[500px] h-[500px] bg-pink-600/30 rounded-full blur-3xl animate-blob animation-delay-4000 top-[40%] left-[30%]" aria-hidden="true"></div>

          <div className="relative z-10 flex flex-col items-center gap-8">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <motion.h1
                className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-fuchsia-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent"
                animate={shouldReduceMotion ? {} : {
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                style={{ backgroundSize: "200% 200%" }}
              >
                Sherwin.dev
              </motion.h1>
            </motion.div>

            <motion.div
              className="flex flex-col items-center gap-4 w-64"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <div className="relative w-full h-1 bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  className="absolute inset-y-0 left-0 bg-gradient-to-r from-fuchsia-500 via-purple-500 to-indigo-500 rounded-full"
                  initial={{ width: "0%" }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                  animate={shouldReduceMotion ? {} : {
                    x: ["-100%", "200%"],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  style={{ width: "50%" }}
                />
              </div>

              <motion.p
                className="text-sm text-gray-400 font-medium"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                Loading experience... {progress}%
              </motion.p>
            </motion.div>

            <motion.div
              className="flex gap-2 mt-4"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="w-2 h-2 rounded-full bg-gradient-to-r from-fuchsia-500 to-indigo-500"
                  animate={shouldReduceMotion ? {} : {
                    scale: [1, 1.5, 1],
                    opacity: [0.3, 1, 0.3],
                  }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                />
              ))}
            </motion.div>
          </div>

          <motion.div
            className="absolute bottom-8 text-xs text-gray-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            Crafting something amazing...
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
