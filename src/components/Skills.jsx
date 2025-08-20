import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaGithub, FaJava, FaPython, FaPhp, FaAndroid } from "react-icons/fa";
import { SiJavascript, SiHtml5, SiCss3, SiMysql, SiMongodb, SiFlutter, SiKotlin, SiLinux, SiSalesforce } from "react-icons/si";

const skillCategories = [
  {
    title: "Languages",
    skills: [
      { name: "Java", icon: <FaJava /> },
      { name: "Python", icon: <FaPython /> },
      { name: "JavaScript", icon: <SiJavascript /> },
      { name: "PHP", icon: <FaPhp /> },
      { name: "Kotlin", icon: <SiKotlin /> },
    ],
  },
  {
    title: "Web Development",
    skills: [
      { name: "React", icon: <FaReact /> },
      { name: "HTML", icon: <SiHtml5 /> },
      { name: "CSS", icon: <SiCss3 /> },
      { name: "Flutter", icon: <SiFlutter /> },
      { name: "Node.js", icon: <FaNodeJs /> },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "MySQL", icon: <SiMysql /> },
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "Salesforce", icon: <SiSalesforce /> },
    ],
  },
  {
    title: "Tools & Platforms",
    skills: [
      { name: "Git", icon: <FaGithub /> },
      { name: "Linux", icon: <SiLinux /> },
      { name: "Android Studio", icon: <FaAndroid /> },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="px-6 py-24 bg-gradient-to-b from-gray-900 via-black to-gray-800 text-white">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold mb-12 text-center">Skills</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, i) => (
            <motion.div
              key={category.title}
              className="bg-white/5 border border-white/10 rounded-3xl p-6 flex flex-col items-center gap-4 backdrop-blur hover:bg-white/10 transition"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <h3 className="text-lg font-semibold text-indigo-400">{category.title}</h3>
              <div className="flex flex-wrap justify-center gap-4 mt-2">
                {category.skills.map((s) => (
                  <div
                    key={s.name}
                    className="flex flex-col items-center gap-1 text-gray-300 group hover:text-white"
                  >
                    <div className="text-3xl">{s.icon}</div>
                    <span className="text-sm">{s.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
