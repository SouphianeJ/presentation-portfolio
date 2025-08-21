import React from "react";
import { NeonCard } from "@/components/NeonCard";
import { SectionHeader } from "@/components/SectionHeader";

export default function ProjPage() {
  return (
    <section className="p-6 md:p-10 max-w-6xl mx-auto space-y-6">
      <SectionHeader kicker="Projet" title="Gestion de projets" />
      <div className="grid grid-auto gap-5">
        <NeonCard>
          <h3 className="text-xl font-extrabold">Cadre POC → REX</h3>
          <ol className="list-decimal pl-6">
            <li>POC cadré (critères, parcours, mesures)</li>
            <li>Pilote (groupe test, support rapproché)</li>
            <li>Déploiement (comms, change)</li>
            <li>REX chiffré &amp; amélioration</li>
          </ol>
        </NeonCard>
      </div>
    </section>
  );
}
