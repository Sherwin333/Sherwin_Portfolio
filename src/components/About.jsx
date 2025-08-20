import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <motion.div
          className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-6">About Me</h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            MCA student and Software Developer experienced in AI-driven security systems, enterprise applications, and mobile-first
            solutions. Skilled in Python, Flutter, React, and Salesforce, with proven ability to design real-time intrusion detection
            systems, CRM apps, and e-commerce platforms.
          </p>
          <ul className="space-y-2 text-gray-400 list-disc list-inside">
            <li>Aspiring software developer with hands-on experience in mobile, web, and AI/ML projects</li>
            <li>Passionate about building practical, user-friendly, and efficient software solutions</li>
            <li>Hands-on experience with Flutter, PHP, and Python projects</li>
            <li>Enthusiastic about AI/ML and emerging technologies</li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
