"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Briefcase, Database, MonitorSmartphone, GitBranch, ShieldCheck, LineChart, Code2, Server, LayoutDashboard, Calculator, Settings, CheckCircle2, Bot } from "lucide-react";
import { useProfile } from "@/lib/ProfileContext";

// Define all possible columns and group them by profile
const SKILL_PROFILES = {
  all: [
    {
      id: "financeiro", title: "Financeiro & Fiscal", icon: <Briefcase className="w-5 h-5" />,
      skills: [
        { name: "Contas a Pagar/Receber", level: "Sólido" },
        { name: "Conciliação Bancária", level: "Sólido" },
        { name: "Fluxo de Caixa", level: "Sólido" },
        { name: "Mark-up & Precificação", level: "Proficiente" },
      ]
    },
    {
      id: "dados", title: "Dados & Inteligência", icon: <Database className="w-5 h-5" />,
      skills: [
        { name: "Power BI", level: "Aprendendo" },
        { name: "SQL (PostgreSQL)", level: "Sólido" },
        { name: "Python (Pandas)", level: "Sólido" },
        { name: "Excel", level: "Sólido" },
      ]
    },
    {
      id: "sistemas", title: "Sistemas & Tech", icon: <MonitorSmartphone className="w-5 h-5" />,
      skills: [
        { name: "Lógica de Programação", level: "Proficiente" },
        { name: "HTML & CSS", level: "Proficiente" },
        { name: "Git & GitHub", level: "Proficiente" },
        { name: "Next.js / React", level: "Aprendendo" },
      ]
    },
    {
      id: "gestao", title: "Gestão & Processos", icon: <GitBranch className="w-5 h-5" />,
      skills: [
        { name: "Mapeamento de Processos", level: "Proficiente" },
        { name: "Backoffice Operacional", level: "Sólido" },
        { name: "Scrum / Agile", level: "Aprendendo" },
      ]
    }
  ],
  clt: [
    {
      id: "operacao", title: "Rotina de Backoffice", icon: <CheckCircle2 className="w-5 h-5" />,
      skills: [
        { name: "Conciliação Bancária", level: "Sólido" },
        { name: "Contas a Pagar e Receber", level: "Sólido" },
        { name: "Fechamento de Caixa", level: "Sólido" },
        { name: "Controle de Inadimplência", level: "Proficiente" },
      ]
    },
    {
      id: "erps", title: "Sistemas & ERP", icon: <Settings className="w-5 h-5" />,
      skills: [
        { name: "Parametrização de ERP", level: "Sólido" },
        { name: "Migração de Cadastros", level: "Sólido" },
        { name: "Implantação Financeira", level: "Proficiente" },
        { name: "Saneamento de Banco", level: "Sólido" },
      ]
    },
    {
      id: "fiscal", title: "Fiscal & Faturamento", icon: <Calculator className="w-5 h-5" />,
      skills: [
        { name: "Emissão NF-e / NFS-e", level: "Sólido" },
        { name: "Retenções na Fonte", level: "Sólido" },
        { name: "Regras de Tributação", level: "Aprendendo" },
      ]
    },
    {
      id: "processos", title: "Gestão & Mapeamento", icon: <GitBranch className="w-5 h-5" />,
      skills: [
        { name: "Mapeamento (As-Is/To-Be)", level: "Proficiente" },
        { name: "Treinamento de Equipe", level: "Sólido" },
        { name: "Auditoria de Lançamentos", level: "Sólido" },
      ]
    }
  ],
  dados: [
    {
      id: "linguagens", title: "Linguagens & Scripts", icon: <Code2 className="w-5 h-5" />,
      skills: [
        { name: "Python", level: "Sólido" },
        { name: "Pandas & NumPy", level: "Sólido" },
        { name: "Web Scraping Bás.", level: "Aprendendo" },
      ]
    },
    {
      id: "banco", title: "Bancos de Dados", icon: <Server className="w-5 h-5" />,
      skills: [
        { name: "PostgreSQL", level: "Sólido" },
        { name: "SQL (Queries Complexas)", level: "Sólido" },
        { name: "Modelagem de Dados", level: "Aprendendo" },
      ]
    },
    {
      id: "visualizacao", title: "Visualização (BI)", icon: <LayoutDashboard className="w-5 h-5" />,
      skills: [
        { name: "Power BI", level: "Aprendendo" },
        { name: "Excel Avançado / VBA", level: "Sólido" },
        { name: "Dashboards Executivos", level: "Sólido" },
      ]
    },
    {
      id: "analitica", title: "Análise de Negócios", icon: <LineChart className="w-5 h-5" />,
      skills: [
        { name: "Análise de Faturamento", level: "Sólido" },
        { name: "Curva ABC", level: "Sólido" },
        { name: "KPIs Financeiros", level: "Sólido" },
      ]
    }
  ],
  pj: [
    {
      id: "diagnostico", title: "Diagnóstico Operacional", icon: <Briefcase className="w-5 h-5" />,
      skills: [
        { name: "Auditoria Financeira", level: "Sólido" },
        { name: "Revisão de DRE", level: "Sólido" },
        { name: "Identificação de Gargalos", level: "Proficiente" },
      ]
    },
    {
      id: "automacao", title: "Automação Sistêmica", icon: <Bot className="w-5 h-5" />,
      skills: [
        { name: "Integração via API", level: "Aprendendo" },
        { name: "Scripts Python (Tarefas)", level: "Sólido" },
        { name: "Planilhas Inteligentes", level: "Sólido" },
      ]
    },
    {
      id: "gestao", title: "Consultoria e Gestão", icon: <GitBranch className="w-5 h-5" />,
      skills: [
        { name: "Otimização de Tempo", level: "Sólido" },
        { name: "Saneamento de Processos", level: "Sólido" },
        { name: "Padronização de Rotinas", level: "Proficiente" },
      ]
    },
    {
      id: "pricing", title: "Precificação (Pricing)", icon: <Calculator className="w-5 h-5" />,
      skills: [
        { name: "Cálculo de Mark-up", level: "Sólido" },
        { name: "Margem de Contribuição", level: "Sólido" },
        { name: "Ponto de Equilíbrio", level: "Sólido" },
      ]
    }
  ],
  dev: [
    {
      id: "frontend", title: "Frontend & UI", icon: <MonitorSmartphone className="w-5 h-5" />,
      skills: [
        { name: "React & Next.js", level: "Proficiente" },
        { name: "Tailwind CSS", level: "Proficiente" },
        { name: "Framer Motion", level: "Aprendendo" },
      ]
    },
    {
      id: "linguagens", title: "Linguagens", icon: <Code2 className="w-5 h-5" />,
      skills: [
        { name: "TypeScript", level: "Proficiente" },
        { name: "JavaScript", level: "Sólido" },
        { name: "C / C++", level: "Proficiente" },
      ]
    },
    {
      id: "backend", title: "Dados & APIs", icon: <Server className="w-5 h-5" />,
      skills: [
        { name: "Integração de APIs REST", level: "Sólido" },
        { name: "SQL & PostgreSQL", level: "Sólido" },
        { name: "Python", level: "Sólido" },
      ]
    },
    {
      id: "ferramentas", title: "Ferramentas & Ágil", icon: <Settings className="w-5 h-5" />,
      skills: [
        { name: "Git & GitHub", level: "Proficiente" },
        { name: "Figma (Hand-off)", level: "Sólido" },
        { name: "Metodologia Scrum", level: "Aprendendo" },
      ]
    }
  ]
};

const CERTIFICATIONS = [
  { name: "PSM I — Professional Scrum Master", org: "Scrum.org", status: "Em progresso" },
  { name: "PL-300 — Microsoft Power BI", org: "Microsoft", status: "Em progresso" },
  { name: "Google Data Analytics", org: "Google / Coursera", status: "Em progresso" },
];

const LEVEL_STYLE: Record<string, string> = {
  Sólido:      "text-emerald-400 border-emerald-400/30 bg-emerald-400/10",
  Proficiente: "text-[var(--accent)] border-[var(--accent)]/30 bg-[var(--accent)]/10",
  Aprendendo:  "text-amber-400 border-amber-400/30 bg-amber-400/10",
};

export function SkillsSection() {
  const { activeProfile } = useProfile();
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const activeColumns = SKILL_PROFILES[activeProfile as keyof typeof SKILL_PROFILES];

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
            Habilidades técnicas e gerenciais.
          </p>
        </header>

        {/* 4 colunas de skills com Bento Box Aesthetic */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-12">
          <AnimatePresence mode="wait">
            {activeColumns.map((col, ci) => (
              <motion.div
                key={`col-${activeProfile}-${col.id}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ delay: ci * 0.1, duration: 0.35 }}
                className="card card-glow p-6 flex flex-col gap-5"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[var(--bg-3)] border border-[var(--border)] flex items-center justify-center text-[var(--accent)] shadow-sm">
                    {col.icon}
                  </div>
                  <h3 className="font-display font-semibold text-[15px]">{col.title}</h3>
                </div>

                <div className="flex flex-col gap-2 flex-1">
                  {col.skills.map((skill) => (
                    <div
                      key={skill.name}
                      onMouseEnter={() => setHoveredSkill(skill.name)}
                      onMouseLeave={() => setHoveredSkill(null)}
                      className={`flex items-center justify-between py-2.5 px-3 rounded-lg transition-colors cursor-default ${hoveredSkill === skill.name ? 'bg-[var(--bg-3)]' : ''}`}
                    >
                      <span className="text-[13px] text-[var(--text-1)] font-medium">{skill.name}</span>
                      <span className={`font-mono text-[9px] px-2 py-0.5 rounded-full border uppercase tracking-widest ${LEVEL_STYLE[skill.level]}`}>
                        {skill.level}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Certificações em progresso */}
        <div className="border-t border-[var(--border)] pt-10">
          <p className="font-mono text-[10px] uppercase tracking-widest text-[var(--text-3)] mb-6 flex items-center gap-2">
            <ShieldCheck className="w-3.5 h-3.5 text-[var(--text-3)]" />
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
                className="card card-glow p-5 flex items-start gap-4"
              >
                <span className="w-2.5 h-2.5 rounded-full bg-[var(--accent)] animate-pulse mt-1 flex-shrink-0 shadow-[0_0_8px_var(--accent)]" />
                <div>
                  <p className="text-sm font-semibold text-[var(--text-1)] leading-snug">{cert.name}</p>
                  <p className="font-mono text-[10px] text-[var(--text-3)] mt-1.5 uppercase tracking-wide">{cert.org}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
