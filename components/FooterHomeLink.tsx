"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function FooterHomeLink() {
  const pathname = usePathname();
  if (pathname === "/") return null;
  return (
    <footer className="p-6 text-center text-sm">
      <Link href="/" className="hover:underline">
        ← Accueil
      </Link>
    </footer>
  );
}
