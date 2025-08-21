import React from "react";

export function Progress({ value }: { value: number }) {
  return (
    <div className="w-full h-3 rounded-neon bg-surface/60 overflow-hidden">
      <div
        className="h-full rounded-neon"
        style={{ width: `${value}%`, background: "linear-gradient(90deg, var(--pri), var(--pri-2))" }}
      />
    </div>
  );
}

