"use client";
import React from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { getModalById } from "@/lib/modal";
import { NeonButton } from "@/components/NeonButton";

export default function Modal() {
  const params = useSearchParams();
  const id = params.get("m");
  const router = useRouter();
  const pathname = usePathname();
  const refScrim = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (id) {
      document.documentElement.style.overflow = "hidden";
    }
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [id]);

  if (!id) return null;
  const item = getModalById(id);
  if (!item) return null;

  function close() {
    const sp = new URLSearchParams(params.toString());
    sp.delete("m");
    router.replace(`${pathname}${sp.toString() ? `?${sp}` : ""}`);
  }

  return (
    <div
      ref={refScrim}
      className="modal-scrim open"
      onClick={(e) => {
        if (e.target === refScrim.current) close();
      }}
    >
      <div className="modal-card">
        <NeonButton onClick={close} className="float-right">Fermer</NeonButton>
        <h3 className="text-2xl font-extrabold mt-2">{item.modalTitle || item.title}</h3>
        {/* ⚠️ contenu injecté tel quel (pas de modification) */}
        <div
          className="prose prose-neutral max-w-none dark:prose-invert"
          dangerouslySetInnerHTML={{ __html: item.modalContent }}
        />
      </div>
    </div>
  );
}
