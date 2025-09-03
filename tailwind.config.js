/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      animation: {
        blob: "blob 8s infinite",
        "spin-slow": "spin 12s linear infinite",
        "pulse-glow": "pulseGlow 2s ease-in-out infinite", // ✅ new
      },
      keyframes: {
        blob: {
          "0%, 100%": { transform: "translate(0px, 0px) scale(1)" },
          "33%": { transform: "translate(30px, -50px) scale(1.1)" },
          "66%": { transform: "translate(-20px, 20px) scale(0.9)" },
        },
        pulseGlow: {
          "0%, 100%": {
            textShadow: "0 0 10px rgba(236,72,153,0.8), 0 0 20px rgba(236,72,153,0.6)",
          },
          "50%": {
            textShadow: "0 0 20px rgba(79,70,229,1), 0 0 40px rgba(236,72,153,0.8)",
          },
        },
      },
    },
  },
  plugins: [],
}
