import NeonGrid from "@/components/NeonGrid";

export default function TechLayout({ children }: { children: React.ReactNode }) {
  return (
    <main data-section="tech">
      <NeonGrid />
      {children}
    </main>
  );
}
