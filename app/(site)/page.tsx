import Gateways from "@/components/Gateways";

export default function HomePage() {
  return (
    <main className="p-6 md:p-10 space-y-6">
      <header className="max-w-5xl mx-auto flex items-end justify-between">
        <h1 className="text-xl md:text-2xl font-extrabold">
          Souphiane Jender — <span className="text-tech-primary">Tech</span> ×{" "}
          <span className="text-edu-primary">Pédago</span>
        </h1>
        <div className="border-4 border-black px-2 py-1">POC → Pilote → Déploiement → REX</div>
      </header>
      <Gateways />
    </main>
  );
}
