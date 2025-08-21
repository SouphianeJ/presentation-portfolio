"use client";
import { useEffect, useState } from "react";

export default function A11yMonoToggle() {
  const [on, setOn] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("a11y-mono") === "1";
    setOn(saved);
    document.body.setAttribute("data-a11y", saved ? "mono" : "");
    document.documentElement.classList.toggle("a11y-mono", saved);
  }, []);

  return (
    <button
      type="button"
      aria-pressed={on}
      onClick={() => {
        const next = !on;
        setOn(next);
        document.body.setAttribute("data-a11y", next ? "mono" : "");
        localStorage.setItem("a11y-mono", next ? "1" : "0");
        document.documentElement.classList.toggle("a11y-mono", next);
      }}
      className="text-xs px-3 py-1 border rounded"
      title="Activer le mode N&B"
    >
      {on ? "N&B : ON" : "N&B : OFF"}
    </button>
  );
}
