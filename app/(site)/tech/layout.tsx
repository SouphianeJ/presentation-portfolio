import type { ReactNode } from "react";
import NeonGrid from "@/components/NeonGrid";

export default function TechLayout({ children }: { children: ReactNode }) {
  return (
    <main data-section="tech" className="relative overflow-hidden bg-bg text-text">
      <NeonGrid />
      {children}
    </main>
  );
}

