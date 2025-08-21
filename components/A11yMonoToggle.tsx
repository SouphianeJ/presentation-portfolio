"use client";
import { useEffect, useState } from "react";

export default function A11yMonoToggle() {
  const [on, setOn] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("a11y-mono") === "1";
    setOn(saved);
    document.body.setAttribute("data-a11y", saved ? "mono" : "");
  }, []);

  return (
    <button
      aria-pressed={on}
      onClick={() => {
        const next = !on;
        setOn(next);
        document.body.setAttribute("data-a11y", next ? "mono" : "");
        localStorage.setItem("a11y-mono", next ? "1" : "0");
      }}
      className="text-xs px-3 py-1 border rounded"
      title="Activer le mode N&B"
    >
      {on ? "N&B : ON" : "N&B : OFF"}
    </button>
  );
}
