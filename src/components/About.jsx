import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="relative px-6 py-24 bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white overflow-hidden"
    >
      {/* Background blobs for depth */}
      <div className="absolute top-20 left-20 w-[400px] h-[400px] bg-fuchsia-600/20 rounded-full blur-3xl animate-blob"></div>
      <div className="absolute bottom-10 right-20 w-[400px] h-[400px] bg-indigo-600/20 rounded-full blur-3xl animate-blob animation-delay-2000"></div>

      <div className="relative mx-auto max-w-5xl z-10">
        <motion.div
          className="bg-white/5 border border-white/10 rounded-3xl p-10 backdrop-blur-xl shadow-lg hover:shadow-fuchsia-500/10 transition"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {/* Title */}
          <h2 className="text-4xl font-extrabold mb-6 text-center animate-pulse-glow">
            About{" "}
            <span className="bg-gradient-to-r from-fuchsia-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
              Me
            </span>
          </h2>

          {/* Intro */}
          <p className="text-gray-300 text-lg leading-relaxed mb-8 text-center">
            MCA student and Software Developer experienced in AI-driven security systems, enterprise applications,
            and mobile-first solutions. Skilled in Python, Flutter, React, and Salesforce — with proven ability to
            design real-time intrusion detection systems, CRM apps, and e-commerce platforms.
          </p>

          {/* Highlights list */}
          <ul className="space-y-3 text-gray-300 text-base max-w-3xl mx-auto list-disc list-inside">
            <motion.li whileHover={{ x: 6 }} className="hover:text-white transition">
              Aspiring software developer with hands-on experience in mobile, web, and AI/ML projects
            </motion.li>
            <motion.li whileHover={{ x: 6 }} className="hover:text-white transition">
              Passionate about building practical, user-friendly, and efficient software solutions
            </motion.li>
            <motion.li whileHover={{ x: 6 }} className="hover:text-white transition">
              Hands-on experience with Flutter, PHP, and Python projects
            </motion.li>
            <motion.li whileHover={{ x: 6 }} className="hover:text-white transition">
              Enthusiastic about AI/ML and emerging technologies
            </motion.li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
