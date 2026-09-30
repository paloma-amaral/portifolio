"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useProfile } from "@/lib/ProfileContext";
import { ProfileSelector } from "../layout/ProfileSelector";

const PROFILE_HEADLINES: Record<string, { title: string; sub: string }> = {
  all:   { title: "Financeiro, operação e código.", sub: "Cuido da rotina financeira de um grupo de empresas e construo os sistemas que essa rotina usa." },
  clt:   { title: "Rotina financeira em dia.", sub: "Contas a pagar, conciliação bancária, conferência de caixa e fechamento mensal, hoje para oito CNPJs." },
  dados: { title: "Números que batem entre as fontes.", sub: "Organizo dados de ERP, caixa, maquininha e extrato em bases que conferem e relatórios que a gestão consegue ler." },
  pj:    { title: "Financeiro em ordem para empresas pequenas.", sub: "Controles, precificação e rotina de fechamento para negócios que ainda operam na planilha." },
  dev:   { title: "Sistemas feitos a partir da rotina.", sub: "Aplicações web em Next.js, React, NestJS e PostgreSQL, desenhadas por quem também usa as telas todo dia." },
};

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

        {/* Container Flex para alinhar texto à esquerda e animação à direita */}
        <div className="flex flex-col lg:flex-row justify-between items-center w-full gap-12">
          
          {/* Headline principal (Esquerda) */}
          <div className="max-w-3xl relative z-10 w-full">

          <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--accent)] mb-4">
            Paloma Amaral · Financeiro, Operações e Sistemas
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
              className="text-base text-[var(--text-2)] leading-relaxed max-w-md mb-6"
            >
              {sub}
            </motion.p>
          </AnimatePresence>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="text-[11px] font-mono uppercase tracking-widest text-[var(--text-3)] mb-8 max-w-md border-l-2 border-[var(--accent)] pl-4"
          >
            Consultoria financeira para 4 empresas · Sistema financeiro próprio, em uso e em evolução · Engenharia de Software (UNAERP)
          </motion.p>

          <div className="flex flex-col sm:flex-row gap-3">
            <a href="/curriculo" className="btn-primary">Ver Currículo</a>
            <a href="#showcase" className="btn-secondary">Ver Projetos</a>
          </div>
        </div>

        {/* Decoração Visual: Planilha / Dados (Direita) */}
        <div className="w-full max-w-[350px] shrink-0 hidden lg:flex flex-col gap-3 opacity-[0.25] pointer-events-none select-none z-0" aria-hidden="true">
          <div className="flex gap-2 mb-2">
            {[1, 2, 3, 4].map(i => (
              <div key={`header-${i}`} className="h-2.5 w-full bg-[var(--text-1)] rounded-sm opacity-50" />
            ))}
          </div>
          {[...Array(6)].map((_, rowIndex) => (
            <div key={`row-${rowIndex}`} className="flex gap-2 items-center">
              {[...Array(4)].map((_, colIndex) => {
                const randomDelay = (rowIndex * 0.5 + colIndex * 0.2) % 3;
                const randomDuration = 2 + (rowIndex % 2);
                
                return (
                  <motion.div
                    key={`cell-${rowIndex}-${colIndex}`}
                    className="h-5 w-full rounded border border-[var(--text-1)] relative overflow-hidden"
                    animate={{ 
                      backgroundColor: ["transparent", "var(--text-1)", "transparent"],
                      opacity: [0.1, 0.4, 0.1]
                    }}
                    transition={{ 
                      duration: randomDuration + 2, 
                      repeat: Infinity, 
                      delay: randomDelay 
                    }}
                  >
                    <motion.div 
                      className="absolute inset-0 bg-[var(--accent)]"
                      animate={{ x: ["-100%", "100%", "100%"] }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: randomDelay,
                        ease: "easeInOut"
                      }}
                    />
                  </motion.div>
                );
              })}
            </div>
          ))}
          <div className="mt-4 border-t border-[var(--text-1)] pt-4 flex justify-between">
            <div className="h-3 w-1/3 bg-[var(--text-1)] rounded opacity-40" />
            <motion.div 
              className="h-3 bg-[var(--accent)] rounded" 
              animate={{ width: ["20%", "40%", "25%", "45%"] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </div>
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
