import type { ReactNode } from "react";
import clsx from "clsx";

export function NeonCard({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={clsx(
        "rounded-neon bg-surface/80 border border-pri/30 backdrop-blur-md p-5 transition-transform",
        "hover:scale-[1.01] shadow-neon",
        className
      )}
      style={{ boxShadow: `0 0 calc(1rem*var(--glow-strength)) var(--pri)` }}
    >
      {children}
    </div>
  );
}

