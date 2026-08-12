/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#060606",
        surface: "#0d0d0d",
        panel: "#141414",
        hairline: "rgba(237,232,224,0.10)",
        cream: "#EDE8E0",
        "cream-60": "rgba(237,232,224,0.60)",
        "cream-40": "rgba(237,232,224,0.40)",
        champagne: "#C9A876",
        "champagne-dim": "rgba(201,168,118,0.55)",
      },
      fontFamily: {
        serif: ["Fraunces", "ui-serif", "Georgia", "serif"],
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      transitionTimingFunction: {
        cinematic: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      letterSpacing: {
        widest2: "0.28em",
      },
    },
  },
  plugins: [],
};
