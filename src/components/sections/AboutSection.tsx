"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useProfile } from "@/lib/ProfileContext";

const ABOUT_CONTENT = {
  all: {
    headline: "Entre o financeiro e o código.",
    description: "Trabalho há três anos com rotina financeira de varejo e serviços: contas a pagar, conciliação, caixa, folha e fechamento. Em paralelo, curso Engenharia de Software e construo os sistemas que uso nesse trabalho. O principal deles gerencia o financeiro de um grupo com oito CNPJs.",
    features: [
      { number: "01", title: "Rotina financeira", desc: "Contas a pagar e receber, conciliação bancária, conferência de caixa, NF-e, folha e fechamento mensal. É o que faço todos os dias, para mais de uma empresa ao mesmo tempo." },
      { number: "02", title: "Dados e relatórios", desc: "Organizo os números que saem do ERP, das maquininhas e do extrato em bases que batem entre si, e monto os relatórios de fechamento a partir delas (Excel, SQL, Python)." },
      { number: "03", title: "Sistemas e IA", desc: "Desenvolvo em Next.js, React e PostgreSQL, com assistentes de IA como apoio no código. O que a IA não faz por mim é o que mais importa: saber qual é a regra de negócio, se o número está certo e qual dado não pode sair da empresa." }
    ]
  },
  clt: {
    headline: "Backoffice financeiro, todos os dias.",
    description: "Cuido do ciclo financeiro completo de várias empresas ao mesmo tempo: o que entra, o que sai e o que precisa bater. Trabalho com ERP, extrato bancário, relatório de maquininhas e caixa físico, e conheço as diferenças entre cada um.",
    features: [
      { number: "01", title: "Contas a pagar e conciliação", desc: "Lançamento, aprovação e baixa de contas. Conciliação do extrato linha a linha, incluindo pagamentos feitos direto pelos sócios que não passaram pelo financeiro." },
      { number: "02", title: "Caixa e faturamento", desc: "Conferência diária de caixa por PDV e turno, relatório de maquininhas com bruto e líquido, e a separação entre o que foi vendido e o que foi recebido." },
      { number: "03", title: "Fechamento mensal", desc: "Ordem de fechamento (conciliação, caixa, cartões, produtos, resultado), relatório gerencial por empresa e apuração dos empréstimos entre empresas do grupo." }
    ]
  },
  dados: {
    headline: "Cada número tem uma fonte.",
    description: "Num fechamento, cada valor vem de um lugar diferente: ERP, caixa, maquininha, extrato. Meu trabalho é fazer essas fontes conversarem e mostrar o resultado de um jeito que a gestão consegue ler sem precisar de quem montou a planilha.",
    features: [
      { number: "01", title: "Tratamento de dados", desc: "Extração de relatórios do ERP e das adquirentes, limpeza e padronização no Excel, Power Query e Python (Pandas)." },
      { number: "02", title: "SQL e modelagem", desc: "Modelagem de tabelas no PostgreSQL (Supabase) para contas, vendas, caixa e folha, com as consultas que alimentam os relatórios do sistema." },
      { number: "03", title: "Relatórios", desc: "Fechamento mensal, fechamento analítico, receita em 12 meses, margem por produto e curva ABC. Power BI para painéis, ExcelJS para exportação." }
    ]
  },
  pj: {
    headline: "Organização financeira para quem está estruturando.",
    description: "Atendo empresas pequenas que ainda controlam o financeiro na planilha ou no caderno. Começo mapeando a rotina, depois monto os controles e, quando faz sentido, uma ferramenta simples para sustentar o processo.",
    features: [
      { number: "01", title: "Diagnóstico da rotina", desc: "Levantamento de como o dinheiro entra e sai hoje: contas, prazos, formas de pagamento e o que está misturado com a conta pessoal." },
      { number: "02", title: "Controles e precificação", desc: "Plano de contas, fluxo de caixa e formação de preço com custo, taxas e margem. Ferramenta em Excel/VBA ou sistema web, conforme o tamanho da operação." },
      { number: "03", title: "Rotina de fechamento", desc: "Um roteiro mensal que a empresa consegue seguir sem depender de mim: o que conferir, em que ordem e como ler o resultado." }
    ]
  },
  dev: {
    headline: "Sistemas construídos a partir da rotina.",
    description: "Desenvolvo aplicações web em Next.js, React, NestJS e PostgreSQL. Meu maior projeto é o sistema financeiro que uso no dia a dia para gerir um grupo de empresas. Os outros vão de catálogo de atacado com pedido no WhatsApp a gestão de ordens de serviço.",
    features: [
      { number: "01", title: "Frontend", desc: "React e Next.js (App Router, Server Components), Tailwind e Framer Motion. Interfaces para quem lança dado o dia inteiro: teclado, tabelas e conferência rápida." },
      { number: "02", title: "Backend e dados", desc: "NestJS, Prisma e Supabase (RLS, storage, pg_cron). Autenticação com JWT, jobs agendados, exportação para Excel, backup e log de auditoria." },
      { number: "03", title: "Trabalho com IA", desc: "Uso assistentes de IA no dia a dia de desenvolvimento e sei onde eles erram: regra de negócio, cálculo financeiro e dado sensível. Esses três eu especifico, confiro e testo antes de qualquer tela ir para a equipe." }
    ]
  }
};

export function AboutSection() {
  const { activeProfile } = useProfile();
  const content = ABOUT_CONTENT[activeProfile as keyof typeof ABOUT_CONTENT];

  return (
    <section id="sobre" className="py-24 border-t border-[var(--border)] overflow-hidden">
      <div className="section-wrap">
        
        <header className="flex flex-col lg:flex-row lg:items-center justify-between gap-12 mb-16">
          <div className="flex-1">
            <div className="flex items-center gap-4 mb-6">
              <span className="section-number">01</span>
              <span className="font-mono text-[10px] uppercase tracking-widest text-[var(--text-2)]">Quem Sou</span>
            </div>
            
            <AnimatePresence mode="wait">
              <motion.div
                key={`about-head-${activeProfile}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
              >
                <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-6">
                  {content.headline.split('.').map((part, index, array) => (
                    <span key={index} className={index === array.length - 2 ? "text-[var(--text-2)]" : ""}>
                      {part}{index < array.length - 1 && "."}
                      <br className={index === 0 ? "block" : "hidden"} />
                    </span>
                  ))}
                </h2>
                <p className="max-w-lg text-sm text-[var(--text-2)] leading-relaxed">
                  {content.description}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative lg:w-[320px] shrink-0 hidden md:block"
          >
            {/* Elemento de decoração de fundo */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[var(--accent)] to-transparent opacity-20 blur-2xl rounded-full" />
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-[var(--border)] shadow-2xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src="/images/paloma.png" 
                alt="Paloma Amaral" 
                className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </motion.div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <AnimatePresence mode="wait">
            {content.features.map((feat, i) => (
              <motion.div
                key={`feat-${activeProfile}-${i}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3, delay: i * 0.1 }}
                className="card card-glow p-6 md:p-8 flex flex-col gap-4"
              >
                <span className="font-mono text-[10px] text-[var(--accent)] mb-2">{feat.number}</span>
                <h3 className="font-display font-semibold text-lg">{feat.title}</h3>
                <p className="text-sm text-[var(--text-2)] leading-relaxed">
                  {feat.desc}
                </p>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
