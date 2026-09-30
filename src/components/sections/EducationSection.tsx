import { EDUCATION } from "@/lib/content";

export function EducationSection() {
  return (
    <section id="formacao" className="section border-t border-[var(--border)]" aria-labelledby="titulo-formacao">
      <div className="section-wrap">
        <h2 id="titulo-formacao" className="section-title">
          Formação e cursos
        </h2>
        <div className="grid gap-10 md:grid-cols-2">
          <ul className="space-y-5">
            {EDUCATION.degrees.map((d) => (
              <li key={d.title}>
                <h3 className="font-display font-semibold text-lg">{d.title}</h3>
                <p className="text-[var(--text-2)]">{d.org}</p>
                <p className="text-sm text-[var(--text-3)]">{d.period}</p>
              </li>
            ))}
          </ul>
          <div>
            <h3 className="font-display font-semibold text-lg mb-3">Cursos</h3>
            <ul className="space-y-2">
              {EDUCATION.courses.map((c) => (
                <li key={c} className="text-[var(--text-2)]">
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
