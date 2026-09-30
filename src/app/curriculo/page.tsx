import Link from "next/link";
import type { Metadata } from "next";
import { CV, SITE } from "@/lib/content";
import { PrintButton } from "@/components/ui/PrintButton";

export const metadata: Metadata = {
  title: "Currículo",
  description: `Currículo de ${SITE.name} — ${SITE.cvRole}.`,
  alternates: { canonical: "/curriculo" },
};

const H2 = "font-display font-bold text-xl border-b border-[var(--border)] pb-1 mb-3";

export default function CurriculoPage() {
  return (
    <main className="cv section-wrap max-w-3xl py-10 md:py-16">
      <div className="no-print mb-8 flex flex-wrap items-center justify-between gap-3">
        <Link href="/" className="link-accent">
          ← Voltar ao site
        </Link>
        <PrintButton />
      </div>

      <header className="mb-6">
        <h1 className="font-display font-bold text-3xl">{SITE.name.toUpperCase()}</h1>
        <p className="text-lg">{SITE.cvRole}</p>
        <p className="text-[var(--text-2)]">
          {SITE.location} |{" "}
          <a className="link-accent" href={`mailto:${SITE.email}`}>
            {SITE.email}
          </a>
          {SITE.linkedin && (
            <>
              {" | "}
              <a className="link-accent" href={SITE.linkedin}>
                LinkedIn
              </a>
            </>
          )}
          {SITE.github && (
            <>
              {" | "}
              <a className="link-accent" href={SITE.github}>
                GitHub
              </a>
            </>
          )}
        </p>
      </header>

      <section className="mb-6">
        <h2 className={H2}>Resumo Profissional</h2>
        <p>{CV.summary}</p>
      </section>

      <section className="mb-6">
        <h2 className={H2}>Experiência Profissional</h2>
        {CV.experience.map((job) => (
          <div key={job.title} className="cv-job mb-4">
            <h3 className="font-semibold">{job.title}</h3>
            <p className="text-[var(--text-2)]">
              {job.org}
              {job.period && ` | ${job.period}`}
            </p>
            <ul className="list-disc pl-5 mt-1 space-y-1">
              {job.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section className="mb-6">
        <h2 className={H2}>Formação Acadêmica</h2>
        <ul className="space-y-1">
          {CV.education.map((e) => (
            <li key={e}>{e}</li>
          ))}
        </ul>
      </section>

      <section className="mb-6">
        <h2 className={H2}>Habilidades</h2>
        <ul className="space-y-1">
          {CV.skills.map((s) => (
            <li key={s.group}>
              <strong>{s.group}:</strong> {s.text}
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-6">
        <h2 className={H2}>Cursos e Certificações</h2>
        <ul className="space-y-1">
          {CV.courses.map((c) => (
            <li key={c}>{c}</li>
          ))}
        </ul>
      </section>
    </main>
  );
}
