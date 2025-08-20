"use client";

import { clsx } from "clsx";
import React from "react";

export function Button({ className, children, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      className={clsx(
        "inline-flex items-center gap-2 border-4 border-black px-4 py-2 font-bold bg-white hover:-translate-y-0.5 active:translate-y-0 transition dark:bg-neutral-900 dark:border-white",
        className,
      )}
    >
      {children}
    </button>
  );
}
