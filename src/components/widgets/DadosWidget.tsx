"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export function DadosWidget() {
  const [volume, setVolume] = useState<number>(500);
  const [isProcessed, setIsProcessed] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleProcess = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setIsProcessed(true);
    }, 1200);
  };

  const handleReset = () => {
    setIsProcessed(false);
  };

  // Cálculos dinâmicos baseados no input
  const tarifaBancariaMedia = 0.50; // 50 centavos por transação de prejuízo invisível
  const receitaMedia = 150; // R$ 150 por transação
  
  const prejuizoInvisivel = volume * tarifaBancariaMedia;
  const receitaTotal = volume * receitaMedia;

  return (
    <div className="flex flex-col lg:flex-row h-full min-h-0 gap-0">
      
      {/* ── Painel Esquerdo: Conceitos ── */}
      <div className="lg:w-[46%] flex flex-col gap-4 p-5 lg:p-6 border-b lg:border-b-0 lg:border-r border-[var(--border)] overflow-y-auto bg-[var(--bg)]">
        <div>
          <span className="font-mono text-[9px] text-[var(--accent)] uppercase tracking-[0.18em] block mb-2">O que é</span>
          <h3 className="font-display font-semibold text-base mb-1">Engenharia de Dados (Básico)</h3>
          <p className="text-xs text-[var(--text-2)] leading-relaxed">
            Dados crus gerados pela empresa não têm valor até serem limpos, traduzidos e cruzados com a conta bancária.
          </p>
        </div>

        <div className="p-3 rounded-lg bg-[var(--bg-3)] border border-[var(--border)]">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="w-2 h-2 rounded-full bg-gray-400" />
            <span className="font-mono text-[10px] text-gray-400 uppercase tracking-widest font-bold">Dado Bruto (Caos)</span>
          </div>
          <p className="text-xs text-[var(--text-2)] leading-relaxed mb-2">
            Arquivos ilegíveis de maquininhas, boletos pendentes, relatórios do sistema que não conversam com o banco.
          </p>
          <div className="font-mono text-[9px] text-gray-500 bg-black/20 rounded p-2 overflow-hidden text-ellipsis whitespace-nowrap">
            20250612;98412;150.00;PGTO;PENDING
          </div>
        </div>

        <div className="p-3 rounded-lg bg-[var(--bg-3)] border border-[var(--border)]">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="w-2 h-2 rounded-full bg-[var(--accent)]" />
            <span className="font-mono text-[10px] text-[var(--accent)] uppercase tracking-widest font-bold">Dado Tratado (Python)</span>
          </div>
          <p className="text-xs text-[var(--text-2)] leading-relaxed mb-2">
            Um script em Python (ou ferramentas de BI) automatiza a leitura, limpeza e cruzamento diário desses arquivos.
          </p>
          <p className="text-[10px] text-[var(--text-3)] mt-1.5 leading-relaxed">
            ✓ Um clique resolve o que a equipe levava 4 horas copiando e colando no Excel.
          </p>
        </div>

        <div className="p-3 rounded-lg border border-[var(--border-2)] bg-[var(--accent)]/5">
          <span className="font-mono text-[9px] text-[var(--accent)] uppercase tracking-widest block mb-1">Por que importa?</span>
          <p className="text-[10px] text-[var(--text-2)] leading-relaxed">
            A conciliação manual esconde fraudes, falhas em contratos com o banco (taxas abusivas) e pagamentos retidos que você não percebeu.
          </p>
        </div>
      </div>

      {/* ── Painel Direito: Simulador interativo ── */}
      <div className="flex-1 flex flex-col p-5 lg:p-6 gap-4 min-h-0 relative font-mono select-none bg-black/[0.02] dark:bg-[#0a0a0a]">
        <div className="absolute top-0 right-0 p-4 text-[10px] text-[var(--accent)] animate-pulse uppercase tracking-widest hidden lg:block">
          ● Python / IA
        </div>
        
        <div>
          <span className="font-mono text-[9px] text-[var(--accent)] uppercase tracking-[0.18em] block mb-1">Simule agora</span>
          <p className="text-xs text-gray-600 dark:text-gray-400">Insira um volume de transações mensais e traduza os dados.</p>
        </div>

        {/* Input Section */}
        <div className="mb-4 flex items-center justify-between border-b border-[var(--border)] pb-2 max-w-[280px]">
          <label className="text-[10px] text-gray-600 dark:text-gray-400 uppercase tracking-widest">Transações/Mês</label>
          <input 
            type="number" 
            value={volume}
            onChange={(e) => setVolume(Number(e.target.value))}
            disabled={isProcessed || isProcessing}
            className="bg-transparent border border-[var(--border)] rounded px-2 py-1 text-right text-sm text-gray-900 dark:text-white w-20 outline-none focus:border-[var(--accent)]"
          />
        </div>

        {/* Main Interactive Area */}
        <div className="flex-1 border border-[var(--border)] bg-white dark:bg-[#111111] shadow-sm dark:shadow-none rounded-lg relative overflow-hidden flex flex-col min-h-[220px]">
          
          <AnimatePresence mode="wait">
            {!isProcessed && !isProcessing && (
              <motion.div
                key="chaos"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, filter: "blur(4px)" }}
                className="absolute inset-0 p-4 overflow-hidden"
              >
                <div className="text-[8px] text-gray-600 leading-tight whitespace-pre opacity-50">
                  {`DATE;TXN_ID;VAL;DESC;STATUS;CNPJ;RAW\n20250612;98412;150.00;PGTO BOLETO;PENDING;48.123;XXX\n20250612;98413;-45.20;TARIFA TED;CLEARED;NULL;YYY\n20250612;98414;3400.00;REC CLIENTE;CLEARED;12.444;ZZZ\n20250613;98415;-120.00;FORNECEDOR X;PENDING;55.111;AAA`}
                </div>
                <div className="absolute inset-0 flex items-center justify-center bg-black/60 backdrop-blur-[1px]">
                  <button 
                    onClick={handleProcess}
                    className="bg-[var(--accent)] text-black px-4 py-2 rounded text-xs font-bold shadow-[0_0_15px_var(--accent)] hover:scale-105 transition-transform"
                  >
                    Traduzir Dados Brutos
                  </button>
                </div>
              </motion.div>
            )}

            {isProcessing && (
              <motion.div
                key="processing"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-white/80 dark:bg-[#111111]/80 backdrop-blur-sm"
              >
                <span className="w-5 h-5 border-2 border-[var(--accent)] border-t-transparent rounded-full animate-spin" />
                <span className="text-[10px] text-[var(--accent)]">Cruzando Extratos via Script...</span>
              </motion.div>
            )}

            {isProcessed && !isProcessing && (
              <motion.div
                key="insights"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="absolute inset-0 p-5 bg-white dark:bg-[#161616] flex flex-col gap-4 overflow-y-auto"
              >
                <div className="flex justify-between items-center border-b border-[var(--border)] pb-2">
                  <span className="text-[10px] font-bold text-gray-900 dark:text-white uppercase tracking-wider">Dashboard Executivo</span>
                  <button onClick={handleReset} className="text-[9px] text-gray-500 hover:text-gray-900 dark:hover:text-white underline">
                    Tentar Novo Valor
                  </button>
                </div>
                
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-black/30 p-2 rounded border border-[var(--border)]">
                    <span className="block text-[8px] text-gray-500 uppercase mb-1">Receita Processada</span>
                    <span className="block text-sm font-bold text-green-400">
                      {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(receitaTotal)}
                    </span>
                  </div>
                  <div className="bg-black/30 p-2 rounded border border-red-900/30">
                    <span className="block text-[8px] text-red-400 uppercase mb-1">Prejuízo Oculto Detectado</span>
                    <span className="block text-sm font-bold text-red-500">
                      - {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(prejuizoInvisivel)}
                    </span>
                  </div>
                </div>

                <div className="mt-auto">
                  <span className="text-[9px] text-[var(--accent)] uppercase font-bold mb-1 block">Ação Recomendada (IA)</span>
                  <ul className="text-[10px] text-gray-300 space-y-1.5 list-disc ml-3 font-sans">
                    <li>O banco cobrou indevidamente tarifas em {volume} transações. Solicitar estorno imediato.</li>
                    <li>Script automatizado reduziu o tempo de fechamento em 95%.</li>
                  </ul>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </div>
    </div>
  );
}
