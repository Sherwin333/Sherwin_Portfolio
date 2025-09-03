import { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_h397lup", // EmailJS service ID
        "template_lp2oeks", // EmailJS template ID
        form.current,
        "KSWPmbi9Vmm1_tIA4" // EmailJS public key
      )
      .then(
        () => {
          setStatus("✅ Message sent successfully!");
          e.target.reset();
        },
        () => {
          setStatus("❌ Failed to send message. Try again.");
        }
      );
  };

  return (
    <section
      id="contact"
      className="relative px-6 py-24 bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white overflow-hidden"
    >
      {/* Background blobs */}
      <div className="absolute top-10 left-20 w-[400px] h-[400px] bg-fuchsia-600/20 rounded-full blur-3xl animate-blob"></div>
      <div className="absolute bottom-10 right-20 w-[400px] h-[400px] bg-indigo-600/20 rounded-full blur-3xl animate-blob animation-delay-2000"></div>

      <div className="relative mx-auto max-w-3xl z-10">
        <motion.div
          className="bg-white/5 border border-white/10 rounded-3xl p-10 backdrop-blur-xl shadow-lg hover:shadow-fuchsia-500/20 transition-all"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl font-extrabold mb-2 text-center">
            Let’s{" "}
            <span className="bg-gradient-to-r from-fuchsia-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
              Connect
            </span>
          </h2>
          <p className="text-gray-300 mb-8 text-center">
            Have a project or idea? Drop a message and I’ll reply soon 🚀
          </p>

          <form ref={form} onSubmit={sendEmail} className="space-y-6">
            {/* Name */}
            <div className="relative">
              <input
                type="text"
                name="name"
                required
                className="peer w-full rounded-xl bg-white/5 border border-white/10 px-4 pt-5 pb-2 text-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-fuchsia-500"
                placeholder="Your name"
              />
              <label className="absolute left-4 top-2 text-gray-400 text-sm transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-gray-500 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-sm peer-focus:text-fuchsia-400">
                Your name
              </label>
            </div>

            {/* Email */}
            <div className="relative">
              <input
                type="email"
                name="email"
                required
                className="peer w-full rounded-xl bg-white/5 border border-white/10 px-4 pt-5 pb-2 text-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-fuchsia-500"
                placeholder="Your email"
              />
              <label className="absolute left-4 top-2 text-gray-400 text-sm transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-gray-500 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-sm peer-focus:text-fuchsia-400">
                Your email
              </label>
            </div>

            {/* Message */}
            <div className="relative">
              <textarea
                name="message"
                rows="4"
                required
                className="peer w-full rounded-xl bg-white/5 border border-white/10 px-4 pt-5 pb-2 text-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-fuchsia-500"
                placeholder="Your message"
              />
              <label className="absolute left-4 top-2 text-gray-400 text-sm transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-gray-500 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-sm peer-focus:text-fuchsia-400">
                Your message
              </label>
            </div>

            {/* Button */}
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full rounded-2xl px-4 py-3 font-medium text-white bg-gradient-to-r from-indigo-500 to-fuchsia-500 hover:from-indigo-400 hover:to-fuchsia-400 transition shadow-lg"
            >
              Send Message
            </motion.button>
          </form>

          {status && (
            <p
              className={`mt-4 text-center text-sm ${
                status.includes("✅") ? "text-green-400" : "text-red-400"
              }`}
            >
              {status}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
}
