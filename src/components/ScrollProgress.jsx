import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScroll(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-[4px] z-[9999] bg-transparent">
      <div
        className="h-full bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-pink-500 shadow-[0_0_12px_rgba(192,38,211,0.7)] transition-all duration-100"
        style={{ width: `${scroll}%` }}
      ></div>
    </div>
  );
}
