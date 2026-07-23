"use client";

import { motion } from "framer-motion";
import { useProfile } from "@/lib/ProfileContext";

const SHOWCASE_PROJECTS = [
  {
    id: "conciliacao",
    profileMatch: ["clt", "all"],
    label: "Operações · Python",
    title: "Motor de Conciliação Automática",
    desc: "Script em Python que cruza o extrato bancário (OFX/CSV) com o relatório de Contas a Receber do ERP. Ele identifica boletos pagos, tarifas escondidas e gera um relatório pronto das divergências.",
    animationType: "code",
    btnText: "Ver Código no GitHub",
    btnIcon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
    ),
    link: "https://github.com/palomaamaral"
  },
  {
    id: "dre",
    profileMatch: ["dados", "all"],
    label: "Dados · Power BI",
    title: "Painel Executivo DRE & Fluxo",
    desc: "Dashboard interativo construído para diretores. Conecta na base de vendas e despesas, calculando em tempo real a Margem de Contribuição, Ponto de Equilíbrio e Lucro Líquido.",
    animationType: "chart",
    btnText: "Abrir Dashboard",
    btnIcon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
    ),
    link: "https://github.com/palomaamaral"
  },
  {
    id: "margem",
    profileMatch: ["pj", "all"],
    label: "Consultoria · Ferramenta",
    title: "Simulador de Precificação Segura",
    desc: "Ferramenta desenvolvida para lojistas simularem o preço ideal de um produto considerando impostos, taxas de maquininha, quebra e margem desejada. Fim do preço baseado em 'achismo'.",
    animationType: "sim",
    btnText: "Testar Simulador",
    btnIcon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polygon points="10 8 16 12 10 16 10 8"></polygon></svg>
    ),
    link: "https://github.com/palomaamaral"
  },
  {
    id: "portfolio-dev",
    profileMatch: ["dev", "all"],
    label: "Frontend · React & Tailwind",
    title: "Portfólio com Glassmorphism",
    desc: "Este próprio portfólio. Desenvolvido com React, Next.js e Framer Motion. Demonstra minha capacidade de criar interfaces modernas, gerenciamento de estado global e componentes de UI reutilizáveis e responsivos.",
    animationType: "code",
    btnText: "Ver Código no GitHub",
    btnIcon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
    ),
    link: "https://github.com/palomaamaral/portifolio"
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
            <span className="section-number">04</span>
            <span className="font-mono text-[10px] uppercase tracking-widest text-[var(--text-3)]">A Prática</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight">
            Projetos <span className="text-[var(--accent)]">Técnicos.</span>
          </h2>
          <p className="mt-4 text-sm text-[var(--text-2)] max-w-xl leading-relaxed">
            Ferramentas reais, dashboards e scripts que criei para resolver as dores que descrevi. 
            Clique para ver o código ou interagir com as demonstrações.
          </p>
        </header>

        <div className="flex flex-col gap-12">
          {visibleProjects.map((proj, idx) => (
            <motion.div 
              key={proj.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="group flex flex-col md:flex-row gap-8 lg:gap-12 items-center bg-[var(--bg)] border border-[var(--border)] rounded-2xl p-4 lg:p-8 shadow-lg hover:border-[var(--text-3)] transition-colors"
            >
              
              {/* Lado Esquerdo: Placeholder de Vídeo/App */}
              <div className="w-full md:w-1/2 relative aspect-video rounded-xl overflow-hidden border border-[var(--border)] shadow-inner bg-black">
                
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
                    {/* Header do mock de dash */}
                    <div className="flex justify-between items-center mb-4 opacity-50 border-b border-emerald-700/50 pb-2">
                       <div className="h-2 w-1/4 bg-emerald-300 rounded" />
                       <div className="h-2 w-1/6 bg-emerald-500 rounded" />
                    </div>
                    {/* Barras animadas */}
                    <div className="flex-1 flex items-end justify-center gap-3">
                      {[40, 70, 45, 90, 60, 85].map((h, i) => (
                        <motion.div key={i}
                          className="w-full bg-emerald-400 rounded-t-sm shadow-[0_0_15px_rgba(52,211,153,0.3)] relative"
                          animate={{ height: [`${h}%`, `${h+15}%`, `${h-10}%`, `${h}%`] }}
                          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: i * 0.2 }}
                        >
                          {/* Destaque no topo da barra */}
                          <div className="absolute top-0 left-0 right-0 h-1 bg-white/40" />
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )}

                {/* 3. Animação de Simulador */}
                {proj.animationType === "sim" && (
                  <div className="absolute inset-0 bg-[#451a03] flex flex-col justify-center gap-6 p-6 md:p-10 overflow-hidden">
                    {/* Linhas de grade sutis ao fundo */}
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

                {/* Overlay Escurecido no hover */}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors pointer-events-none" />
                
                {/* Tag flutuante */}
                <div className="absolute top-4 left-4 px-3 py-1 bg-black/60 backdrop-blur-md rounded-full border border-white/10 z-10">
                  <span className="font-mono text-[9px] uppercase tracking-widest text-white shadow-sm">{proj.label}</span>
                </div>
              </div>

              {/* Lado Direito: Info e Botão */}
              <div className="w-full md:w-1/2 flex flex-col items-start gap-4 p-4 lg:p-0">
                <h3 className="font-display font-bold text-2xl lg:text-3xl text-[var(--text-1)]">
                  {proj.title}
                </h3>
                <p className="text-sm text-[var(--text-2)] leading-relaxed mb-4">
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
          ))}
        </div>

      </div>
    </section>
  );
}
