import { motion } from "framer-motion";

const education = [
  { year: "2023-2025", degree: "MCA", place: "St Joseph Engineering College, VTU" },
  { year: "2020-2023", degree: "BCA", place: "St Aloysius (Deemed to be University)" },
];

export default function Education() {
  return (
    <section
      id="education"
      className="relative px-6 py-24 bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white overflow-hidden"
    >
      {/* Background blobs */}
      <div className="absolute top-20 left-20 w-[400px] h-[400px] bg-fuchsia-600/20 rounded-full blur-3xl animate-blob"></div>
      <div className="absolute bottom-10 right-20 w-[400px] h-[400px] bg-indigo-600/20 rounded-full blur-3xl animate-blob animation-delay-2000"></div>

      <div className="relative mx-auto max-w-4xl z-10">
        <motion.h2
          className="text-4xl font-extrabold mb-16 text-center animate-pulse-glow"
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

        <div className="relative border-l-2 border-white/20 pl-8 space-y-12">
          {education.map((edu, i) => (
            <motion.div
              key={i}
              className="relative"
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              {/* Glowing dot */}
              <span className="absolute -left-[23px] top-1 w-5 h-5 rounded-full bg-gradient-to-r from-indigo-500 to-fuchsia-500 shadow-[0_0_15px_rgba(192,38,211,0.8)]"></span>

              <h3 className="text-xl font-semibold text-white">{edu.degree}</h3>
              <p className="text-gray-300">{edu.place}</p>
              <span className="text-sm text-gray-400">{edu.year}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
