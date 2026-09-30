import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Currículo | Paloma Amaral",
  description: "Currículo de Paloma Amaral - Analista Financeiro e Operações",
};

export default function CurriculoPage() {
  return (
    <div className="min-h-screen bg-[#e5e5e5] dark:bg-[#0c0c0b] py-12 px-4 md:py-20 font-serif text-gray-900 selection:bg-gray-300">
      
      {/* Top Bar with actions */}
      <div className="max-w-[800px] mx-auto flex items-center justify-between mb-8 font-sans">
        <Link href="/" className="text-sm font-bold uppercase tracking-widest text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors">
          &larr; Voltar
        </Link>
        <a 
          href="/curriculo.pdf" 
          download
          className="bg-gray-900 dark:bg-white text-white dark:text-black px-4 py-2 text-xs font-bold uppercase tracking-wider flex items-center gap-2 border border-gray-900 dark:border-white"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" y1="15" x2="12" y2="3" />
          </svg>
          Baixar PDF
        </a>
      </div>

      {/* A4 Paper Canvas (Classic Word Style) */}
      <div className="max-w-[800px] mx-auto bg-white min-h-[1131px] shadow-lg p-10 md:p-16 flex flex-col gap-8 text-black">
        
        {/* Header Section */}
        <header className="border-b-2 border-black pb-6 mb-6 flex flex-col sm:flex-row items-center sm:items-start justify-between gap-6">
          <div className="flex-1 text-center sm:text-left">
            <h1 className="text-4xl font-bold uppercase tracking-wide mb-2 font-sans text-black">Paloma Amaral</h1>
            <p className="text-sm text-gray-800 mb-3 font-sans font-semibold uppercase tracking-wider">Analista Financeira · Operações e Sistemas</p>
            <div className="flex flex-col sm:flex-row gap-1 sm:gap-4 text-xs text-gray-600 font-sans">
              <span className="flex items-center justify-center sm:justify-start gap-1">
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                Pitangueiras, SP (Remoto)
              </span>
              <span className="hidden sm:inline">|</span>
              <span className="flex items-center justify-center sm:justify-start gap-1">
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                (16) 98872-5256
              </span>
              <span className="hidden sm:inline">|</span>
              <span className="flex items-center justify-center sm:justify-start gap-1">
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                palomadias028@gmail.com
              </span>
            </div>
          </div>
          <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border-4 border-gray-100 shadow-sm shrink-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/paloma.png" alt="Paloma Amaral" className="w-full h-full object-cover grayscale" />
          </div>
        </header>

        {/* Resumo Profissional */}
        <section>
          <h2 className="text-sm font-bold uppercase tracking-widest border-b border-gray-300 pb-1 mb-3 font-sans text-black">Resumo Profissional</h2>
          <p className="text-[13px] leading-relaxed text-justify">
            Três anos de rotina financeira em varejo e serviços: contas a pagar e receber, conciliação bancária, conferência de caixa, NF-e, folha e fechamento mensal. Hoje atendo um grupo de oito CNPJs e desenvolvi o sistema web (Next.js, PostgreSQL) que sustenta essa rotina. Uso Excel, SQL e Python para tratar dados e montar relatórios. Estudante de Engenharia de Software (UNAERP), com projetos em React, NestJS e Prisma.
          </p>
        </section>

        {/* Experiência Profissional */}
        <section>
          <h2 className="text-sm font-bold uppercase tracking-widest border-b border-gray-300 pb-1 mb-4 font-sans text-black">Experiência Profissional</h2>
          
          <div className="flex flex-col gap-6">
            <div>
              <div className="flex justify-between items-baseline mb-1">
                <h3 className="font-bold text-[14px] text-black">Analista Financeira (consultoria)</h3>
                <span className="text-xs font-sans text-gray-600">06/2025 – Atual</span>
              </div>
              <p className="text-[13px] italic mb-2 text-gray-800">EcoService, Empório Hortifrutti, LGC Gás, Eco Caroni</p>
              <ul className="text-[13px] list-disc list-inside space-y-1.5 text-justify">
                <li>Contas a pagar e receber de um grupo de oito CNPJs: lançamento, aprovação, baixa e controle de vencimentos, evitando juros e pagamentos em duplicidade.</li>
                <li>Conciliação bancária linha a linha de todas as contas do grupo, incluindo pagamentos feitos diretamente pelos sócios; emissão e validação de NF-e.</li>
                <li>Conferência diária de caixa por PDV, relatório de maquininhas (bruto e líquido), folha de pagamento e apuração de empréstimos entre empresas (contrato mútuo).</li>
                <li>Fechamento mensal por empresa, com relatório gerencial e analítico (margem por produto, concentração de clientes, provisão de folha e impostos).</li>
                <li>Desenvolvimento do sistema financeiro usado pela equipe (Next.js, Supabase/PostgreSQL), em uso pela equipe desde agosto de 2026 e em evolução contínua, com documentação das regras de negócio.</li>
                <li>Elaboração e revisão de contratos de prestação de serviços com fornecedores.</li>
              </ul>
            </div>

            <div>
              <div className="flex justify-between items-baseline mb-1">
                <h3 className="font-bold text-[14px] text-black">Assistente Administrativa</h3>
                <span className="text-xs font-sans text-gray-600">06/2022 – 12/2023</span>
              </div>
              <p className="text-[13px] italic mb-2 text-gray-800">Empório Hortifrutti & Armazém das Bebidas LTDA</p>
              <ul className="text-[13px] list-disc list-inside space-y-1.5 text-justify">
                <li>Rotina financeira de varejo com alto volume diário: conferência de caixas, sangrias e conciliação de cartões.</li>
                <li>Precificação de produtos (markup) e acompanhamento de margem por categoria.</li>
                <li>Cadastros de clientes, fornecedores e produtos no ERP de vendas, incluindo padronização da base de produtos.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Habilidades e Conhecimentos */}
        <section>
          <h2 className="text-sm font-bold uppercase tracking-widest border-b border-gray-300 pb-1 mb-3 font-sans text-black">Habilidades e Conhecimentos Técnicos</h2>
          <ul className="text-[13px] list-disc list-inside space-y-1.5">
            <li><strong>Financeiro:</strong> contas a pagar e receber, conciliação bancária, conferência de caixa, fluxo de caixa, precificação, folha, fechamento mensal, contrato mútuo.</li>
            <li><strong>Dados:</strong> Excel avançado e Power Query, SQL (PostgreSQL), Python (Pandas), Power BI.</li>
            <li><strong>Fiscal:</strong> emissão de NF-e e NFS-e, rotinas de faturamento e apuração de tributos.</li>
            <li><strong>Desenvolvimento:</strong> Next.js, React, TypeScript, NestJS, Prisma, Supabase, Tailwind; VBA para ferramentas em Excel; Git/GitHub e deploy no Vercel; uso de assistentes de IA no desenvolvimento, com especificação e revisão próprias.</li>
          </ul>
        </section>

        {/* Formação Acadêmica */}
        <section>
          <h2 className="text-sm font-bold uppercase tracking-widest border-b border-gray-300 pb-1 mb-3 font-sans text-black">Formação Acadêmica e Certificações</h2>
          <div className="flex flex-col gap-2 text-[13px]">
            <div className="flex justify-between">
              <span><strong>Engenharia de Software</strong> - Universidade de Ribeirão Preto (UNAERP)</span>
              <span>2024 - 2027</span>
            </div>
            <div className="flex justify-between">
              <span><strong>Técnico em Administração</strong> - ETEC Professor Idio Zucchi</span>
              <span>Concluído (06/2022)</span>
            </div>
            <div className="flex justify-between">
              <span><strong>Técnico em Desenvolvimento de Sistemas</strong> - ETEC Professor Idio Zucchi</span>
              <span>Concluído (07/2020)</span>
            </div>
            <div className="mt-2 text-gray-600 italic">
              * Certificações em andamento (2026): PSM I (Scrum), PL-300 (Power BI), Google Data Analytics.
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
