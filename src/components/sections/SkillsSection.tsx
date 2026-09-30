"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Loader2, MapPin } from "lucide-react";
import { SpotlightWrapper } from "@/components/ui/SpotlightWrapper";

const COMPLETED = [
  "Data Analytics com Power BI — DIO (82h, 2024)",
  "SQL na Prática: problemas reais — UNAERP (6h, 2025)",
  "MongoDB — UNAERP (6h, 2024)",
  "Desenvolvimento de IA do Zero: do Problema ao Modelo — UNAERP (9h, 2026)",
];

const IN_PROGRESS = [
  "PSM I — Professional Scrum Master (Scrum.org)",
  "PL-300 — Microsoft Power BI (Microsoft)",
  "Google Data Analytics (Google/Coursera)",
];

const ROADMAP = [
  { area: "Testes & Qualidade", items: "Jest/Node.js, Automação de Testes de API" },
  { area: "DevOps & Cloud", items: "GitHub Actions/CI-CD, AWS Cloud Practitioner, Docker Foundations" },
  { area: "Processos & Gestão", items: "BPMN, Scrum Fundamentals (SFC™), Gestão de Projetos de TI/ERP" },
  { area: "Dados & Finanças", items: "Engenharia de Dados/ETL, Modelagem Financeira e Valuation" },
];

export function SkillsSection() {
  return (
    <section id="habilidades" className="py-24 border-t border-[var(--border)] overflow-hidden">
      <div className="section-wrap max-w-5xl mx-auto">
        <header className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="section-number">05</span>
            <span className="font-mono text-[10px] uppercase tracking-widest text-[var(--text-3)]">Formação</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight">
            Certificações e <span className="text-[var(--accent)]">estudos.</span>
          </h2>
          <p className="mt-4 text-sm text-[var(--text-2)] max-w-2xl leading-relaxed">
            O que já concluí, o que estou cursando agora e o que pretendo estudar em seguida.
          </p>
        </header>

        <SpotlightWrapper className="w-full rounded-2xl border border-[var(--border)] bg-[var(--bg-2)] relative">
          
          {/* Barra de Progresso Global (Goal Gradient) */}
          <div className="absolute top-0 left-0 w-full h-1 bg-[var(--bg-3)] rounded-t-2xl overflow-hidden">
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: "35%" }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="h-full bg-gradient-to-r from-[var(--accent-2)] to-[var(--accent)]"
            />
          </div>

          <div className="p-6 sm:p-10 grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
            
            {/* CONCLUÍDO */}
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-3 border-b border-[var(--border)] pb-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                <h3 className="font-mono text-xs uppercase tracking-widest font-bold text-[var(--text-1)]">Concluído</h3>
              </div>
              <ul className="flex flex-col gap-4">
                {COMPLETED.map((item, i) => (
                  <motion.li 
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    {/* SVG Path drawing animation */}
                    <div className="shrink-0 mt-0.5">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="text-emerald-500">
                        <motion.path 
                          d="M20 6L9 17l-5-5"
                          initial={{ pathLength: 0 }}
                          whileInView={{ pathLength: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: i * 0.1 + 0.3 }}
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                        />
                      </svg>
                    </div>
                    <span className="text-[13px] leading-relaxed text-[var(--text-2)]">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* EM ANDAMENTO */}
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-3 border-b border-[var(--border)] pb-3">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                >
                  <Loader2 className="w-5 h-5 text-amber-500" />
                </motion.div>
                <h3 className="font-mono text-xs uppercase tracking-widest font-bold text-[var(--text-1)]">Em Andamento</h3>
              </div>
              <ul className="flex flex-col gap-4">
                {IN_PROGRESS.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0 mt-1.5 opacity-50" />
                    <span className="text-[13px] leading-relaxed text-[var(--text-2)]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* PRÓXIMOS PASSOS */}
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-3 border-b border-[var(--border)] pb-3">
                <MapPin className="w-5 h-5 text-[var(--text-3)]" />
                <h3 className="font-mono text-xs uppercase tracking-widest font-bold text-[var(--text-1)]">Roadmap 2026+</h3>
              </div>
              <ul className="flex flex-col gap-5">
                {ROADMAP.map((item, i) => (
                  <li key={i} className="flex flex-col gap-1">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[var(--text-3)]">{item.area}</span>
                    <span className="text-[12px] leading-relaxed text-[var(--text-2)] opacity-80">{item.items}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </SpotlightWrapper>

      </div>
    </section>
  );
}
