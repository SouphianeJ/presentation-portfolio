"use client";
import React from "react";
import Modal from "@/components/Modal";
import { pedaproject } from "@/lib/content";
import Slideshow from "@/components/Slideshow";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

export default function PedagoPage() {
  return (
    <main className="p-6 md:p-10 max-w-6xl mx-auto space-y-6">
      <h2 className="text-3xl font-extrabold">Pédagogie 4.0</h2>
      {/* Slideshow = portage de ton composant Vue sans changer les textes */}
      <Slideshow skills={pedaproject.map((p) => ({ title: p.title, text: p.text, modalContent: p.modalContent }))} />
      <section className="grid grid-auto gap-4">
        {pedaproject.map((item) => (
          <Card key={item.modalId}>
            <h3 className="text-xl font-extrabold">{item.title}</h3>
            <p className="opacity-80">{item.text}</p>
            <Button
              className="mt-3"
              onClick={() => {
                const url = new URL(window.location.href);
                url.searchParams.set("m", item.modalId);
                window.history.replaceState({}, "", url.toString());
                window.dispatchEvent(new Event("popstate"));
              }}
            >
              Voir le détail
            </Button>
          </Card>
        ))}
      </section>
      <Modal />
    </main>
  );
}
