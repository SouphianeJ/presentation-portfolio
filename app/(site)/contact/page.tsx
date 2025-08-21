import { NeonButton } from "@/components/NeonButton";
import { SectionHeader } from "@/components/SectionHeader";

export default function ContactPage() {
  return (
    <section className="p-6 md:p-10 max-w-3xl mx-auto space-y-4">
      <SectionHeader title="Contact direct" />
      <p>
        Email: <a className="link-neon" href="mailto:sjender@exemple.com">sjender@exemple.com</a>
      </p>
      <div className="flex gap-3">
        <NeonButton as="a" href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
          LinkedIn
        </NeonButton>
        <NeonButton as="a" href="https://github.com/" target="_blank" rel="noreferrer">
          GitHub
        </NeonButton>
        <NeonButton as="a" href="/cv.pdf" target="_blank" rel="noreferrer">
          PDF CV
        </NeonButton>
      </div>
    </section>
  );
}
