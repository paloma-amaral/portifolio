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
            <p className="text-sm text-gray-800 mb-3 font-sans font-semibold uppercase tracking-wider">Analista Administrativo e Financeiro</p>
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
            Profissional com sólida experiência em operações administrativas e financeiras (B2B), destacando-se na estruturação completa do ciclo de Contas a Pagar/Receber, faturamento e conciliação bancária de alto volume. Especialista em mitigar prejuízos operacionais através de auditorias de margem e parametrização de ERPs. Estudante de Engenharia de Software, combino o domínio de processos de negócio com ferramentas analíticas (SQL, Power BI, Excel Avançado) e automações (Python) para proteger o fluxo de caixa, eliminar tarefas repetitivas e gerar relatórios executivos precisos para a alta gestão.
          </p>
        </section>

        {/* Experiência Profissional */}
        <section>
          <h2 className="text-sm font-bold uppercase tracking-widest border-b border-gray-300 pb-1 mb-4 font-sans text-black">Experiência Profissional</h2>
          
          <div className="flex flex-col gap-6">
            <div>
              <div className="flex justify-between items-baseline mb-1">
                <h3 className="font-bold text-[14px] text-black">Analista Administrativo e Financeiro (Consultoria PJ)</h3>
                <span className="text-xs font-sans text-gray-600">06/2025 – Atual</span>
              </div>
              <p className="text-[13px] italic mb-2 text-gray-800">EcoService, Empório Hortifrutti, LGC Gás, Eco Caroni</p>
              <ul className="text-[13px] list-disc list-inside space-y-1.5 text-justify">
                <li>Gerenciamento end-to-end do fluxo financeiro, com foco na estruturação do **Contas a Pagar**, prevenindo perdas com juros (DARFs) e pagamentos em duplicidade.</li>
                <li>Execução de conciliação bancária cruzando DDA e sistemas internos, além de emissão e validação em lote de Notas Fiscais Eletrônicas (NF-e).</li>
                <li>Desenvolvimento e revisão de contratos de prestação de serviços, assegurando mitigação de riscos jurídicos na contratação de fornecedores.</li>
                <li>Modernização do backoffice via implantação de rotinas em planilhas inteligentes e automações lógicas, otimizando o fechamento de relatórios operacionais.</li>
              </ul>
            </div>

            <div>
              <div className="flex justify-between items-baseline mb-1">
                <h3 className="font-bold text-[14px] text-black">Assistente Administrativa</h3>
                <span className="text-xs font-sans text-gray-600">06/2022 – 12/2023</span>
              </div>
              <p className="text-[13px] italic mb-2 text-gray-800">Empório Hortifrutti & Armazém das Bebidas LTDA</p>
              <ul className="text-[13px] list-disc list-inside space-y-1.5 text-justify">
                <li>Execução primária de rotinas financeiras de varejo com alto volume diário, conferência de caixas, sangrias e conciliação sistêmica de cartões.</li>
                <li>Atuação estratégica na precificação de produtos (Cálculo de Mark-up) e monitoramento de margem de lucro por categoria, sustentando a operação comercial.</li>
                <li>Gestão de banco de dados e cadastros (Master Data) de clientes, fornecedores e produtos para o ERP de vendas.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Habilidades e Conhecimentos */}
        <section>
          <h2 className="text-sm font-bold uppercase tracking-widest border-b border-gray-300 pb-1 mb-3 font-sans text-black">Habilidades e Conhecimentos Técnicos</h2>
          <ul className="text-[13px] list-disc list-inside space-y-1.5">
            <li><strong>Operações Financeiras:</strong> Conciliação Bancária Avançada, Fluxo de Caixa, Precificação, DDA, Contas a Pagar/Receber.</li>
            <li><strong>Inteligência de Dados:</strong> Power BI, SQL (PostgreSQL), Python (Pandas/Matplotlib), Excel Avançado.</li>
            <li><strong>Gestão Fiscal:</strong> Emissão de NF-e, apuração e rotinas de faturamento corporativo.</li>
            <li><strong>Desenvolvimento:</strong> Conhecimento prático em Next.js, HTML/CSS, Lógica de Programação, Python (Scripts de automação).</li>
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
