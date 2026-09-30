import Image from "next/image";
import fs from "node:fs";
import path from "node:path";
import { SYSTEM_CASE as S } from "@/lib/content";

/* Capturas do ambiente de demonstração (dados fictícios) em public/images/sistema/.
 *  Sem arquivos, o bloco de imagens simplesmente não é renderizado. */
function getScreenshots(): string[] {
  try {
    const dir = path.join(process.cwd(), "public", "images", "sistema");
    return fs
      .readdirSync(dir)
      .filter((f) => /\.(png|jpe?g|webp|avif)$/i.test(f))
      .sort()
      .map((f) => `/images/sistema/${f}`);
  } catch {
    return [];
  }
}

function Block({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <h3 className="label mb-2">{label}</h3>
      {children}
    </div>
  );
}

export function SystemCaseSection() {
  const shots = getScreenshots();

  return (
    <section id="projeto" className="section border-t border-[var(--border)]" aria-labelledby="titulo-projeto">
      <div className="section-wrap">
        <p className="label mb-2">Projeto principal</p>
        <h2 id="titulo-projeto" className="section-title">
          {S.title}
        </h2>

        <div className="grid gap-8 max-w-3xl">
          <Block label="Contexto">
            <p>{S.context}</p>
          </Block>
          <Block label="O que fiz">
            <p>{S.did}</p>
          </Block>
          <Block label="Resultado">
            <ul className="list-disc pl-5 space-y-2">
              {S.results.map((r) => (
                <li key={r}>{r}</li>
              ))}
            </ul>
          </Block>
          <Block label="Como é feito">
            <p>{S.how}</p>
          </Block>
          <Block label="Limites">
            <p>{S.limits}</p>
          </Block>
          <p className="text-[var(--text-2)]">{S.code}</p>
        </div>

        {shots.length > 0 && (
          <div className="mt-10">
            <h3 className="label mb-3">Capturas do ambiente de demonstração (dados fictícios)</h3>
            <ul className="grid gap-4 sm:grid-cols-2">
              {shots.map((src, i) => (
                <li key={src}>
                  <Image
                    src={src}
                    alt={`Captura ${i + 1} do ambiente de demonstração do sistema de gestão, com dados fictícios`}
                    width={1280}
                    height={800}
                    sizes="(min-width: 640px) 50vw, 100vw"
                    className="h-auto w-full rounded-[var(--radius-md)] border border-[var(--border)]"
                  />
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="card mt-10 max-w-3xl p-5">
          <h3 className="font-display font-semibold text-lg mb-1">{S.doc.title}</h3>
          <p className="text-[var(--text-2)]">{S.doc.text}</p>
        </div>
      </div>
    </section>
  );
}
