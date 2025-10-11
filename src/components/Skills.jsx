import { motion, useReducedMotion } from "framer-motion";
import {
  FaReact, FaNodeJs, FaGithub, FaJava, FaPython, FaPhp, FaAndroid
} from "react-icons/fa";
import {
  SiJavascript, SiHtml5, SiCss3, SiMysql, SiMongodb, SiFlutter, SiKotlin, SiLinux, SiSalesforce
} from "react-icons/si";

const skillCategories = [
  {
    title: "Languages",
    color: "from-amber-500 to-orange-500",
    skills: [
      { name: "Java", icon: <FaJava />, color: "text-orange-500" },
      { name: "Python", icon: <FaPython />, color: "text-blue-400" },
      { name: "JavaScript", icon: <SiJavascript />, color: "text-yellow-400" },
      { name: "PHP", icon: <FaPhp />, color: "text-indigo-400" },
      { name: "Kotlin", icon: <SiKotlin />, color: "text-purple-400" },
    ],
  },
  {
    title: "Web Development",
    color: "from-cyan-500 to-blue-500",
    skills: [
      { name: "React", icon: <FaReact />, color: "text-cyan-400" },
      { name: "HTML", icon: <SiHtml5 />, color: "text-orange-500" },
      { name: "CSS", icon: <SiCss3 />, color: "text-blue-500" },
      { name: "Flutter", icon: <SiFlutter />, color: "text-sky-400" },
      { name: "Node.js", icon: <FaNodeJs />, color: "text-green-500" },
    ],
  },
  {
    title: "Databases",
    color: "from-emerald-500 to-teal-500",
    skills: [
      { name: "MySQL", icon: <SiMysql />, color: "text-blue-500" },
      { name: "MongoDB", icon: <SiMongodb />, color: "text-green-500" },
      { name: "Salesforce", icon: <SiSalesforce />, color: "text-sky-400" },
    ],
  },
  {
    title: "Tools & Platforms",
    color: "from-fuchsia-500 to-purple-500",
    skills: [
      { name: "Git", icon: <FaGithub />, color: "text-gray-200" },
      { name: "Linux", icon: <SiLinux />, color: "text-yellow-400" },
      { name: "Android Studio", icon: <FaAndroid />, color: "text-green-400" },
    ],
  },
];

export default function Skills() {
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

  const categoryVariants = {
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

  const skillVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15,
      },
    },
  };

  return (
    <section
      id="skills"
      className="relative px-6 py-24 bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white overflow-hidden"
    >
      <div className="absolute top-20 left-20 w-[500px] h-[500px] bg-fuchsia-600/20 rounded-full blur-3xl animate-blob" aria-hidden="true"></div>
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-indigo-600/20 rounded-full blur-3xl animate-blob animation-delay-2000" aria-hidden="true"></div>

      <div className="relative mx-auto max-w-6xl z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            My{" "}
            <span className="bg-gradient-to-r from-fuchsia-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
              Tech Stack
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A comprehensive toolkit of languages, frameworks, and technologies I use to build modern applications
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {skillCategories.map((category, i) => (
            <motion.div
              key={category.title}
              variants={categoryVariants}
              className="group relative bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-2xl p-6 backdrop-blur-xl hover:border-white/20 transition-all duration-500"
              whileHover={shouldReduceMotion ? {} : { y: -8, scale: 1.02 }}
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none" 
                style={{ backgroundImage: `linear-gradient(to bottom right, var(--tw-gradient-stops))` }}
                aria-hidden="true"
              >
                <div className={`w-full h-full bg-gradient-to-br ${category.color}`}></div>
              </div>

              <div className="relative space-y-6">
                <div className="flex flex-col items-center">
                  <h3 className="text-xl font-bold text-white mb-2">{category.title}</h3>
                  <div className={`w-16 h-1 bg-gradient-to-r ${category.color} rounded-full`}></div>
                </div>

                <motion.div 
                  className="grid grid-cols-3 gap-4"
                  variants={containerVariants}
                >
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      variants={skillVariants}
                      whileHover={shouldReduceMotion ? {} : { scale: 1.15, rotate: 5 }}
                      className="flex flex-col items-center gap-2 group/skill cursor-default"
                    >
                      <div className={`relative p-3 rounded-xl bg-white/5 border border-white/10 group-hover/skill:border-white/30 transition-all duration-300 ${skill.color}`}>
                        <div className="text-3xl">{skill.icon}</div>
                        
                        <motion.div
                          className="absolute -inset-1 rounded-xl opacity-0 group-hover/skill:opacity-20 blur-lg transition-opacity"
                          style={{ backgroundColor: skill.color }}
                          aria-hidden="true"
                        />
                      </div>
                      <span className="text-xs text-gray-400 group-hover/skill:text-white transition-colors text-center leading-tight">
                        {skill.name}
                      </span>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-fuchsia-500/10 to-indigo-500/10 border border-fuchsia-500/30">
            <motion.div
              animate={shouldReduceMotion ? {} : { rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            >
              <svg className="w-5 h-5 text-fuchsia-400" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
              </svg>
            </motion.div>
            <span className="text-fuchsia-300 font-medium">
              Always learning and exploring new technologies
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
