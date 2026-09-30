"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useProfile } from "@/lib/ProfileContext";
import { SpotlightWrapper } from "@/components/ui/SpotlightWrapper";
import { Expander } from "@/components/ui/Expander";

const SCENARIOS = [
  {
    id: "s1",
    profileMatch: ["all", "dev"],
    tag: "Perfil",
    question: "Financeiro, dados ou desenvolvimento: qual é o seu foco?",
    answer: "Financeiro é o que faço todos os dias; desenvolvimento é como resolvo o que a rotina pede. O sistema que uso para fechar o mês de oito empresas fui eu que construí, e a ordem das telas segue a ordem em que o trabalho acontece. Dados é o meio-campo: garantir que o número da tela vem da fonte certa."
  },
  {
    id: "s2",
    profileMatch: ["dados", "clt", "all"],
    tag: "Fechamento",
    question: "Por que o valor vendido e o valor recebido nunca são iguais?",
    answer: "Porque vêm de fontes e de momentos diferentes. A venda nasce no caixa; o dinheiro do cartão cai no banco dias depois, líquido de taxa; o fiado atravessa meses. Numa loja, tratar o crédito do extrato como receita conta a venda duas vezes. Numa prestadora de serviço, ignorá-lo apaga o faturamento. Boa parte do meu trabalho é deixar essas regras explícitas para que o relatório não dependa de quem o montou."
  },
  {
    id: "s3",
    profileMatch: ["pj", "all"],
    tag: "Consultoria",
    question: "O que uma empresa pequena ganha ao chamar você?",
    answer: "Um roteiro. Começo pelo que já existe (caderno, planilha, extrato) e monto controles que a equipe consegue manter: plano de contas simples, fluxo de caixa, preço formado a partir do custo e das taxas. Só sugiro ferramenta quando a rotina está definida; antes disso, a ferramenta vira mais uma planilha abandonada."
  },
  {
    id: "s4",
    profileMatch: ["clt", "all"],
    tag: "Implantação",
    question: "Como você lida com a resistência da equipe a um sistema novo?",
    answer: "Sento ao lado de quem vai usar. A tela de conferência de caixa, por exemplo, foi desenhada junto com quem fecha o caixa e ficou na ordem em que a pessoa conta o dinheiro. Quando a ferramenta economiza tempo de quem lança, a adoção acontece sem precisar convencer ninguém."
  },
  {
    id: "s5",
    profileMatch: ["all", "dev"],
    tag: "Sistemas",
    question: "Por que desenvolver um sistema em vez de comprar um pronto?",
    answer: "Na maioria dos casos, comprar é a resposta certa. No grupo que atendo o problema era específico: oito CNPJs com a mesma equipe, dinheiro circulando entre eles e regras de faturamento diferentes por tipo de empresa. Nenhum ERP resolvia isso sem planilha paralela. Conhecer a rotina por dentro e saber programar deixou o custo de fazer sob medida menor que o de adaptar."
  },
  {
    id: "s7",
    profileMatch: ["all", "dev", "dados"],
    tag: "IA",
    question: "Você usa IA para programar? O que fica com você?",
    answer: "Uso, e bastante: para escrever código mais rápido, revisar e documentar. O que fica comigo é o que a IA não tem como saber: como o faturamento de uma loja com PDV difere do de uma prestadora de serviço, por que um crédito no extrato pode ser uma venda já contada, o que é empréstimo entre empresas. Eu escrevo essas regras antes, confiro o cálculo depois e decido que dado não sai da empresa."
  },
  {
    id: "s6",
    profileMatch: ["dev"],
    tag: "Frontend",
    question: "Como você trabalha no frontend quando a API ainda não existe?",
    answer: "Com dados de exemplo e o contrato da API combinado antes. Construo as telas, os estados de carregamento e as validações contra esse contrato, e troco pelo endpoint real quando ele fica pronto. Foi assim no sistema de ordens de serviço: o frontend ficou pronto com a documentação do backend escrita, antes da API existir."
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
        
        <motion.header 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-12 text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="section-number">03</span>
            <span className="font-mono text-[10px] uppercase tracking-widest text-[var(--text-3)]">Método</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight">
            Como eu <span className="text-[var(--accent)]">trabalho.</span>
          </h2>
          <p className="mt-4 text-sm text-[var(--text-2)] max-w-2xl mx-auto leading-relaxed">
            Perguntas que costumam aparecer em entrevista, respondidas com exemplos do dia a dia.
          </p>
        </motion.header>

        <Expander buttonText="Ver as respostas" buttonTextExpanded="Esconder respostas">
          <SpotlightWrapper className="w-full rounded-2xl">
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
          </SpotlightWrapper>
        </Expander>

      </div>
    </section>
  );
}
