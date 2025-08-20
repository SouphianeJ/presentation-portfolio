import React from "react";

export function Progress({ value }: { value: number }) {
  return (
    <div className="w-full h-3 brutal-card overflow-hidden bg-neutral-100 dark:bg-neutral-800">
      <div className="h-full" style={{ width: `${value}%`, background: "linear-gradient(90deg, #00F3FF, #6C5CE7)" }} />
    </div>
  );
}
