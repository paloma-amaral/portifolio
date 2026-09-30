import { SERVICES, STEPS, WORKS, SITE } from "@/lib/content";
import { Art } from "@/components/ui/Art";
import { Browser } from "@/components/ui/Device";
import { Reveal, SpotCard } from "@/components/ui/motion";
import { SectionHead } from "@/components/ui/SectionHead";
import { ContactLinks } from "./ContactSection";

/* Espaço reservado para trabalhos que ainda faltam (outros sistemas e sites).
 * Não renderiza nada: só entra item que existe, tem captura e está rotulado. */
function TodoSlot(props: { note: string }) {
  void props;
  return null;
}

export function ServicesSection() {
  return (
    <section id="servicos" aria-labelledby="titulo-servicos" className="section-wrap section">
      <SectionHead id="titulo-servicos" eyebrow="Por encomenda" title="O que eu faço para você." />
      <div className="grid gap-4 lg:grid-cols-3">
        {SERVICES.map((s, i) => (
          <Reveal key={s.title} delay={i * 0.1}>
            <SpotCard className="flex h-full flex-col">
              <div className="border-b border-[var(--border)] bg-[var(--bg-3)]">
                <Art kind={s.art} label={`Ilustração: ${s.title}`} />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-display text-2xl font-semibold tracking-tight">{s.title}</h3>
                <p className="mt-3 text-[var(--text-2)]">{s.text}</p>
                <p className="mt-auto pt-5">
                  <span className="label mr-2 !text-[var(--accent)]">Você recebe</span>
                  {s.gets}
                </p>
              </div>
            </SpotCard>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function WorksSection() {
  return (
    <section id="trabalhos" aria-labelledby="titulo-trabalhos" className="section-wrap section border-t border-[var(--border)]">
      <SectionHead id="titulo-trabalhos" eyebrow="Trabalhos" title="O que já está no ar." />
      <div className="grid gap-4 md:grid-cols-2">
        {WORKS.map((w, i) => (
          <Reveal key={w.title} delay={i * 0.1}>
            <SpotCard className="h-full p-5">
              <Browser title={w.title}>
                <Art kind={w.art} label={`Ilustração: ${w.title}`} />
              </Browser>
              <div className="mt-5 flex items-center justify-between gap-3">
                <h3 className="font-display text-xl font-semibold">{w.title}</h3>
                <span className="shrink-0 rounded-full border border-[var(--accent)] px-3 py-1 text-xs font-semibold text-[var(--accent)]">
                  {w.status}
                </span>
              </div>
              <p className="mt-2 text-[var(--text-2)]">{w.problem}</p>
              <p className="mt-1 text-sm text-[var(--text-3)]">{w.tech}</p>
            </SpotCard>
          </Reveal>
        ))}
        <TodoSlot note="Outros sistemas feitos com apoio de IA (Supabase, TiDB etc.): nome, objetivo, captura e rótulo." />
        <TodoSlot note="Sites feitos por Paloma: endereço publicado, captura e rótulo." />
        <TodoSlot note="Painel de dados (Power BI): captura e rótulo de Demonstração." />
      </div>
    </section>
  );
}

export function ProcessSection() {
  return (
    <section id="como-funciona" aria-labelledby="titulo-processo" className="section-wrap section border-t border-[var(--border)]">
      <SectionHead id="titulo-processo" eyebrow="Como funciona" title="Quatro passos." />
      <ol className="grid gap-4 md:grid-cols-4">
        {STEPS.map((s, i) => (
          <li key={s.title}>
            <Reveal delay={i * 0.08} className="h-full">
              <SpotCard className="h-full p-6">
                <span className="font-display text-5xl font-bold text-grad" aria-hidden="true">
                  {i + 1}
                </span>
                <h3 className="mt-3 font-display text-xl font-semibold">{s.title}</h3>
                <p className="mt-2 text-[var(--text-2)]">{s.text}</p>
              </SpotCard>
            </Reveal>
          </li>
        ))}
      </ol>
    </section>
  );
}

export function ClientContactSection() {
  return (
    <section id="contato-cliente" aria-labelledby="titulo-contato-cliente" className="section-wrap section border-t border-[var(--border)]">
      <Reveal className="bento relative p-8 md:p-14">
        <div className="aurora" aria-hidden="true" />
        <h2 id="titulo-contato-cliente" className="display-lg relative">
          Conte o que você precisa.
        </h2>
        <p className="lead relative mt-5 max-w-2xl">
          Escreva por e-mail com uma descrição da rotina ou do site que você quer. Não publico preço: cada trabalho é
          orçado depois da conversa.
        </p>
        <p className="relative mt-4 max-w-2xl text-[var(--text-2)]">
          Ainda não atendi clientes. A prova são os trabalhos acima e as demonstrações que posso mostrar ao vivo.
        </p>
        <div className="relative mt-8">
          <a
            href={`mailto:${SITE.email}?subject=${encodeURIComponent("Sistema ou site")}`}
            className="btn-primary"
          >
            Escrever por e-mail
          </a>
        </div>
        <div className="relative">
          <ContactLinks />
        </div>
      </Reveal>
    </section>
  );
}
