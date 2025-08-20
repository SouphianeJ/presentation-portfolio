import React from "react";

export function Badge({ children }: { children: React.ReactNode }) {
  return <span className="inline-block border-4 border-black px-2 py-0.5 text-xs bg-neutral-100 dark:bg-neutral-800 dark:border-white">{children}</span>;
}
