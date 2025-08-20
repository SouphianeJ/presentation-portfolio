import "@/styles/globals.css";
import type { Metadata } from "next";
import { clsx } from "clsx";

export const metadata: Metadata = {
  title: "Souphiane Jender — Portfolio (Tech × Pédago)",
  description: "Ingénieur Pédagogique à l’interface tech/métiers. Cadrage POC → Déploiement → Adoption.",
  metadataBase: new URL("https://example.com"),
  openGraph: { title: "Souphiane Jender — Portfolio", type: "website" },
};

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className={clsx("min-h-screen")}>{children}</body>
    </html>
  );
}
