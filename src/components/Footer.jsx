export default function Footer() {
  return (
    <footer className="px-6 py-8 bg-gradient-to-t from-black/95 via-black/85 to-black/80 border-t border-white/10 backdrop-blur-sm">
      <div className="mx-auto max-w-6xl text-center text-sm text-gray-100">
        © {new Date().getFullYear()}{" "}
        <span className="font-bold text-white" style={{ textShadow: '0 0 8px rgba(255,255,255,0.6)' }}>
          Sherwin
        </span>{" "}
        — Made with{" "}
        <span className="font-medium text-indigo-400" style={{ textShadow: '0 0 6px rgba(79,70,229,0.5)' }}>React</span>,{" "}
        <span className="font-medium text-pink-400" style={{ textShadow: '0 0 6px rgba(236,72,153,0.5)' }}>Tailwind</span> &{" "}
        <span className="font-medium text-fuchsia-400" style={{ textShadow: '0 0 6px rgba(192,38,211,0.5)' }}>Framer Motion</span>
      </div>
    </footer>
  );
}
