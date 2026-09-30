import { ABOUT } from "@/lib/content";
import { Reveal, SpotCard } from "@/components/ui/motion";
import { SectionHead } from "@/components/ui/SectionHead";

export function AboutSection() {
  return (
    <section id="sobre" aria-labelledby="titulo-sobre" className="section-wrap section">
      <SectionHead id="titulo-sobre" eyebrow="Sobre" title={ABOUT.title} />

      <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
        <Reveal>
          <div className="space-y-5 text-lg">
            {ABOUT.paragraphs.map((p) => (
              <p key={p} className="text-[var(--text-2)] first:text-[var(--text-1)]">
                {p}
              </p>
            ))}
          </div>
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2">
          {ABOUT.facts.map((f, i) => (
            <Reveal key={f.value} delay={i * 0.07}>
              <SpotCard className="h-full p-6">
                <p className="font-display text-2xl font-bold text-grad">{f.value}</p>
                <p className="mt-1 text-[var(--text-2)]">{f.label}</p>
              </SpotCard>
            </Reveal>
          ))}
        </div>
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
