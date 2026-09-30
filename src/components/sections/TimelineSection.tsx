import { EXPERIENCE } from "@/lib/content";

export function TimelineSection() {
  return (
    <section id="experiencia" className="section border-t border-[var(--border)]" aria-labelledby="titulo-experiencia">
      <div className="section-wrap">
        <h2 id="titulo-experiencia" className="section-title">
          Experiência
        </h2>
        <ol className="grid gap-6 max-w-3xl">
          {EXPERIENCE.map((job) => (
            <li key={job.title} className="card p-5">
              <h3 className="font-display font-semibold text-xl">{job.title}</h3>
              <p className="text-[var(--text-2)] mt-1">
                {job.org}
                {job.period && <span className="text-[var(--text-3)]"> · {job.period}</span>}
              </p>
              <ul className="list-disc pl-5 mt-3 space-y-2">
                {job.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
