import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const links = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 inset-x-0 z-50 bg-black/40 backdrop-blur-md border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
        <a href="#home" className="text-xl font-extrabold tracking-tight">
          <span className="bg-gradient-to-r from-fuchsia-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
            Sherwin.dev
          </span>
        </a>

        <button
          className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg border border-white/10"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <span className="i">☰</span>
        </button>

        <ul className="hidden md:flex items-center gap-6 text-sm">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-gray-300 hover:text-white relative after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-gradient-to-r from-indigo-500 to-fuchsia-500 hover:after:w-full after:transition-all"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="https://github.com/Sherwin333"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/10"
            >
              GitHub
            </a>
          </li>
        </ul>
      </div>

      {/* Mobile */}
      {open && (
        <ul className="md:hidden px-4 pb-4 space-y-3 bg-black/60 border-t border-white/10">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="block px-3 py-2 rounded-lg hover:bg-white/10"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
