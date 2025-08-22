"use client";
import { useEffect, useState } from "react";
import type { FeedbackPayload, RoundResult } from "./types";

interface Props {
  open: boolean;
  onClose: () => void;
  result: RoundResult | null;
  onSubmit: (payload: FeedbackPayload) => void | Promise<void>;
}

export default function FeedbackModal({ open, onClose, result, onSubmit }: Props) {
  const [rating, setRating] = useState(4);
  const [comment, setComment] = useState("");

  useEffect(() => {
    if (open) {
      setRating(4);
      setComment("");
    }
  }, [open]);

  if (!open || !result) return null;

  return (
    <div className="fixed inset-0 z-50 grid place-items-center">
      <div className="absolute inset-0 bg-black/70" onClick={onClose} />
      <div className="relative w-[min(680px,92vw)] rounded-2xl bg-zinc-950 ring-1 ring-cyan-300/30 shadow-[0_0_20px_rgba(0,255,240,0.25),0_0_44px_rgba(255,0,128,0.18)] p-6 space-y-5">
        <header className="space-y-1">
          <h2 className="text-xl font-semibold tracking-wide drop-shadow-[0_0_12px_rgba(156,255,87,0.6)]">Feedback de manche</h2>
          <p className="text-sm text-zinc-300">
            Compétence assemblée : <span className="italic text-zinc-100">{result.builtSentence}</span>
          </p>
        </header>

        <div className="grid gap-3 text-sm">
          <div className="flex flex-wrap items-center gap-3">
            <span className="opacity-80">Note :</span>
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((n) => (
                <button
                  key={n}
                  onClick={() => setRating(n)}
                  className={`h-9 w-9 rounded-full grid place-items-center border transition shadow-[0_0_12px_rgba(0,255,240,0.25)] ${
                    n <= rating
                      ? "bg-cyan-300 text-black"
                      : "border-cyan-300/40 text-white/80 hover:border-cyan-200/80"
                  }`}
                  aria-label={`note ${n}`}
                >
                  {n}
                </button>
              ))}
            </div>
          </div>

          <label className="grid gap-1">
            <span className="opacity-80">Commentaire (optionnel)</span>
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Proposition d’amélioration, reformulation, critères manquants…"
              className="min-h-[110px] rounded-xl bg-zinc-900/80 border border-cyan-300/20 p-3 focus:outline-none focus:ring-2 focus:ring-cyan-300/40 shadow-inner"
            />
          </label>

          <div className="grid grid-cols-2 gap-3 pt-2">
            <button
              onClick={onClose}
              className="rounded-xl border border-cyan-300/30 px-4 py-2 hover:bg-white/5"
            >
              Continuer sans envoyer
            </button>
            <button
              onClick={async () => {
                const payload: FeedbackPayload = {
                  result,
                  rating,
                  comment: comment.trim() || undefined,
                  createdAt: new Date().toISOString(),
                };
                await onSubmit(payload);
              }}
              className="rounded-xl bg-cyan-300 text-black px-4 py-2 font-medium hover:opacity-90 shadow-[0_0_16px_rgba(0,255,240,0.45)]"
            >
              Envoyer & continuer
            </button>
          </div>
        </div>

        <footer className="text-xs text-zinc-400">
          Stats — bons tirs: <b>{result.hits}</b> · leurres: <b>{result.wrongHits}</b> · temps: <b>{Math.round(result.timeMs / 1000)}s</b> · points: <b>{result.scoreDelta}</b>
        </footer>
      </div>
    </div>
  );
}

