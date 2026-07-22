"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const SERVICES = [
  { 
    id: "auditoria", 
    title: "Auditoria de Margem", 
    time: "Único",
    pain: "Você fatura alto, mas a conta bancária não cresce. Onde está vazando dinheiro?",
    solution: "Análise de cadastro. Correção de mark-up para proteger a margem de lucro real da sua operação."
  },
  { 
    id: "automacao", 
    title: "Automação Operacional", 
    time: "Sob Demanda",
    pain: "Seus funcionários perdem o dia inteiro copiando e colando dados no Excel.",
    solution: "Planilhas com fórmulas avançadas e automações em Python que rodam rotinas em segundos."
  },
  { 
    id: "setup", 
    title: "Estruturação Financeira", 
    time: "Único",
    pain: "Descontrole total de Contas a Pagar. Pagamento de juros e multas por esquecimento.",
    solution: "Implementação de um fluxo de caixa cego, com processo claro de conciliação bancária diária."
  }
];

export function PJWidget() {
  const [activeId, setActiveId] = useState<string>("automacao");
  const [horasSemanais, setHorasSemanais] = useState<number>(10);
  
  const activeService = SERVICES.find(s => s.id === activeId);

  // Calcula horas mensais perdidas
  const horasMensais = horasSemanais * 4;
  const diasPerdidos = (horasMensais / 8).toFixed(1);

  return (
    <div className="flex flex-col lg:flex-row h-full min-h-0 gap-0">
      
      {/* ── Painel Esquerdo: Conceitos ── */}
      <div className="lg:w-[46%] flex flex-col gap-4 p-5 lg:p-6 border-b lg:border-b-0 lg:border-r border-[var(--border)] overflow-y-auto bg-[var(--bg)]">
        <div>
          <span className="font-mono text-[9px] text-[var(--accent)] uppercase tracking-[0.18em] block mb-2">O que é</span>
          <h3 className="font-display font-semibold text-base mb-1">O Custo da Desorganização</h3>
          <p className="text-xs text-[var(--text-2)] leading-relaxed">
            Muitas empresas focam apenas em vender mais, esquecendo que processos ruins custam mais caro que a própria mercadoria.
          </p>
        </div>

        <div className="p-3 rounded-lg bg-[var(--bg-3)] border border-[var(--border)]">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="w-2 h-2 rounded-full bg-gray-400" />
            <span className="font-mono text-[10px] text-gray-400 uppercase tracking-widest font-bold">Tempo Perdido (Excel)</span>
          </div>
          <p className="text-xs text-[var(--text-2)] leading-relaxed mb-2">
            Quando funcionários qualificados passam dias copiando dados entre planilhas, a empresa perde dinheiro duas vezes: pagando salário para trabalho de robô e deixando de gerar inteligência.
          </p>
        </div>

        <div className="p-3 rounded-lg bg-[var(--bg-3)] border border-[var(--border)]">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="w-2 h-2 rounded-full bg-[var(--accent)]" />
            <span className="font-mono text-[10px] text-[var(--accent)] uppercase tracking-widest font-bold">Backoffice Lucrativo</span>
          </div>
          <p className="text-xs text-[var(--text-2)] leading-relaxed mb-2">
            Automações financeiras garantem que 100% das notas sejam cobradas, 0% de juros sejam pagos por atraso e a conciliação bata todos os dias.
          </p>
          <p className="text-[10px] text-[var(--text-3)] mt-1.5 leading-relaxed">
            ✓ O backoffice deixa de ser um "centro de custo" e passa a proteger o lucro.
          </p>
        </div>

        <div className="p-3 rounded-lg border border-[var(--border-2)] bg-[var(--accent)]/5">
          <span className="font-mono text-[9px] text-[var(--accent)] uppercase tracking-widest block mb-1">Por que importa?</span>
          <p className="text-[10px] text-[var(--text-2)] leading-relaxed">
            Se você poupa 20 horas por semana da sua equipe com um sistema novo, você ganhou quase 1000 horas no ano para focar em crescimento real.
          </p>
        </div>
      </div>

      {/* ── Painel Direito: Simulador interativo ── */}
      <div className="flex-1 flex flex-col p-5 lg:p-6 gap-4 min-h-0 relative font-mono select-none bg-[var(--bg)]">
        <div className="absolute top-0 right-0 p-4 text-[10px] text-[var(--text-3)] uppercase tracking-widest hidden lg:block">
          Serviços B2B
        </div>
        
        <div>
          <span className="font-mono text-[9px] text-[var(--accent)] uppercase tracking-[0.18em] block mb-1">Simule agora</span>
          <p className="text-xs text-gray-400">Descubra o impacto de uma consultoria direcionada.</p>
        </div>

        {/* Input de Simulação */}
        <div className="mb-4 flex items-center justify-between border-b border-[var(--border)] pb-2 max-w-[280px]">
          <label className="text-[10px] text-[var(--accent)] uppercase tracking-widest font-bold">Horas manuais / semana</label>
          <input 
            type="number" 
            value={horasSemanais}
            onChange={(e) => setHorasSemanais(Number(e.target.value))}
            className="bg-[var(--bg-2)] border border-[var(--border)] rounded px-2 py-1 text-right text-sm text-[var(--text-1)] w-16 outline-none focus:border-[var(--accent)]"
          />
        </div>

        {/* Tabs */}
        <div className="flex flex-col gap-2 mb-4">
          {SERVICES.map(srv => (
            <button
              key={srv.id}
              onClick={() => setActiveId(srv.id)}
              className={`relative flex items-center justify-between p-3 rounded-lg border text-left transition-colors ${activeId === srv.id ? 'bg-[var(--bg-4)] border-[var(--border)]' : 'bg-[var(--bg-2)] border-transparent hover:border-[var(--border)]'}`}
            >
              {activeId === srv.id && (
                <motion.div 
                  layoutId="pj-active-tab"
                  className="absolute inset-0 border-l-2 border-[var(--accent)] rounded-lg" 
                />
              )}
              <span className={`relative z-10 text-xs font-bold ${activeId === srv.id ? 'text-[var(--text-1)]' : 'text-[var(--text-2)]'}`}>
                {srv.title}
              </span>
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="flex-1 bg-[var(--bg-2)] border border-[var(--border)] rounded-lg p-4 relative overflow-hidden min-h-[160px] flex flex-col">
          <AnimatePresence mode="wait">
            {activeService && (
              <motion.div
                key={activeService.id}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                className="flex flex-col gap-3 h-full"
              >
                <div>
                  <span className="text-[9px] uppercase tracking-widest text-[#ef4444] mb-1 block font-bold">O Problema Real</span>
                  <p className="text-xs text-[var(--text-2)] leading-relaxed border-l border-[#ef4444]/30 pl-2">
                    {activeService.pain}
                  </p>
                </div>
                
                <div className="mt-auto">
                  <span className="text-[9px] uppercase tracking-widest text-[var(--accent)] mb-1 block font-bold">A Entrega (Valor)</span>
                  <p className="text-xs text-[var(--text-1)] leading-relaxed border-l border-[var(--accent)]/30 pl-2">
                    {activeService.solution}
                  </p>
                  
                  {/* Info dinâmica baseada no input */}
                  {activeId === 'automacao' && (
                    <div className="mt-3 text-[10px] bg-[var(--accent)]/10 text-[var(--accent)] p-2 rounded border border-[var(--accent)]/20">
                      Sua equipe perde <strong>{diasPerdidos} dias úteis por mês</strong> no Excel. Automação reduz isso a quase zero.
                    </div>
                  )}
                  {activeId === 'auditoria' && (
                    <div className="mt-3 text-[10px] bg-[var(--accent)]/10 text-[var(--accent)] p-2 rounded border border-[var(--accent)]/20">
                      Se você vende {horasSemanais * 100} produtos/mês com 10% a menos de margem, o prejuízo anual é gigantesco.
                    </div>
                  )}
                  {activeId === 'setup' && (
                    <div className="mt-3 text-[10px] bg-[var(--accent)]/10 text-[var(--accent)] p-2 rounded border border-[var(--accent)]/20">
                      Pagando apenas {horasSemanais} boletos com multa por mês, o setup financeiro se paga sozinho.
                    </div>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </div>
  );
}
