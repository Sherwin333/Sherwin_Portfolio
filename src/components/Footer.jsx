export default function Footer() {
  return (
    <footer className="px-6 py-8 border-t border-white/10 bg-black/30">
      <div className="mx-auto max-w-6xl text-center text-sm text-Black-400">
        © {new Date().getFullYear()} Sherwin — Made with React, Tailwind & Framer Motion
      </div>
    </footer>
  );
}
