import React from "react";
import { Card } from "@/components/ui/Card";
import { SectionHeader } from "@/components/SectionHeader";

export default function ProjPage() {
  return (
    <section className="p-6 md:p-10 max-w-6xl mx-auto space-y-6">
      <SectionHeader section="Projets" title="Gestion de projets" />
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
    </section>
  );
}
