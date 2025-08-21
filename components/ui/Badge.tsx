import React from "react";

export function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block rounded-neon border border-pri/40 bg-surface/60 px-2 py-0.5 text-xs text-text">
      {children}
    </span>
  );
}
