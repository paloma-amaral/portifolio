import { EDUCATION } from "@/lib/content";
import { Reveal, SpotCard } from "@/components/ui/motion";
import { SectionHead } from "@/components/ui/SectionHead";

export function EducationSection() {
  return (
    <section id="formacao" aria-labelledby="titulo-formacao" className="section-wrap section border-t border-[var(--border)]">
      <SectionHead id="titulo-formacao" eyebrow="Formação" title="Estudo e cursos." />

      <div className="grid gap-4 md:grid-cols-3">
        {EDUCATION.degrees.map((d, i) => (
          <Reveal key={d.title} delay={i * 0.08}>
            <SpotCard className="h-full p-6">
              <h3 className="font-display text-lg font-semibold">{d.title}</h3>
              <p className="mt-1 text-[var(--text-2)]">{d.org}</p>
              <p className="mt-3 text-sm text-[var(--accent)]">{d.period}</p>
            </SpotCard>
          </Reveal>
        ))}
      </div>
      <Reveal className="mt-4">
        <SpotCard className="p-6">
          <h3 className="label mb-3">Cursos</h3>
          <ul className="grid gap-2 md:grid-cols-2">
            {EDUCATION.courses.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </SpotCard>
      </Reveal>
    </section>
  );
}
