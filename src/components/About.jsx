import { motion } from "framer-motion";

const highlights = [
  { text: "Hands-on experience with Flutter, PHP, and Python projects", color: "#818cf8" },
  { text: "Passionate about building practical, user-friendly software solutions", color: "#c084fc" },
  { text: "Skilled in AI/ML — built a live Network Intrusion Detection System", color: "#67e8f9" },
  { text: "Enthusiastic about emerging technologies and open-source collaboration", color: "#86efac" },
];

const stats = [
  { value: "10+", label: "Projects Built", color: "#818cf8" },
  { value: "15+", label: "Technologies", color: "#c084fc" },
  { value: "2",   label: "Degrees",       color: "#67e8f9" },
];

export default function About() {
  return (
    <section id="about" className="relative px-6 py-32 overflow-hidden"
      style={{ background: "#07070a", fontFamily: "-apple-system, BlinkMacSystemFont, sans-serif" }}>
      <div className="absolute top-0 inset-x-0 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(99,102,241,0.3), transparent)" }} />

      {/* Glow */}
      <div className="absolute top-20 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(99,102,241,0.06), transparent 65%)" }} />

      <div className="relative mx-auto max-w-5xl z-10">
        {/* Label */}
        <motion.div initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.5 }} className="flex items-center gap-3 mb-5">
          <div className="h-px w-8" style={{ background: "linear-gradient(90deg, #6366f1, transparent)" }} />
          <span className="text-[11px] tracking-[0.25em] uppercase font-medium" style={{ color: "#818cf8" }}>About</span>
        </motion.div>

        {/* Heading */}
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-[38px] md:text-[54px] font-bold tracking-[-0.03em] leading-[1.1] mb-16">
          <span style={{ color: "rgba(255,255,255,0.9)" }}>Building the web,</span>
          <br />
          <span style={{ background: "linear-gradient(135deg, #818cf8, #c084fc)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            one line at a time.
          </span>
        </motion.h2>

        <div className="grid md:grid-cols-5 gap-16">
          {/* Bio — 3 cols */}
          <div className="md:col-span-3">
            <motion.p initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-[17px] leading-[1.8] mb-10 font-light"
              style={{ color: "rgba(255,255,255,0.4)" }}>
              MCA graduate and Software Developer experienced in AI-driven security systems, enterprise applications,
              and mobile-first solutions. Skilled in Python, Flutter, React, and Salesforce with a proven ability to ship products that matter.
            </motion.p>

            <motion.ul initial="hidden" whileInView="visible" viewport={{ once: true }}
              variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
              className="space-y-3.5 mb-10">
              {highlights.map((h, i) => (
                <motion.li key={i}
                  variants={{ hidden: { opacity: 0, x: -16 }, visible: { opacity: 1, x: 0, transition: { duration: 0.5 } } }}
                  className="flex items-start gap-3 text-[15px] font-light"
                  style={{ color: "rgba(255,255,255,0.45)" }}>
                  <span className="mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: h.color }} />
                  {h.text}
                </motion.li>
              ))}
            </motion.ul>

            <motion.a initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              href="#contact"
              className="inline-flex items-center gap-2 text-[14px] font-medium transition-all group"
              style={{ color: "#818cf8" }}
              onMouseEnter={e => e.currentTarget.style.color = "#a5b4fc"}
              onMouseLeave={e => e.currentTarget.style.color = "#818cf8"}>
              Get in touch
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.a>
          </div>

          {/* Stats — 2 cols */}
          <div className="md:col-span-2 flex flex-col justify-start gap-4">
            {stats.map((s, i) => (
              <motion.div key={s.label}
                initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="relative p-5 rounded-2xl group transition-all duration-300"
                style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = `${s.color}40`; e.currentTarget.style.background = `${s.color}08`; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)"; e.currentTarget.style.background = "rgba(255,255,255,0.02)"; }}>
                <span className="block text-[42px] font-bold tracking-[-0.04em] mb-1" style={{ color: s.color }}>
                  {s.value}
                </span>
                <span className="text-[13px] font-light" style={{ color: "rgba(255,255,255,0.3)" }}>
                  {s.label}
                </span>
              </motion.div>
            ))}
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex items-center gap-2 text-[12px] font-light mt-1"
              style={{ color: "rgba(255,255,255,0.2)" }}>
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              Mangalore, Karnataka
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}