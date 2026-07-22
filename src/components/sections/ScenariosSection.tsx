"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useProfile } from "@/lib/ProfileContext";

const SCENARIOS = [
  {
    id: "s1",
    profileMatch: ["all"],
    tag: "Perfil Híbrido",
    question: "Desenvolvedora, analista financeira ou consultora: qual é o seu foco principal?",
    answer: "Meu foco é a interseção entre essas áreas. Eu entendo a operação do negócio por dentro, desde rotinas administrativas até o fechamento de caixa, e uso a tecnologia para estruturar isso. Não escrevo apenas o código de um sistema; eu analiso a rotina administrativa e desenvolvo ou configuro a ferramenta exata para fazer a operação rodar de forma organizada."
  },
  {
    id: "s2",
    profileMatch: ["dados", "clt", "all"],
    tag: "E-commerce & Vendas",
    question: "Como você aplica a análise de dados no dia a dia financeiro e de vendas online?",
    answer: "Utilizo ferramentas como Python, SQL e Power BI para transformar números de vendas e movimentações financeiras em informações claras. Meu objetivo é aplicar essa análise em e-commerces e varejos, ajudando o negócio a entender o giro de estoque, o ticket médio e para onde o dinheiro está indo, apoiando decisões baseadas em dados reais, e não em suposições."
  },
  {
    id: "s3",
    profileMatch: ["pj", "all"],
    tag: "Soluções Digitais",
    question: "Que tipo de soluções você cria para digitalizar pequenos comércios e eventos?",
    answer: "Atuo desenhando e implementando sistemas que tiram o negócio do analógico. Isso inclui desde catálogos digitais interativos para lojistas (onde o cliente visualiza estoques atualizados e reserva itens para retirada) até soluções para bares e eventos, integrando agendamentos, entrada em listas VIP e compra de ingressos. O objetivo é modernizar o atendimento e centralizar o caixa."
  },
  {
    id: "s4",
    profileMatch: ["clt", "all"],
    tag: "Implantação & Processos",
    question: "Como você lida com a resistência da equipe ao implantar um novo sistema ou processo?",
    answer: "A tecnologia só funciona se as pessoas a comprarem. Em qualquer implantação de ERP ou novo processo, o maior desafio não é o software, é a cultura. Por vir da operação diária, eu sei falar a língua de quem está no caixa, no financeiro ou no estoque. Meu foco é provar que a automação não vai complicar a rotina, mas sim tirar o peso das tarefas braçais e manuais."
  },
  {
    id: "s5",
    profileMatch: ["all"],
    tag: "Diferencial de Mercado",
    question: "Afinal, por que uma empresa deve valorizar a união entre Desenvolvimento Web e Administração?",
    answer: "Porque as empresas sofrem com um abismo de comunicação: o setor de tecnologia constrói sistemas que a operação não consegue usar, e o financeiro usa planilhas porque a tecnologia não entende as regras de negócio. Seja criando uma Landing Page, desenvolvendo um painel de dados ou estruturando o fluxo de caixa, eu não entrego apenas código; eu entrego uma infraestrutura desenhada exclusivamente para proteger e escalar o lucro."
  }
];

export function ScenariosSection() {
  const { activeProfile } = useProfile();
  const [openId, setOpenId] = useState<string | null>("s1");

  const visibleScenarios = activeProfile === "all"
    ? SCENARIOS
    : SCENARIOS.filter(s => s.profileMatch.includes(activeProfile));

  // Garante que pelo menos 1 esteja aberto se trocar de perfil
  if (!visibleScenarios.find(s => s.id === openId) && visibleScenarios.length > 0) {
    setOpenId(visibleScenarios[0].id);
  }

  return (
    <section id="metodo" className="py-24 border-t border-[var(--border)]">
      <div className="section-wrap max-w-4xl mx-auto">
        
        <header className="mb-12 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="section-number">05</span>
            <span className="font-mono text-[10px] uppercase tracking-widest text-[var(--text-3)]">Autoridade & Método</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight">
            Como eu <span className="text-[var(--accent)]">penso.</span>
          </h2>
          <p className="mt-4 text-sm text-[var(--text-2)] max-w-2xl mx-auto leading-relaxed">
            Mais do que dominar ferramentas, meu diferencial está na forma de conectar problemas reais a soluções lógicas.
          </p>
        </header>

        <div className="flex flex-col gap-4">
          {visibleScenarios.map((scenario) => {
            const isOpen = openId === scenario.id;

            return (
              <div 
                key={scenario.id}
                className={`border border-[var(--border)] rounded-2xl overflow-hidden transition-colors duration-300 ${isOpen ? 'bg-[var(--bg-2)] border-[var(--border-2)]' : 'bg-[var(--bg)] hover:bg-[var(--bg-2)]'}`}
              >
                <button
                  onClick={() => setOpenId(isOpen ? null : scenario.id)}
                  className="w-full text-left px-6 py-6 flex items-start gap-4 focus:outline-none"
                >
                  <div className={`mt-1 font-mono text-[10px] uppercase tracking-widest transition-colors ${isOpen ? 'text-[var(--accent)]' : 'text-[var(--text-3)]'}`}>
                    Q.
                  </div>
                  <div className="flex-1">
                    <span className="inline-block px-2 py-0.5 rounded text-[8px] uppercase tracking-widest bg-[var(--bg-3)] text-[var(--text-2)] mb-3">
                      {scenario.tag}
                    </span>
                    <h3 className={`font-display font-bold text-lg md:text-xl leading-tight transition-colors ${isOpen ? 'text-[var(--text-1)]' : 'text-[var(--text-2)]'}`}>
                      {scenario.question}
                    </h3>
                  </div>
                  <div className={`transform transition-transform duration-300 mt-1 ${isOpen ? 'rotate-180' : ''}`}>
                    <svg className="w-5 h-5 text-[var(--text-3)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 pt-2 ml-7 border-t border-[var(--border)] border-opacity-50 mt-2">
                        <div className="flex gap-4 items-start">
                           <div className="mt-1 font-mono text-[10px] uppercase tracking-widest text-[var(--text-3)]">
                            R.
                          </div>
                          <p className="text-sm text-[var(--text-1)] leading-relaxed">
                            {scenario.answer}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
