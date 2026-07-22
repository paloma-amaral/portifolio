"use client";

import { useState } from "react";
import { useProfile } from "@/lib/ProfileContext";

const CASES = [
  // ── CLT / Implementação (3 casos) ───────────────────────────────────────────────────────
  {
    id: "cultura-dados",
    profileMatch: ["clt"],
    featuredIn: ["all"],
    label: "Cultura de Sistemas",
    before: {
      title: "O caos das planilhas isoladas.",
      body: "Informação descentralizada: o financeiro tem uma planilha, vendas tem outra, e os números nunca batem no final do mês."
    },
    after: {
      title: "SSOT (Single Source of Truth).",
      body: "Sistemas integrados. O ERP atua como fonte única de verdade, alimentando todas as áreas e garantindo decisões baseadas no mesmo dado."
    }
  },
  {
    id: "foco-analista",
    profileMatch: ["clt"],
    featuredIn: [],
    label: "Foco do Analista",
    before: {
      title: "Trabalho puramente braçal.",
      body: "Profissionais caros passando 80% do dia copiando e colando dados entre telas, apenas para manter a operação respirando."
    },
    after: {
      title: "Trabalho Estratégico (Tech).",
      body: "Automação da coleta. A máquina faz o trabalho repetitivo para que o humano gaste 90% do tempo gerando insights que dão lucro."
    }
  },
  {
    id: "implantacao-software",
    profileMatch: ["clt"],
    featuredIn: [],
    label: "Implantação de ERP",
    before: {
      title: "Forçar a empresa a caber no software.",
      body: "Comprar um sistema caro de prateleira e tentar obrigar a operação a mudar para se adaptar às limitações da ferramenta."
    },
    after: {
      title: "Tecnologia moldada à operação.",
      body: "Mapear os processos (As-Is) primeiro, e então parametrizar o ERP para que ele automatize e resolva as dores reais do time."
    }
  },

  // ── DADOS / BI / TECH (3 casos) ─────────────────────────────────────────────────────
  {
    id: "lucro-cego",
    profileMatch: ["dados"],
    featuredIn: ["all"],
    label: "Visão Financeira",
    before: {
      title: "A ilusão do 'faturamento alto'.",
      body: "A empresa vende muito, bate metas comerciais, mas no fim do mês falta dinheiro no caixa e ninguém sabe onde a margem vazou."
    },
    after: {
      title: "Caixa totalmente rastreado.",
      body: "DRE Gerencial cruzada com fluxo de caixa por meio de Data Analytics. Fica cristalino para onde cada centavo está indo."
    }
  },
  {
    id: "relatorios-estaticos",
    profileMatch: ["dados"],
    featuredIn: [],
    label: "Consumo de Dados",
    before: {
      title: "Relatórios estáticos em PDF.",
      body: "Fechar o mês com muito suor, gerar um relatório e enviar para a diretoria ler 10 dias depois do evento já ter ocorrido."
    },
    after: {
      title: "Dashboards Vivos em tempo real.",
      body: "Modelos de dados (Power BI/Metabase) conectados ao banco. O diretor acompanha a margem do dia atualizada em tempo real."
    }
  },
  {
    id: "resolucao-gargalos",
    profileMatch: ["dados"],
    featuredIn: [],
    label: "Escalabilidade",
    before: {
      title: "Mais demanda, mais contratação.",
      body: "A solução para o crescimento do volume de vendas era sempre a mesma: contratar mais pessoas para digitar boletos e notas."
    },
    after: {
      title: "Escalabilidade Tecnológica.",
      body: "Crescimento suportado por conexões via API, macros e integrações (ETL) que processam 10 ou 10.000 linhas no mesmo tempo."
    }
  },

  // ── PJ / CONSULTORIA (3 casos) ──────────────────────────────────────────
  {
    id: "perfil-tradutor",
    profileMatch: ["pj"],
    featuredIn: ["all"],
    label: "A Ponte",
    before: {
      title: "Guerra Fria: TI vs. Financeiro.",
      body: "O desenvolvedor cria sistemas que o financeiro não pediu, e o financeiro exige fluxos que o TI não entende tecnicamente."
    },
    after: {
      title: "O Analista Tradutor.",
      body: "O elo perfeito: alguém que entende as regras de débito/crédito e DRE, mas também sabe o que é uma chave primária no banco de dados."
    }
  },
  {
    id: "precificacao-cega",
    profileMatch: ["pj"],
    featuredIn: [],
    label: "Precificação",
    before: {
      title: "Preço definido pelo concorrente.",
      body: "Vender pelo mesmo preço da loja da frente, ignorando completamente os custos fixos da sua própria empresa e as taxas da maquininha."
    },
    after: {
      title: "Precificação Matemática (Mark-up).",
      body: "Calculadora de margem dinâmica. Sabendo o custo real e as taxas, define-se a margem exata necessária para proteger o negócio."
    }
  },
  {
    id: "dependencia-pessoas",
    profileMatch: ["pj"],
    featuredIn: [],
    label: "Processos",
    before: {
      title: "A empresa refém de uma mente.",
      body: "Todo o conhecimento operacional financeiro mora na cabeça de um único funcionário antigo. Se ele viaja, tudo trava."
    },
    after: {
      title: "Processos Documentados e Cegos.",
      body: "Criação de manuais de processos (SOPs) e ferramentas blindadas, permitindo que a empresa rode perfeitamente independente das pessoas."
    }
  },
];

// Para "all": pega 1 de cada perfil (o featuredIn: ["all"])
function getVisible(activeProfile: string) {
  if (activeProfile === "all") {
    return CASES.filter(c => c.featuredIn.includes("all"));
  }
  return CASES.filter(c => c.profileMatch.includes(activeProfile));
}

export function FrentesSection() {
  const { activeProfile } = useProfile();
  const [sliders, setSliders] = useState<Record<string, number>>({});

  const visible = getVisible(activeProfile);

  return (
    <section id="atuacao" className="py-24 border-t border-[var(--border)]">
      <div className="section-wrap">

        <header className="mb-14">
          <div className="flex items-center gap-3 mb-4">
            <span className="section-number">03</span>
            <span className="font-mono text-[10px] uppercase tracking-widest text-[var(--text-3)]">Paradigma vs. Processo Real</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-4">
            A Mudança de <span className="text-[var(--accent)]">Paradigma.</span>
          </h2>
          <p className="max-w-xl text-sm text-[var(--text-2)] leading-relaxed">
            Profissionais puramente operacionais focam apenas em "fazer o trabalho". Eu foco em <strong>mudar a forma como o trabalho é feito</strong>. 
            Veja a diferença entre a cultura administrativa antiga e o método guiado por tecnologia e dados.
          </p>
        </header>

        {/* Sliders de comparação (3 colunas no desktop) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-6">
          {visible.map((current) => {
            const sliderPos = sliders[current.id] ?? 30;

            return (
              <div key={current.id} className="w-full flex flex-col">

                {/* Header do Caso */}
                <div className="flex flex-col items-start mb-4 gap-2">
                  <span className="font-mono text-[9px] uppercase tracking-widest text-[var(--text-1)] bg-[var(--bg-3)] border border-[var(--border)] px-3 py-1.5 rounded-full">
                    {current.label}
                  </span>
                </div>

                {/* Slider Visual */}
                <div className="relative w-full rounded-xl overflow-hidden border border-[var(--border)] h-[320px] lg:h-[360px] select-none shadow-lg">

                  {/* ANTES — cobre o card inteiro, texto no topo */}
                  <div
                    className="absolute inset-0 flex items-start p-6 lg:p-7"
                    style={{ background: 'var(--slider-before-bg)' }}
                  >
                    <div className="w-full">
                      <div className="font-mono text-[9px] uppercase tracking-widest mb-3 font-bold" style={{ color: 'var(--slider-before-tag)' }}>⚠ Antes (O Caos)</div>
                      <p className="font-display font-bold text-lg lg:text-xl mb-3 leading-tight" style={{ color: 'var(--slider-before-text)' }}>{current.before.title}</p>
                      <p className="text-xs leading-relaxed" style={{ color: 'var(--slider-before-text)', opacity: 0.8 }}>{current.before.body}</p>
                    </div>
                  </div>

                  {/* DEPOIS — mesmo layout (topo), clip-path revela da esquerda */}
                  <div
                    className="absolute inset-0 flex items-start p-6 lg:p-7 transition-none"
                    style={{ clipPath: `inset(0 0 0 ${sliderPos}%)`, background: 'var(--slider-after-bg)' }}
                  >
                    <div className="w-full">
                      <div className="font-mono text-[9px] uppercase tracking-widest mb-3 font-bold" style={{ color: 'var(--slider-after-text)' }}>✓ Depois (A Solução)</div>
                      <p className="font-display font-bold text-lg lg:text-xl mb-3 leading-tight" style={{ color: 'var(--slider-after-text)' }}>{current.after.title}</p>
                      <p className="text-xs leading-relaxed" style={{ color: 'var(--slider-after-text)', opacity: 0.8 }}>{current.after.body}</p>
                    </div>
                  </div>

                  {/* Divisor — linha + botão adaptativo ao tema */}
                  <div
                    className="absolute top-0 bottom-0 w-[2px] pointer-events-none z-10"
                    style={{ left: `${sliderPos}%`, background: 'var(--slider-divider, rgba(100,100,100,0.5))' }}
                  >
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-9 h-9 rounded-full flex items-center justify-center shadow-lg border"
                      style={{ background: 'var(--bg)', borderColor: 'var(--border)', color: 'var(--text-1)' }}
                    >
                      <span className="text-sm font-bold">⇄</span>
                    </div>
                  </div>

                  {/* Input range invisível sobre tudo */}
                  <input
                    type="range" min="5" max="95" value={sliderPos}
                    onChange={e => setSliders({ ...sliders, [current.id]: Number(e.target.value) })}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-20"
                  />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
