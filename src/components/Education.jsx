import { motion } from "framer-motion";

const education = [
  { year: "2023-2025", degree: "MCA", place: "SJEC, VTU" },
  { year: "2020-2023", degree: "BCA", place: "College XYZ" },
  { year: "2018-2020", degree: "PUC", place: "School ABC" },
];

export default function Education() {
  return (
    <section id="education" className="py-20 bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto px-6">
        <motion.h2 
          className="text-3xl font-bold mb-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          Education
        </motion.h2>
        <div className="space-y-6">
          {education.map((edu, i) => (
            <motion.div 
              key={i} 
              className="p-4 border-l-4 border-purple-500"
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-xl font-semibold">{edu.degree}</h3>
              <p className="text-gray-400">{edu.place}</p>
              <span className="text-sm text-gray-500">{edu.year}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
