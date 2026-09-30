"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const SERVICES = [
  { 
    id: "auditoria", 
    title: "Revisão de margem", 
    time: "Único",
    pain: "A empresa vende bem, mas o saldo não acompanha. Normalmente o preço foi formado sem contar taxa de cartão, quebra e custo fixo.",
    solution: "Revisão do cadastro de produtos e do preço por categoria, com a margem real calculada sobre a venda, não sobre o custo."
  },
  { 
    id: "automacao", 
    title: "Automação de rotina", 
    time: "Sob Demanda",
    pain: "Parte da semana da equipe vai para copiar dados entre relatórios e planilhas.",
    solution: "Planilhas com Power Query ou scripts em Python que leem os relatórios e montam a consolidação sozinhos."
  },
  { 
    id: "setup", 
    title: "Controles financeiros", 
    time: "Único",
    pain: "Contas a pagar sem controle de vencimento: juros e multa por esquecimento, e nenhuma visão do que vence na semana.",
    solution: "Rotina de lançamento na chegada, agenda de vencimentos e conciliação do extrato, em planilha ou sistema conforme o tamanho da empresa."
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
          <h3 className="font-display font-semibold text-base mb-1">Horas manuais</h3>
          <p className="text-xs text-[var(--text-2)] leading-relaxed">
            Uma conta simples: quantas horas por semana a equipe gasta em tarefa manual que uma planilha bem montada ou um script faria.
          </p>
        </div>

        <div className="p-3 rounded-lg bg-[var(--bg-3)] border border-[var(--border)]">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="w-2 h-2 rounded-full bg-gray-400" />
            <span className="font-mono text-[10px] text-gray-400 uppercase tracking-widest font-bold">Tarefa manual</span>
          </div>
          <p className="text-xs text-[var(--text-2)] leading-relaxed mb-2">
            Copiar relatório do ERP para o Excel, somar planilha de filial, conferir boleto um a um. É trabalho necessário, mas não precisa ser feito à mão.
          </p>
        </div>

        <div className="p-3 rounded-lg bg-[var(--bg-3)] border border-[var(--border)]">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="w-2 h-2 rounded-full bg-[var(--accent)]" />
            <span className="font-mono text-[10px] text-[var(--accent)] uppercase tracking-widest font-bold">Rotina automatizada</span>
          </div>
          <p className="text-xs text-[var(--text-2)] leading-relaxed mb-2">
            A consolidação passa a ser um botão de atualizar, os vencimentos ficam em uma agenda e a conferência do extrato vira rotina diária de minutos.
          </p>
          <p className="text-[10px] text-[var(--text-3)] mt-1.5 leading-relaxed">
            O tempo que sobra costuma ir para o que só uma pessoa faz: negociar prazo, cobrar cliente, olhar a margem.
          </p>
        </div>

        <div className="p-3 rounded-lg border border-[var(--border-2)] bg-[var(--accent)]/5">
          <span className="font-mono text-[9px] text-[var(--accent)] uppercase tracking-widest block mb-1">Por que importa?</span>
          <p className="text-[10px] text-[var(--text-2)] leading-relaxed">
            20 horas por semana são cerca de 80 horas por mês, meio salário de uma pessoa administrativa. A automação raramente zera isso, mas costuma cortar pela metade.
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
          <p className="text-xs text-gray-400">Informe as horas semanais de tarefa manual e escolha uma frente.</p>
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
                  <span className="text-[9px] uppercase tracking-widest text-[#ef4444] mb-1 block font-bold">Situação comum</span>
                  <p className="text-xs text-[var(--text-2)] leading-relaxed border-l border-[#ef4444]/30 pl-2">
                    {activeService.pain}
                  </p>
                </div>
                
                <div className="mt-auto">
                  <span className="text-[9px] uppercase tracking-widest text-[var(--accent)] mb-1 block font-bold">O que é feito</span>
                  <p className="text-xs text-[var(--text-1)] leading-relaxed border-l border-[var(--accent)]/30 pl-2">
                    {activeService.solution}
                  </p>
                  
                  {/* Info dinâmica baseada no input */}
                  {activeId === 'automacao' && (
                    <div className="mt-3 text-[10px] bg-[var(--accent)]/10 text-[var(--accent)] p-2 rounded border border-[var(--accent)]/20">
                      {horasSemanais}h por semana equivalem a <strong>{diasPerdidos} dias úteis por mês</strong> em tarefa manual.
                    </div>
                  )}
                  {activeId === 'auditoria' && (
                    <div className="mt-3 text-[10px] bg-[var(--accent)]/10 text-[var(--accent)] p-2 rounded border border-[var(--accent)]/20">
                      Em {horasSemanais * 100} vendas por mês, 10% de margem a menos por erro de preço é uma diferença que aparece no fechamento, não no caixa do dia.
                    </div>
                  )}
                  {activeId === 'setup' && (
                    <div className="mt-3 text-[10px] bg-[var(--accent)]/10 text-[var(--accent)] p-2 rounded border border-[var(--accent)]/20">
                      {horasSemanais} boletos pagos com juros por mês já costumam custar mais do que a rotina de controle que evitaria isso.
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
