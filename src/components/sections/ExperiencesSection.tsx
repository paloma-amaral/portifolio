"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useProfile } from "@/lib/ProfileContext";
import { CLTWidget } from "../widgets/CLTWidget";
import { DadosWidget } from "../widgets/DadosWidget";
import { PJWidget } from "../widgets/PJWidget";

export function ExperiencesSection() {
  const { activeProfile } = useProfile();
  
  // Margin Calculator State
  const [custo, setCusto] = useState(100);
  const [venda, setVenda] = useState(150);
  const lucro = venda - custo;
  const margem = venda > 0 ? ((lucro / venda) * 100).toFixed(1) : "0.0";
  const margemNum = Number(margem);

  const isBusinessVisible = activeProfile === "all" || activeProfile === "clt" || activeProfile === "pj";

  return (
    <section id="experiencias" className="py-24 border-t border-[var(--border)]">
      <div className="section-wrap">
        
        <header className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <span className="section-number">03</span>
              <span className="font-mono text-[10px] uppercase tracking-widest text-[var(--text-2)]">Hands-on</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight">
              A lógica <span className="text-[var(--text-2)]">em ação.</span>
            </h2>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Lado Esquerdo: Demo de Margem (Negócios) */}
          <motion.div 
            animate={{ opacity: isBusinessVisible ? 1 : 0.3, scale: isBusinessVisible ? 1 : 0.98 }}
            className="card p-8 bg-[var(--bg)] flex flex-col relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-4 font-mono text-[10px] text-[var(--accent)] animate-pulse">
              ● Live Widget
            </div>
            
            <h3 className="font-display font-semibold mb-2">Simulador de Margem</h3>
            <p className="font-mono text-xs text-[var(--text-2)] mb-8 max-w-sm">
              Altere os valores abaixo e veja como a lógica de precificação reage em tempo real.
            </p>

            <div className="flex flex-col gap-6 mt-auto">
              <div className="flex items-center justify-between border-b border-[var(--border)] pb-2">
                <label className="font-mono text-xs text-[var(--text-2)]">Custo (R$)</label>
                <input 
                  type="number" 
                  value={custo}
                  onChange={(e) => setCusto(Number(e.target.value))}
                  className="bg-transparent text-right font-mono text-lg font-bold outline-none w-24 text-[var(--text-1)]"
                />
              </div>
              <div className="flex items-center justify-between border-b border-[var(--border)] pb-2">
                <label className="font-mono text-xs text-[var(--text-2)]">Venda (R$)</label>
                <input 
                  type="number" 
                  value={venda}
                  onChange={(e) => setVenda(Number(e.target.value))}
                  className="bg-transparent text-right font-mono text-lg font-bold outline-none w-24 text-[var(--text-1)]"
                />
              </div>

              {/* Barra interativa animada */}
              <div className="mt-4 p-4 border border-[var(--border)] rounded flex flex-col gap-4 bg-[var(--bg-2)] relative overflow-hidden">
                <div className="flex items-center justify-between relative z-10">
                  <span className="font-mono text-xs uppercase tracking-widest text-[var(--text-1)]">Margem Real</span>
                  <motion.span 
                    key={margem}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="font-display font-bold text-2xl text-[var(--text-1)]"
                  >
                    {margem}%
                  </motion.span>
                </div>
                {/* Visual indicator line */}
                <div className="h-1.5 w-full bg-[var(--bg-4)] rounded-full overflow-hidden relative z-10">
                  <motion.div 
                    className="h-full bg-[var(--accent)]"
                    animate={{ width: `${Math.min(Math.max(margemNum, 0), 100)}%` }}
                    transition={{ type: "spring", bounce: 0.2 }}
                  />
                </div>
                
                {/* Glow effect conditionally based on margin */}
                <motion.div 
                  className="absolute inset-0 pointer-events-none opacity-20"
                  animate={{ background: margemNum > 30 ? "linear-gradient(90deg, transparent, var(--accent))" : "linear-gradient(90deg, transparent, #ef4444)" }}
                />
              </div>
            </div>
          </motion.div>

          {/* Lado Direito: Dinâmico baseado no Profile */}
          <div className="card overflow-hidden relative min-h-[400px] flex flex-col max-h-[600px]">
            <AnimatePresence mode="wait">
              {activeProfile === "clt" && (
                <motion.div
                  key="clt"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="flex-1 flex flex-col overflow-y-auto"
                >
                  <CLTWidget />
                </motion.div>
              )}
              
              {activeProfile === "dados" && (
                <motion.div
                  key="dados"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="flex-1 flex flex-col overflow-y-auto"
                >
                  <DadosWidget />
                </motion.div>
              )}

              {activeProfile === "pj" && (
                <motion.div
                  key="pj"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="flex-1 flex flex-col overflow-y-auto"
                >
                  <PJWidget />
                </motion.div>
              )}

              {activeProfile === "all" && (
                <motion.div
                  key="all"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="flex-1 flex flex-col overflow-y-auto gap-4 p-2 bg-[#0a0a0a]"
                >
                  <div className="min-h-[450px] border border-gray-800 rounded-lg overflow-hidden relative">
                    <CLTWidget />
                  </div>
                  <div className="min-h-[450px] border border-gray-800 rounded-lg overflow-hidden relative">
                    <PJWidget />
                  </div>
                  <div className="min-h-[450px] border border-gray-800 rounded-lg overflow-hidden relative">
                    <DadosWidget />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
