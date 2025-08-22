import { motion } from "framer-motion";

const projects = [
  {
    title: "NIDS – Network Intrusion Detection System",
    desc: "ML-powered network intrusion detection dashboard with live detection.",
    tech: ["Python", "ML", "Honeypot", "Stream-lit"],
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
  {
    title: "QPGS-Question Paper Generation System",
    desc: "Question Paper Generator",
    tech: ["Vite+React", "Node.js", "MongoDb"],
    img: "images/3.png",
    code: "https://github.com/Sherwin333/Question-Paper-Generation-System-QPGS-.git",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold mb-12 text-center">Projects</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.6 }}
            >
              <div className="overflow-hidden">
                <img
                  src={`${process.env.PUBLIC_URL}/${p.img}`}
                  alt={p.title}
                  className="h-44 w-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-6 space-y-3">
                <h3 className="text-xl font-semibold">{p.title}</h3>
                <p className="text-gray-300 text-sm">{p.desc}</p>
                <ul className="flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <li
                      key={t}
                      className="text-xs px-2 py-1 rounded-full bg-white/10 border border-white/10"
                    >
                      {t}
                    </li>
                  ))}
                </ul>

                <div className="pt-2">
                  <a
                    href={p.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full text-center block px-3 py-2 rounded-xl bg-gradient-to-r from-indigo-500 to-fuchsia-500 hover:from-indigo-400 hover:to-fuchsia-400"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
