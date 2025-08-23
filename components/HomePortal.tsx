"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef } from "react";
import clsx from "clsx";

export default function HomePortal() {
  const pathname = usePathname();
  const router = useRouter();
  const lastKey = useRef<string>();

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key.toLowerCase() === "g") {
        lastKey.current = "g";
      } else if (lastKey.current === "g" && e.key.toLowerCase() === "h") {
        router.push("/");
        lastKey.current = undefined;
      } else {
        lastKey.current = undefined;
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [router]);

  if (pathname === "/") return null;

  return (
    <Link
      href="/"
      aria-label="Aller à l’accueil"
      aria-description="Raccourci g puis h"
      title="Revenir à la page d’accueil"
      className={clsx(
        "fixed top-4 left-4 z-40 w-11 h-11 flex items-center justify-center text-xs font-bold",
        "bg-surface/60 text-text backdrop-blur",
        "shadow-[0_0_.5rem_var(--pri)] hover:shadow-[0_0_1rem_var(--pri)]",
        "rounded-neon transition-all motion-reduce:transition-none",
        "hover:-translate-y-0.5 motion-reduce:hover:translate-y-0",
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--acc)] focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
      )}
      style={{
        clipPath: "polygon(25% 6%, 75% 6%, 94% 50%, 75% 94%, 25% 94%, 6% 50%)",
      }}
    >
      Accueil
    </Link>
  );
}

