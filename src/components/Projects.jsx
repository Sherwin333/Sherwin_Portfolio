import { motion } from "framer-motion";
import { useState } from "react";

const projects = [
  {
    title: "Skill Tracker", subtitle: "MERN Stack",
    desc: "Full-stack app to track, manage, and showcase skills & certifications with real-time updates.",
    tech: ["React", "Node.js", "MongoDB", "Express"],
    code: "https://github.com/Sherwin333/Skill-Tracker-MERN",
    img: "images/skilltracker.png",
    category: "Full-Stack",
    accent: "#4ade80",
  },
  {
    title: "Smart Task Manager", subtitle: "Spring Boot Backend",
    desc: "Lightweight task management backend inspired by Trello/Jira with JWT auth and REST APIs.",
    tech: ["Spring Boot", "JWT", "REST API", "MySQL"],
    code: "https://github.com/Sherwin333/Smart-Task-Manager",
    img: "images/taskmanager.png",
    category: "Backend",
    accent: "#60a5fa",
  },
  {
    title: "NIDS", subtitle: "Network Intrusion Detection",
    desc: "ML-powered dashboard with live attack detection, honeypot integration, and real-time alerts.",
    tech: ["Python", "ML", "Honeypot", "Streamlit"],
    code: "https://github.com/Sherwin333/Network-Intrusion-Detection-System-NIDS-.git",
    img: "images/Picture1.png",
    category: "AI / ML",
    accent: "#c084fc",
  },
  {
    title: "PawConnect", subtitle: "Flutter Mobile App",
    desc: "Cross-platform pet adoption app to discover, adopt, and manage pet care tasks seamlessly.",
    tech: ["Flutter", "MySQL"],
    code: "https://github.com/Sherwin333/PawConnect-Flutter-App.git",
    img: "images/Picture2.png",
    category: "Mobile",
    accent: "#fb923c",
  },
];

function ProjectCard({ p, i }) {
  const [hover, setHover] = useState(false);
  const [imgOk, setImgOk] = useState(true);

  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
      transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
      onHoverStart={() => setHover(true)} onHoverEnd={() => setHover(false)}
      whileHover={{ y: -8 }}
      className="relative flex flex-col overflow-hidden rounded-2xl transition-all duration-500 group"
      style={{
        background: "rgba(255,255,255,0.025)",
        border: hover ? `1px solid ${p.accent}45` : "1px solid rgba(255,255,255,0.07)",
        boxShadow: hover ? `0 20px 60px ${p.accent}18` : "none",
        transition: "border-color 0.3s, box-shadow 0.3s",
      }}>

      {/* Top accent glow */}
      {hover && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          className="absolute top-0 inset-x-0 h-px"
          style={{ background: `linear-gradient(90deg, transparent, ${p.accent}60, transparent)` }} />
      )}

      {/* Image */}
      <div className="relative h-44 overflow-hidden">
        {imgOk ? (
          <motion.img src={`${process.env.PUBLIC_URL}/${p.img}`} alt={p.title}
            className="w-full h-full object-cover"
            animate={{ scale: hover ? 1.06 : 1 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            onError={() => setImgOk(false)} />
        ) : (
          <div className="w-full h-full flex items-center justify-center"
            style={{ background: `radial-gradient(circle at 50% 50%, ${p.accent}15, rgba(7,7,10,0.8))` }}>
            <span className="text-[48px] font-bold tracking-[-0.04em]"
              style={{ color: `${p.accent}30` }}>{p.title[0]}</span>
          </div>
        )}
        <div className="absolute inset-0" style={{ background: "linear-gradient(to top, #07070a 0%, rgba(7,7,10,0.2) 60%, transparent)" }} />
        {/* Category chip */}
        <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] font-semibold"
          style={{ background: `${p.accent}18`, color: p.accent, border: `1px solid ${p.accent}35` }}>
          {p.category}
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5 gap-3">
        <div>
          <p className="text-[11px] font-light mb-1" style={{ color: `${p.accent}80` }}>{p.subtitle}</p>
          <h3 className="text-[17px] font-semibold tracking-[-0.02em]" style={{ color: "rgba(255,255,255,0.88)" }}>
            {p.title}
          </h3>
        </div>
        <p className="text-[13px] leading-relaxed font-light flex-1" style={{ color: "rgba(255,255,255,0.35)" }}>
          {p.desc}
        </p>
        {/* Tech */}
        <div className="flex flex-wrap gap-1.5">
          {p.tech.slice(0, 3).map(t => (
            <span key={t} className="text-[10px] px-2.5 py-0.5 rounded-full font-light"
              style={{ background: `${p.accent}10`, color: p.accent, border: `1px solid ${p.accent}25` }}>
              {t}
            </span>
          ))}
          {p.tech.length > 3 && (
            <span className="text-[10px] px-2.5 py-0.5 rounded-full font-light"
              style={{ border: "1px solid rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.25)" }}>
              +{p.tech.length - 3}
            </span>
          )}
        </div>
        {/* CTA */}
        <a href={p.code} target="_blank" rel="noopener noreferrer"
          className="mt-1 flex items-center justify-between pt-3 group/link transition-all"
          style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
          <span className="text-[12px] font-medium transition-colors" style={{ color: hover ? p.accent : "rgba(255,255,255,0.3)" }}>
            View on GitHub
          </span>
          <svg className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-1"
            fill="none" stroke={hover ? p.accent : "rgba(255,255,255,0.25)"} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative px-6 py-32 overflow-hidden"
      style={{ background: "#07070a", fontFamily: "-apple-system, BlinkMacSystemFont, sans-serif" }}>
      <div className="absolute top-0 inset-x-0 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(99,102,241,0.3), transparent)" }} />
      <div className="absolute top-20 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(99,102,241,0.06), transparent 65%)" }} />

      <div className="relative mx-auto max-w-5xl z-10">
        <motion.div initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.5 }} className="flex items-center gap-3 mb-5">
          <div className="h-px w-8" style={{ background: "linear-gradient(90deg, #6366f1, transparent)" }} />
          <span className="text-[11px] tracking-[0.25em] uppercase font-medium" style={{ color: "#818cf8" }}>Work</span>
        </motion.div>

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-[38px] md:text-[54px] font-bold tracking-[-0.03em] leading-[1.1]">
            <span style={{ color: "rgba(255,255,255,0.9)" }}>Featured</span>
            <br />
            <span style={{ background: "linear-gradient(135deg, #818cf8, #c084fc)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Projects
            </span>
          </motion.h2>

          <motion.a href="https://github.com/Sherwin333" target="_blank" rel="noopener noreferrer"
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex-shrink-0 flex items-center gap-2 text-[13px] font-medium transition-colors group"
            style={{ color: "rgba(255,255,255,0.3)" }}
            onMouseEnter={e => e.currentTarget.style.color = "#818cf8"}
            onMouseLeave={e => e.currentTarget.style.color = "rgba(255,255,255,0.3)"}>
            More on GitHub
            <svg className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </motion.a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map((p, i) => <ProjectCard key={p.title} p={p} i={i} />)}
        </div>
      </div>
    </section>
  );
}