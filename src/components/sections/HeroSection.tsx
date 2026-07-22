"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useProfile } from "@/lib/ProfileContext";
import { ProfileSelector } from "../layout/ProfileSelector";

const PROFILE_HEADLINES: Record<string, { title: string; sub: string }> = {
  all:   { title: "Do extrato ao insight.", sub: "Operações, dados e tecnologia unificados em uma profissional." },
  clt:   { title: "Processos que não falham.", sub: "Estruturo backoffice financeiro e ERPs para operar com precisão." },
  dados: { title: "Dados que geram decisão.", sub: "Transformo planilhas em painéis executivos que orientam o negócio." },
  pj:    { title: "Sua operação, sem caos.", sub: "Consultoria financeira e automação para negócios que querem crescer." },
};

const COUNTERS = [
  { value: "2+", label: "Anos de Operação Financeira" },
  { value: "100%",  label: "Conciliação Bancária e Fechamento" },
  { value: "4h", label: "Economizadas por Semana (Automação)" },
  { value: "3",  label: "Formações Técnicas" },
];

/* ─── Variantes do container (orquestra os filhos) ─── */
const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.03, delayChildren: 0.04 },
  },
  exit: {
    transition: { staggerChildren: 0.015, staggerDirection: -1 as const },
  },
};

/* ─── Variantes de cada caractere ─── */
const charVariants = {
  hidden: {
    opacity: 0,
    y: 32,
    rotateX: -25,
    filter: "blur(5px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    filter: "blur(0px)",
    transition: { duration: 0.42, ease: "easeOut" as const },
  },
  exit: {
    opacity: 0,
    y: -14,
    filter: "blur(3px)",
    transition: { duration: 0.18, ease: "easeIn" as const },
  },
};

/* ─── Variantes do subtítulo ─── */
const subVariants = {
  hidden: { opacity: 0, y: 12, filter: "blur(2px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.5, delay: 0.38, ease: "easeOut" as const },
  },
  exit: {
    opacity: 0,
    y: -8,
    transition: { duration: 0.15 },
  },
};

/* ─── Divide texto em palavras e espaços, mantendo espaços separados ─── */
function splitWords(text: string): string[] {
  return text.split(/(\s+)/);
}

export function HeroSection() {
  const { activeProfile } = useProfile();
  const { title, sub } = PROFILE_HEADLINES[activeProfile];

  return (
    <section id="inicio" className="relative min-h-[100svh] flex flex-col pt-[88px] md:pt-[104px] pb-24 overflow-hidden">

      {/* Gradiente radial de fundo */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full opacity-[0.07]"
          style={{ background: "radial-gradient(circle, var(--accent) 0%, transparent 65%)" }}
        />
      </div>

      <div className="section-wrap relative z-10 flex-1 flex flex-col justify-center gap-10 w-full my-auto py-8">

        {/* Seletor de perfil */}
        <ProfileSelector />

        {/* Headline principal */}
        <div className="max-w-3xl">

          <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--accent)] mb-4">
            Paloma Amaral · Analista Financeiro &amp; Operações
          </p>

          {/* Título — animação stagger por letra, com perspectiva 3D sutil */}
          <h1
            className="font-display font-bold text-[2.6rem] sm:text-6xl lg:text-[5rem] leading-[1.05] tracking-tight mb-5 text-[var(--text-1)]"
            style={{ perspective: "700px" }}
            aria-label={title}
          >
            <AnimatePresence mode="wait">
              <motion.span
                key={`title-${activeProfile}`}
                className="inline"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                aria-hidden="true"
              >
                {splitWords(title).map((segment, wi) =>
                  /* Espaços: preservar sem animar */
                  segment.match(/^\s+$/) ? (
                    <span key={`space-${wi}`}>{segment}</span>
                  ) : (
                    /* Palavra: cada letra anima individualmente */
                    <span key={`word-${wi}`} className="inline-block whitespace-nowrap">
                      {segment.split("").map((char, ci) => (
                        <motion.span
                          key={`char-${wi}-${ci}`}
                          className="inline-block"
                          variants={charVariants}
                        >
                          {char}
                        </motion.span>
                      ))}
                    </span>
                  )
                )}
                {/* Cursor piscando no final */}
                <span className="cursor-blink" aria-hidden="true" />
              </motion.span>
            </AnimatePresence>
          </h1>

          {/* Subtítulo — fade independente, aparece após o título */}
          <AnimatePresence mode="wait">
            <motion.p
              key={`sub-${activeProfile}`}
              variants={subVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="text-base text-[var(--text-2)] leading-relaxed max-w-md mb-8"
            >
              {sub}
            </motion.p>
          </AnimatePresence>

          <div className="flex flex-col sm:flex-row gap-3">
            <a href="/curriculo" className="btn-primary">Ver Currículo</a>
            <a href="#showcase" className="btn-secondary">Ver Projetos</a>
          </div>
        </div>

        {/* Counters */}
        <div className="border-t border-[var(--border)] pt-8 grid grid-cols-2 sm:grid-cols-4 gap-6">
          {COUNTERS.map((c, i) => (
            <motion.div
              key={c.label}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + i * 0.1, duration: 0.4 }}
              className="flex flex-col gap-1"
            >
              <span className="font-display font-bold text-2xl sm:text-3xl text-[var(--accent)]">{c.value}</span>
              <span className="font-mono text-[9px] uppercase tracking-widest text-[var(--text-3)] leading-tight">{c.label}</span>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Indicador de scroll */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <span className="font-mono text-[9px] uppercase tracking-widest text-[var(--text-3)]">scroll</span>
        <motion.div
          animate={{ y: [0, 4, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="w-px h-6 bg-[var(--text-3)]"
        />
      </div>

    </section>
  );
}
