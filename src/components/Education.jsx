import { motion, useReducedMotion } from "framer-motion";

const education = [
  {
    year: "2023-2025",
    degree: "MCA",
    place: "St Joseph Engineering College, VTU",
    icon: "🎓",
    status: "Completed",
  },
  {
    year: "2020-2023",
    degree: "BCA",
    place: "St Aloysius (Deemed to be University)",
    icon: "📚",
    status: "Completed",
  },
];

export default function Education() {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.2,
        delayChildren: shouldReduceMotion ? 0 : 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="education"
      className="relative px-6 py-24 bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white overflow-hidden"
    >
      <div className="absolute top-20 left-20 w-[400px] h-[400px] bg-fuchsia-600/20 rounded-full blur-3xl animate-blob" aria-hidden="true"></div>
      <div className="absolute bottom-10 right-20 w-[400px] h-[400px] bg-indigo-600/20 rounded-full blur-3xl animate-blob animation-delay-2000" aria-hidden="true"></div>

      <div className="relative mx-auto max-w-4xl z-10">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          My{" "}
          <span className="bg-gradient-to-r from-fuchsia-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
            Education
          </span>
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative"
        >
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-fuchsia-500 via-purple-500 to-indigo-500" aria-hidden="true"></div>

          <div className="space-y-12">
            {education.map((edu, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="relative pl-20"
              >
                <motion.div
                  className="absolute left-4 top-0 w-9 h-9 rounded-full bg-gradient-to-br from-fuchsia-500 to-indigo-500 flex items-center justify-center shadow-lg shadow-fuchsia-500/50"
                  whileHover={shouldReduceMotion ? {} : { scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <span className="text-lg" role="img" aria-label="Education icon">
                    {edu.icon}
                  </span>
                </motion.div>

                <motion.div
                  className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 group"
                  whileHover={shouldReduceMotion ? {} : { x: 8, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-3">
                    <h3 className="text-2xl font-bold text-white group-hover:text-fuchsia-400 transition-colors">
                      {edu.degree}
                    </h3>
                    <motion.span
                      className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-fuchsia-500/20 to-indigo-500/20 border border-fuchsia-500/30 text-sm font-medium text-fuchsia-300"
                      whileHover={shouldReduceMotion ? {} : { scale: 1.05 }}
                    >
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {edu.year}
                    </motion.span>
                  </div>
                  <p className="text-gray-300 text-lg flex items-center gap-2 mb-3">
                    <svg
                      className="w-5 h-5 text-indigo-400 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {edu.place}
                  </p>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30">
                    <svg
                      className="w-4 h-4 text-emerald-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-emerald-300 text-sm font-medium">
                      {edu.status}
                    </span>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
