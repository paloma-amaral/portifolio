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
  // --- Financeiro & Operações ---
  {
    id: "sistema-caroni",
    profiles: ["clt", "all"],
    title: "Sistema financeiro para um grupo de oito CNPJs",
    business: "O escritório financeiro do grupo administra oito empresas com a mesma equipe: duas lojas com PDV, prestadoras de serviço, frota e imóveis. Dinheiro circula entre elas todo dia e o controle em planilha não mostrava, no fim do mês, quem financiou quem.",
    method: "Primeiro escrevi as regras: de onde vem o faturamento de cada tipo de empresa, o que é empréstimo entre empresas e o que não é, em que ordem o mês fecha. Depois construí o sistema em Next.js e Supabase, módulo a módulo: contas a pagar, conciliação bancária, conferência de caixa, contrato mútuo, folha, frota, agenda e fechamento. Usei assistentes de IA como apoio no código; as regras de negócio e a conferência dos cálculos são minhas.",
    result: "Em uso pela equipe desde agosto de 2026 e ainda em evolução. O fechamento de cada empresa passou a sair com todas as fontes conferidas e com a apuração automática dos empréstimos entre empresas.",
    tags: ["Next.js", "Supabase", "Financeiro", "Fechamento"],
    chart: "gantt"
  },
  {
    id: "conciliacao-bancaria",
    profiles: ["clt", "all"],
    title: "Conciliação bancária como portão do fechamento",
    business: "Os sócios pagam contas direto pelo banco sem avisar o financeiro. Qualquer relatório de custo feito antes de conferir o extrato mostrava a empresa gastando menos do que gastava.",
    method: "Importação do extrato de cada conta, tabela de-para para classificar lançamentos recorrentes e conferência linha a linha contra as contas a pagar. O fechamento só libera os números depois que o mês está conciliado.",
    result: "Contas a pagar completas antes do fechamento, e um relatório que sinaliza quando ainda existe mês sem conciliação.",
    tags: ["Conciliação", "Extrato", "PostgreSQL"],
    chart: "steps"
  },
  {
    id: "conferencia-caixa",
    profiles: ["clt", "all"],
    title: "Conferência de caixa e faturamento por PDV",
    business: "Nas lojas a venda nasce no caixa, e o crédito que cai no banco é a maquininha liquidando uma venda já contada. Somar os dois inflava o faturamento; ignorar um deles apagava parte.",
    method: "Conferência diária por caixa e turno, com dinheiro, cartão, PIX e fiado separados. Relatório das maquininhas com bruto e líquido. Cruzamento com a relação de produtos vendidos exportada do ERP.",
    result: "Faturamento bruto e líquido saindo de fontes definidas, sem dupla contagem, e sobras e faltas por operador de caixa.",
    tags: ["Caixa", "Maquininhas", "ERP"],
    chart: "bar"
  },

  // --- Análise de Dados ---
  {
    id: "fechamento-analitico",
    profiles: ["dados", "all"],
    title: "Fechamento analítico por empresa",
    business: "O fechamento padrão traz os números. A gestão precisava também de leitura: por que o mês ficou pior, qual cliente concentra a receita, quanto guardar por dia para folha e imposto.",
    method: "Cálculos sobre as mesmas tabelas do fechamento: margem por produto contra uma referência de mercado, concentração de clientes e fornecedores, provisão diária de folha e tributos e comparação com o mês anterior.",
    result: "Dois relatórios por empresa: um só com dados e conferências, outro com a análise. A leitura do mês deixou de depender de quem montou a planilha.",
    tags: ["SQL", "Relatórios", "Margem"],
    chart: "line"
  },
  {
    id: "cadastro-produtos",
    profiles: ["dados", "all"],
    title: "Padronização de cadastro de produtos para o ERP",
    business: "Cadastros com unidade, categoria e nome inconsistentes geravam erro na hora da venda e impediam qualquer análise por família de produto.",
    method: "Extração completa da base, padronização no Excel e Power Query (unidade, categoria, nome canônico) e reimportação no ERP. Inclui a migração de um catálogo de vestuário para o Bling.",
    result: "Base única e limpa. Margem e curva ABC por categoria passaram a ser possíveis.",
    tags: ["Excel", "Power Query", "Master Data"],
    chart: "scatter"
  },
  {
    id: "leads-python",
    profiles: ["dados", "all"],
    title: "Coleta de leads B2B com Python",
    business: "Uma empresa precisava de uma base de prospecção em Goiânia, separada por nicho e com telefone válido, sem comprar lista pronta.",
    method: "Script em Python consultando OpenStreetMap e Google Places, com uma regra fixa: nenhum telefone é inferido, só entra número cadastrado pelo próprio estabelecimento. Saída em Excel com uma aba por nicho e uma de metodologia.",
    result: "120 leads verificados na primeira rodada, sem custo de API. Base menor que a meta, mas sem número inventado.",
    tags: ["Python", "Automação", "Excel"],
    chart: "funnel"
  },

  // --- Consultoria ---
  {
    id: "mini-erp-vba",
    profiles: ["pj", "all"],
    title: "Mini-ERP em Excel/VBA para uma oficina",
    business: "Uma empresa pequena de bicicletas elétricas controlava vendas, despesas e ordens de serviço em folhas soltas, sem fechamento mensal.",
    method: "Planilha estruturada com formulários em VBA para vendas, despesas e OS, macros de fechamento e um guia de implantação para o próprio dono montar e manter.",
    result: "Primeiro fechamento mensal formal da empresa, feito na ferramenta que o dono já usava.",
    tags: ["Excel", "VBA", "Fechamento"],
    chart: "area"
  },
  {
    id: "formacao-preco",
    profiles: ["pj", "all"],
    title: "Formação de preço para varejo",
    business: "Lojistas que definem preço olhando o concorrente e não percebem que taxa de maquininha, quebra e custo fixo consomem a margem.",
    method: "Calculadora de preço mínimo a partir do custo, das taxas por forma de pagamento e da margem desejada, com a diferença entre markup e margem explicada na própria ferramenta.",
    result: "Preço definido a partir do custo real. Uma versão simplificada está no laboratório desta página.",
    tags: ["Precificação", "Margem", "Excel"],
    chart: "bubble"
  },
  {
    id: "contrato-mutuo",
    profiles: ["pj", "all"],
    title: "Empréstimos entre empresas do mesmo grupo",
    business: "Quando a mesma equipe paga contas de oito empresas, uma acaba pagando conta da outra. Sem registro, o resultado de cada uma fica errado e o contador não tem base para o contrato mútuo.",
    method: "Regras para identificar os caminhos por onde o empréstimo aparece (transferência, conta paga por outra empresa, folha, fiado de funcionário, caixa físico) e um módulo de contrato mútuo que consolida e imprime.",
    result: "Cada empresa fecha com a despesa de quem deve, não de quem pagou, e o contrato mútuo sai pronto do sistema.",
    tags: ["Intercompany", "Contrato Mútuo", "Regras de negócio"],
    chart: "wave"
  },

  // --- Desenvolvimento ---
  {
    id: "zap-commerce",
    profiles: ["dev", "all"],
    title: "Zap-Commerce: catálogo de atacado com pedido no WhatsApp",
    business: "Lojistas de atacado que vendem por WhatsApp perdem pedido no meio da conversa: sem catálogo, sem regra de quantidade mínima, sem endereço de entrega organizado.",
    method: "Vitrine mobile-first em React e Vite, sacola persistida no dispositivo, checkout com entrega em mãos, excursão ou Correios (CEP via ViaCEP) e mensagem final formatada para o WhatsApp. API em NestJS, Prisma e PostgreSQL, multi-tenant, com painel do lojista e autenticação JWT.",
    result: "Sistema funcional, publicado como caso da agência e rodando em função serverless no Vercel.",
    tags: ["React", "NestJS", "Prisma", "PostgreSQL"],
    chart: "steps"
  },
  {
    id: "sistema-os",
    profiles: ["dev", "all"],
    title: "Gestão de ordens de serviço para equipes técnicas",
    business: "Empresa de serviços técnicos com OS abertas pelo atendimento, orçamentos pelo comercial e execução em campo, sem um lugar único para acompanhar tudo.",
    method: "Frontend em React e TypeScript com perfis de acesso (administrador, gestor, atendente, vendedor, técnico), OS que gera ordens técnicas, agenda de programação e funil de orçamentos. Backend em NestJS com Prisma.",
    result: "Fluxo completo da abertura à execução, com área restrita para o técnico ver e executar as próprias ordens.",
    tags: ["React", "TypeScript", "NestJS", "Prisma"],
    chart: "gantt"
  },
  {
    id: "portfolio",
    profiles: ["dev", "all"],
    title: "Este portfólio",
    business: "Precisava de uma página que mostrasse os trabalhos por área de interesse sem repetir conteúdo para cada público.",
    method: "Next.js, Tailwind e Framer Motion. Um seletor de área filtra seções, estudos de caso e ferramentas; os simuladores do laboratório são componentes React independentes. Desenvolvido com apoio de assistentes de IA, com revisão minha de cada tela e texto.",
    result: "Uma página só, cinco leituras, e uma versão de currículo pronta para impressão.",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
    chart: "line"
  },
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
            <span className="font-mono text-[10px] uppercase tracking-widest text-[var(--text-3)]">Estudos de caso</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight">
            O que eu <span className="text-[var(--accent)]">já fiz.</span>
          </h2>
          <p className="mt-4 text-sm text-[var(--text-2)] max-w-lg leading-relaxed">
            Trabalhos reais, descritos em três partes: o problema como ele apareceu, o que foi feito e o que mudou. Detalhes que identificam clientes foram omitidos.
          </p>
          
          <div className="mt-6 inline-flex items-center gap-2 bg-[var(--bg-3)] border border-[var(--border)] px-4 py-2 rounded-full shadow-sm">
            <svg className="w-4 h-4 text-[var(--accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            <span className="text-xs font-mono uppercase tracking-widest text-[var(--text-2)] font-bold">Problema · O que foi feito · Resultado</span>
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
                  <span className="font-mono text-[10px] text-[var(--accent)] uppercase tracking-widest">Estudo de caso</span>
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
                    <span className="font-mono text-[9px] text-amber-400 uppercase tracking-widest block mb-2">O que foi feito</span>
                    <p className="text-sm text-[var(--text-2)] leading-relaxed border-l-2 border-amber-400/30 pl-3">{activeProject.method}</p>
                  </div>
                  <div>
                    <span className="font-mono text-[9px] text-[var(--accent)] uppercase tracking-widest block mb-2">Resultado</span>
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
