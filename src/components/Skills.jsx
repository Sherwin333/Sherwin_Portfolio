import { motion } from "framer-motion";
import {
  FaReact, FaNodeJs, FaGithub, FaJava, FaPython, FaPhp, FaAndroid
} from "react-icons/fa";
import {
  SiJavascript, SiHtml5, SiCss3, SiMysql, SiMongodb, SiFlutter, SiKotlin, SiLinux, SiSalesforce
} from "react-icons/si";

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
    <section
      id="skills"
      className="relative px-6 py-24 bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white overflow-hidden"
    >
      {/* Background glow blobs */}
      <div className="absolute top-20 left-20 w-[500px] h-[500px] bg-fuchsia-600/20 rounded-full blur-3xl animate-blob"></div>
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-indigo-600/20 rounded-full blur-3xl animate-blob animation-delay-2000"></div>

      <div className="relative mx-auto max-w-6xl z-10">
        <h2 className="text-4xl font-extrabold mb-16 text-center">
          My{" "}
          <span className="bg-gradient-to-r from-fuchsia-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
            Skills
          </span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, i) => (
            <motion.div
              key={category.title}
              className="bg-white/5 border border-white/10 rounded-3xl p-6 flex flex-col items-center gap-6 backdrop-blur-xl hover:bg-white/10 hover:shadow-lg hover:shadow-fuchsia-500/20 transition-all duration-500"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
            >
              {/* Title with gradient underline */}
              <div className="flex flex-col items-center">
                <h3 className="text-lg font-semibold text-indigo-400">{category.title}</h3>
                <div className="w-16 h-1 bg-gradient-to-r from-fuchsia-500 to-indigo-500 rounded-full mt-1"></div>
              </div>

              {/* Skills icons */}
              <div className="flex flex-wrap justify-center gap-6 mt-2">
                {category.skills.map((s) => (
                  <motion.div
                    key={s.name}
                    whileHover={{ scale: 1.2 }}
                    className="flex flex-col items-center gap-1 text-gray-300 hover:text-white transition-colors"
                  >
                    <div className="text-3xl drop-shadow-lg">{s.icon}</div>
                    <span className="text-sm">{s.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
