"use client";
import React from "react";

// Mini-runner simple (placeholder pour brainstorming futur)
export default function PlayPage() {
  const ref = React.useRef<HTMLCanvasElement>(null);

  React.useEffect(() => {
    const canvas = ref.current!;
    const c = canvas.getContext("2d")!;
    let w = (canvas.width = 720),
      h = (canvas.height = 220);
    let t = 0,
      speed = 3,
      jump = 0,
      y = 160,
      vy = 0,
      gravity = 0.6;
    let obstacles: { x: number }[] = [{ x: w + 100 }],
      score = 0,
      alive = true;

    function reset() {
      t = 0;
      speed = 3;
      jump = 0;
      y = 160;
      vy = 0;
      obstacles = [{ x: w + 100 }];
      score = 0;
      alive = true;
    }

    function step() {
      t++;
      c.clearRect(0, 0, w, h);
      // ground
      c.fillStyle = "#222";
      c.fillRect(0, 190, w, 2);
      // player
      if (alive) {
        vy += gravity;
        y += vy;
        if (y > 160) {
          y = 160;
          vy = 0;
        }
        if (jump > 0) {
          vy = -10;
          jump = 0;
        }
      }
      c.fillStyle = alive ? "#00F3FF" : "#999";
      c.fillRect(60, y - 30, 30, 30);
      // obstacles
      obstacles.forEach((o) => {
        o.x -= speed;
        c.fillStyle = "#6C5CE7";
        c.fillRect(o.x, 160, 20, 30);
      });
      if (obstacles[obstacles.length - 1].x < w - 200) {
        obstacles.push({ x: w + (Math.random() * 200 | 0) + 180 });
        speed += 0.002;
      }
      if (obstacles[0].x < -30) {
        obstacles.shift();
        score++;
      }
      // collision
      const o = obstacles[0];
      if (alive && o && 60 + 30 > o.x && 60 < o.x + 20 && y > 160) {
        alive = false;
      }
      // score
      c.fillStyle = "#fff";
      c.font = "16px monospace";
      c.fillText(`score ${score}`, 10, 18);
      requestAnimationFrame(step);
    }
    const onKey = (e: KeyboardEvent) => {
      if (e.key === " " || e.key === "ArrowUp") {
        jump = 1;
      }
      if (!alive) {
        reset();
      }
    };
    window.addEventListener("keydown", onKey);
    step();
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <main className="p-6 md:p-10 max-w-4xl mx-auto space-y-4">
      <h2 className="text-3xl font-extrabold">Mini‑jeux</h2>
      <p className="opacity-80">
        Runner minimal (barre espace ou ↑ pour sauter). On itèrera ici (achievements, easter eggs, analytics d’engagement).
      </p>
      <canvas ref={ref} className="brutal-card w-full" height={220} />
    </main>
  );
}
