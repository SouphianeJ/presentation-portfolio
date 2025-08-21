import "@/styles/globals.css";
import type { Metadata } from "next";
import { clsx } from "clsx";
import A11yMonoToggle from "@/components/A11yMonoToggle";

export const metadata: Metadata = {
  title: "Souphiane Jender — Portfolio (Tech × Pédago)",
  description: "Ingénieur Pédagogique à l’interface tech/métiers. Cadrage POC → Déploiement → Adoption.",
  metadataBase: new URL("https://example.com"),
  openGraph: { title: "Souphiane Jender — Portfolio", type: "website" },
};

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className={clsx("min-h-screen")}>
        <div className="fixed bottom-4 right-4 z-50">
          <A11yMonoToggle />
        </div>
        {children}
      </body>
    </html>
  );
}
