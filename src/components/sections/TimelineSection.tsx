"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const TIMELINE = [
  {
    id: "etec-dev",
    year: "2020",
    role: "Técnico em Desenv. de Sistemas",
    place: "ETEC Prof. Idio Zucchi",
    detail: "Lógica de programação, C/C++ e banco de dados relacional.",
    tag: "Formação"
  },
  {
    id: "etec-adm",
    year: "2022",
    role: "Técnico em Administração",
    place: "ETEC Prof. Idio Zucchi",
    detail: "Rotinas administrativas, contabilidade básica e organização de processos.",
    tag: "Formação"
  },
  {
    id: "hortifruti",
    year: "2022–2023",
    role: "Assistente Administrativa",
    place: "Empório Hortifrutti & Armazém das Bebidas",
    detail: "Backoffice de varejo com volume diário alto: conferência de caixa, sangrias, conciliação de cartões, emissão de NF-e, precificação e cadastros do ERP.",
    tag: "Operação"
  },
  {
    id: "usina",
    year: "2024",
    role: "Assistente Administrativo",
    place: "Usina Pitangueiras",
    detail: "ERP de grande porte e processos corporativos: requisições, relatórios e movimentações em ambiente com exigência documental.",
    tag: "Corporativo"
  },
  {
    id: "engenharia",
    year: "2024",
    role: "Engenharia de Software",
    place: "UNAERP",
    detail: "Graduação em andamento. Python, SQL, engenharia de software e o que já uso nos projetos: Next.js, NestJS e PostgreSQL.",
    tag: "Formação"
  },
  {
    id: "consultoria",
    year: "2025 – Hoje",
    role: "Analista Financeira (consultoria)",
    place: "EcoService · Hortifrutti · LGC Gás · Eco Caroni",
    detail: "Ciclo financeiro completo de um grupo de empresas: contas a pagar e receber, NF-e, conciliação bancária, folha, contratos e fechamento mensal. Em 2026 desenvolvi o sistema que hoje sustenta essa rotina.",
    tag: "Consultoria"
  },
];

const TAG_COLORS: Record<string, string> = {
  Formação:    "bg-[var(--accent)]/15 text-[var(--accent)] border-[var(--accent)]/30",
  Operação:    "bg-amber-500/10 text-amber-400 border-amber-500/30",
  Corporativo: "bg-blue-500/10 text-blue-400 border-blue-500/30",
  Consultoria: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
};

export function TimelineSection() {
  const [expanded, setExpanded] = useState<string | null>("consultoria");

  return (
    <section id="experiencia" className="py-24 border-t border-[var(--border)]">
      <div className="section-wrap">

        <header className="mb-14">
          <div className="flex items-center gap-3 mb-4">
            <span className="section-number">04</span>
            <span className="font-mono text-[10px] uppercase tracking-widest text-[var(--text-3)]">Trajetória</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight">
            A trajetória <span className="text-[var(--text-2)]">até aqui.</span>
          </h2>
          <p className="mt-4 text-sm text-[var(--text-2)] max-w-lg leading-relaxed">
            Formação técnica em sistemas e em administração, operação financeira em varejo e indústria, e agora consultoria e desenvolvimento em paralelo com a graduação.
          </p>
        </header>

        {/* Timeline vertical */}
        <div className="relative flex flex-col">
          {/* Linha vertical */}
          <div className="absolute left-[23px] top-0 bottom-0 w-px bg-[var(--border)]" />

          {TIMELINE.map((item, i) => {
            const isOpen = expanded === item.id;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: i * 0.08, duration: 0.45 }}
                className="relative flex gap-6 pb-8"
              >
                {/* Dot */}
                <div className="relative z-10 flex-shrink-0 mt-1">
                  <motion.div
                    animate={{ scale: isOpen ? 1.2 : 1 }}
                    className={`w-[18px] h-[18px] rounded-full border-2 transition-colors duration-300 ${isOpen ? 'bg-[var(--accent)] border-[var(--accent)]' : 'bg-[var(--bg-3)] border-[var(--border)]'}`}
                  />
                </div>

                {/* Content */}
                <div
                  className="flex-1 cursor-pointer group"
                  onClick={() => setExpanded(isOpen ? null : item.id)}
                  onMouseEnter={() => setExpanded(item.id)}
                >
                  <div className="flex flex-wrap items-center gap-3 mb-1">
                    <span className="font-mono text-[10px] text-[var(--text-3)]">{item.year}</span>
                    <span className={`text-[9px] font-mono uppercase tracking-widest px-2 py-0.5 rounded-full border ${TAG_COLORS[item.tag]}`}>
                      {item.tag}
                    </span>
                  </div>
                  <h3 className={`font-display font-semibold text-base transition-colors ${isOpen ? 'text-[var(--accent)]' : 'text-[var(--text-1)] group-hover:text-[var(--accent)]'}`}>
                    {item.role}
                  </h3>
                  <p className="text-xs text-[var(--text-3)] mb-2">{item.place}</p>

                  <motion.div
                    initial={false}
                    animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="text-sm text-[var(--text-2)] leading-relaxed border-l-2 border-[var(--accent)]/40 pl-3 py-1">
                      {item.detail}
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
