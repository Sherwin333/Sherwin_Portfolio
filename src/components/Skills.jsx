import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaGithub, FaJava, FaPython, FaPhp, FaAndroid } from "react-icons/fa";
import { SiJavascript, SiHtml5, SiCss3, SiMysql, SiMongodb, SiFlutter, SiKotlin, SiLinux, SiSalesforce } from "react-icons/si";

const categories = [
  {
    title: "Languages", accent: "#f59e0b",
    skills: [
      { name: "Java",       icon: <FaJava />,       color: "#f97316" },
      { name: "Python",     icon: <FaPython />,     color: "#60a5fa" },
      { name: "JavaScript", icon: <SiJavascript />, color: "#fbbf24" },
      { name: "PHP",        icon: <FaPhp />,        color: "#818cf8" },
      { name: "Kotlin",     icon: <SiKotlin />,     color: "#c084fc" },
    ],
  },
  {
    title: "Web & Mobile", accent: "#22d3ee",
    skills: [
      { name: "React",   icon: <FaReact />,   color: "#22d3ee" },
      { name: "HTML",    icon: <SiHtml5 />,   color: "#f97316" },
      { name: "CSS",     icon: <SiCss3 />,    color: "#60a5fa" },
      { name: "Flutter", icon: <SiFlutter />, color: "#38bdf8" },
      { name: "Node.js", icon: <FaNodeJs />,  color: "#4ade80" },
    ],
  },
  {
    title: "Data & Cloud", accent: "#4ade80",
    skills: [
      { name: "MySQL",      icon: <SiMysql />,      color: "#60a5fa" },
      { name: "MongoDB",    icon: <SiMongodb />,    color: "#4ade80" },
      { name: "Salesforce", icon: <SiSalesforce />, color: "#38bdf8" },
    ],
  },
  {
    title: "Tools", accent: "#a78bfa",
    skills: [
      { name: "Git",            icon: <FaGithub />,  color: "#e2e8f0" },
      { name: "Linux",          icon: <SiLinux />,   color: "#fbbf24" },
      { name: "Android Studio", icon: <FaAndroid />, color: "#4ade80" },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative px-6 py-32 overflow-hidden"
      style={{ background: "#07070a", fontFamily: "-apple-system, BlinkMacSystemFont, sans-serif" }}>
      <div className="absolute top-0 inset-x-0 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(99,102,241,0.3), transparent)" }} />

      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(168,85,247,0.06), transparent 65%)" }} />

      <div className="relative mx-auto max-w-5xl z-10">
        <motion.div initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.5 }} className="flex items-center gap-3 mb-5">
          <div className="h-px w-8" style={{ background: "linear-gradient(90deg, #a855f7, transparent)" }} />
          <span className="text-[11px] tracking-[0.25em] uppercase font-medium" style={{ color: "#c084fc" }}>Skills</span>
        </motion.div>

        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-[38px] md:text-[54px] font-bold tracking-[-0.03em] leading-[1.1] mb-16">
          <span style={{ color: "rgba(255,255,255,0.9)" }}>Tech Stack</span>
          <br />
          <span style={{ background: "linear-gradient(135deg, #c084fc, #818cf8)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            & Tools
          </span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-4">
          {categories.map((cat, ci) => (
            <motion.div key={cat.title}
              initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.6, delay: ci * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="p-6 rounded-2xl transition-all duration-300 group"
              style={{ background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.07)" }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = `${cat.accent}35`; e.currentTarget.style.background = `${cat.accent}07`; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)"; e.currentTarget.style.background = "rgba(255,255,255,0.025)"; }}>

              {/* Category header */}
              <div className="flex items-center gap-2 mb-6">
                <div className="w-1 h-4 rounded-full" style={{ background: cat.accent }} />
                <h3 className="text-[12px] tracking-[0.15em] uppercase font-semibold" style={{ color: cat.accent }}>
                  {cat.title}
                </h3>
              </div>

              <div className="grid grid-cols-5 gap-3">
                {cat.skills.map((skill, si) => (
                  <motion.div key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: ci * 0.05 + si * 0.04 }}
                    whileHover={{ y: -4, scale: 1.1 }}
                    className="flex flex-col items-center gap-1.5 cursor-default group/skill">
                    <div className="p-2.5 rounded-xl transition-all duration-200"
                      style={{ background: `${skill.color}10`, border: `1px solid ${skill.color}20`, fontSize: "22px", color: skill.color, opacity: 0.6 }}
                      onMouseEnter={e => { e.currentTarget.style.opacity = "1"; e.currentTarget.style.boxShadow = `0 0 16px ${skill.color}30`; }}
                      onMouseLeave={e => { e.currentTarget.style.opacity = "0.6"; e.currentTarget.style.boxShadow = "none"; }}>
                      {skill.icon}
                    </div>
                    <span className="text-[10px] font-light text-center leading-tight"
                      style={{ color: "rgba(255,255,255,0.3)" }}>
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          transition={{ delay: 0.5 }} className="mt-10 text-[13px] font-light"
          style={{ color: "rgba(255,255,255,0.2)" }}>
          Always learning — currently exploring generative AI and LLM integrations.
        </motion.p>
      </div>
    </section>
  );
}