import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const ROLES = ["Software Developer", "Full-Stack Engineer", "AI Enthusiast"];

const SOCIALS = [
  { label: "GitHub", href: "https://github.com/Sherwin333", color: "#e2e8f0",
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg> },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/sherwindsouza0511", color: "#60a5fa",
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg> },
  { label: "Email", href: "mailto:sherwinashton33@gmail.com", color: "#f87171",
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg> },
  { label: "HackerRank", href: "https://www.hackerrank.com/profile/sherwinashton33", color: "#4ade80",
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c1.285 0 9.75 4.886 10.392 6.39.642 1.503.288 3.126-.945 4.36-1.233 1.233-2.857 1.587-4.36.945C15.583 10.991 12 9.75 12 9.75s-3.583 1.241-5.087 1.945c-1.503.642-3.127.288-4.36-.945-1.233-1.234-1.587-2.857-.945-4.36C2.25 4.886 10.715 0 12 0zm0 12.75s3.583 1.242 5.087 1.945c1.503.642 3.127.288 4.36-.945 1.233-1.233 1.587-2.857.945-4.36C21.75 7.886 13.285 3 12 3s-9.75 4.886-10.392 6.39c-.642 1.503-.288 3.127.945 4.36 1.233 1.233 2.857 1.587 4.36.945C8.417 13.992 12 12.75 12 12.75z"/></svg> },
];

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] },
});

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);
  const [imgLoaded, setImgLoaded] = useState(false);

  useEffect(() => {
    const target = ROLES[roleIdx];
    const t = setTimeout(() => {
      if (!deleting) {
        if (displayed.length < target.length) setDisplayed(target.slice(0, displayed.length + 1));
        else setTimeout(() => setDeleting(true), 2000);
      } else {
        if (displayed.length > 0) setDisplayed(displayed.slice(0, -1));
        else { setDeleting(false); setRoleIdx(p => (p + 1) % ROLES.length); }
      }
    }, deleting ? 40 : 90);
    return () => clearTimeout(t);
  }, [displayed, deleting, roleIdx]);

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 pb-20 px-6 overflow-hidden"
      style={{ background: "#07070a", fontFamily: "-apple-system, BlinkMacSystemFont, sans-serif" }}>

      {/* Background glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-32 -left-32 w-[700px] h-[700px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(99,102,241,0.12), transparent 60%)" }} />
        <div className="absolute top-1/2 -right-32 w-[500px] h-[500px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(168,85,247,0.08), transparent 60%)" }} />
        <div className="absolute -bottom-32 left-1/4 w-[400px] h-[400px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(236,72,153,0.06), transparent 60%)" }} />
        {/* Subtle grid */}
        <div className="absolute inset-0" style={{
          backgroundImage: "linear-gradient(rgba(99,102,241,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.04) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }} />
      </div>

      <div className="relative mx-auto max-w-5xl w-full z-10">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-16 md:gap-20">

          {/* Left */}
          <div className="flex-1 text-center md:text-left">
            {/* Badge */}
            <motion.div {...fade(0.1)} className="inline-flex items-center gap-2 mb-8 px-3.5 py-1.5 rounded-full"
              style={{ background: "rgba(34,197,94,0.08)", border: "1px solid rgba(34,197,94,0.2)" }}>
              <motion.span className="w-2 h-2 rounded-full bg-emerald-400"
                animate={{ opacity: [1, 0.3, 1], scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }} />
              <span className="text-[12px] font-medium" style={{ color: "#4ade80" }}>
                Available for Opportunities
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1 {...fade(0.2)}
              className="text-[52px] md:text-[72px] font-bold tracking-[-0.04em] leading-[1.05] mb-4">
              <span style={{ color: "rgba(255,255,255,0.55)" }}>Hi, I'm </span>
              <span className="relative inline-block" style={{
                background: "linear-gradient(135deg, #c7d2fe, #a5b4fc, #818cf8)",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
              }}>
                Sherwin
                <motion.span className="absolute -bottom-1 left-0 right-0 h-[2px] rounded-full"
                  style={{ background: "linear-gradient(90deg, #6366f1, #a855f7, transparent)" }}
                  initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
                  transition={{ delay: 0.8, duration: 0.8, ease: [0.22, 1, 0.36, 1] }} />
              </span>
            </motion.h1>

            {/* Typewriter */}
            <motion.div {...fade(0.3)} className="h-12 md:h-14 flex items-center justify-center md:justify-start mb-6">
              <span className="text-[20px] md:text-[26px] font-light tracking-[-0.01em]"
                style={{ color: "#a78bfa" }}>
                {displayed}
                <motion.span animate={{ opacity: [1, 0] }} transition={{ duration: 0.5, repeat: Infinity }}
                  className="inline-block w-[2px] h-5 md:h-6 ml-0.5 align-middle rounded-sm"
                  style={{ background: "#a78bfa" }} />
              </span>
            </motion.div>

            {/* Description */}
            <motion.p {...fade(0.4)}
              className="text-[16px] leading-relaxed mb-10 max-w-md mx-auto md:mx-0 font-light"
              style={{ color: "rgba(255,255,255,0.35)" }}>
              MCA graduate crafting scalable, modern web experiences. Focused on{" "}
              <span style={{ color: "rgba(165,180,252,0.7)" }}>React</span>,{" "}
              <span style={{ color: "rgba(165,180,252,0.7)" }}>Node.js</span>, and{" "}
              <span style={{ color: "rgba(165,180,252,0.7)" }}>AI/ML</span> systems.
            </motion.p>

            {/* CTAs */}
            <motion.div {...fade(0.5)} className="flex flex-wrap gap-3 justify-center md:justify-start mb-10">
              <a href="#projects"
                className="px-7 py-2.5 rounded-full text-[14px] font-semibold text-white transition-all duration-300"
                style={{ background: "linear-gradient(135deg, #6366f1, #a855f7)", boxShadow: "0 0 24px rgba(99,102,241,0.35)" }}
                onMouseEnter={e => e.currentTarget.style.boxShadow = "0 0 36px rgba(99,102,241,0.55)"}
                onMouseLeave={e => e.currentTarget.style.boxShadow = "0 0 24px rgba(99,102,241,0.35)"}>
                View Projects
              </a>
              <a href="https://drive.google.com/file/d/1-wuaWu0pHsQ_b6NeusMQaj-ENGaAQOrz/view"
                target="_blank" rel="noopener noreferrer"
                className="px-7 py-2.5 rounded-full text-[14px] font-medium transition-all duration-200"
                style={{ border: "1px solid rgba(255,255,255,0.12)", color: "rgba(255,255,255,0.55)" }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.25)"; e.currentTarget.style.color = "rgba(255,255,255,0.85)"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)"; e.currentTarget.style.color = "rgba(255,255,255,0.55)"; }}>
                Resume
              </a>
              <a href="https://drive.google.com/file/d/1ajquss3YNw-E0XLIrtn0E2X5fcLaowGa/view"
                target="_blank" rel="noopener noreferrer"
                className="px-7 py-2.5 rounded-full text-[14px] font-medium transition-all duration-200"
                style={{ border: "1px solid rgba(255,255,255,0.12)", color: "rgba(255,255,255,0.55)" }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.25)"; e.currentTarget.style.color = "rgba(255,255,255,0.85)"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)"; e.currentTarget.style.color = "rgba(255,255,255,0.55)"; }}>
                Detailed Resume
              </a>
            </motion.div>

            {/* Socials */}
            <motion.div {...fade(0.6)} className="flex gap-2.5 justify-center md:justify-start">
              {SOCIALS.map(s => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}
                  className="p-2.5 rounded-xl transition-all duration-200 group"
                  style={{ border: "1px solid rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.3)" }}
                  onMouseEnter={e => { e.currentTarget.style.color = s.color; e.currentTarget.style.borderColor = `${s.color}40`; e.currentTarget.style.background = `${s.color}10`; }}
                  onMouseLeave={e => { e.currentTarget.style.color = "rgba(255,255,255,0.3)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"; e.currentTarget.style.background = "transparent"; }}>
                  {s.icon}
                </a>
              ))}
            </motion.div>
          </div>

          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex-shrink-0">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              {/* Glow */}
              <motion.div className="absolute -inset-4 rounded-[32px] blur-2xl -z-10"
                style={{ background: "linear-gradient(135deg, rgba(99,102,241,0.25), rgba(168,85,247,0.15))" }}
                animate={{ opacity: [0.6, 0.9, 0.6] }} transition={{ duration: 3, repeat: Infinity }} />
              {/* Border */}
              <div className="absolute inset-0 rounded-[28px] p-[1px]"
                style={{ background: "linear-gradient(135deg, rgba(99,102,241,0.5), rgba(168,85,247,0.3), rgba(99,102,241,0.2))" }}>
                <div className="w-full h-full rounded-[27px]" style={{ background: "#07070a" }} />
              </div>
              {/* Image */}
              <div className="absolute inset-[2px] rounded-[26px] overflow-hidden" style={{ background: "rgba(255,255,255,0.04)" }}>
                {!imgLoaded && <div className="absolute inset-0 animate-pulse" style={{ background: "rgba(99,102,241,0.08)" }} />}
                <img src={`${process.env.PUBLIC_URL}/images/13.jpg`} alt="Sherwin D'Souza"
                  className={`w-full h-full object-cover transition-opacity duration-700 ${imgLoaded ? "opacity-100" : "opacity-0"}`}
                  onLoad={() => setImgLoaded(true)} />
              </div>
              {/* Corner accent dots */}
              <div className="absolute -top-1 -right-1 w-3 h-3 rounded-full" style={{ background: "#6366f1", boxShadow: "0 0 12px #6366f1" }} />
              <div className="absolute -bottom-1 -left-1 w-2 h-2 rounded-full" style={{ background: "#a855f7", boxShadow: "0 0 10px #a855f7" }} />
            </div>
          </motion.div>
        </div>

        {/* Scroll hint */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.4 }}
          className="absolute bottom-0 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 pb-2">
          <span className="text-[10px] tracking-[0.2em] uppercase" style={{ color: "rgba(255,255,255,0.15)" }}>Scroll</span>
          <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.5, repeat: Infinity }}
            className="w-px h-7" style={{ background: "linear-gradient(to bottom, rgba(99,102,241,0.4), transparent)" }} />
        </motion.div>
      </div>
    </section>
  );
}