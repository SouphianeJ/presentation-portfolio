"use client";
import React, { Suspense } from "react";
import { Badge } from "@/components/ui/Badge";
import { Progress } from "@/components/ui/Progress";
import Modal from "@/components/Modal";
import { techProjects } from "@/lib/content";
import { NeonCard } from "@/components/NeonCard";
import { NeonButton } from "@/components/NeonButton";
import { SectionHeader } from "@/components/SectionHeader";

export default function TechPage() {
  return (
    <section className="p-6 md:p-10 max-w-6xl mx-auto space-y-6">
      <SectionHeader
        section="Tech"
        kicker="Tech"
        title="Engineering Tech"
        subtitle="Stack: Angular · Node · MongoDB · PHP · SQL · SSO"
      />
      <div className="grid grid-auto gap-5">
        {techProjects.map((item) => (
          <NeonCard key={item.modalId}>
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
              <NeonButton
                onClick={() => {
                  const url = new URL(window.location.href);
                  url.searchParams.set("m", item.modalId);
                  window.history.replaceState({}, "", url.toString());
                  window.dispatchEvent(new Event("popstate"));
                }}
              >
                Voir le détail
              </NeonButton>
            </div>
          </NeonCard>
        ))}
      </div>
      <Suspense fallback={null}>
        <Modal />
      </Suspense>
    </section>
  );
}
