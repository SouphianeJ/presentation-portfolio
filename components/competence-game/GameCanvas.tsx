"use client";
import { useEffect, useRef, useState } from "react";
import type { Competence, RoundResult } from "./types";
import { createGame } from "./game/createGame";

interface Props {
  competences: Competence[];
  onRoundComplete?: (res: RoundResult) => void;
  onGameOver?: () => void;
}

export default function GameCanvas({ competences, onRoundComplete, onGameOver }: Props) {
  const hostRef = useRef<HTMLDivElement>(null);
  const startedRef = useRef(false); // StrictMode guard (dev)
  const [err, setErr] = useState<string | null>(null);

  useEffect(() => {
    if (!hostRef.current || startedRef.current) return;
    startedRef.current = true;

    let dispose: (() => void) | undefined;

    (async () => {
      try {
        const { destroy } = await createGame(hostRef.current!, {
          competences,
          onRoundComplete,
          onGameOver,
        });
        dispose = destroy;
      } catch (e: any) {
        console.error("[Game] init failed", e);
        setErr(e?.message ?? "Init error");
      }
    })();

    return () => {
      dispose?.();
      startedRef.current = false;
    };
  }, [competences, onRoundComplete, onGameOver]);

  return (
    <div className="relative">
      <div ref={hostRef} className="w-full h-full" />
      {err && (
        <div className="absolute inset-0 grid place-items-center bg-black/70 text-red-300 p-6 text-sm">
          <div>
            <b>Game init error:</b> {String(err)}
            <div className="opacity-80 mt-2">Check console for details.</div>
          </div>
        </div>
      )}
    </div>
  );
}

