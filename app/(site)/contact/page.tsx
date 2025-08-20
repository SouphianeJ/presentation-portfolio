import { Button } from "@/components/ui/Button";

export default function ContactPage() {
  return (
    <main className="p-6 md:p-10 max-w-3xl mx-auto space-y-4">
      <h2 className="text-3xl font-extrabold">Contact direct</h2>
      <p>
        Email: <a className="underline" href="mailto:sjender@exemple.com">sjender@exemple.com</a>
      </p>
      <div className="flex gap-3">
        <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
          <Button>LinkedIn</Button>
        </a>
        <a href="https://github.com/" target="_blank" rel="noreferrer">
          <Button>GitHub</Button>
        </a>
        <a href="/cv.pdf" target="_blank" rel="noreferrer">
          <Button>PDF CV</Button>
        </a>
      </div>
    </main>
  );
}
