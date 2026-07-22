"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const SKILL_COLUMNS = [
  {
    id: "financeiro",
    title: "Financeiro & Fiscal",
    icon: "◈",
    skills: [
      { name: "Contas a Pagar/Receber", level: "Sólido" },
      { name: "Conciliação Bancária", level: "Sólido" },
      { name: "Fluxo de Caixa", level: "Sólido" },
      { name: "Mark-up & Precificação", level: "Proficiente" },
      { name: "Elaboração de Contratos", level: "Proficiente" },
    ]
  },
  {
    id: "dados",
    title: "Dados & Inteligência",
    icon: "◇",
    skills: [
      { name: "Power BI", level: "Aprendendo" },
      { name: "SQL (PostgreSQL)", level: "Sólido" },
      { name: "Python (Pandas)", level: "Sólido" },
      { name: "Excel", level: "Sólido" },
      { name: "Análise de Vendas", level: "Sólido" },
    ]
  },
  {
    id: "sistemas",
    title: "Sistemas & Tech",
    icon: "◱",
    skills: [
      { name: "Lógica de Programação", level: "Proficiente" },
      { name: "HTML & CSS", level: "Proficiente" },
      { name: "C / C++", level: "Proficiente" },
      { name: "Git & GitHub", level: "Proficiente" },
      { name: "Next.js / React", level: "Aprendendo" },
    ]
  },
  {
    id: "gestao",
    title: "Gestão & Processos",
    icon: "◉",
    skills: [
      { name: "Mapeamento de Processos", level: "Proficiente" },
      { name: "Backoffice Operacional", level: "Sólido" },
      { name: "Rotinas de Tesouraria", level: "Sólido" },
      { name: "Scrum / Agile", level: "Aprendendo" },
    ]
  }
];

const CERTIFICATIONS = [
  { name: "PSM I — Professional Scrum Master", org: "Scrum.org", status: "Em progresso" },
  { name: "PL-300 — Microsoft Power BI", org: "Microsoft", status: "Em progresso" },
  { name: "Google Data Analytics", org: "Google / Coursera", status: "Em progresso" },
];

const LEVEL_STYLE: Record<string, string> = {
  Sólido:      "text-emerald-400 border-emerald-400/30 bg-emerald-400/8",
  Proficiente: "text-[var(--accent)] border-[var(--accent)]/30 bg-[var(--accent)]/8",
  Aprendendo:  "text-amber-400 border-amber-400/30 bg-amber-400/8",
};

export function SkillsSection() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  return (
    <section id="habilidades" className="py-24 border-t border-[var(--border)]">
      <div className="section-wrap">

        <header className="mb-14">
          <div className="flex items-center gap-3 mb-4">
            <span className="section-number">06</span>
            <span className="font-mono text-[10px] uppercase tracking-widest text-[var(--text-3)]">Competências</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight">
            Onde o conhecimento <span className="text-[var(--text-2)]">se aplica.</span>
          </h2>
          <p className="mt-4 text-sm text-[var(--text-2)] max-w-lg leading-relaxed">
            Habilidades organizadas por domínio.
          </p>
        </header>

        {/* 4 colunas de skills */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-12">
          {SKILL_COLUMNS.map((col, ci) => (
            <motion.div
              key={col.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: ci * 0.1, duration: 0.45 }}
              className="card p-6 flex flex-col gap-4"
            >
              <div className="flex items-center gap-3 mb-2">
                <span className="text-[var(--accent)] text-lg">{col.icon}</span>
                <h3 className="font-display font-semibold text-sm">{col.title}</h3>
              </div>

              <div className="flex flex-col gap-2">
                {col.skills.map((skill) => (
                  <div
                    key={skill.name}
                    onMouseEnter={() => setHoveredSkill(skill.name)}
                    onMouseLeave={() => setHoveredSkill(null)}
                    className={`flex items-center justify-between py-2 px-3 rounded-lg transition-colors cursor-default ${hoveredSkill === skill.name ? 'bg-[var(--bg-3)]' : ''}`}
                  >
                    <span className="text-xs text-[var(--text-2)]">{skill.name}</span>
                    <span className={`font-mono text-[9px] px-2 py-0.5 rounded-full border uppercase tracking-widest ${LEVEL_STYLE[skill.level]}`}>
                      {skill.level}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certificações em progresso */}
        <div className="border-t border-[var(--border)] pt-10">
          <p className="font-mono text-[10px] uppercase tracking-widest text-[var(--text-3)] mb-6">
            Certificações em Andamento (2026)
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {CERTIFICATIONS.map((cert, i) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="card p-4 flex items-start gap-3"
              >
                <span className="w-2 h-2 rounded-full bg-[var(--accent)] animate-pulse mt-1.5 flex-shrink-0" />
                <div>
                  <p className="text-xs font-medium text-[var(--text-1)] leading-snug">{cert.name}</p>
                  <p className="font-mono text-[9px] text-[var(--text-3)] mt-1">{cert.org}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
