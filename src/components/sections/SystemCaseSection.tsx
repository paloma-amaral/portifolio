import fs from "node:fs";
import path from "node:path";
import { SYSTEM_CASE as S, SYSTEM_FACTS, SYSTEM_SCREENS } from "@/lib/content";
import { Reveal, SpotCard } from "@/components/ui/motion";
import { SectionHead } from "@/components/ui/SectionHead";
import { ScreenCarousel } from "./ScreenCarousel";

/* Capturas do ambiente de demonstração (dados fictícios): public/images/sistema/
 * nomeadas 1-*.webp … 4-*.webp, na ordem das telas. Sem arquivo, mostra a ilustração. */
function screenshotFor(index: number): string | undefined {
  try {
    const dir = path.join(process.cwd(), "public", "images", "sistema");
    const file = fs.readdirSync(dir).sort().filter((f) => /\.(png|jpe?g|webp|avif)$/i.test(f))[index];
    return file ? `/images/sistema/${file}` : undefined;
  } catch {
    return undefined;
  }
}

const BEFORE = [
  "Mais de 10 planilhas sem ligação entre si",
  "Contas mensais num lembrete de papel",
  "Contrato de mútuo em caderno e Word",
  "Caixa conferido em planilha, um mês por aba",
];
const AFTER = [
  "Um sistema único",
  "Total a pagar e vencimentos na tela",
  "Contrato gerado automaticamente",
  "Conferência de caixa no sistema",
];

export function SystemCaseSection() {
  const slides = SYSTEM_SCREENS.map((s, i) => ({ ...s, src: screenshotFor(i) }));
  const real = slides.some((s) => s.src);

  return (
    <section id="projeto" aria-labelledby="titulo-projeto" className="section-wrap section">
      <SectionHead id="titulo-projeto" eyebrow="Projeto principal · Em produção" title={S.title}>
        <p>{S.did}</p>
      </SectionHead>

      <Reveal className="mb-10 grid gap-4 md:grid-cols-2">
        <div className="bento p-6">
          <p className="label mb-4">Antes</p>
          <ul className="space-y-3">
            {BEFORE.map((b) => (
              <li key={b} className="flex gap-3 text-[var(--text-2)]">
                <span aria-hidden="true" className="text-[var(--text-3)]">✕</span>
                {b}
              </li>
            ))}
          </ul>
        </div>
        <div className="bento border-[var(--accent)] p-6">
          <p className="label mb-4 !text-[var(--accent)]">Depois</p>
          <ul className="space-y-3">
            {AFTER.map((b) => (
              <li key={b} className="flex gap-3">
                <span aria-hidden="true" className="text-[var(--accent)]">✓</span>
                {b}
              </li>
            ))}
          </ul>
        </div>
      </Reveal>

      <Reveal className="mb-10">
        <ScreenCarousel slides={slides} />
        {!real && (
          <p className="mt-4 text-sm text-[var(--text-3)]">
            Ilustrações da interface. As capturas do ambiente de demonstração, com dados fictícios, entram no lugar delas.
          </p>
        )}
      </Reveal>

      <div className="grid gap-4 lg:grid-cols-3">
        <Reveal>
          <SpotCard className="h-full p-6">
            <h3 className="label mb-5">Ficha técnica</h3>
            <dl className="grid grid-cols-2 gap-x-4 gap-y-4">
              {SYSTEM_FACTS.map((f) => (
                <div key={f.label}>
                  <dt className="font-display text-xl font-bold text-grad">{f.value}</dt>
                  <dd className="text-sm text-[var(--text-2)]">{f.label}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-5 text-[var(--text-2)]">{S.how}</p>
          </SpotCard>
        </Reveal>
        <Reveal delay={0.1}>
          <SpotCard className="h-full p-6">
            <h3 className="font-display text-xl font-semibold">Limites</h3>
            <p className="mt-3 text-[var(--text-2)]">{S.limits}</p>
          </SpotCard>
        </Reveal>
        <Reveal delay={0.2}>
          <SpotCard className="h-full p-6">
            <h3 className="font-display text-xl font-semibold">{S.doc.title}</h3>
            <p className="mt-3 text-[var(--text-2)]">{S.doc.text}</p>
            <p className="mt-4 text-sm text-[var(--text-3)]">{S.code}</p>
          </SpotCard>
        </Reveal>
      </div>
    </section>
  );
}
