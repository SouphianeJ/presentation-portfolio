import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./styles/**/*.css",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        tech: { primary: "#6C5CE7", neon: "#00F3FF" },
        edu: { primary: "#FF7675", secondary: "#FDCB6E" },
        proj: { primary: "#00b822", secondary: "#00b894" },
        news: { primary: "#000000", secondary: "#828282" },
        contact: { primary: "#00E5FF", secondary: "#FF00F5" },
      },
      boxShadow: {
        neon: "0 0 30px rgba(0,243,255,0.25)",
      },
      borderWidth: {
        3: "3px",
        4: "4px",
      },
      fontFamily: {
        mono: ["ui-monospace", "SFMono-Regular", "Menlo", "Monaco", "Courier New", "monospace"],
      },
    },
  },
  plugins: [],
} satisfies Config;
