import NeonGrid from "@/components/NeonGrid";

export default function PedagoLayout({ children }: { children: React.ReactNode }) {
  return (
    <main data-section="pedago">
      <NeonGrid />
      {children}
    </main>
  );
}
