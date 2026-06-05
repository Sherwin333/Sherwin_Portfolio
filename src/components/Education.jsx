import { motion } from "framer-motion";

const education = [
  {
    year: "2023 — 2025", degree: "Master of Computer Applications", short: "MCA",
    place: "St Joseph Engineering College", university: "Visvesvaraya Technological University",
    color: "#818cf8",
  },
  {
    year: "2020 — 2023", degree: "Bachelor of Computer Applications", short: "BCA",
    place: "St Aloysius (Deemed to be University)", university: "Autonomous",
    color: "#c084fc",
  },
];

export default function Education() {
  return (
    <section id="education" className="relative px-6 py-32 overflow-hidden"
      style={{ background: "#07070a", fontFamily: "-apple-system, BlinkMacSystemFont, sans-serif" }}>
      <div className="absolute top-0 inset-x-0 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(99,102,241,0.3), transparent)" }} />

      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(99,102,241,0.07), transparent 65%)" }} />

      <div className="relative mx-auto max-w-5xl z-10">
        <motion.div initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.5 }} className="flex items-center gap-3 mb-5">
          <div className="h-px w-8" style={{ background: "linear-gradient(90deg, #6366f1, transparent)" }} />
          <span className="text-[11px] tracking-[0.25em] uppercase font-medium" style={{ color: "#818cf8" }}>Education</span>
        </motion.div>

        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-[38px] md:text-[54px] font-bold tracking-[-0.03em] leading-[1.1] mb-20">
          <span style={{ color: "rgba(255,255,255,0.9)" }}>Academic</span>
          <br />
          <span style={{ background: "linear-gradient(135deg, #818cf8, #c084fc)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            Background
          </span>
        </motion.h2>

        <div className="relative space-y-6">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-px"
            style={{ background: "linear-gradient(to bottom, rgba(99,102,241,0.4), rgba(168,85,247,0.2), transparent)" }} />

          {education.map((edu, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="relative pl-16">
              {/* Timeline node */}
              <motion.div
                className="absolute left-[18px] top-6 -translate-x-1/2 w-4 h-4 rounded-full flex items-center justify-center"
                style={{ background: edu.color, boxShadow: `0 0 16px ${edu.color}60` }}
                whileHover={{ scale: 1.3 }}>
                <div className="w-1.5 h-1.5 rounded-full bg-white/80" />
              </motion.div>

              {/* Card */}
              <motion.div
                className="p-6 rounded-2xl transition-all duration-300"
                style={{ background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.07)" }}
                whileHover={{ x: 6 }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = `${edu.color}40`; e.currentTarget.style.background = `${edu.color}08`; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)"; e.currentTarget.style.background = "rgba(255,255,255,0.025)"; }}>

                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div>
                    <p className="text-[11px] tracking-[0.12em] uppercase mb-2 font-medium" style={{ color: edu.color }}>
                      {edu.year}
                    </p>
                    <h3 className="text-[22px] md:text-[26px] font-semibold tracking-[-0.02em] mb-1"
                      style={{ color: "rgba(255,255,255,0.85)" }}>
                      {edu.degree}
                    </h3>
                    <p className="text-[15px] font-light mb-1" style={{ color: "rgba(255,255,255,0.4)" }}>
                      {edu.place}
                    </p>
                    <p className="text-[13px] font-light" style={{ color: "rgba(255,255,255,0.2)" }}>
                      {edu.university}
                    </p>
                  </div>

                  <div className="flex-shrink-0 flex items-start gap-2">
                    {/* Degree badge */}
                    <span className="px-3 py-1 rounded-full text-[12px] font-semibold"
                      style={{ background: `${edu.color}15`, color: edu.color, border: `1px solid ${edu.color}30` }}>
                      {edu.short}
                    </span>
                    {/* Completed */}
                    <span className="flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-light"
                      style={{ background: "rgba(34,197,94,0.08)", color: "#4ade80", border: "1px solid rgba(34,197,94,0.2)" }}>
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      Completed
                    </span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}