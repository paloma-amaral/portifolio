"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useProfile } from "@/lib/ProfileContext";
import type { ProfileType } from "@/lib/ProfileContext";
import { SpotlightWrapper } from "@/components/ui/SpotlightWrapper";

interface Project {
  id: string;
  profiles: ProfileType[];
  title: string;
  business: string;
  method: string;
  result: string;
  tags: string[];
  chart?: "bar" | "line" | "funnel" | "scatter" | "area" | "steps" | "bubble" | "wave" | "gantt";
}

const PROJECTS: Project[] = [
  // --- CLT / Implementação ---
  {
    id: "implantacao-erp",
    profiles: ["clt", "all"],
    title: "Implantação e Parametrização Financeira (ERP)",
    business: "A empresa trocou de sistema e precisava migrar todo o Contas a Pagar/Receber e reconfigurar as regras de fluxo de caixa sem parar a operação.",
    method: "Mapeamento dos processos antigos (As-Is), higienização dos dados financeiros nas planilhas de importação e setup das regras do novo ERP, garantindo que o primeiro fechamento no sistema novo batesse 100%.",
    result: "Transição de sistema concluída sem atraso em pagamentos a fornecedores. O time financeiro passou a confiar no novo ERP desde o dia 1.",
    tags: ["Implantação", "ERP", "Processos", "Financeiro"],
    chart: "gantt"
  },
  {
    id: "saneamento-dados",
    profiles: ["clt", "all"],
    title: "Saneamento de Banco de Dados (Master Data)",
    business: "O sistema de vendas apresentava erros diários de faturamento porque o cadastro de produtos estava poluído (unidades de medida e classificações misturadas).",
    method: "Extração da base completa do ERP para o Excel. Uso de ferramentas de texto e Power Query para padronizar os dados, categorizar corretamente as famílias de produtos e reimportar o cadastro limpo.",
    result: "Fim das inconsistências no caixa. A equipe parou de abrir chamados internos para 'corrigir produto na hora da venda'.",
    tags: ["Dados", "Excel", "Master Data", "Saneamento"],
    chart: "funnel"
  },
  {
    id: "dashboard-fechamento",
    profiles: ["clt", "all"],
    title: "Dashboard de Fechamento Diário de Caixa",
    business: "O fechamento dos caixas físicos era feito anotando valores em papel, o que dificultava a visão consolidada da matriz.",
    method: "Criação de uma planilha inteligente conectada ao relatório do ERP. Os operadores lançam apenas os valores líquidos e o dashboard calcula automaticamente as sobras/faltas diárias de cada loja.",
    result: "Visão executiva em tempo real para a diretoria. Redução no tempo de fechamento e auditoria dos caixas.",
    tags: ["Excel Avançado", "Dashboard", "Caixa"],
    chart: "bar"
  },

  // --- Dados ---
  {
    id: "dashboard-cp",
    profiles: ["dados", "all"],
    title: "Painel de Gestão de Contas a Pagar e Alertas",
    business: "A equipe financeira perdia prazos de boleto e pagava juros porque dependia de uma planilha manual que sempre estava desatualizada.",
    method: "Estruturação de um modelo de dados dinâmico (via Excel Avançado/Power Query) lendo os relatórios extraídos do sistema. Criação de um dashboard com visão diária/semanal e formatação condicional alertando vencimentos.",
    result: "O gestor passou a visualizar todo o fluxo da semana na segunda-feira de manhã. Zero juros pagos por esquecimento.",
    tags: ["Dashboard", "Excel", "Contas a Pagar"],
    chart: "area"
  },
  {
    id: "consolidacao-vendas",
    profiles: ["dados", "all"],
    title: "Consolidação Automática de Dados de Vendas",
    business: "A diretoria queria comparar o faturamento de duas filiais, mas cada uma usava um sistema diferente que gerava relatórios incompatíveis.",
    method: "Desenvolvimento de uma rotina no Power Query que lê os relatórios díspares de uma pasta, limpa as colunas desnecessárias, padroniza as datas e junta tudo em uma única base de dados (Modelo Estrela).",
    result: "O relatório que demorava 2 dias para ser montado 'na mão' passou a ser gerado em 5 minutos apertando o botão 'Atualizar'.",
    tags: ["Power Query", "ETL", "Consolidação"],
    chart: "line"
  },
  {
    id: "dev-web-ia",
    profiles: ["dados", "all"],
    title: "Aplicações Web & Portfólios com IA",
    business: "Empresas e profissionais perdem negócios por não terem uma presença digital forte, mas sofrem com o custo e a lentidão do desenvolvimento tradicional.",
    method: "Criação de Landing Pages de alta conversão e sites institucionais modernos (como este portfólio) usando React e Next.js, potencializados por Inteligência Artificial para codificação rápida, geração de assets e design.",
    result: "Entrega de páginas com design de ponta e altíssimo desempenho em tempo recorde. Forte apelo visual e otimização para captura de leads e oportunidades.",
    tags: ["Web Dev", "Inteligência Artificial", "Next.js", "UI/UX"],
    chart: "scatter"
  },

  // --- PJ / Consultoria ---
  {
    id: "backoffice-adm",
    profiles: ["pj", "all"],
    title: "Estruturação de Backoffice Administrativo",
    business: "Um comércio local cresceu rápido, mas os donos misturavam contas pessoais e da empresa, operando no escuro financeiramente.",
    method: "Mapeamento dos processos (As-Is / To-Be) e implantação de um setup de controles gerenciais focado exclusivamente no fluxo de dinheiro: separação de contas, rotina de aprovação de pagamentos e classificação correta de despesas (Plano de Contas).",
    result: "Em poucas semanas, o cliente tinha clareza do quanto a empresa realmente lucrava e parou de descapitalizar o negócio.",
    tags: ["Consultoria", "Processos", "Backoffice"],
    chart: "bubble"
  },
  {
    id: "markup-calc",
    profiles: ["pj", "all"],
    title: "Ferramenta de Formação de Preço (Mark-up)",
    business: "O lojista vendia bem, mas fechava o mês no vermelho por não repassar o custo das taxas de maquininha e despesas fixas no preço final.",
    method: "Desenvolvimento de uma calculadora financeira em planilha inteligente. O lojista insere o custo de compra, a categoria (para estimar perda/quebra) e a ferramenta cospe o preço mínimo de venda para não ter prejuízo.",
    result: "Aumento imediato da margem de contribuição. O gestor passou a tomar decisões baseadas em dados e não no preço do vizinho.",
    tags: ["Mark-up", "Precificação", "Finanças"],
    chart: "steps"
  },
  {
    id: "automacao-relatorio",
    profiles: ["pj", "all"],
    title: "Automatização de Fechamento Semanal",
    business: "Um gerente perdia metade do sábado compilando e somando manualmente as planilhas de venda e estoque enviadas pelos supervisores.",
    method: "Criação de um template padronizado de preenchimento para as filiais, atrelado a um macro/Power Query que consolida tudo em um único dashboard gerencial instantaneamente.",
    result: "Economia de mais de 4 horas semanais do gerente, devolvendo o final de semana para ele com informações mais precisas.",
    tags: ["Automação", "Processos", "Dashboard"],
    chart: "wave"
  },
  // --- DESENVOLVEDORA ---
  {
    id: "portfolio-moderno",
    profiles: ["dev", "all"],
    title: "Desenvolvimento de Portfólio Moderno",
    business: "Necessidade de um portfólio digital altamente interativo, com arquitetura robusta e performance otimizada, refletindo o perfil técnico e analítico.",
    method: "Aplicação de React e Next.js para renderização eficiente. Uso de Tailwind CSS e Framer Motion para construir interfaces com glassmorphism (vidro fosco) e micro-interações fluidas.",
    result: "Criação de uma experiência imersiva e responsiva. Código limpo, componentizado e modular facilitando manutenções e escalabilidade futura.",
    tags: ["Frontend", "React", "Tailwind CSS"],
    chart: "scatter"
  },
  {
    id: "sistema-interno-ui",
    profiles: ["dev", "all"],
    title: "Interface para Dashboard Gerencial",
    business: "A diretoria precisava visualizar os indicadores financeiros e de vendas em uma plataforma online própria, saindo das planilhas.",
    method: "Construção de uma interface dashboard limpa utilizando React. Consumo de dados via API REST e exibição de dados complexos através de tabelas paginadas e gráficos responsivos.",
    result: "Sistema intuitivo entregue, permitindo que a gestão tome decisões rapidamente baseada em visualização de dados fluida.",
    tags: ["Fullstack", "API", "UI/UX"],
    chart: "area"
  }
];

// --- MINI CHARTS (9 Tipos Únicos) ---

function ChartBar({ data = [40, 70, 50, 90, 100] }) {
  const max = Math.max(...data);
  return (
    <div className="flex items-end gap-1.5 h-16 w-full">
      {data.map((v, i) => (
        <motion.div key={i} initial={{ height: 0 }} animate={{ height: `${(v / max) * 100}%` }} transition={{ delay: i * 0.1, duration: 0.5, ease: "easeOut" }} className="flex-1 rounded-sm" style={{ background: i === data.length - 1 ? "var(--accent)" : "var(--bg-4)" }} />
      ))}
    </div>
  );
}

function ChartLine({ pts = "0,35 25,15 50,25 75,5 100,15" }) {
  return (
    <svg viewBox="0 0 100 40" className="w-full h-16 overflow-visible" preserveAspectRatio="none">
      <motion.polyline initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.2, ease: "easeInOut" }} points={pts} fill="none" stroke="var(--accent)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ChartFunnel({ steps = [100, 75, 50, 25] }) {
  return (
    <div className="flex flex-col justify-center gap-1.5 h-16 w-full">
      {steps.map((w, i) => (
        <motion.div key={i} initial={{ width: 0 }} animate={{ width: `${w}%` }} transition={{ delay: i * 0.15, duration: 0.5 }} className="h-2.5 rounded-sm mx-auto" style={{ background: `hsl(${310 - i * 15}, 30%, ${55 - i * 5}%)` }} />
      ))}
    </div>
  );
}

function ChartScatter() {
  const dots = [{x:10, y:30}, {x:30, y:15}, {x:50, y:25}, {x:70, y:10}, {x:90, y:5}];
  return (
    <svg viewBox="0 0 100 40" className="w-full h-16 overflow-visible">
      {dots.map((d, i) => (
        <motion.circle key={i} initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: i * 0.15, duration: 0.4, type: "spring" }} cx={d.x} cy={d.y} r="3.5" fill="var(--accent)" />
      ))}
      <motion.polyline initial={{ opacity: 0 }} animate={{ opacity: 0.3 }} transition={{ delay: 0.8, duration: 1 }} points="10,30 30,15 50,25 70,10 90,5" fill="none" stroke="var(--accent)" strokeWidth="1" strokeDasharray="2 2" />
    </svg>
  );
}

function ChartArea() {
  return (
    <svg viewBox="0 0 100 40" className="w-full h-16 overflow-visible" preserveAspectRatio="none">
      <motion.path initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} d="M0,40 L0,20 Q25,30 50,15 T100,5 L100,40 Z" fill="var(--accent)" fillOpacity="0.2" />
      <motion.path initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.2 }} d="M0,20 Q25,30 50,15 T100,5" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function ChartSteps() {
  const hBars = [20, 50, 80, 100];
  return (
    <div className="flex flex-col justify-end gap-1.5 h-16 w-full items-start">
      {hBars.map((w, i) => (
        <motion.div key={i} initial={{ width: 0 }} animate={{ width: `${w}%` }} transition={{ delay: i * 0.1, duration: 0.5 }} className="h-2 rounded-sm bg-[var(--bg-4)]" style={{ background: i === hBars.length - 1 ? "var(--accent)" : "var(--bg-4)" }} />
      ))}
    </div>
  );
}

function ChartBubble() {
  const bubbles = [{x:20, y:20, r:8}, {x:50, y:25, r:12}, {x:80, y:15, r:16}];
  return (
    <svg viewBox="0 0 100 40" className="w-full h-16 overflow-visible">
      {bubbles.map((b, i) => (
        <motion.circle key={i} initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: i * 0.2, type: "spring", bounce: 0.5 }} cx={b.x} cy={b.y} r={b.r} fill="var(--accent)" fillOpacity={0.3 + (i * 0.2)} />
      ))}
    </svg>
  );
}

function ChartWave() {
  return (
    <svg viewBox="0 0 100 40" className="w-full h-16 overflow-visible" preserveAspectRatio="none">
      <motion.path initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.5, ease: "easeInOut" }} d="M0,20 C20,5 30,35 50,20 C70,5 80,35 100,20" fill="none" stroke="var(--accent)" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

function ChartGantt() {
  const blocks = [
    { ml: 0, w: 30 },
    { ml: 20, w: 40 },
    { ml: 50, w: 35 },
    { ml: 70, w: 30 }
  ];
  return (
    <div className="flex flex-col justify-center gap-2 h-16 w-full">
      {blocks.map((b, i) => (
        <motion.div key={i} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.15 }} className="h-2 rounded-sm" style={{ marginLeft: `${b.ml}%`, width: `${b.w}%`, background: i === 3 ? "var(--accent)" : "var(--bg-4)" }} />
      ))}
    </div>
  );
}

const CHARTS_MAP: Record<string, any> = {
  bar: ChartBar,
  line: ChartLine,
  funnel: ChartFunnel,
  scatter: ChartScatter,
  area: ChartArea,
  steps: ChartSteps,
  bubble: ChartBubble,
  wave: ChartWave,
  gantt: ChartGantt,
};


export function ProjectsSection() {
  const { activeProfile } = useProfile();
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const visible = PROJECTS.filter(p => p.profiles.includes(activeProfile as ProfileType));

  return (
    <section id="projetos" className="py-24 border-t border-[var(--border)]">
      <div className="section-wrap">

        <header className="mb-14">
          <div className="flex items-center gap-3 mb-4">
            <span className="section-number">02</span>
            <span className="font-mono text-[10px] uppercase tracking-widest text-[var(--text-3)]">Projetos de Impacto</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight">
            Problemas reais. <span className="text-[var(--text-2)]">Resultados reais.</span>
          </h2>
          <p className="mt-4 text-sm text-[var(--text-2)] max-w-lg leading-relaxed">
            Abaixo apresento <strong>Estudos de Caso</strong> — cenários simulados baseados em problemas muito comuns no mercado financeiro e administrativo. 
            Eles demonstram exatamente a minha metodologia e como eu resolvo (ou resolveria) esses gargalos caso chegassem até mim.
          </p>
          
          <div className="mt-6 inline-flex items-center gap-2 bg-[var(--bg-3)] border border-[var(--border)] px-4 py-2 rounded-full shadow-sm">
            <svg className="w-4 h-4 text-[var(--accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            <span className="text-xs font-mono uppercase tracking-widest text-[var(--text-2)] font-bold">Estudos de Caso & Metodologia</span>
          </div>
        </header>

        {/* Grid de projetos com Spotlight */}
        <SpotlightWrapper className="w-full rounded-[var(--radius-md)]">
          <div className="flex flex-nowrap md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 overflow-x-auto snap-x snap-mandatory pb-6 px-1 -mx-1 hide-scrollbar" style={{ scrollPaddingLeft: "5vw" }}>
            <AnimatePresence>
            {visible.map((project, i) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ delay: i * 0.07, duration: 0.4 }}
                onClick={() => setActiveProject(project)}
                className="card p-5 flex flex-col gap-4 cursor-pointer hover:border-[var(--accent)]/50 transition-all hover:-translate-y-0.5 group snap-center flex-shrink-0 w-[85vw] md:w-auto"
              >
                {/* Mini chart */}
                <div className="h-16 opacity-70">
                  {project.chart && CHARTS_MAP[project.chart] && (() => {
                    const Chart = CHARTS_MAP[project.chart];
                    return <Chart />;
                  })()}
                </div>

                {/* Título */}
                <div className="flex-1">
                  <h3 className="font-display font-semibold text-[15px] text-[var(--text-1)] leading-snug mb-2 group-hover:text-[var(--accent)] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-[var(--text-3)] leading-relaxed line-clamp-2">
                    {project.business}
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.slice(0, 3).map(tag => (
                    <span key={tag} className="font-mono text-[9px] text-[var(--text-3)] border border-[var(--border)] px-1.5 py-0.5 rounded">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="text-[10px] font-mono text-[var(--accent)] uppercase tracking-widest">
                  Ver detalhes →
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
          </div>
        </SpotlightWrapper>

      </div>

      {/* Modal de detalhes */}
      <AnimatePresence>
        {activeProject && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveProject(null)}
              className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50"
            />
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.97 }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed inset-4 sm:inset-auto sm:top-1/2 sm:left-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2 sm:w-full sm:max-w-2xl z-50 bg-[var(--bg-2)] border border-[var(--border)] rounded-xl overflow-y-auto max-h-[90vh]"
            >
              <div className="p-6 sm:p-8">
                {/* Header do modal */}
                <div className="flex justify-between items-start mb-6">
                  <span className="font-mono text-[10px] text-[var(--accent)] uppercase tracking-widest">Estudo de Caso</span>
                  <button onClick={() => setActiveProject(null)} className="text-[var(--text-3)] hover:text-[var(--text-1)]">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                      <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                  </button>
                </div>

                <h2 className="font-display font-bold text-xl sm:text-2xl mb-6 text-[var(--text-1)]">
                  {activeProject.title}
                </h2>

                <div className="flex flex-col gap-5">
                  <div>
                    <span className="font-mono text-[9px] text-[#ef4444] uppercase tracking-widest block mb-2">O Problema</span>
                    <p className="text-sm text-[var(--text-2)] leading-relaxed border-l-2 border-[#ef4444]/30 pl-3">{activeProject.business}</p>
                  </div>
                  <div>
                    <span className="font-mono text-[9px] text-amber-400 uppercase tracking-widest block mb-2">A Metodologia</span>
                    <p className="text-sm text-[var(--text-2)] leading-relaxed border-l-2 border-amber-400/30 pl-3">{activeProject.method}</p>
                  </div>
                  <div>
                    <span className="font-mono text-[9px] text-[var(--accent)] uppercase tracking-widest block mb-2">O Resultado</span>
                    <p className="text-sm text-[var(--text-1)] leading-relaxed font-medium border-l-2 border-[var(--accent)]/50 pl-3">{activeProject.result}</p>
                  </div>
                </div>

                {/* Chart no modal */}
                <div className="mt-6 h-24 bg-[var(--bg-3)] rounded-lg p-4 flex items-center justify-center overflow-hidden">
                  <div className="w-full max-w-sm h-16 relative">
                    {activeProject.chart && CHARTS_MAP[activeProject.chart] && (() => {
                      const Chart = CHARTS_MAP[activeProject.chart];
                      return <Chart />;
                    })()}
                  </div>
                </div>

                {/* Tags */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {activeProject.tags.map(tag => (
                    <span key={tag} className="skill-tag text-[10px]">{tag}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
