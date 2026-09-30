import { SKILLS } from "@/lib/content";
import { Reveal, SpotCard } from "@/components/ui/motion";
import { SectionHead } from "@/components/ui/SectionHead";

export function SkillsSection() {
  return (
    <section id="habilidades" aria-labelledby="titulo-habilidades" className="section-wrap section border-t border-[var(--border)]">
      <SectionHead id="titulo-habilidades" eyebrow="Habilidades" title="O que eu faço no dia a dia." />

      <div className="grid gap-4 md:grid-cols-2">
        {SKILLS.map((g, i) => (
          <Reveal key={g.group} delay={i * 0.08} className={i === 1 ? "lg:row-span-1" : ""}>
            <SpotCard className="h-full p-6 md:p-8">
              <h3 className="font-display text-xl font-semibold">{g.group}</h3>
              <ul className="mt-5 flex flex-wrap gap-2">
                {g.items.map((item) => (
                  <li key={item} className="skill-tag">
                    {item}
                  </li>
                ))}
              </ul>
            </SpotCard>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
