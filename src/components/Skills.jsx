import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaGithub,
  FaJava,
  FaPython,
  FaAws,
} from "react-icons/fa";

import {
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiMysql,
  SiMongodb,
  SiFlutter,
  SiKotlin,
  SiLinux,
  SiSalesforce,
  SiSpringboot,
  SiPostman,
  SiTailwindcss,
  SiSupabase,
  SiGooglecloud,
} from "react-icons/si";

const categories = [
  {
    title: "Programming",
    accent: "#f59e0b",
    skills: [
      { name: "Java", icon: <FaJava />, color: "#f97316" },
      { name: "Python", icon: <FaPython />, color: "#60a5fa" },
      { name: "JavaScript", icon: <SiJavascript />, color: "#fbbf24" },
      { name: "Kotlin", icon: <SiKotlin />, color: "#c084fc" },
    ],
  },

  {
    title: "Frontend",
    accent: "#22d3ee",
    skills: [
      { name: "React", icon: <FaReact />, color: "#22d3ee" },
      { name: "HTML5", icon: <SiHtml5 />, color: "#f97316" },
      { name: "CSS3", icon: <SiCss3 />, color: "#60a5fa" },
      { name: "Tailwind", icon: <SiTailwindcss />, color: "#38bdf8" },
      { name: "Flutter", icon: <SiFlutter />, color: "#38bdf8" },
    ],
  },

  {
    title: "Backend",
    accent: "#4ade80",
    skills: [
      { name: "Spring Boot", icon: <SiSpringboot />, color: "#4ade80" },
      { name: "Node.js", icon: <FaNodeJs />, color: "#4ade80" },
      { name: "REST API", icon: "⚡", color: "#22d3ee" },
      { name: "JWT Auth", icon: "🔐", color: "#f59e0b" },
      { name: "Salesforce", icon: <SiSalesforce />, color: "#38bdf8" },
    ],
  },

  {
    title: "Databases",
    accent: "#60a5fa",
    skills: [
      { name: "MySQL", icon: <SiMysql />, color: "#60a5fa" },
      { name: "MongoDB", icon: <SiMongodb />, color: "#4ade80" },
      { name: "Supabase", icon: <SiSupabase />, color: "#3ECF8E" },
    ],
  },

  {
    title: "AI & ML",
    accent: "#c084fc",
    skills: [
      { name: "Generative AI", icon: "🤖", color: "#c084fc" },
      { name: "LLMs", icon: "🧠", color: "#818cf8" },
      { name: "Ollama", icon: "⚙️", color: "#14b8a6" },
      { name: "Prompt Eng.", icon: "✨", color: "#f472b6" },
      { name: "Machine Learning", icon: "📊", color: "#60a5fa" },
    ],
  },

  {
    title: "Tools & Cloud",
    accent: "#a78bfa",
    skills: [
      { name: "GitHub", icon: <FaGithub />, color: "#ffffff" },
      { name: "Linux", icon: <SiLinux />, color: "#fbbf24" },
      { name: "Postman", icon: <SiPostman />, color: "#f97316" },
      { name: "AWS", icon: <FaAws />, color: "#f59e0b" },
      { name: "GCP", icon: <SiGooglecloud />, color: "#4285F4" },
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative px-6 py-32 overflow-hidden"
      style={{
        background: "#07070a",
        fontFamily: "-apple-system, BlinkMacSystemFont, sans-serif",
      }}
    >
      <div
        className="absolute top-0 inset-x-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(99,102,241,0.3), transparent)",
        }}
      />

      <div
        className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(168,85,247,0.06), transparent 65%)",
        }}
      />

      <div className="relative mx-auto max-w-6xl z-10">
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-5"
        >
          <div
            className="h-px w-8"
            style={{
              background: "linear-gradient(90deg, #a855f7, transparent)",
            }}
          />

          <span
            className="text-[11px] tracking-[0.25em] uppercase font-medium"
            style={{ color: "#c084fc" }}
          >
            Expertise
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="text-[38px] md:text-[54px] font-bold tracking-[-0.03em] leading-[1.1] mb-16"
        >
          <span style={{ color: "rgba(255,255,255,0.9)" }}>
            Technical
          </span>
          <br />
          <span
            style={{
              background:
                "linear-gradient(135deg, #c084fc, #818cf8)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Expertise
          </span>
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {categories.map((cat, ci) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: ci * 0.08,
              }}
              whileHover={{
                y: -8,
                scale: 1.02,
              }}
              className="relative p-6 rounded-2xl overflow-hidden group transition-all duration-300"
              style={{
                background: "rgba(255,255,255,0.025)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: `radial-gradient(circle at top right, ${cat.accent}15, transparent 60%)`,
                }}
              />

              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  boxShadow: `0 0 40px ${cat.accent}20`,
                }}
              />

              <h3
                className="mb-5 text-sm font-semibold uppercase tracking-wider"
                style={{ color: cat.accent }}
              >
                {cat.title}
              </h3>

              <div className="grid grid-cols-3 gap-4">
                {cat.skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.2 }}
                    className="flex flex-col items-center gap-2"
                  >
                    <motion.div
                      whileHover={{ scale: 1.2, y: -5 }}
                      transition={{ duration: 0.2 }}
                      className="p-3 rounded-xl cursor-default"
                      style={{
                        background: `${skill.color}10`,
                        border: `1px solid ${skill.color}20`,
                        color: skill.color,
                      }}
                    >
                      <div
                        style={{
                          filter: "drop-shadow(0 0 8px currentColor)",
                        }}
                        className="text-[28px]"
                      >
                        {skill.icon}
                      </div>
                    </motion.div>

                    <span
                      className="text-[11px] text-center"
                      style={{
                        color: "rgba(255,255,255,0.65)",
                      }}
                    >
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-12 text-center text-sm"
          style={{
            color: "rgba(255,255,255,0.4)",
          }}
        >
          Building AI-powered applications using Spring Boot, React,
          LLMs, RAG systems, cloud technologies, and modern backend
          architectures.
        </motion.p>
      </div>
    </section>
  );
}