"use client";
import React from "react";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Progress } from "@/components/ui/Progress";
import Modal from "@/components/Modal";
import { techProjects } from "@/lib/content";

export default function TechPage() {
  return (
    <main className="p-6 md:p-10 max-w-6xl mx-auto space-y-6">
      <header className="flex items-end justify-between">
        <h2 className="text-3xl font-extrabold">Engineering Tech</h2>
        <div className="text-sm">Stack: Angular · Node · MongoDB · PHP · SQL · SSO</div>
      </header>
      <section className="grid grid-auto gap-4">
        {techProjects.map((item) => (
          <Card key={item.modalId}>
            <h3 className="text-xl font-extrabold">{item.title}</h3>
            <p className="opacity-80">{item.text}</p>
            <div className="mt-2 flex gap-2">
              <Badge>Uptime 99.9%</Badge>
              <Badge>Adoption 82%</Badge>
            </div>
            <div className="mt-3">
              <Progress value={82} />
            </div>
            <div className="mt-4">
              <Button
                onClick={() => {
                  const url = new URL(window.location.href);
                  url.searchParams.set("m", item.modalId);
                  window.history.replaceState({}, "", url.toString());
                  // déclenche l'ouverture via <Modal/>
                  const ev = new Event("popstate");
                  window.dispatchEvent(ev);
                }}
              >
                Voir le détail
              </Button>
            </div>
          </Card>
        ))}
      </section>
      <Modal />
    </main>
  );
}
