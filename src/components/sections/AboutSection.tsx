import { ABOUT } from "@/lib/content";
import { Reveal } from "@/components/ui/motion";
import { SectionHead } from "@/components/ui/SectionHead";

export function AboutSection() {
  return (
    <section id="sobre" aria-labelledby="titulo-sobre" className="section-wrap section">
      <SectionHead id="titulo-sobre" eyebrow="Sobre" title={ABOUT.title} />

      <div className="grid gap-10">
        <Reveal>
          <div className="max-w-3xl space-y-4 text-lg">
            {ABOUT.paragraphs.map((p) => (
              <p key={p} className="text-[var(--text-2)] first:text-[var(--text-1)]">
                {p}
              </p>
            ))}
          </div>
        </Reveal>

      </div>

      <ul className="mt-12 grid gap-4 md:grid-cols-3">
        {ABOUT.principles.map((p, i) => (
          <li key={p.title}>
            <Reveal delay={i * 0.08} className="h-full">
              <div className="h-full rounded-3xl border border-[var(--border)] p-6">
                <h3 className="font-display text-xl font-semibold">
                  <span aria-hidden="true" className="mr-2 text-[var(--accent)]">
                    ◆
                  </span>
                  {p.title}
                </h3>
                <p className="mt-2 text-[var(--text-2)]">{p.text}</p>
              </div>
            </Reveal>
          </li>
        ))}
      </ul>
    </section>
  );
}
