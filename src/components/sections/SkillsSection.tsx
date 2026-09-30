import { SKILLS } from "@/lib/content";

export function SkillsSection() {
  return (
    <section id="habilidades" className="section border-t border-[var(--border)]" aria-labelledby="titulo-habilidades">
      <div className="section-wrap">
        <h2 id="titulo-habilidades" className="section-title">
          Habilidades
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          {SKILLS.map((g) => (
            <div key={g.group}>
              <h3 className="font-display font-semibold text-lg mb-3">{g.group}</h3>
              <ul className="space-y-2">
                {g.items.map((item) => (
                  <li key={item} className="text-[var(--text-2)]">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
