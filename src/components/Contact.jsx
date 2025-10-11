import { motion, useReducedMotion } from "framer-motion";

const contactMethods = [
  {
    name: "Email",
    value: "sherwinashton33@gmail.com",
    link: "mailto:sherwinashton33@gmail.com",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    color: "from-red-500 to-pink-500",
    hoverColor: "hover:border-red-500/50",
  },
  {
    name: "LinkedIn",
    value: "@sherwindsouza0511",
    link: "https://www.linkedin.com/in/sherwindsouza0511",
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
    color: "from-blue-500 to-cyan-500",
    hoverColor: "hover:border-blue-500/50",
  },
  {
    name: "GitHub",
    value: "@Sherwin333",
    link: "https://github.com/Sherwin333",
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
      </svg>
    ),
    color: "from-gray-700 to-gray-900",
    hoverColor: "hover:border-gray-500/50",
  },
  {
    name: "HackerRank",
    value: "@sherwinashton33",
    link: "https://www.hackerrank.com/profile/sherwinashton33",
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0c1.285 0 9.75 4.886 10.392 6.39.642 1.503.288 3.126-.945 4.36-1.233 1.233-2.857 1.587-4.36.945C15.583 10.991 12 9.75 12 9.75s-3.583 1.241-5.087 1.945c-1.503.642-3.127.288-4.36-.945-1.233-1.234-1.587-2.857-.945-4.36C2.25 4.886 10.715 0 12 0zm0 12.75s3.583 1.242 5.087 1.945c1.503.642 3.127.288 4.36-.945 1.233-1.233 1.587-2.857.945-4.36C21.75 7.886 13.285 3 12 3s-9.75 4.886-10.392 6.39c-.642 1.503-.288 3.127.945 4.36 1.233 1.233 2.857 1.587 4.36.945C8.417 13.992 12 12.75 12 12.75z"/>
      </svg>
    ),
    color: "from-green-500 to-emerald-500",
    hoverColor: "hover:border-green-500/50",
  },
];

export default function Contact() {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.1,
        delayChildren: shouldReduceMotion ? 0 : 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
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
      id="contact"
      className="relative px-6 py-24 bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white overflow-hidden"
    >
      <div className="absolute top-10 left-20 w-[400px] h-[400px] bg-fuchsia-600/20 rounded-full blur-3xl animate-blob" aria-hidden="true"></div>
      <div className="absolute bottom-10 right-20 w-[400px] h-[400px] bg-indigo-600/20 rounded-full blur-3xl animate-blob animation-delay-2000" aria-hidden="true"></div>

      <div className="relative mx-auto max-w-5xl z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            Let's{" "}
            <span className="bg-gradient-to-r from-fuchsia-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
              Connect
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Got a project in mind or just want to chat? Reach out through any of these platforms!
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-2 gap-6 mb-12"
        >
          {contactMethods.map((method, i) => (
            <motion.a
              key={method.name}
              href={method.link}
              target={method.name !== "Email" ? "_blank" : undefined}
              rel={method.name !== "Email" ? "noopener noreferrer" : undefined}
              variants={cardVariants}
              whileHover={shouldReduceMotion ? {} : { y: -8, scale: 1.02 }}
              className={`group relative flex items-center gap-6 p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 ${method.hoverColor} backdrop-blur-xl transition-all duration-500`}
            >
              <div className={`relative p-4 rounded-xl bg-gradient-to-br ${method.color}`}>
                <div className="text-white">{method.icon}</div>
                
                <motion.div
                  className="absolute -inset-1 rounded-xl opacity-0 group-hover:opacity-50 blur-lg transition-opacity"
                  style={{ background: `linear-gradient(to bottom right, ${method.color})` }}
                  aria-hidden="true"
                />
              </div>

              <div className="flex-1">
                <h3 className="text-xl font-bold text-white mb-1 group-hover:text-fuchsia-400 transition-colors">
                  {method.name}
                </h3>
                <p className="text-gray-400 text-sm break-all">
                  {method.value}
                </p>
              </div>

              <svg
                className="w-6 h-6 text-gray-500 group-hover:text-fuchsia-400 group-hover:translate-x-1 transition-all"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="relative p-8 rounded-2xl bg-gradient-to-br from-fuchsia-500/10 via-purple-500/10 to-indigo-500/10 border border-fuchsia-500/20 backdrop-blur-xl text-center"
        >
          <div className="flex flex-col items-center gap-4">
            <motion.div
              animate={shouldReduceMotion ? {} : { 
                rotate: [0, 10, -10, 10, 0],
              }}
              transition={{
                duration: 0.5,
                repeat: Infinity,
                repeatDelay: 3,
              }}
              className="text-5xl"
            >
              👋
            </motion.div>
            <div>
              <h3 className="text-2xl font-bold mb-2">Available for Opportunities</h3>
              <p className="text-gray-400 max-w-xl mx-auto">
                I'm currently open to full-time positions, freelance projects, and collaborations. 
                Feel free to reach out if you'd like to work together!
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-3 mt-4">
              <span className="px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-sm font-medium">
                Open to Work
              </span>
              <span className="px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-sm font-medium">
                Remote Friendly
              </span>
              <span className="px-4 py-2 rounded-full bg-fuchsia-500/10 border border-fuchsia-500/30 text-fuchsia-300 text-sm font-medium">
                Quick Response
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
