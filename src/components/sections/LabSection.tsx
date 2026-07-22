"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useProfile } from "@/lib/ProfileContext";
import { CLTWidget } from "../widgets/CLTWidget";
import { DadosWidget } from "../widgets/DadosWidget";
import { PJWidget } from "../widgets/PJWidget";

/* ─── Simulador de Margem, Markup e Markdown ─── */
function MarginSimulator() {
  const [custo, setCusto] = useState(80);
  const [venda, setVenda] = useState(120);

  const lucro = venda - custo;
  const markup    = custo > 0  ? ((lucro / custo) * 100) : 0;   // sobre o custo
  const markdown  = venda > 0  ? ((lucro / venda) * 100) : 0;   // sobre a venda (= margem)

  const markupFmt   = markup.toFixed(1);
  const markdownFmt = markdown.toFixed(1);

  const margemColor = (v: number) =>
    v >= 30 ? "#4ade80" : v >= 15 ? "#fbbf24" : "#f87171";

  return (
    /* Dois painéis lado a lado, sem scroll interno */
    <div className="flex flex-col lg:flex-row h-full min-h-0 gap-0">

      {/* ── Painel Esquerdo: Conceitos ── */}
      <div className="lg:w-[46%] flex flex-col gap-4 p-5 lg:p-6 border-b lg:border-b-0 lg:border-r border-[var(--border)] overflow-y-auto">
        <div>
          <span className="font-mono text-[9px] text-[var(--accent)] uppercase tracking-[0.18em] block mb-2">O que é</span>
          <h3 className="font-display font-semibold text-base mb-1">Markup vs. Margem (Markdown)</h3>
          <p className="text-xs text-[var(--text-2)] leading-relaxed">
            São duas formas de medir o lucro — e confundi-las é um dos erros mais comuns no varejo.
          </p>
        </div>

        {/* Conceito 1: Markup */}
        <div className="p-3 rounded-lg bg-[var(--bg-3)] border border-[var(--border)]">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="w-2 h-2 rounded-full bg-amber-600 dark:bg-amber-400" />
            <span className="font-mono text-[10px] text-amber-700 dark:text-amber-400 uppercase tracking-widest font-bold">Markup</span>
          </div>
          <p className="text-xs text-[var(--text-2)] leading-relaxed mb-2">
            Percentual aplicado <strong className="text-[var(--text-1)]">sobre o custo</strong> para chegar ao preço de venda.
          </p>
          <div className="font-mono text-[10px] text-amber-700 dark:text-amber-400/80 bg-black/5 dark:bg-black/20 rounded p-2">
            Markup = (Lucro ÷ Custo) × 100
          </div>
          <p className="text-[10px] text-[var(--text-3)] mt-1.5 leading-relaxed">
            ⚠ Usado para <em>formar</em> o preço. Um markup de 50% <u>não significa</u> 50% de lucro no bolso.
          </p>
        </div>

        {/* Conceito 2: Margem/Markdown */}
        <div className="p-3 rounded-lg bg-[var(--bg-3)] border border-[var(--border)]">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="w-2 h-2 rounded-full bg-[var(--accent)]" />
            <span className="font-mono text-[10px] text-[var(--accent)] uppercase tracking-widest font-bold">Margem (Markdown)</span>
          </div>
          <p className="text-xs text-[var(--text-2)] leading-relaxed mb-2">
            Percentual do lucro <strong className="text-[var(--text-1)]">sobre o preço de venda</strong>. É o que realmente fica.
          </p>
          <div className="font-mono text-[10px] text-[var(--accent)]/80 bg-black/20 rounded p-2">
            Margem = (Lucro ÷ Venda) × 100
          </div>
          <p className="text-[10px] text-[var(--text-3)] mt-1.5 leading-relaxed">
            ✓ Usado para <em>analisar</em> a saúde financeira. É a referência para tomar decisões.
          </p>
        </div>

        {/* Por que importa */}
        <div className="p-3 rounded-lg border border-[var(--border-2)] bg-[var(--accent)]/5">
          <span className="font-mono text-[9px] text-[var(--accent)] uppercase tracking-widest block mb-1">Por que importa?</span>
          <p className="text-[10px] text-[var(--text-2)] leading-relaxed">
            Um produto com markup de 50% tem margem de apenas ~33%. Muitas empresas acham que têm 50% de lucro e ficam no vermelho no fechamento do mês.
          </p>
        </div>
      </div>

      {/* ── Painel Direito: Simulador interativo ── */}
      <div className="flex-1 flex flex-col p-5 lg:p-6 gap-4 min-h-0">
        <div>
          <span className="font-mono text-[9px] text-[var(--accent)] uppercase tracking-[0.18em] block mb-1">Simule agora</span>
          <p className="text-xs text-[var(--text-2)]">Altere os valores e veja os indicadores calculados em tempo real.</p>
        </div>

        {/* Inputs */}
        <div className="grid grid-cols-2 gap-3">
          <div className="flex flex-col gap-1.5">
            <label className="font-mono text-[9px] text-[var(--text-3)] uppercase tracking-widest">Custo (R$)</label>
            <input
              type="number" value={custo} min={1}
              onChange={e => setCusto(Math.max(1, Number(e.target.value)))}
              className="input-base text-center text-lg font-bold"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="font-mono text-[9px] text-[var(--text-3)] uppercase tracking-widest">Preço Venda (R$)</label>
            <input
              type="number" value={venda} min={1}
              onChange={e => setVenda(Math.max(1, Number(e.target.value)))}
              className="input-base text-center text-lg font-bold"
            />
          </div>
        </div>

        {/* Resultado: Lucro */}
        <div className="p-3 rounded-lg bg-[var(--bg-3)] border border-[var(--border)] flex items-center justify-between">
          <span className="text-xs text-[var(--text-2)]">Lucro Bruto</span>
          <motion.span key={lucro} initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
            className={`font-display font-bold text-xl ${lucro >= 0 ? "text-emerald-400" : "text-red-400"}`}>
            {lucro >= 0 ? "+" : ""}R$ {lucro.toFixed(2)}
          </motion.span>
        </div>

        {/* Duas métricas lado a lado */}
        <div className="grid grid-cols-2 gap-3 flex-1">
          {/* Markup */}
          <div className="flex flex-col p-3 rounded-lg border border-amber-600/20 dark:border-amber-400/20 bg-amber-600/5 dark:bg-amber-400/5 gap-2">
            <span className="font-mono text-[9px] text-amber-700 dark:text-amber-400 uppercase tracking-widest">Markup</span>
            <motion.span key={markupFmt} initial={{ y: 4, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
              className="font-display font-bold text-2xl" style={{ color: margemColor(markup) }}>
              {markupFmt}%
            </motion.span>
            <div className="h-1.5 rounded-full bg-[var(--bg-4)] overflow-hidden">
              <motion.div animate={{ width: `${Math.min(Math.max(markup, 0), 100)}%` }}
                transition={{ type: "spring", bounce: 0.1 }}
                className="h-full rounded-full bg-amber-600 dark:bg-amber-400" />
            </div>
            <p className="text-[9px] text-[var(--text-3)] leading-tight">Sobre o custo de aquisição</p>
          </div>

          {/* Margem */}
          <div className="flex flex-col p-3 rounded-lg border border-[var(--accent)]/20 bg-[var(--accent)]/5 gap-2">
            <span className="font-mono text-[9px] text-[var(--accent)] uppercase tracking-widest">Margem Real</span>
            <motion.span key={markdownFmt} initial={{ y: 4, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
              className="font-display font-bold text-2xl" style={{ color: margemColor(markdown) }}>
              {markdownFmt}%
            </motion.span>
            <div className="h-1.5 rounded-full bg-[var(--bg-4)] overflow-hidden">
              <motion.div animate={{ width: `${Math.min(Math.max(markdown, 0), 100)}%` }}
                transition={{ type: "spring", bounce: 0.1 }}
                className="h-full rounded-full bg-[var(--accent)]" />
            </div>
            <p className="text-[9px] text-[var(--text-3)] leading-tight">Sobre o preço de venda</p>
          </div>
        </div>

        {/* Insight dinâmico */}
        <div className="rounded-lg border border-[var(--border)] p-3 bg-[var(--bg-3)]">
          <AnimatePresence mode="wait">
            <motion.p key={`${markupFmt}-${markdownFmt}`} initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
              className="text-[10px] text-[var(--text-2)] leading-relaxed">
              {markdown < 0
                ? "⛔ Você está vendendo abaixo do custo. Reveja o preço urgentemente."
                : markdown < 15
                ? `⚠ Margem de ${markdownFmt}% é crítica. Com impostos e despesas fixas, provavelmente opera no prejuízo.`
                : markdown < 30
                ? `ℹ Margem de ${markdownFmt}% é aceitável. Atenção aos impostos e perdas operacionais que podem corroer esse resultado.`
                : `✓ Boa margem de ${markdownFmt}%! Lembre: markup de ${markupFmt}% sobre custo resultou em apenas ${markdownFmt}% de margem real.`}
            </motion.p>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

const TABS = [
  { id: "margem",      label: "Markup & Margem",      profiles: ["all", "pj", "clt"] },
  { id: "gargalos",    label: "Mapa de Gargalos",      profiles: ["all", "clt"] },
  { id: "dados",       label: "Tradutor de Dados",     profiles: ["all", "dados"] },
  { id: "consultoria", label: "ROI de Consultoria",    profiles: ["all", "pj"] },
];

export function LabSection() {
  const { activeProfile } = useProfile();
  const [activeTab, setActiveTab] = useState("margem");

  const visibleTabs = TABS.filter(t => t.profiles.includes(activeProfile));
  const currentTab = visibleTabs.find(t => t.id === activeTab) ? activeTab : (visibleTabs[0]?.id ?? "margem");

  return (
    <section id="laboratorio" className="py-16 md:py-24 border-t border-[var(--border)]">
      <div className="section-wrap">

        <header className="mb-10">
          <div className="flex items-center gap-3 mb-3">
            <span className="section-number">04</span>
            <span className="font-mono text-[10px] uppercase tracking-widest text-[var(--text-3)]">Laboratório Interativo</span>
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight">
            Simule. <span className="text-[var(--text-2)]">Explore. Entenda.</span>
          </h2>
          <p className="mt-3 text-sm text-[var(--text-2)] max-w-lg leading-relaxed">
            Ferramentas que demonstram como a análise financeira funciona na prática — com seus próprios números.
          </p>
        </header>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 mb-6">
          {visibleTabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`tap-transparent px-4 py-2 rounded-full font-mono text-[10px] uppercase tracking-widest border transition-all ${
                currentTab === tab.id
                  ? "bg-[var(--accent)] text-[var(--bg)] border-[var(--accent)]"
                  : "bg-transparent text-[var(--text-3)] border-[var(--border)] hover:border-[var(--text-3)]"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Widget — altura fixa para não ter scroll externo */}
        <div className="card overflow-hidden" style={{ minHeight: "480px", maxHeight: "620px" }}>
          <div className="h-full flex flex-col" style={{ minHeight: "inherit" }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTab}
                initial={{ opacity: 0, x: 12 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -12 }}
                transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                className="flex-1 min-h-0 flex flex-col"
              >
                {currentTab === "margem"      && <MarginSimulator />}
                {currentTab === "gargalos"    && <CLTWidget />}
                {currentTab === "dados"       && <DadosWidget />}
                {currentTab === "consultoria" && <PJWidget />}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

      </div>
    </section>
  );
}
