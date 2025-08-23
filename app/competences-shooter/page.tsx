"use client";
import { useMemo, useState } from "react";
import GameCanvas from "@/components/competence-game/GameCanvas";
import FeedbackModal from "@/components/competence-game/FeedbackModal";
import type { Competence, RoundResult } from "@/components/competence-game/types";
import { DEFAULT_COMPETENCES } from "@/components/competence-game/useCompetenceData";
import { Orbitron, JetBrains_Mono } from "next/font/google";

const orbitron = Orbitron({ subsets: ["latin"], weight: ["400", "700"] });
const jetbrains = JetBrains_Mono({ subsets: ["latin"], weight: ["400", "600"] });

export default function Page() {
  const [modalOpen, setModalOpen] = useState(false);
  const [lastRound, setLastRound] = useState<RoundResult | null>(null);
  const [score, setScore] = useState(0);

  const competences: Competence[] = useMemo(() => DEFAULT_COMPETENCES, []);

  return (
    <main className={`min-h-screen bg-black text-white ${orbitron.className}`}>
      <div className="mx-auto max-w-5xl p-4 space-y-4">
        <header className="flex items-center justify-between gap-4">
          <h1 className="text-2xl md:text-3xl font-semibold tracking-tight">Compétences Shooter</h1>
          <div className="text-sm opacity-80 font-mono">
            Score: <span className="font-bold">{score}</span>
          </div>
        </header>

        {/* Neon shell with scanlines overlay */}
        <section className="relative rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10 neon-shell">
          <div className="pointer-events-none absolute inset-0 scanlines" />
          <div className={`relative p-1 neon-frame ${jetbrains.className}`}>
            <GameCanvas
              competences={competences}
              onRoundComplete={(res) => {
                setLastRound(res);
                setScore((s) => s + res.scoreDelta);
                setModalOpen(true);
              }}
              onGameOver={() => {
                /* option: open summary modal */
              }}
            />
          </div>
        </section>

        <FeedbackModal
          open={modalOpen}
          onClose={() => setModalOpen(false)}
          result={lastRound}
          onSubmit={async (payload) => {
            try {
              await fetch("/api/competence-feedback", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
              });
            } catch (e) {
              // silent fail — could toast
            }
            setModalOpen(false);
          }}
        />
      </div>

      <style jsx>{`
        .neon-shell {
          background:
            radial-gradient(120% 60% at 50% -20%, rgba(0,255,245,0.12), transparent 60%),
            radial-gradient(120% 60% at 50% 120%, rgba(255,0,128,0.12), transparent 60%),
            #05060b;
          box-shadow: 0 0 0 1px rgba(255,255,255,0.06), 0 0 30px rgba(0,255,245,0.15), 0 0 60px rgba(255,0,128,0.12);
        }
        .neon-frame {
          box-shadow:
            0 0 0 1px rgba(255,255,255,0.06),
            0 0 20px rgba(0,255,245,0.25),
            0 0 40px rgba(255,0,128,0.2);
        }
        .scanlines {
          background: repeating-linear-gradient(
            to bottom,
            rgba(255,255,255,0.04) 0 1px,
            transparent 1px 3px
          );
          mix-blend-mode: overlay;
          opacity: .25;
        }
      `}</style>
    </main>
  );
}

