import React from "react";
import { clsx } from "clsx";

export function Card({ className, children }: { className?: string; children: React.ReactNode }) {
  return <div className={clsx("brutal-card p-4 shadow-neon relative", className)}>{children}</div>;
}
