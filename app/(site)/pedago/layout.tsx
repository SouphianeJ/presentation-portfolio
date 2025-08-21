import type { ReactNode } from "react";
import NeonGrid from "@/components/NeonGrid";

export default function PedagoLayout({ children }: { children: ReactNode }) {
  return (
    <main data-section="pedago" className="relative overflow-hidden">
      <NeonGrid />
      {children}
    </main>
  );
}

