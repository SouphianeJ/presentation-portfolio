Project tree

.
├─ app/
│  ├─ (site)/
│  │  ├─ layout.tsx
│  │  ├─ page.tsx                 # Accueil : grille "passerelles" + terminal
│  │  ├─ tech/page.tsx            # Section Engineering Tech (listes + modals)
│  │  ├─ pedago/page.tsx          # Section Pédagogie 4.0 (slideshow + modals)
│  │  ├─ proj/page.tsx            # Section Gestion de projets (cadre POC→REX)
│  │  ├─ news/page.tsx            # Articles/notes (MDX possible)
│  │  ├─ contact/page.tsx         # Coordonnées / CTA
│  ├─ play/page.tsx               # Espace mini‑jeux (runner simple inclus)
│  └─ globals.d.ts
├─ components/
│  ├─ Gateways.tsx
│  ├─ Terminal.tsx
│  ├─ Modal.tsx                   # Lecture des contenus via ?m=<modalId>
│  ├─ Slideshow.tsx               # Portage léger de ton slideshow (sans Vue)
│  └─ ui/{Badge.tsx,Button.tsx,Card.tsx,Progress.tsx}
├─ lib/
│  ├─ content.ts                  # Tes datasets (copier/coller tels quels)
│  └─ modal.ts                    # getModalById()
├─ styles/globals.css
├─ next.config.mjs
├─ postcss.config.mjs
├─ tailwind.config.ts
├─ tsconfig.json
└─ package.json


---

// FILE: package.json { "name": "sj-portfolio", "private": true, "type": "module", "scripts": { "dev": "next dev", "build": "next build", "start": "next start", "lint": "next lint" }, "dependencies": { "next": "^14.2.5", "react": "^18.3.1", "react-dom": "^18.3.1", "framer-motion": "^11.0.0", "lucide-react": "^0.441.0", "recharts": "^2.9.0", "clsx": "^2.1.1" }, "devDependencies": { "autoprefixer": "^10.4.19", "postcss": "^8.4.41", "tailwindcss": "^3.4.10", "typescript": "^5.5.4" } }


---

// FILE: next.config.mjs /** @type {import('next').NextConfig} */ const nextConfig = { reactStrictMode: true, experimental: { optimizePackageImports: ["lucide-react"], }, }; export default nextConfig;


---

// FILE: tsconfig.json { "compilerOptions": { "target": "ES2022", "lib": ["dom", "dom.iterable", "es2022"], "allowJs": false, "skipLibCheck": true, "strict": true, "noEmit": true, "module": "esnext", "moduleResolution": "bundler", "resolveJsonModule": true, "isolatedModules": true, "jsx": "preserve", "baseUrl": ".", "paths": {"@/": ["./"]} }, "include": ["next-env.d.ts", "/*.ts", "/*.tsx"], "exclude": ["node_modules"] }


---

// FILE: postcss.config.mjs export default { plugins: { tailwindcss: {}, autoprefixer: {} }, };


---

// FILE: tailwind.config.ts import type { Config } from "tailwindcss";

export default { content: ["./app//*.{ts,tsx}", "./components//.{ts,tsx}", "./styles/**/.{css}", "./lib/**/*.{ts,tsx}"], theme: { extend: { colors: { tech: { primary: "#6C5CE7", neon: "#00F3FF" }, edu: { primary: "#FF7675", secondary: "#FDCB6E" }, proj: { primary: "#00b822", secondary: "#00b894" }, news: { primary: "#000000", secondary: "#828282" }, contact: { primary: "#00E5FF", secondary: "#FF00F5" }, }, boxShadow: { neon: "0 0 30px rgba(0,243,255,0.25)", }, borderWidth: { 3: "3px", 4: "4px" }, fontFamily: { mono: ["ui-monospace", "SFMono-Regular", "Menlo", "Monaco", "Courier New", "monospace"], }, }, }, plugins: [], } satisfies Config;


---

// FILE: styles/globals.css @tailwind base; @tailwind components; @tailwind utilities;

:root{ --brutal-border: 4px solid #000; } html,body{ @apply bg-white text-black font-mono; } @media (prefers-color-scheme: dark){ html,body{ @apply bg-neutral-950 text-white; } }

.brutal-card{ @apply border-4 border-black bg-white dark:bg-neutral-900 dark:border-white; } .crt::after{ content:""; position:absolute; inset:0; mix-blend-mode:multiply; opacity:.25; background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E"); }

/* Radial reveal */ .reveal { clip-path: circle(var(--clip,0%) at var(--cx,50%) var(--cy,50%)); transition: clip-path .6s ease-in-out; } .reveal.open { --clip: 140%; }

/* Modal basics */ .modal-scrim { @apply fixed inset-0 bg-black/60 z-50 hidden; } .modal-scrim.open { @apply block; } .modal-card { @apply max-w-3xl mx-auto mt-[5vh] max-h-[90vh] overflow-auto p-5 brutal-card bg-white text-black dark:bg-neutral-900 dark:text-white; }

/* Utility */ .grid-auto { grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); }


---

// FILE: app/(site)/layout.tsx import "@/styles/globals.css"; import type { Metadata } from "next"; import { clsx } from "clsx";

export const metadata: Metadata = { title: "Souphiane Jender — Portfolio (Tech × Pédago)", description: "Ingénieur Pédagogique à l’interface tech/métiers. Cadrage POC → Déploiement → Adoption.", metadataBase: new URL("https://example.com"), openGraph: { title: "Souphiane Jender — Portfolio", type: "website" }, };

export default function SiteLayout({ children }: { children: React.ReactNode }){ return ( <html lang="fr"> <body className={clsx("min-h-screen")}>{children}</body> </html> ); }


---

// FILE: components/ui/Button.tsx "use client"; import { clsx } from "clsx"; import React from "react"; export function Button({ className, children, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>){ return ( <button {...props} className={clsx("inline-flex items-center gap-2 border-4 border-black px-4 py-2 font-bold bg-white hover:-translate-y-0.5 active:translate-y-0 transition dark:bg-neutral-900 dark:border-white", className)}> {children} </button> ); }


---

// FILE: components/ui/Card.tsx import React from "react"; import { clsx } from "clsx"; export function Card({ className, children }: { className?: string; children: React.ReactNode }){ return <div className={clsx("brutal-card p-4 shadow-neon relative", className)}>{children}</div>; }


---

// FILE: components/ui/Badge.tsx import React from "react"; export function Badge({ children }: { children: React.ReactNode }){ return <span className="inline-block border-4 border-black px-2 py-0.5 text-xs bg-neutral-100 dark:bg-neutral-800 dark:border-white">{children}</span>; }


---

// FILE: components/ui/Progress.tsx import React from "react"; export function Progress({ value }: { value: number }){ return ( <div className="w-full h-3 brutal-card overflow-hidden bg-neutral-100 dark:bg-neutral-800"> <div className="h-full" style={{ width: ${value}%, background: "linear-gradient(90deg, #00F3FF, #6C5CE7)" }} /> </div> ); }


---

// FILE: components/Terminal.tsx "use client"; import React from "react";

const LINES = [ "> souphiane --skills --format=json", '{\n  "tech": ["Angular","Node","MongoDB","PHP","SQL"],\n  "forts": ["Analyser","Améliorer","Solutionner","Présenter"],\n  "disponibilité": ["🟢 Freelance","🟢 CDI"]\n}', "> portfolio --version", "v2.3.1 - Brutalist Edition", "> adoption --stats --last=12w", '{ "usage": "↗", "satisfaction": "4.6/5", "incidents": "↓ 37%" }' ];

export default function Terminal(){ const [i, setI] = React.useState(0); const [text, setText] = React.useState(""); React.useEffect(()=>{ let char = 0; let timer: any; function tick(){ const line = LINES[i]; setText(line.slice(0, char++)); if(char > line.length){ clearInterval(timer); setTimeout(()=>{ setI((p)=> (p+1)%LINES.length); }, 800); } } timer = setInterval(tick, 25); return ()=> clearInterval(timer); }, [i]); return ( <div aria-live="polite" className="fixed right-4 bottom-4 w-[420px] max-w-[calc(100%-1rem)] text-green-400 brutal-card bg-black/90 text-sm"> <div className="whitespace-pre border-r-4 pr-1">{text}</div> </div> ); }


---

// FILE: lib/content.ts /**

IMPORTANT — Tu peux coller tes objets EXACTS ici sans les modifier.

Ils seront affichés tels quels dans les modals (dangerouslySetInnerHTML). */


export type ModalItem = { modalId: string; title: string; text: string; modalTitle?: string; modalContent: string; // HTML };

export const techProjects: ModalItem[] = [ // ⬇︎ EXEMPLE MINIMAL — remplace par tes items (pdfExcelModal, amcModal, erpEnrollmentModal, resamatModal) // { modalId: "erpEnrollmentModal", title: "Création d’un ERP…", text: "…", modalTitle: "…", modalContent: …HTML… }, ];

export const pedaproject: ModalItem[] = [ // itProjectProgramModal, storylineModal, spocsModal, MoodleModal, videoHycare ];

export const mycompetencies: ModalItem[] = [ // needsanalisys, establishprocess ];

export const GROUPS = { tech: [techProjects], pedago: [pedaproject, mycompetencies], proj: [techProjects], // ou autre combinaison };


---

// FILE: lib/modal.ts import type { ModalItem } from "./content"; import { techProjects, pedaproject, mycompetencies } from "./content";

const ALL: ModalItem[] = [ ...techProjects, ...pedaproject, ...mycompetencies, ];

export function getModalById(id: string): ModalItem | undefined { return ALL.find(x => x.modalId === id); }


---

// FILE: components/Modal.tsx "use client"; import React from "react"; import { usePathname, useRouter, useSearchParams } from "next/navigation"; import { getModalById } from "@/lib/modal";

export default function Modal(){ const params = useSearchParams(); const id = params.get("m"); const router = useRouter(); const pathname = usePathname(); const refScrim = React.useRef<HTMLDivElement>(null);

React.useEffect(()=>{ if(id){ document.documentElement.style.overflow = "hidden"; } return ()=> { document.documentElement.style.overflow = ""; }; }, [id]);

if(!id) return null; const item = getModalById(id); if(!item) return null;

function close(){ const sp = new URLSearchParams(params.toString()); sp.delete("m"); router.replace(${pathname}${sp.toString() ? ?${sp}: ""}); }

return ( <div ref={refScrim} className="modal-scrim open" onClick={(e)=>{ if(e.target===refScrim.current) close(); }}> <div className="modal-card"> <button onClick={close} className="border-4 border-black px-2 py-1 float-right">Fermer</button> <h3 className="text-2xl font-extrabold mt-2">{item.modalTitle || item.title}</h3> {/* ⚠️ contenu injecté tel quel (pas de modification) */} <div className="prose prose-neutral max-w-none dark:prose-invert" dangerouslySetInnerHTML={{ __html: item.modalContent }} /> </div> </div> ); }


---

// FILE: components/Slideshow.tsx "use client"; import React from "react";

type Skill = { title: string; text: string; modalContent: string }; export default function Slideshow({ skills }: { skills: Skill[] }){ const [i, setI] = React.useState(0); const [show, setShow] = React.useState(false); return ( <section className="brutal-card p-4"> <div className="flex items-center justify-between"> <button className="border-4 border-black px-2" onClick={()=>{ setShow(false); setI(p=> (p-1+skills.length)%skills.length); }}>❮</button> <div className="px-3 text-center"> <h2 className="text-xl font-extrabold">{skills[i]?.title}</h2> <p className="text-sm opacity-80">{skills[i]?.text}</p> </div> <button className="border-4 border-black px-2" onClick={()=>{ setShow(false); setI(p=> (p+1)%skills.length); }}>❯</button> </div> <div className={show ? "mt-3 block" : "hidden mt-3"} dangerouslySetInnerHTML={{ __html: skills[i]?.modalContent || "" }} /> <div className="mt-3 flex gap-2"> <button className="border-4 border-black px-3 py-1" onClick={()=> setShow(s=> !s)}> {show ? "Masquer les détails" : "Voir les détails"} </button> <button className="border-4 border-black px-3 py-1" onClick={()=>{ setShow(false); setI(Math.floor(Math.random()*skills.length)); }}>🎲 Aléatoire</button> </div> </section> ); }


---

// FILE: components/Gateways.tsx "use client"; import React from "react"; import { useRouter } from "next/navigation"; import Terminal from "@/components/Terminal";

const G = [ { href: "/tech", label: "ENGINEERING TECH", theme: "tech", shadow: "shadow-[12px_12px_0_#00F3FF]", color: "text-tech-primary" }, { href: "/pedago", label: "PÉDAGOGIE 4.0", theme: "edu", shadow: "shadow-[12px_12px_0_#FDCB6E]", color: "text-edu-primary" }, { href: "/proj", label: "GESTION DE PROJETS", theme: "proj", shadow: "shadow-[12px_12px_0_#00b894]", color: "text-proj-primary" }, { href: "/news", label: "NEWS & ARTICLES", theme: "news", shadow: "shadow-[12px_12px_0_#828282]", color: "text-black dark:text-white" }, { href: "/contact", label: "CONTACT DIRECT", theme: "contact", shadow: "shadow-[12px_12px_0_#FF00F5]", color: "text-contact-primary" } ];

export default function Gateways(){ const router = useRouter(); return ( <> <section className="grid grid-auto gap-6 max-w-5xl mx-auto"> {G.map((g)=> ( <button key={g.href} onClick={()=> router.push(g.href)} className={relative p-10 brutal-card cursor-crosshair text-left ${g.shadow} ${g.color}}> <span className="mr-2">></span> {g.label} <span className="absolute inset-0 pointer-events-none crt"/> </button> ))} </section> <Terminal /> </> ); }


---

// FILE: app/(site)/page.tsx import Gateways from "@/components/Gateways";

export default function HomePage(){ return ( <main className="p-6 md:p-10 space-y-6"> <header className="max-w-5xl mx-auto flex items-end justify-between"> <h1 className="text-xl md:text-2xl font-extrabold">Souphiane Jender — <span className="text-tech-primary">Tech</span> × <span className="text-edu-primary">Pédago</span></h1> <div className="border-4 border-black px-2 py-1">POC → Pilote → Déploiement → REX</div> </header> <Gateways /> </main> ); }


---

// FILE: app/(site)/tech/page.tsx "use client"; import React from "react"; import { Card } from "@/components/ui/Card"; import { Button } from "@/components/ui/Button"; import { Badge } from "@/components/ui/Badge"; import { Progress } from "@/components/ui/Progress"; import Modal from "@/components/Modal"; import { techProjects } from "@/lib/content";

export default function TechPage(){ return ( <main className="p-6 md:p-10 max-w-6xl mx-auto space-y-6"> <header className="flex items-end justify-between"> <h2 className="text-3xl font-extrabold">Engineering Tech</h2> <div className="text-sm">Stack: Angular · Node · MongoDB · PHP · SQL · SSO</div> </header> <section className="grid grid-auto gap-4"> {techProjects.map(item => ( <Card key={item.modalId}> <h3 className="text-xl font-extrabold">{item.title}</h3> <p className="opacity-80">{item.text}</p> <div className="mt-2 flex gap-2"><Badge>Uptime 99.9%</Badge><Badge>Adoption 82%</Badge></div> <div className="mt-3"><Progress value={82} /></div> <div className="mt-4"><Button onClick={()=>{ const url = new URL(window.location.href); url.searchParams.set('m', item.modalId); window.history.replaceState({}, '', url.toString()); // déclenche l'ouverture via <Modal/> const ev = new Event('popstate'); window.dispatchEvent(ev); }}>Voir le détail</Button></div> </Card> ))} </section> <Modal /> </main> ); }


---

// FILE: app/(site)/pedago/page.tsx "use client"; import React from "react"; import Modal from "@/components/Modal"; import { pedaproject } from "@/lib/content"; import Slideshow from "@/components/Slideshow"; import { Card } from "@/components/ui/Card"; import { Button } from "@/components/ui/Button";

export default function PedagoPage(){ return ( <main className="p-6 md:p-10 max-w-6xl mx-auto space-y-6"> <h2 className="text-3xl font-extrabold">Pédagogie 4.0</h2> {/* Slideshow = portage de ton composant Vue sans changer les textes */} <Slideshow skills={pedaproject.map(p=> ({ title: p.title, text: p.text, modalContent: p.modalContent }))} />

<section className="grid grid-auto gap-4">
    {pedaproject.map(item => (
      <Card key={item.modalId}>
        <h3 className="text-xl font-extrabold">{item.title}</h3>
        <p className="opacity-80">{item.text}</p>
        <Button className="mt-3" onClick={()=>{
          const url = new URL(window.location.href); url.searchParams.set('m', item.modalId); window.history.replaceState({}, '', url.toString());
          window.dispatchEvent(new Event('popstate'));
        }}>Voir le détail</Button>
      </Card>
    ))}
  </section>
  <Modal />
</main>

); }


---

// FILE: app/(site)/proj/page.tsx import React from "react"; import { Card } from "@/components/ui/Card";

export default function ProjPage(){ return ( <main className="p-6 md:p-10 max-w-6xl mx-auto space-y-6"> <h2 className="text-3xl font-extrabold">Gestion de projets</h2> <div className="grid grid-auto gap-4"> <Card> <h3 className="text-xl font-extrabold">Cadre POC → REX</h3> <ol className="list-decimal pl-6"> <li>POC cadré (critères, parcours, mesures)</li> <li>Pilote (groupe test, support rapproché)</li> <li>Déploiement (comms, change)</li> <li>REX chiffré & amélioration</li> </ol> </Card> </div> </main> ); }


---

// FILE: app/(site)/news/page.tsx export default function NewsPage(){ return ( <main className="p-6 md:p-10 max-w-5xl mx-auto space-y-6"> <h2 className="text-3xl font-extrabold">News & Articles</h2> <p className="opacity-80">Brancher MDX plus tard ou cartes d’articles simples.</p> </main> ); }


---

// FILE: app/(site)/contact/page.tsx import { Button } from "@/components/ui/Button"; export default function ContactPage(){ return ( <main className="p-6 md:p-10 max-w-3xl mx-auto space-y-4"> <h2 className="text-3xl font-extrabold">Contact direct</h2> <p>Email: <a className="underline" href="mailto:sjender@exemple.com">sjender@exemple.com</a></p> <div className="flex gap-3"> <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer"><Button>LinkedIn</Button></a> <a href="https://github.com/" target="_blank" rel="noreferrer"><Button>GitHub</Button></a> <a href="/cv.pdf" target="_blank" rel="noreferrer"><Button>PDF CV</Button></a> </div> </main> ); }


---

// FILE: app/play/page.tsx "use client"; import React from "react";

// Mini-runner simple (placeholder pour brainstorming futur) export default function PlayPage(){ const ref = React.useRef<HTMLCanvasElement>(null); React.useEffect(()=>{ const canvas = ref.current!; const c = canvas.getContext('2d')!; let w = canvas.width = 720, h = canvas.height = 220; let t = 0, speed = 3, jump = 0, y = 160, vy = 0, gravity = 0.6; let obstacles: {x:number}[] = [{x: w+100}], score = 0, alive = true;

function reset(){ t=0; speed=3; jump=0; y=160; vy=0; obstacles=[{x:w+100}]; score=0; alive=true; }

function step(){
  t++; c.clearRect(0,0,w,h);
  // ground
  c.fillStyle = '#222'; c.fillRect(0,190,w,2);
  // player
  if(alive){ vy += gravity; y += vy; if(y>160){ y=160; vy=0; }
    if(jump>0){ vy = -10; jump=0; }
  }
  c.fillStyle = alive? '#00F3FF' : '#999'; c.fillRect(60, y-30, 30, 30);
  // obstacles
  obstacles.forEach(o=>{ o.x -= speed; c.fillStyle = '#6C5CE7'; c.fillRect(o.x, 160, 20, 30); });
  if(obstacles[obstacles.length-1].x < w - 200){ obstacles.push({x: w + (Math.random()*200|0) + 180}); speed += 0.002; }
  if(obstacles[0].x < -30){ obstacles.shift(); score++; }
  // collision
  const o = obstacles[0];
  if(alive && o && 60+30>o.x && 60<o.x+20 && y>160){ alive=false; }
  // score
  c.fillStyle = '#fff'; c.font = '16px monospace'; c.fillText(`score ${score}`, 10, 18);
  requestAnimationFrame(step);
}
const onKey = (e: KeyboardEvent)=>{ if(e.key===' '|| e.key==='ArrowUp'){ jump=1; } if(!alive){ reset(); } };
window.addEventListener('keydown', onKey);
step();
return ()=> window.removeEventListener('keydown', onKey);

}, []);

return ( <main className="p-6 md:p-10 max-w-4xl mx-auto space-y-4"> <h2 className="text-3xl font-extrabold">Mini‑jeux</h2> <p className="opacity-80">Runner minimal (barre espace ou ↑ pour sauter). On itèrera ici (achievements, easter eggs, analytics d’engagement).</p> <canvas ref={ref} className="brutal-card w-full" height={220} /> </main> ); }


---

// FILE: app/globals.d.ts declare module "*" { const anyExport: any; export default anyExport; }

