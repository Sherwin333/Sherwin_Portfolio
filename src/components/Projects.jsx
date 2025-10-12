import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";

const projects = [
  {
    title: "Skill Tracker – MERN",
    desc: "A full-stack MERN application to track, manage, and showcase skills & certifications.",
    tech: ["React", "Node.js", "MongoDB", "Express"],
    img: "images/skilltracker.png",
    code: "https://github.com/Sherwin333/Skill-Tracker-MERN",
    category: "Full-Stack",
    stars: "15",
    color: "from-emerald-500 to-teal-500"
  },
  {
    title: "Smart Task Manager",
    desc: "A lightweight Task Management System backend inspired by Trello/Jira, built with Spring Boot.",
    tech: ["Spring Boot", "JWT", "REST API", "MySQL"],
    img: "images/taskmanager.png",
    code: "https://github.com/Sherwin333/Smart-Task-Manager",
    category: "Backend",
    stars: "12",
    color: "from-blue-500 to-cyan-500"
  },
  {
    title: "NIDS – Network Intrusion Detection",
    desc: "ML-powered network intrusion detection dashboard with live detection.",
    tech: ["Python", "ML", "Honeypot", "Streamlit"],
    img: "images/Picture1.png",
    code: "https://github.com/Sherwin333/Network-Intrusion-Detection-System-NIDS-.git",
    category: "AI/ML",
    stars: "20",
    color: "from-purple-500 to-pink-500"
  },
  {
    title: "PawConnect – Pet Adoption App",
    desc: "Flutter app to discover, adopt & manage pet care tasks.",
    tech: ["Flutter", "MySQL"],
    img: "images/Picture2.png",
    code: "https://github.com/Sherwin333/PawConnect-Flutter-App.git",
    category: "Mobile",
    stars: "8",
    color: "from-orange-500 to-red-500"
  },
];

export default function Projects() {
  const shouldReduceMotion = useReducedMotion();
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.15,
        delayChildren: shouldReduceMotion ? 0 : 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="projects"
      className="relative px-6 py-24 bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white overflow-hidden"
    >
      {/* Animated background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              "radial-gradient(circle at 20% 50%, rgba(168, 85, 247, 0.15) 0%, transparent 50%)",
              "radial-gradient(circle at 80% 50%, rgba(59, 130, 246, 0.15) 0%, transparent 50%)",
              "radial-gradient(circle at 20% 50%, rgba(168, 85, 247, 0.15) 0%, transparent 50%)",
            ],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(168, 85, 247, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(168, 85, 247, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          maskImage: 'radial-gradient(circle, white 30%, transparent 80%)'
        }} />
      </div>

      <div className="relative mx-auto max-w-7xl z-10">
        {/* Header with stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 space-y-6"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-fuchsia-500/10 to-indigo-500/10 border border-fuchsia-500/30 backdrop-blur-xl mb-4">
            <motion.span
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="text-fuchsia-400"
            >
              ⚡
            </motion.span>
            <span className="text-sm text-fuchsia-300 font-medium">Latest Work</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-black">
            Featured{" "}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-fuchsia-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
                Projects
              </span>
              {!shouldReduceMotion && (
                <motion.span
                  className="absolute -inset-2 bg-gradient-to-r from-fuchsia-500/20 to-indigo-500/20 blur-xl -z-10"
                  animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              )}
            </span>
          </h2>

          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Explore my latest work showcasing full-stack development, AI/ML, and mobile applications
          </p>

          {/* Stats */}
          <div className="flex items-center justify-center gap-8 mt-8">
            {[
              { label: "Projects", value: "10+", icon: "🚀" },
              { label: "Technologies", value: "15+", icon: "⚡" },
              { label: "GitHub Stars", value: "50+", icon: "⭐" }
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="text-center"
              >
                <div className="text-3xl mb-1">{stat.icon}</div>
                <div className="text-2xl font-bold text-white">{stat.value}</div>
                <div className="text-xs text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              variants={cardVariants}
              onHoverStart={() => setHoveredIndex(i)}
              onHoverEnd={() => setHoveredIndex(null)}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl shadow-xl hover:shadow-2xl transition-all duration-500"
              whileHover={shouldReduceMotion ? {} : { y: -12, scale: 1.03 }}
            >
              {/* Glow effect on hover */}
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${p.color} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 -z-10`} />

              {/* Image */}
              <div className="relative overflow-hidden h-48">
                <motion.img
                  src={`${process.env.PUBLIC_URL}/${p.img}`}
                  alt={`${p.title} preview`}
                  className="w-full h-full object-cover"
                  animate={hoveredIndex === i && !shouldReduceMotion ? { scale: 1.1 } : { scale: 1 }}
                  transition={{ duration: 0.6 }}
                  onError={(e) => {
                    e.target.style.background = `linear-gradient(135deg, ${p.color.split(' ')[1]}, ${p.color.split(' ')[3]})`;
                    e.target.alt = 'Project preview unavailable';
                  }}
                />
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-70"></div>

                {/* Category badge */}
                <div className="absolute top-3 left-3">
                  <span className={`px-3 py-1 text-xs font-bold rounded-full bg-gradient-to-r ${p.color} text-white shadow-lg`}>
                    {p.category}
                  </span>
                </div>

                {/* Stars badge */}
                <div className="absolute top-3 right-3 flex items-center gap-1 px-2 py-1 rounded-full bg-black/50 backdrop-blur-sm border border-white/20">
                  <svg className="w-3 h-3 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="text-xs text-white font-medium">{p.stars}</span>
                </div>

                {/* Scan line effect */}
                {hoveredIndex === i && !shouldReduceMotion && (
                  <motion.div
                    className="absolute inset-x-0 h-1 bg-gradient-to-r from-transparent via-white to-transparent"
                    initial={{ y: "0%" }}
                    animate={{ y: "100%" }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                  />
                )}
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col flex-grow space-y-4">
                <div className="space-y-2">
                  <h3 className="text-lg font-bold group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text transition-all duration-300 line-clamp-2" style={hoveredIndex === i ? { backgroundImage: `linear-gradient(to right, ${p.color.split(' ')[1]}, ${p.color.split(' ')[3]})` } : {}}>
                    {p.title}
                  </h3>
                  <p className="text-gray-400 text-xs leading-relaxed line-clamp-3">
                    {p.desc}
                  </p>
                </div>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-1.5">
                  {p.tech.slice(0, 3).map((t, idx) => (
                    <motion.span
                      key={t}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + idx * 0.1 }}
                      whileHover={{ scale: 1.1 }}
                      className="px-2 py-1 text-[10px] font-medium rounded-full bg-gradient-to-r from-fuchsia-500/10 to-indigo-500/10 text-fuchsia-300 border border-fuchsia-500/20 hover:border-fuchsia-500/40 transition-all"
                    >
                      {t}
                    </motion.span>
                  ))}
                  {p.tech.length > 3 && (
                    <span className="px-2 py-1 text-[10px] font-medium rounded-full bg-white/5 text-gray-400">
                      +{p.tech.length - 3}
                    </span>
                  )}
                </div>

                {/* CTA Button */}
                <motion.a
                  href={p.code}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={shouldReduceMotion ? {} : { scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className={`mt-auto flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-gradient-to-r ${p.color} text-white text-sm font-bold shadow-lg hover:shadow-xl transition-all group/btn`}
                >
                  <svg className="w-4 h-4 group-hover/btn:rotate-12 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                  View on GitHub
                  <svg className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </motion.a>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* Footer CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <motion.a
            href="https://github.com/Sherwin333"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={shouldReduceMotion ? {} : { scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-white/5 to-white/10 border-2 border-white/20 hover:border-fuchsia-500/50 text-white font-bold transition-all backdrop-blur-xl shadow-xl hover:shadow-fuchsia-500/30"
          >
            <svg className="w-6 h-6 group-hover:rotate-12 transition-transform" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
            </svg>
            <span>Explore More on GitHub</span>
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
