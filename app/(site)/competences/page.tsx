import "@/styles/competences.css";
import { competencies } from "@/lib/competencies";

export default function CompetencesPage() {
  return (
    <main className="p-6 md:p-10 max-w-7xl mx-auto space-y-6">
      <h2 className="text-3xl font-extrabold">Compétences</h2>
      <div className="competencies-content" dangerouslySetInnerHTML={{ __html: competencies }} />
    </main>
  );
}
