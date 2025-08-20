import React from "react";
import { Card } from "@/components/ui/Card";

export default function ProjPage() {
  return (
    <main className="p-6 md:p-10 max-w-6xl mx-auto space-y-6">
      <h2 className="text-3xl font-extrabold">Gestion de projets</h2>
      <div className="grid grid-auto gap-4">
        <Card>
          <h3 className="text-xl font-extrabold">Cadre POC → REX</h3>
          <ol className="list-decimal pl-6">
            <li>POC cadré (critères, parcours, mesures)</li>
            <li>Pilote (groupe test, support rapproché)</li>
            <li>Déploiement (comms, change)</li>
            <li>REX chiffré &amp; amélioration</li>
          </ol>
        </Card>
      </div>
    </main>
  );
}
