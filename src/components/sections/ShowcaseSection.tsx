"use client";

import { motion } from "framer-motion";
import { useProfile } from "@/lib/ProfileContext";

const SHOWCASE_PROJECTS = [
  {
    id: "sistema-financeiro",
    profileMatch: ["clt", "dev", "all"],
    label: "Financeiro · Next.js + Supabase",
    title: "Sistema financeiro do grupo",
    desc: "Contas a pagar, conciliação bancária, conferência de caixa, contrato mútuo, folha, frota, agenda e fechamento mensal para oito CNPJs. Em uso pela equipe desde agosto de 2026 e em evolução contínua, com ambiente de demonstração separado e documentação das regras de negócio dentro do sistema.",
    animationType: "code",
    btnText: "Ver estudo de caso",
    btnIcon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
    ),
    link: "#projetos"
  },
  {
    id: "fechamento-analitico",
    profileMatch: ["dados", "all"],
    label: "Dados · Relatórios",
    title: "Fechamento analítico",
    desc: "Relatório mensal por empresa com margem por produto contra referência, concentração de clientes e fornecedores, provisão diária de folha e impostos e comparação com o mês anterior. Gerado a partir das mesmas tabelas do fechamento, com exportação para Excel.",
    animationType: "chart",
    btnText: "Ver estudo de caso",
    btnIcon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
    ),
    link: "#projetos"
  },
  {
    id: "margem",
    profileMatch: ["pj", "all"],
    label: "Consultoria · Ferramenta",
    title: "Simulador de markup e margem",
    desc: "Calculadora que mostra a diferença entre markup sobre o custo e margem sobre a venda, o erro mais comum que encontro na precificação de varejo. A versão interativa está no laboratório desta página; a versão em planilha é a que uso com lojistas.",
    animationType: "sim",
    btnText: "Abrir simulador",
    btnIcon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polygon points="10 8 16 12 10 16 10 8"></polygon></svg>
    ),
    link: "#laboratorio"
  },
  {
    id: "zap-commerce",
    profileMatch: ["dev", "all"],
    label: "Fullstack · React + NestJS",
    title: "Zap-Commerce",
    desc: "Catálogo de atacado com pedido pelo WhatsApp: vitrine mobile-first, sacola persistida, checkout com três formas de entrega, painel do lojista e API multi-tenant em NestJS, Prisma e PostgreSQL, publicada como função serverless no Vercel.",
    animationType: "code",
    btnText: "Ver estudo de caso",
    btnIcon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
    ),
    link: "#projetos"
  },
  {
    id: "sistema-os",
    profileMatch: ["dev", "all"],
    label: "Fullstack · React + NestJS",
    title: "Gestão de ordens de serviço",
    desc: "OS que gera ordens técnicas para execução em campo, com perfis de acesso (administrador, gestor, atendente, vendedor, técnico), funil de orçamentos e agenda. Frontend em React e TypeScript, backend em NestJS com Prisma.",
    animationType: "code",
    btnText: "Ver estudo de caso",
    btnIcon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
    ),
    link: "#projetos"
  },
  {
    id: "portfolio-dev",
    profileMatch: ["dev", "all"],
    label: "Frontend · Next.js + Tailwind",
    title: "Este portfólio",
    desc: "Next.js, Tailwind e Framer Motion. Seletor de área que filtra as seções, simuladores em React e página de currículo para impressão.",
    animationType: "code",
    btnText: "Ver estudo de caso",
    btnIcon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
    ),
    link: "#projetos"
  }
];

export function ShowcaseSection() {
  const { activeProfile } = useProfile();
  
  const visibleProjects = activeProfile === "all" 
    ? SHOWCASE_PROJECTS 
    : SHOWCASE_PROJECTS.filter(p => p.profileMatch.includes(activeProfile));

  return (
    <section id="showcase" className="py-24 border-t border-[var(--border)] bg-[var(--bg-2)]">
      <div className="section-wrap">
        
        <header className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="section-number text-white/50 border-white/20">04</span>
            <span className="font-mono text-[10px] uppercase tracking-widest text-white/50">Projetos</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-white">
            Projetos <span className="text-[var(--accent)] text-transparent bg-clip-text bg-gradient-to-r from-[var(--accent)] to-purple-500">com código.</span>
          </h2>
          <p className="mt-4 text-sm text-white/60 max-w-xl leading-relaxed">
            Sistemas e ferramentas que desenvolvi e uso. São de uso interno das empresas, então o código e as telas com dados reais ficam restritos; versões de demonstração com dados fictícios estão previstas.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleProjects.map((proj, idx) => {
            const isFeatured = idx === 0;

            return (
              <motion.div 
                key={proj.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                className={`group flex flex-col ${isFeatured ? 'lg:flex-row lg:col-span-2' : ''} gap-6 bg-[var(--bg)] border border-[var(--border)] rounded-2xl p-6 lg:p-8 hover:border-[var(--text-3)] transition-all shadow-lg`}
              >
                
                <div className={`w-full ${isFeatured ? 'lg:w-1/2' : ''} relative aspect-video rounded-xl overflow-hidden border border-[var(--border)] bg-black shadow-inner`}>
                  
                  {/* 1. Animação de Código Python */}
                  {proj.animationType === "code" && (
                    <div className="absolute inset-0 bg-[#0d1117] p-4 md:p-6 font-mono text-[10px] md:text-xs text-green-400/80 overflow-hidden flex flex-col gap-1">
                      <motion.div
                        animate={{ y: [0, -100] }}
                        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                        className="flex flex-col gap-1.5"
                      >
                        <p><span className="text-pink-400">import</span> pandas <span className="text-pink-400">as</span> pd</p>
                        <p><span className="text-pink-400">import</span> numpy <span className="text-pink-400">as</span> np</p>
                        <br/>
                        <p className="text-gray-500"># Lendo arquivos brutos</p>
                        <p>df_banco = pd.read_csv(<span className="text-yellow-300">'extrato.csv'</span>)</p>
                        <p>df_erp = pd.read_csv(<span className="text-yellow-300">'erp_contas.csv'</span>)</p>
                        <br/>
                        <p className="text-gray-500"># Processando conciliação...</p>
                        <p>divergencias = df_banco.merge(</p>
                        <p className="pl-4">df_erp, how=<span className="text-yellow-300">'left'</span>, indicator=<span className="text-blue-400">True</span></p>
                        <p>)</p>
                        <br/>
                        <p><span className="text-pink-400">print</span>(<span className="text-yellow-300">"Processo de auditoria concluído."</span>)</p>
                        <p>divergencias.to_excel(<span className="text-yellow-300">'report.xlsx'</span>)</p>
                      </motion.div>
                    </div>
                  )}

                  {/* 2. Animação de Gráficos (Dashboard) */}
                  {proj.animationType === "chart" && (
                    <div className="absolute inset-0 bg-[#064e3b] flex flex-col p-6">
                      <div className="flex justify-between items-center mb-4 opacity-50 border-b border-emerald-700/50 pb-2">
                         <div className="h-2 w-1/4 bg-emerald-300 rounded" />
                         <div className="h-2 w-1/6 bg-emerald-500 rounded" />
                      </div>
                      <div className="flex-1 flex items-end justify-center gap-3">
                        {[40, 70, 45, 90, 60, 85].map((h, i) => (
                          <motion.div key={i}
                            className="w-full bg-emerald-400 rounded-t-sm shadow-[0_0_15px_rgba(52,211,153,0.3)] relative"
                            animate={{ height: [`${h}%`, `${h+15}%`, `${h-10}%`, `${h}%`] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: i * 0.2 }}
                          >
                            <div className="absolute top-0 left-0 right-0 h-1 bg-white/40" />
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* 3. Animação de Simulador */}
                  {proj.animationType === "sim" && (
                    <div className="absolute inset-0 bg-[#451a03] flex flex-col justify-center gap-6 p-6 md:p-10 overflow-hidden">
                      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:20px_20px]" />
                      
                      <div className="flex flex-col gap-2 relative z-10">
                        <div className="h-2 w-1/4 bg-amber-900 rounded" />
                        <div className="h-8 w-full bg-amber-950 rounded border border-amber-900/50 overflow-hidden relative shadow-inner">
                           <motion.div 
                             className="absolute inset-y-0 left-0 bg-amber-600/20 w-1/3 border-r border-amber-500/50" 
                             animate={{ x: ["-100%", "300%"] }} 
                             transition={{ duration: 2, repeat: Infinity, ease: "linear" }} 
                           />
                        </div>
                      </div>
                      <div className="flex flex-col gap-2 relative z-10">
                        <div className="h-2 w-1/3 bg-amber-900 rounded" />
                        <div className="h-8 w-full bg-amber-950 rounded border border-amber-900/50 flex items-center px-2 shadow-inner">
                           <motion.div 
                             className="h-2 bg-amber-500 rounded" 
                             animate={{ width: ["10%", "85%", "40%", "90%"] }} 
                             transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} 
                           />
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors pointer-events-none" />
                  
                  <div className="absolute top-4 left-4 px-3 py-1 bg-black/60 backdrop-blur-md rounded-full border border-white/10 z-10">
                    <span className="font-mono text-[9px] uppercase tracking-widest text-white shadow-sm">{proj.label}</span>
                  </div>
                </div>

                <div className={`w-full ${isFeatured ? 'lg:w-1/2' : ''} flex flex-col items-start gap-4`}>
                  <h3 className="font-display font-bold text-2xl lg:text-2xl text-[var(--text-1)]">
                    {proj.title}
                  </h3>
                  <p className="text-sm text-[var(--text-2)] leading-relaxed mb-2 flex-1">
                    {proj.desc}
                  </p>
                  <a 
                    href={proj.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[var(--border-2)] bg-[var(--bg-3)] hover:bg-[var(--accent)] hover:text-white transition-all text-xs font-bold uppercase tracking-wider shadow-sm hover:shadow-md"
                  >
                    {proj.btnIcon}
                    {proj.btnText}
                  </a>
                </div>
                
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
