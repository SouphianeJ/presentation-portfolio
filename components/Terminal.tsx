"use client";
import React from "react";

const LINES = [
  "> souphiane --skills --format=json",
  '{\n  "tech": ["Angular","Node","MongoDB","PHP","SQL"],\n  "forts": ["Analyser","Améliorer","Solutionner","Présenter"],\n  "disponibilité": ["🟢 Freelance","🟢 CDI"]\n}',
  "> portfolio --version",
  "v2.3.1 - Brutalist Edition",
  "> adoption --stats --last=12w",
  '{ "usage": "↗", "satisfaction": "4.6/5", "incidents": "↓ 37%" }'
];

export default function Terminal() {
  const [i, setI] = React.useState(0);
  const [text, setText] = React.useState("");

  React.useEffect(() => {
    let char = 0;
    let timer: any;
    function tick() {
      const line = LINES[i];
      setText(line.slice(0, char++));
      if (char > line.length) {
        clearInterval(timer);
        setTimeout(() => {
          setI((p) => (p + 1) % LINES.length);
        }, 800);
      }
    }
    timer = setInterval(tick, 40);
    return () => clearInterval(timer);
  }, [i]);

  return (
    <div
      aria-live="polite"
      className="fixed right-4 bottom-4 w-[420px] max-w-[calc(100%-1rem)] text-green-400 brutal-card bg-black/90 text-sm"
    >
      <div className="whitespace-pre-wrap break-words border-r-4 pr-1">{text}</div>
    </div>
  );
}
