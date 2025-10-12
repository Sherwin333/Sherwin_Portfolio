import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Preloader() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [currentMessage, setCurrentMessage] = useState(0);
  const [showSuccess, setShowSuccess] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const messages = [
    { icon: "⚡", text: "Initializing quantum systems", color: "from-yellow-400 to-orange-500" },
    { icon: "🚀", text: "Loading hyperdrive engines", color: "from-blue-400 to-cyan-500" },
    { icon: "🎨", text: "Rendering beautiful pixels", color: "from-pink-400 to-fuchsia-500" },
    { icon: "✨", text: "Applying magic touches", color: "from-purple-400 to-indigo-500" },
    { icon: "🎯", text: "Optimizing experience", color: "from-emerald-400 to-teal-500" },
  ];

  useEffect(() => {
    let messageIndex = 0;
    const messageInterval = setInterval(() => {
      if (messageIndex < messages.length - 1) {
        messageIndex++;
        setCurrentMessage(messageIndex);
      }
    }, 600);

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        const newProgress = Math.min(prev + 1.5, 100);
        if (newProgress >= 100) {
          clearInterval(progressInterval);
          setShowSuccess(true);
        }
        return newProgress;
      });
    }, 25);

    const timer = setTimeout(() => {
      setLoading(false);
      document.body.style.overflow = "unset";
    }, 3500);

    document.body.style.overflow = "hidden";

    return () => {
      clearTimeout(timer);
      clearInterval(progressInterval);
      clearInterval(messageInterval);
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <AnimatePresence mode="wait">
      {loading && (
        <motion.div
          className="fixed inset-0 z-[99999] flex items-center justify-center overflow-hidden bg-black"
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            scale: 1.1,
            filter: "blur(10px)"
          }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          {/* Animated mesh gradient background */}
          <div className="absolute inset-0">
            <motion.div
              className="absolute inset-0"
              animate={{
                background: [
                  "radial-gradient(circle at 0% 0%, rgba(236, 72, 153, 0.3) 0%, transparent 50%)",
                  "radial-gradient(circle at 100% 0%, rgba(168, 85, 247, 0.3) 0%, transparent 50%)",
                  "radial-gradient(circle at 100% 100%, rgba(59, 130, 246, 0.3) 0%, transparent 50%)",
                  "radial-gradient(circle at 0% 100%, rgba(16, 185, 129, 0.3) 0%, transparent 50%)",
                  "radial-gradient(circle at 0% 0%, rgba(236, 72, 153, 0.3) 0%, transparent 50%)",
                ],
              }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            />
          </div>

          {/* Grid background */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0" style={{
              backgroundImage: `
                linear-gradient(rgba(168, 85, 247, 0.3) 1px, transparent 1px),
                linear-gradient(90deg, rgba(168, 85, 247, 0.3) 1px, transparent 1px)
              `,
              backgroundSize: '50px 50px',
              maskImage: 'radial-gradient(circle, white 20%, transparent 70%)'
            }} />
          </div>

          {/* Orbiting particles */}
          {!shouldReduceMotion && [...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{
                left: "50%",
                top: "50%",
              }}
              animate={{
                rotate: 360,
                scale: [1, 1.5, 1],
              }}
              transition={{
                rotate: { duration: 10 + i * 2, repeat: Infinity, ease: "linear" },
                scale: { duration: 2, repeat: Infinity, delay: i * 0.1 }
              }}
            >
              <motion.div
                className="w-1.5 h-1.5 rounded-full"
                style={{
                  background: `linear-gradient(45deg, ${['#ec4899', '#a855f7', '#3b82f6', '#10b981'][i % 4]}, transparent)`,
                  x: Math.cos(i * (360 / 20) * (Math.PI / 180)) * 150,
                  y: Math.sin(i * (360 / 20) * (Math.PI / 180)) * 150,
                }}
                animate={{
                  opacity: [0.2, 1, 0.2],
                }}
                transition={{ duration: 2, repeat: Infinity, delay: i * 0.1 }}
              />
            </motion.div>
          ))}

          <div className="relative z-10 flex flex-col items-center gap-8 max-w-xl w-full px-8">
            {/* 3D Logo with holographic effect */}
            <motion.div
              initial={{ scale: 0, rotateX: -90 }}
              animate={{ scale: 1, rotateX: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="relative"
              style={{ perspective: "1000px" }}
            >
              <motion.div
                animate={shouldReduceMotion ? {} : {
                  rotateY: [0, 360],
                }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                style={{ transformStyle: "preserve-3d" }}
              >
                <h1 className="text-6xl md:text-8xl font-black relative">
                  {/* Multiple text layers for 3D effect */}
                  {[...Array(5)].map((_, i) => (
                    <motion.span
                      key={i}
                      className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent"
                      style={{
                        transform: `translateZ(${-i * 2}px)`,
                        opacity: 1 - i * 0.15,
                      }}
                      animate={shouldReduceMotion ? {} : {
                        backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                      }}
                      transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    >
                      SHERWIN
                    </motion.span>
                  ))}
                  <span className="relative bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
                    SHERWIN
                  </span>
                </h1>
              </motion.div>

              {/* Holographic scan line */}
              {!shouldReduceMotion && (
                <motion.div
                  className="absolute inset-x-0 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
                  animate={{ y: ["-100%", "200%"] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  style={{ filter: "blur(2px)" }}
                />
              )}
            </motion.div>

            {/* Futuristic progress container */}
            <div className="w-full space-y-6">
              {/* Animated message */}
              <motion.div
                className="relative h-16 flex items-center justify-center"
                key={currentMessage}
              >
                <motion.div
                  initial={{ opacity: 0, y: 20, scale: 0.8 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -20, scale: 0.8 }}
                  className="flex items-center gap-3"
                >
                  <motion.span
                    className="text-4xl"
                    animate={shouldReduceMotion ? {} : { 
                      rotate: [0, 360],
                      scale: [1, 1.2, 1]
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    {messages[currentMessage].icon}
                  </motion.span>
                  <span className={`text-lg font-semibold bg-gradient-to-r ${messages[currentMessage].color} bg-clip-text text-transparent`}>
                    {messages[currentMessage].text}
                  </span>
                </motion.div>
              </motion.div>

              {/* Hexagonal progress container */}
              <div className="relative">
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 opacity-30 blur-xl rounded-lg" />
                
                <div className="relative bg-gradient-to-r from-white/5 to-white/10 p-6 rounded-2xl border border-white/20 backdrop-blur-xl">
                  {/* Circular progress */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="relative w-20 h-20">
                      <svg className="w-full h-full -rotate-90">
                        <circle
                          cx="40"
                          cy="40"
                          r="36"
                          stroke="rgba(255,255,255,0.1)"
                          strokeWidth="6"
                          fill="none"
                        />
                        <motion.circle
                          cx="40"
                          cy="40"
                          r="36"
                          stroke="url(#gradient)"
                          strokeWidth="6"
                          fill="none"
                          strokeLinecap="round"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: progress / 100 }}
                          transition={{ duration: 0.3, ease: "easeOut" }}
                          strokeDasharray="226"
                        />
                        <defs>
                          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#ec4899" />
                            <stop offset="50%" stopColor="#a855f7" />
                            <stop offset="100%" stopColor="#3b82f6" />
                          </linearGradient>
                        </defs>
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <motion.span
                          key={Math.floor(progress)}
                          initial={{ scale: 0.8, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          className="text-xl font-bold text-white"
                        >
                          {Math.floor(progress)}
                        </motion.span>
                      </div>
                    </div>

                    {/* Stats display */}
                    <div className="flex-1 ml-6 space-y-2">
                      {[
                        { label: "Assets", value: Math.floor(progress * 0.5) },
                        { label: "Components", value: Math.floor(progress * 0.3) },
                        { label: "Animations", value: Math.floor(progress * 0.2) },
                      ].map((stat, i) => (
                        <motion.div
                          key={stat.label}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.1 }}
                          className="flex items-center justify-between text-sm"
                        >
                          <span className="text-gray-400">{stat.label}</span>
                          <div className="flex items-center gap-2">
                            <div className="w-24 h-1 bg-white/10 rounded-full overflow-hidden">
                              <motion.div
                                className="h-full bg-gradient-to-r from-pink-500 to-purple-500"
                                initial={{ width: 0 }}
                                animate={{ width: `${stat.value}%` }}
                                transition={{ duration: 0.5 }}
                              />
                            </div>
                            <span className="text-white font-mono text-xs w-8">{stat.value}%</span>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Main progress bar with glitch effect */}
                  <div className="relative h-3 bg-black/30 rounded-full overflow-hidden border border-white/10">
                    <motion.div
                      className="absolute inset-y-0 left-0 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 rounded-full"
                      initial={{ width: "0%" }}
                      animate={{ width: `${progress}%` }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                    />
                    
                    {/* Glitch effect */}
                    {!shouldReduceMotion && (
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-400"
                        animate={{
                          opacity: [0, 0.3, 0],
                          x: ["-100%", "100%"],
                        }}
                        transition={{ duration: 0.8, repeat: Infinity, repeatDelay: 2 }}
                      />
                    )}

                    {/* Particle trail */}
                    {!shouldReduceMotion && [...Array(5)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute top-1/2 -translate-y-1/2 w-1 h-1 bg-white rounded-full"
                        style={{ left: `${progress}%` }}
                        animate={{
                          x: [-20 - i * 5, 0],
                          opacity: [1, 0],
                          scale: [1, 0],
                        }}
                        transition={{
                          duration: 0.5,
                          repeat: Infinity,
                          delay: i * 0.1,
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Success animation */}
              <AnimatePresence>
                {showSuccess && (
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <motion.div
                      className="w-32 h-32 rounded-full bg-gradient-to-r from-emerald-400 to-teal-500 flex items-center justify-center"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 0.5 }}
                    >
                      <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <motion.path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={3}
                          d="M5 13l4 4L19 7"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ duration: 0.5, delay: 0.2 }}
                        />
                      </svg>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Terminal-style log */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="w-full max-h-24 overflow-hidden"
            >
              <div className="font-mono text-xs text-gray-500 space-y-1 px-4">
                <motion.div animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 2, repeat: Infinity }}>
                  <span className="text-emerald-400">✓</span> System initialized
                </motion.div>
                <motion.div animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}>
                  <span className="text-blue-400">→</span> Loading modules...
                </motion.div>
                <motion.div animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}>
                  <span className="text-purple-400">◆</span> Rendering interface...
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
