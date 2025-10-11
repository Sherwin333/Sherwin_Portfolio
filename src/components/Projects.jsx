import { motion, useReducedMotion } from "framer-motion";

const projects = [
  {
    title: "Skill Tracker – MERN",
    desc: "A full-stack MERN application to track, manage, and showcase skills & certifications.",
    tech: ["React", "Node.js", "MongoDB", "Express"],
    img: "images/skilltracker.png",
    code: "https://github.com/Sherwin333/Skill-Tracker-MERN",
  },
  {
    title: "Smart Task Manager",
    desc: "A lightweight Task Management System backend inspired by Trello/Jira, built with Spring Boot.",
    tech: ["Spring Boot", "JWT", "REST API", "MySQL"],
    img: "images/taskmanager.png",
    code: "https://github.com/Sherwin333/Smart-Task-Manager",
  },
  {
    title: "NIDS – Network Intrusion Detection",
    desc: "ML-powered network intrusion detection dashboard with live detection.",
    tech: ["Python", "ML", "Honeypot", "Streamlit"],
    img: "images/Picture1.png",
    code: "https://github.com/Sherwin333/Network-Intrusion-Detection-System-NIDS-.git",
  },
  {
    title: "PawConnect – Pet Adoption App",
    desc: "Flutter app to discover, adopt & manage pet care tasks.",
    tech: ["Flutter", "MySQL"],
    img: "images/Picture2.png",
    code: "https://github.com/Sherwin333/PawConnect-Flutter-App.git",
  },
];

export default function Projects() {
  const shouldReduceMotion = useReducedMotion();

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
      <div className="absolute top-20 left-20 w-[500px] h-[500px] bg-fuchsia-600/20 rounded-full blur-3xl animate-blob" aria-hidden="true"></div>
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-indigo-600/20 rounded-full blur-3xl animate-blob animation-delay-2000" aria-hidden="true"></div>

      <div className="relative mx-auto max-w-7xl z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            Featured{" "}
            <span className="bg-gradient-to-r from-fuchsia-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Explore my latest work showcasing full-stack development, AI/ML, and mobile applications
          </p>
        </motion.div>

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
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl shadow-xl hover:shadow-2xl hover:shadow-fuchsia-500/20 transition-all duration-500"
              whileHover={shouldReduceMotion ? {} : { y: -8, scale: 1.02 }}
            >
              <div className="relative overflow-hidden h-48">
                <motion.img
                  src={`${process.env.PUBLIC_URL}/${p.img}`}
                  alt={`${p.title} preview`}
                  className="w-full h-full object-cover"
                  whileHover={shouldReduceMotion ? {} : { scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  onError={(e) => {
                    e.target.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
                    e.target.alt = 'Project preview unavailable';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60"></div>
              </div>

              <div className="p-5 flex flex-col flex-grow space-y-3">
                <div>
                  <h3 className="text-lg font-bold mb-2 group-hover:text-fuchsia-400 transition-colors line-clamp-2">
                    {p.title}
                  </h3>
                  <p className="text-gray-400 text-xs leading-relaxed line-clamp-3">
                    {p.desc}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {p.tech.slice(0, 3).map((t) => (
                    <span
                      key={t}
                      className="px-2 py-1 text-[10px] font-medium rounded-full bg-gradient-to-r from-fuchsia-500/10 to-indigo-500/10 text-fuchsia-300 border border-fuchsia-500/20"
                    >
                      {t}
                    </span>
                  ))}
                  {p.tech.length > 3 && (
                    <span className="px-2 py-1 text-[10px] font-medium rounded-full bg-white/5 text-gray-400">
                      +{p.tech.length - 3}
                    </span>
                  )}
                </div>

                <motion.a
                  href={p.code}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={shouldReduceMotion ? {} : { scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="mt-auto flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-indigo-500 to-fuchsia-500 hover:from-indigo-400 hover:to-fuchsia-400 text-white text-sm font-semibold shadow-lg hover:shadow-fuchsia-500/50 transition-all"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                  View Code
                </motion.a>
              </div>

              <div className="absolute -z-10 inset-0 bg-gradient-to-br from-fuchsia-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" aria-hidden="true"></div>
            </motion.article>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <motion.a
            href="https://github.com/Sherwin333"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={shouldReduceMotion ? {} : { scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 text-white font-semibold transition-all"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
            </svg>
            View All Projects on GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
