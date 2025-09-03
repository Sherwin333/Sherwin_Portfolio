import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000); // 2s
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 z-[99999] flex items-center justify-center overflow-hidden bg-black"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          {/* Animated background blobs */}
          <div className="absolute w-[500px] h-[500px] bg-fuchsia-600/30 rounded-full blur-3xl animate-blob top-[-150px] left-[-150px]"></div>
          <div className="absolute w-[500px] h-[500px] bg-indigo-600/30 rounded-full blur-3xl animate-blob animation-delay-2000 bottom-[-150px] right-[-150px]"></div>
          <div className="absolute w-[500px] h-[500px] bg-pink-600/30 rounded-full blur-3xl animate-blob animation-delay-4000 top-[40%] left-[30%]"></div>

          {/* Brand text */}
          <motion.h1
            className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-fuchsia-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent relative z-10"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            Sherwin.dev
          </motion.h1>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
