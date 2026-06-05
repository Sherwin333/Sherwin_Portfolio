import { motion } from "framer-motion";

const methods = [
  { name: "Email",      value: "sherwinashton33@gmail.com",          href: "mailto:sherwinashton33@gmail.com",                         color: "#f87171",
    icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg> },
  { name: "LinkedIn",   value: "@sherwindsouza0511",                  href: "https://www.linkedin.com/in/sherwindsouza0511",            color: "#60a5fa",
    icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg> },
  { name: "GitHub",     value: "@Sherwin333",                         href: "https://github.com/Sherwin333",                           color: "#e2e8f0",
    icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"/></svg> },
  { name: "HackerRank", value: "@sherwinashton33",                    href: "https://www.hackerrank.com/profile/sherwinashton33",       color: "#4ade80",
    icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c1.285 0 9.75 4.886 10.392 6.39.642 1.503.288 3.126-.945 4.36-1.233 1.233-2.857 1.587-4.36.945C15.583 10.991 12 9.75 12 9.75s-3.583 1.241-5.087 1.945c-1.503.642-3.127.288-4.36-.945-1.233-1.234-1.587-2.857-.945-4.36C2.25 4.886 10.715 0 12 0zm0 12.75s3.583 1.242 5.087 1.945c1.503.642 3.127.288 4.36-.945 1.233-1.233 1.587-2.857.945-4.36C21.75 7.886 13.285 3 12 3s-9.75 4.886-10.392 6.39c-.642 1.503-.288 3.127.945 4.36 1.233 1.233 2.857 1.587 4.36.945C8.417 13.992 12 12.75 12 12.75z"/></svg> },
];

export default function Contact() {
  return (
    <section id="contact" className="relative px-6 py-32 overflow-hidden"
      style={{ background: "#07070a", fontFamily: "-apple-system, BlinkMacSystemFont, sans-serif" }}>
      <div className="absolute top-0 inset-x-0 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(99,102,241,0.3), transparent)" }} />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(168,85,247,0.07), transparent 65%)" }} />

      <div className="relative mx-auto max-w-5xl z-10">
        <motion.div initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.5 }} className="flex items-center gap-3 mb-5">
          <div className="h-px w-8" style={{ background: "linear-gradient(90deg, #a855f7, transparent)" }} />
          <span className="text-[11px] tracking-[0.25em] uppercase font-medium" style={{ color: "#c084fc" }}>Contact</span>
        </motion.div>

        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-[38px] md:text-[54px] font-bold tracking-[-0.03em] leading-[1.1] mb-6">
          <span style={{ color: "rgba(255,255,255,0.9)" }}>Let's build</span>
          <br />
          <span style={{ background: "linear-gradient(135deg, #c084fc, #818cf8)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            something great.
          </span>
        </motion.h2>

        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-[17px] font-light mb-14 max-w-lg"
          style={{ color: "rgba(255,255,255,0.32)" }}>
          Open to full-time roles, freelance projects, and collaborations. Quick to respond.
        </motion.p>

        {/* Contact cards */}
        <div className="grid md:grid-cols-2 gap-3 mb-14">
          {methods.map((m, i) => (
            <motion.a key={m.name} href={m.href}
              target={m.name !== "Email" ? "_blank" : undefined}
              rel={m.name !== "Email" ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ x: 6 }}
              className="flex items-center gap-4 p-5 rounded-2xl transition-all duration-300 group"
              style={{ background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.07)" }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = `${m.color}40`; e.currentTarget.style.background = `${m.color}08`; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)"; e.currentTarget.style.background = "rgba(255,255,255,0.025)"; }}>

              <div className="p-2.5 rounded-xl flex-shrink-0 transition-all duration-200"
                style={{ background: `${m.color}12`, border: `1px solid ${m.color}25`, color: m.color }}>
                {m.icon}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[11px] tracking-[0.1em] uppercase mb-0.5 font-medium" style={{ color: `${m.color}80` }}>
                  {m.name}
                </p>
                <p className="text-[14px] font-light truncate" style={{ color: "rgba(255,255,255,0.6)" }}>
                  {m.value}
                </p>
              </div>
              <svg className="w-4 h-4 flex-shrink-0 opacity-30 group-hover:opacity-70 group-hover:translate-x-1 transition-all"
                fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: m.color }}>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.a>
          ))}
        </div>

        {/* Status pills */}
        <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex flex-wrap gap-2">
          {[
            { label: "Open to Work",    color: "#4ade80" },
            { label: "Remote Friendly", color: "#60a5fa" },
            { label: "Quick Response",  color: "#c084fc" },
          ].map(pill => (
            <span key={pill.label}
              className="flex items-center gap-2 px-4 py-2 rounded-full text-[12px] font-medium"
              style={{ background: `${pill.color}10`, color: pill.color, border: `1px solid ${pill.color}28` }}>
              <motion.span className="w-1.5 h-1.5 rounded-full" style={{ background: pill.color }}
                animate={{ opacity: [1, 0.3, 1] }} transition={{ duration: 2, repeat: Infinity }} />
              {pill.label}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}