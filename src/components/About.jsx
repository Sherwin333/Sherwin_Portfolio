import { motion, useReducedMotion } from "framer-motion";

const highlights = [
  "Aspiring software developer with hands-on experience in mobile, web, and AI/ML projects",
  "Passionate about building practical, user-friendly, and efficient software solutions",
  "Hands-on experience with Flutter, PHP, and Python projects",
  "Enthusiastic about AI/ML and emerging technologies",
];

export default function About() {
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

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="about"
      className="relative px-6 py-24 bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white overflow-hidden"
    >
      <div className="absolute top-20 left-20 w-[400px] h-[400px] bg-fuchsia-600/20 rounded-full blur-3xl animate-blob" aria-hidden="true"></div>
      <div className="absolute bottom-10 right-20 w-[400px] h-[400px] bg-indigo-600/20 rounded-full blur-3xl animate-blob animation-delay-2000" aria-hidden="true"></div>

      <div className="relative mx-auto max-w-5xl z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.7 }}
        >
          <motion.div
            className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 backdrop-blur-xl shadow-2xl hover:shadow-fuchsia-500/10 transition-shadow duration-300"
            whileHover={shouldReduceMotion ? {} : { scale: 1.01 }}
            transition={{ duration: 0.3 }}
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-extrabold mb-6 text-center"
            >
              About{" "}
              <span className="bg-gradient-to-r from-fuchsia-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
                Me
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-300 text-lg md:text-xl leading-relaxed mb-10 text-center max-w-3xl mx-auto"
            >
              MCA student and Software Developer experienced in AI-driven security systems, enterprise applications,
              and mobile-first solutions. Skilled in Python, Flutter, React, and Salesforce with proven ability to
              design real-time intrusion detection systems, CRM apps, and e-commerce platforms.
            </motion.p>

            <motion.ul
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="space-y-4 text-gray-300 text-base md:text-lg max-w-3xl mx-auto"
            >
              {highlights.map((highlight, index) => (
                <motion.li
                  key={index}
                  variants={itemVariants}
                  whileHover={shouldReduceMotion ? {} : { x: 8, color: "#ffffff" }}
                  className="flex items-start gap-3 group cursor-default"
                >
                  <motion.span
                    className="inline-block w-2 h-2 rounded-full bg-gradient-to-r from-fuchsia-500 to-indigo-500 mt-2 flex-shrink-0"
                    whileHover={shouldReduceMotion ? {} : { scale: 1.5 }}
                    transition={{ duration: 0.2 }}
                  />
                  <span className="group-hover:text-white transition-colors duration-200">
                    {highlight}
                  </span>
                </motion.li>
              ))}
            </motion.ul>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-10 text-center"
            >
              <motion.a
                href="#contact"
                whileHover={shouldReduceMotion ? {} : { scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block px-8 py-4 rounded-xl bg-gradient-to-r from-fuchsia-500 to-indigo-500 text-white font-semibold shadow-lg hover:shadow-fuchsia-500/50 transition-shadow duration-300"
              >
                Let's Connect
              </motion.a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
