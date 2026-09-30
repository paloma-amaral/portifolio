import { EXPERIENCE } from "@/lib/content";
import { Reveal } from "@/components/ui/motion";
import { SectionHead } from "@/components/ui/SectionHead";

export function TimelineSection() {
  return (
    <section id="experiencia" aria-labelledby="titulo-experiencia" className="section-wrap section border-t border-[var(--border)]">
      <SectionHead id="titulo-experiencia" eyebrow="Trajetória" title="Do escritório ao sistema." />

      <ol className="relative ml-3 border-l border-[var(--border)] pl-8 md:ml-6 md:pl-12">
        {EXPERIENCE.map((job, i) => (
          <li key={job.title} className="relative pb-10 last:pb-0">
            <span
              aria-hidden="true"
              className={`absolute -left-[41px] top-2 h-4 w-4 rounded-full border-2 md:-left-[57px] ${
                i === 0 ? "border-[var(--accent)] bg-[var(--accent)]" : "border-[var(--accent)] bg-[var(--bg)]"
              }`}
            />
            <Reveal>
              <div className="bento p-6 md:p-8">
                <p className="label !text-[var(--accent)]">{job.period}</p>
                <h3 className="mt-2 font-display text-2xl font-semibold tracking-tight">{job.title}</h3>
                <p className="mt-1 text-[var(--text-2)]">{job.org}</p>
                <ul className="mt-4 space-y-2">
                  {job.bullets.map((b) => (
                    <li key={b} className="flex gap-3">
                      <span aria-hidden="true" className="text-[var(--accent)]">→</span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
    </section>
  );
}
