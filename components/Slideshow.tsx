"use client";
import React from "react";

type Skill = { title: string; text: string; modalContent: string };

export default function Slideshow({ skills }: { skills: Skill[] }) {
  const [i, setI] = React.useState(0);
  const [show, setShow] = React.useState(false);

  return (
    <section className="brutal-card p-4">
      <div className="flex items-center justify-between">
        <button
          className="border-4 border-black px-2"
          onClick={() => {
            setShow(false);
            setI((p) => (p - 1 + skills.length) % skills.length);
          }}
        >
          ❮
        </button>
        <div className="px-3 text-center">
          <h2 className="text-xl font-extrabold">{skills[i]?.title}</h2>
          <p className="text-sm opacity-80">{skills[i]?.text}</p>
        </div>
        <button
          className="border-4 border-black px-2"
          onClick={() => {
            setShow(false);
            setI((p) => (p + 1) % skills.length);
          }}
        >
          ❯
        </button>
      </div>
      <div className={show ? "mt-3 block" : "hidden mt-3"} dangerouslySetInnerHTML={{ __html: skills[i]?.modalContent || "" }} />
      <div className="mt-3 flex gap-2">
        <button className="border-4 border-black px-3 py-1" onClick={() => setShow((s) => !s)}>
          {show ? "Masquer les détails" : "Voir les détails"}
        </button>
        <button
          className="border-4 border-black px-3 py-1"
          onClick={() => {
            setShow(false);
            setI(Math.floor(Math.random() * skills.length));
          }}
        >
          🎲 Aléatoire
        </button>
      </div>
    </section>
  );
}
