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
        bg: "var(--bg)",
        surface: "var(--surface)",
        text: "var(--text)",
        muted: "var(--muted)",
        pri: "var(--pri)",
        pri2: "var(--pri-2)",
        acc: "var(--acc)",
        gridLine: "var(--grid-line)",
      },
      borderRadius: {
        neon: "var(--radius)",
      },
      boxShadow: {
        neon: "0 0 0.5rem rgba(255,255,255,0.06), 0 0 1.5rem var(--pri)",
      },
      fontFamily: {
        mono: ["ui-monospace", "SFMono-Regular", "Menlo", "Monaco", "Courier New", "monospace"],
      },
    },
  },
  plugins: [],
} satisfies Config;
