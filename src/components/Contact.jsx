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
        "service_h397lup",    // your EmailJS service ID
        "template_lp2oeks",   // your EmailJS template ID
        form.current,
        "KSWPmbi9Vmm1_tIA4"   // your EmailJS public key
      )
      .then(
        (result) => {
          console.log(result.text);
          setStatus("✅ Message sent successfully!");
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
          setStatus("❌ Failed to send message. Try again.");
        }
      );
  };

  return (
    <section id="contact" className="px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <motion.div
          className="bg-black/40 border border-white/10 rounded-3xl p-8 backdrop-blur-lg shadow-lg shadow-fuchsia-500/10"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-2 text-center text-white">
            Let’s talk
          </h2>
          <p className="text-gray-300 mb-6 text-center">
            Have a project or idea? I’d love to hear it. Drop a message and I’ll get back soon.
          </p>

          <form ref={form} onSubmit={sendEmail} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your name"
              className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your email"
              className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
            <textarea
              name="message"
              rows="4"
              placeholder="Your message"
              className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
            <button
              type="submit"
              className="w-full rounded-2xl px-4 py-3 font-medium text-white bg-gradient-to-r from-indigo-500 to-fuchsia-500 hover:from-indigo-400 hover:to-fuchsia-400 transition"
            >
              Send
            </button>
          </form>

          {status && (
            <p className="mt-3 text-center text-sm text-green-400">
              {status}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
}
