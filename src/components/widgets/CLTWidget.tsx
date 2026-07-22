"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const BOTTLENECKS = [
  { 
    id: "vendas", 
    label: "Vendas / PDV", 
    issue: "Descontos aplicados sem regra sistêmica e falhas no mark-up.",
    solution: "Parametrização de margem de lucro mínima no ERP.",
    lossPercent: 0.05 // 5% do faturamento
  },
  { 
    id: "estoque", 
    label: "Estoque", 
    issue: "Baixas sem nota fiscal e produtos 'perdidos'.",
    solution: "Fluxo sistêmico de bloqueio: só sai com NF-e validada.",
    lossPercent: 0.03 // 3%
  },
  { 
    id: "financeiro", 
    label: "Contas a Pagar", 
    issue: "Juros por atraso (DARFs) e pagamentos em duplicidade.",
    solution: "Conciliação DDA rigorosa e relatórios de fluxo de caixa limpos.",
    lossPercent: 0.02 // 2%
  },
];

export function CLTWidget() {
  const [hovered, setHovered] = useState<string | null>(null);
  const [faturamentoMensal, setFaturamentoMensal] = useState<number>(100000);

  return (
      <div className="flex flex-col lg:flex-row h-full min-h-0 gap-0">
        
        {/* ── Painel Esquerdo: Conceitos ── */}
        <div className="lg:w-[46%] flex flex-col gap-4 p-5 lg:p-6 border-b lg:border-b-0 lg:border-r border-[var(--border)] overflow-y-auto bg-[var(--bg)]">
          <div>
            <span className="font-mono text-[9px] text-[var(--accent)] uppercase tracking-[0.18em] block mb-2">O que é</span>
            <h3 className="font-display font-semibold text-base mb-1">Mapa de Gargalos</h3>
            <p className="text-xs text-[var(--text-2)] leading-relaxed">
              Onde as empresas perdem dinheiro sem saber? O vazamento silencioso no caixa pode devorar sua margem de lucro inteira.
            </p>
          </div>

          <div className="p-3 rounded-lg bg-[var(--bg-3)] border border-[var(--border)]">
            <div className="flex items-center gap-2 mb-1.5">
              <span className="w-2 h-2 rounded-full bg-[#ef4444]" />
              <span className="font-mono text-[10px] text-[#ef4444] uppercase tracking-widest font-bold">Prejuízo Invisível</span>
            </div>
            <p className="text-xs text-[var(--text-2)] leading-relaxed mb-2">
              Custos gerados por falha de processo (ex: descontos indevidos, produtos perdidos sem NF, multas e juros por esquecimento).
            </p>
            <p className="text-[10px] text-[var(--text-3)] mt-1.5 leading-relaxed">
              ⚠ Eles não aparecem de forma clara no DRE, mas corroem o dinheiro do mês.
            </p>
          </div>

          <div className="p-3 rounded-lg bg-[var(--bg-3)] border border-[var(--border)]">
            <div className="flex items-center gap-2 mb-1.5">
              <span className="w-2 h-2 rounded-full bg-[var(--accent)]" />
              <span className="font-mono text-[10px] text-[var(--accent)] uppercase tracking-widest font-bold">Processo Mapeado</span>
            </div>
            <p className="text-xs text-[var(--text-2)] leading-relaxed mb-2">
              Criar travas sistêmicas no ERP e conciliações automáticas que impedem o erro humano antes que ele custe dinheiro.
            </p>
            <p className="text-[10px] text-[var(--text-3)] mt-1.5 leading-relaxed">
              ✓ Soluções de prateleira muitas vezes não cobrem a cultura real da empresa.
            </p>
          </div>

          <div className="p-3 rounded-lg border border-[var(--border-2)] bg-[var(--accent)]/5">
            <span className="font-mono text-[9px] text-[var(--accent)] uppercase tracking-widest block mb-1">Por que importa?</span>
            <p className="text-[10px] text-[var(--text-2)] leading-relaxed">
              Uma empresa de R$ 100k/mês com 10% de furos no processo está rasgando <strong>R$ 120.000,00</strong> por ano.
            </p>
          </div>
        </div>

        {/* ── Painel Direito: Simulador interativo ── */}
        <div className="flex-1 flex flex-col p-5 lg:p-6 gap-4 min-h-0 relative font-mono select-none bg-black/[0.02] dark:bg-[#111311]">
          <div className="absolute top-0 right-0 p-4 text-[10px] text-[var(--text-3)] uppercase tracking-widest hidden lg:block">
            Operações Internas
          </div>
          
          <div>
            <span className="font-mono text-[9px] text-[var(--accent)] uppercase tracking-[0.18em] block mb-1">Simule agora</span>
            <p className="text-xs text-gray-600 dark:text-gray-400">Insira um faturamento e descubra o prejuízo estimado em cada área.</p>
          </div>

          {/* Input de Simulação */}
          <div className="mb-4 flex items-center justify-between border-b border-black/10 dark:border-gray-800 pb-2 max-w-[300px]">
            <label className="text-[10px] text-[var(--accent)] uppercase tracking-widest font-bold">Faturamento (R$)</label>
            <input 
              type="number" 
              step="10000"
              value={faturamentoMensal}
              onChange={(e) => setFaturamentoMensal(Number(e.target.value))}
              className="bg-[var(--bg)] border border-black/20 dark:border-gray-800 rounded px-2 py-1 text-right text-sm text-[var(--text-1)] w-28 outline-none focus:border-[var(--accent)]"
            />
          </div>

          <div className="flex-1 flex flex-col justify-center gap-4 relative pl-4 mt-2">
            
            {/* Linha conectora de fundo */}
            <div className="absolute left-6 top-6 bottom-6 w-[1px] bg-black/10 dark:bg-gray-800 z-0" />

            {BOTTLENECKS.map((node) => {
              const isHovered = hovered === node.id;
              const lossValue = faturamentoMensal * node.lossPercent;
              
              return (
                <div 
                  key={node.id} 
                  className="relative z-10 flex items-start gap-4 cursor-crosshair group"
                  onMouseEnter={() => setHovered(node.id)}
                  onMouseLeave={() => setHovered(null)}
                >
                  <motion.div 
                    className={`mt-1 w-4 h-4 rounded-full border-2 flex-shrink-0 transition-colors duration-300 ${isHovered ? 'bg-[var(--accent)] border-[var(--accent)] shadow-[0_0_10px_var(--accent)]' : 'bg-[#ef4444] border-[#ef4444] group-hover:animate-none animate-pulse'}`}
                  />
                  
                  <div className="flex-1 bg-white dark:bg-[#1a1c1a] shadow-sm dark:shadow-none border border-black/10 dark:border-gray-800 rounded p-3 transition-colors hover:border-[var(--accent)]">
                    <div className="flex justify-between items-center mb-1">
                      <span className="block font-bold text-xs text-gray-800 dark:text-gray-300">
                        {node.label}
                      </span>
                      {!isHovered && (
                        <span className="text-[10px] text-[#ef4444] font-bold">
                          -{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 }).format(lossValue)}
                        </span>
                      )}
                    </div>
                    
                    {isHovered ? (
                      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                        <span className="text-[10px] font-bold text-[var(--accent)] uppercase tracking-widest block mb-1">✓ Solução Implantada</span>
                        <span className="text-[11px] text-gray-700 dark:text-gray-400 font-sans leading-tight block mb-2">
                          {node.solution}
                        </span>
                        <div className="text-[9px] bg-[var(--accent)]/10 text-[var(--accent)] p-1.5 rounded inline-block border border-[var(--accent)]/20 font-sans">
                          Risco Mitigado: <strong>+{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 }).format(lossValue)}/mês</strong> no caixa.
                        </div>
                      </motion.div>
                    ) : (
                      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                        <span className="text-[10px] font-bold text-[#ef4444] uppercase tracking-widest block mb-1">⚠ Prejuízo Oculto</span>
                        <span className="text-[11px] text-gray-600 dark:text-gray-500 font-sans leading-tight">
                          {node.issue}
                        </span>
                      </motion.div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
  );
}
