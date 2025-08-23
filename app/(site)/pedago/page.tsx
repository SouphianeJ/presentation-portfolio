"use client";
import React, { Suspense } from "react";
import Modal from "@/components/Modal";
import { pedaproject } from "@/lib/content";
import Slideshow from "@/components/Slideshow";
import { NeonCard } from "@/components/NeonCard";
import { NeonButton } from "@/components/NeonButton";
import { SectionHeader } from "@/components/SectionHeader";

export default function PedagoPage() {
  return (
    <section className="p-6 md:p-10 max-w-6xl mx-auto space-y-6">
      <SectionHeader section="Pédagogie" kicker="Pédagogie" title="Pédagogie 4.0" />
      <Slideshow skills={pedaproject.map((p) => ({ title: p.title, text: p.text, modalContent: p.modalContent }))} />
      <div className="grid grid-auto gap-5">
        {pedaproject.map((item) => (
          <NeonCard key={item.modalId}>
            <h3 className="text-xl font-extrabold">{item.title}</h3>
            <p className="opacity-80">{item.text}</p>
            <NeonButton
              className="mt-3"
              onClick={() => {
                const url = new URL(window.location.href);
                url.searchParams.set("m", item.modalId);
                window.history.replaceState({}, "", url.toString());
                window.dispatchEvent(new Event("popstate"));
              }}
            >
              Voir le détail
            </NeonButton>
          </NeonCard>
        ))}
      </div>
      <Suspense fallback={null}>
        <Modal />
      </Suspense>
    </section>
  );
}
