"use client";

import { useState } from "react";
import { useProfile } from "@/lib/ProfileContext";

const CASES = [
  // ── Financeiro & Operações ──────────────────────────────────────────────
  {
    id: "fontes-faturamento",
    profileMatch: ["clt"],
    featuredIn: ["all"],
    label: "Faturamento",
    before: {
      title: "Um número, várias origens.",
      body: "Faturamento somado de caixa, maquininha e extrato conforme o que estava à mão. O mesmo mês dava valores diferentes dependendo de quem calculava."
    },
    after: {
      title: "Cada número, uma fonte.",
      body: "O caixa fecha o dinheiro, a maquininha fecha o cartão, o extrato fecha a prestadora de serviço. A regra está escrita e o sistema aplica sempre do mesmo jeito."
    }
  },
  {
    id: "contas-socios",
    profileMatch: ["clt"],
    featuredIn: [],
    label: "Contas a pagar",
    before: {
      title: "Despesa que não aparecia.",
      body: "Sócios pagavam conta direto pelo banco e não avisavam. O relatório de custo saía menor do que a realidade."
    },
    after: {
      title: "Extrato conciliado antes do fechamento.",
      body: "A conciliação linha a linha completa as contas a pagar. O fechamento só libera com o mês conciliado."
    }
  },
  {
    id: "fechamento-mensal",
    profileMatch: ["clt"],
    featuredIn: [],
    label: "Fechamento",
    before: {
      title: "Uma planilha por empresa, feita à mão.",
      body: "Oito arquivos, fórmulas copiadas de um para o outro, e ninguém sabia se os empréstimos entre as empresas estavam certos."
    },
    after: {
      title: "Um fechamento por empresa, saído do sistema.",
      body: "Mesmas tabelas, mesma ordem, empréstimos apurados automaticamente e legenda quando um número precisa de explicação."
    }
  },

  // ── Análise de Dados ─────────────────────────────────────────────────────
  {
    id: "saldo-diario",
    profileMatch: ["dados"],
    featuredIn: ["all"],
    label: "Acompanhamento",
    before: {
      title: "O mês só era lido no fim.",
      body: "Relatório montado depois do fechamento. Quando um problema aparecia, já tinha acontecido há semanas."
    },
    after: {
      title: "Saldo do dia e histórico de fluxo.",
      body: "Saldo de cada conta e dinheiro físico registrados todo dia, antes da movimentação. O mês vai sendo lido enquanto acontece."
    }
  },
  {
    id: "cadastro-produtos",
    profileMatch: ["dados"],
    featuredIn: [],
    label: "Cadastros",
    before: {
      title: "Cadastro de produtos poluído.",
      body: "Unidades, categorias e nomes inconsistentes. Erro na venda e nenhuma análise por família de produto era possível."
    },
    after: {
      title: "Base padronizada.",
      body: "Extração, limpeza no Excel e Power Query e reimportação no ERP. Margem e curva ABC por categoria passaram a existir."
    }
  },
  {
    id: "margem-produto",
    profileMatch: ["dados"],
    featuredIn: [],
    label: "Margem",
    before: {
      title: "Margem estimada.",
      body: "Preço formado por markup e ninguém sabia a margem real por categoria depois das taxas e das perdas."
    },
    after: {
      title: "Margem por produto, contra referência.",
      body: "Produtos vendidos importados do ERP, custo e preço cruzados, margem comparada a uma referência de mercado e justificativa registrada quando foge."
    }
  },

  // ── Consultoria ──────────────────────────────────────────────────────────
  {
    id: "conta-pessoal",
    profileMatch: ["pj"],
    featuredIn: ["all"],
    label: "Controles",
    before: {
      title: "Tudo na mesma conta.",
      body: "Despesa da casa e da empresa misturadas. O dono sabia quanto vendia, mas não quanto sobrava."
    },
    after: {
      title: "Separação e plano de contas.",
      body: "Conta da empresa separada, despesas classificadas e uma rotina simples de aprovação de pagamentos. O resultado do mês passa a ser um número, não uma sensação."
    }
  },
  {
    id: "precificacao",
    profileMatch: ["pj"],
    featuredIn: [],
    label: "Precificação",
    before: {
      title: "Preço do concorrente.",
      body: "Vender pelo mesmo preço da loja da frente, sem contar taxa de maquininha, quebra e custo fixo."
    },
    after: {
      title: "Preço com custo, taxa e margem.",
      body: "Calculadora de preço mínimo por produto. A margem desejada é uma escolha; o preço mínimo é uma conta."
    }
  },
  {
    id: "dependencia-pessoa",
    profileMatch: ["pj"],
    featuredIn: [],
    label: "Processos",
    before: {
      title: "O processo mora na cabeça de alguém.",
      body: "Todo o conhecimento do financeiro em uma pessoa. Se ela falta, o fechamento para."
    },
    after: {
      title: "Roteiro escrito.",
      body: "Regras de negócio documentadas dentro do próprio sistema, capítulo a capítulo, para que outra pessoa consiga fechar o mês."
    }
  },

  // ── Desenvolvimento ──────────────────────────────────────────────────────
  {
    id: "dev-telas",
    profileMatch: ["dev"],
    featuredIn: ["all"],
    label: "Interface",
    before: {
      title: "Tela genérica de cadastro.",
      body: "Formulário com todos os campos, sem ordem e sem atalho, para quem lança dezenas de contas por dia."
    },
    after: {
      title: "Tela na ordem do trabalho.",
      body: "Campos na sequência em que a pessoa lê o documento, teclado primeiro, conferência visual antes de salvar."
    }
  },
  {
    id: "dev-ambiente",
    profileMatch: ["dev"],
    featuredIn: [],
    label: "Ambiente",
    before: {
      title: "Testar em produção.",
      body: "Mudança feita direto no sistema que a equipe usa, com dados reais."
    },
    after: {
      title: "Ambiente de demonstração separado.",
      body: "Mesmo código, banco próprio com dados fictícios e reinício automático todo dia. Quem quer testar, testa sem tocar em dado real."
    }
  },
];

import { SpotlightWrapper } from "@/components/ui/SpotlightWrapper";

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
            <span className="section-number text-white/50 border-white/20">03</span>
            <span className="font-mono text-[10px] uppercase tracking-widest text-white/50">Antes e depois</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-4 text-white">
            O que mudou <span className="text-[var(--accent)] text-transparent bg-clip-text bg-gradient-to-r from-[var(--accent)] to-purple-500">na rotina.</span>
          </h2>
          <p className="max-w-xl text-sm text-white/60 leading-relaxed">
            Situações que encontrei na operação e o que foi feito em cada uma. <strong className="text-white">Arraste para comparar</strong> como era e como ficou.
          </p>
        </header>

        {/* Sliders de comparação (2 colunas no desktop) com Spotlight */}
        <SpotlightWrapper className="w-full rounded-2xl">
          <div className="flex flex-nowrap md:grid md:grid-cols-2 gap-8 lg:gap-10 overflow-x-auto snap-x snap-mandatory pb-6 px-1 -mx-1 hide-scrollbar" style={{ scrollPaddingLeft: "5vw" }}>
            {visible.map((current) => {
              const sliderPos = sliders[current.id] ?? 30;

            return (
              <div key={current.id} className="w-[85vw] md:w-full flex-shrink-0 snap-center flex flex-col">

                {/* Header do Caso */}
                <div className="flex flex-col items-start mb-4 gap-2">
                  <span className="font-mono text-[9px] uppercase tracking-widest text-[var(--text-1)] bg-[var(--bg-3)] border border-[var(--border)] px-3 py-1.5 rounded-full">
                    {current.label}
                  </span>
                </div>

                {/* Slider Visual */}
                <div className="relative w-full rounded-xl overflow-hidden border border-[var(--border)] h-[220px] lg:h-[240px] select-none shadow-lg">

                  {/* ANTES — cobre o card inteiro, texto no topo */}
                    <div
                      className="absolute inset-0 flex items-start p-6 lg:p-7"
                      style={{ background: 'var(--slider-before-bg)' }}
                    >
                      <div className="w-[85%] md:w-[90%] text-left">
                        <div className="font-mono text-[9px] uppercase tracking-widest mb-3 font-bold" style={{ color: 'var(--slider-before-tag)' }}>Antes</div>
                        <p className="font-display font-bold text-lg lg:text-xl mb-3 leading-tight" style={{ color: 'var(--slider-before-text)' }}>{current.before.title}</p>
                        <p className="text-[11px] leading-relaxed" style={{ color: 'var(--slider-before-text)', opacity: 0.8 }}>{current.before.body}</p>
                      </div>
                    </div>

                  {/* DEPOIS — mesmo layout (topo), clip-path revela da esquerda */}
                    <div
                      className="absolute inset-0 flex items-start p-6 lg:p-7 transition-none"
                      style={{ clipPath: `inset(0 0 0 ${sliderPos}%)`, background: 'var(--slider-after-bg)' }}
                    >
                      <div className="w-[85%] md:w-[90%] ml-auto text-right flex flex-col items-end">
                        <div className="font-mono text-[9px] uppercase tracking-widest mb-3 font-bold" style={{ color: 'var(--slider-after-text)' }}>Depois</div>
                        <p className="font-display font-bold text-lg lg:text-xl mb-3 leading-tight" style={{ color: 'var(--slider-after-text)' }}>{current.after.title}</p>
                        <p className="text-[11px] leading-relaxed" style={{ color: 'var(--slider-after-text)', opacity: 0.8 }}>{current.after.body}</p>
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
        </SpotlightWrapper>

      </div>
    </section>
  );
}
