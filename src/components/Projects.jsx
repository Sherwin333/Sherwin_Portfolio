import { motion } from "framer-motion";

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
    desc: "A lightweight Task Management System backend inspired by Trello/Jira, built with Spring Boot. It provides REST APIs, JWT-based authentication, and database support to power the frontend.",
    tech: ["Spring Boot", "JWT", "REST API", "MySQL"],
    img: "images/taskmanager.png",
    code: "https://github.com/Sherwin333/Smart-Task-Manager",
  },
  {
    title: "NIDS – Network Intrusion Detection System",
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
  return (
    <section
      id="projects"
      className="relative px-6 py-24 bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white overflow-hidden"
    >
      {/* Background blobs */}
      <div className="absolute top-20 left-20 w-[500px] h-[500px] bg-fuchsia-600/20 rounded-full blur-3xl animate-blob"></div>
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-indigo-600/20 rounded-full blur-3xl animate-blob animation-delay-2000"></div>

      <div className="relative mx-auto max-w-6xl z-10">
        <h2 className="text-4xl font-extrabold mb-16 text-center">
          Featured{" "}
          <span className="bg-gradient-to-r from-fuchsia-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
            Projects
          </span>
        </h2>

        {/* ✅ Fixed Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl hover:shadow-xl hover:shadow-fuchsia-500/20 transition-all duration-500"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.7 }}
              whileHover={{ scale: 1.03 }}
            >
              {/* Image with overlay */}
              <div className="relative overflow-hidden">
                <img
                  src={`${process.env.PUBLIC_URL}/${p.img}`}
                  alt={p.title}
                  className="h-48 w-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow space-y-4">
                <h3 className="text-xl font-semibold">{p.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed flex-grow">
                  {p.desc}
                </p>

                <ul className="flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <li
                      key={t}
                      className="text-xs px-3 py-1 rounded-full bg-gradient-to-r from-fuchsia-500/20 to-indigo-500/20 text-fuchsia-300 border border-fuchsia-500/30"
                    >
                      {t}
                    </li>
                  ))}
                </ul>

                <motion.a
                  href={p.code}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-4 inline-block w-full text-center px-4 py-2 rounded-xl bg-gradient-to-r from-indigo-500 to-fuchsia-500 hover:from-indigo-400 hover:to-fuchsia-400 text-white font-medium shadow-lg"
                >
                  View on GitHub
                </motion.a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
