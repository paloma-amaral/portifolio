"use client";

import { motion } from "framer-motion";

const FEATURES = [
  {
    number: "01",
    title: "Dados e Decisão",
    desc: "Dados confiáveis não nascem de planilhas soltas; eles vêm de uma operação estruturada. Uso a tecnologia (como Python, SQL e Power BI) para automatizar rotinas manuais e transformar números em dados claros. Ao cruzar faturamento, custos e giro de estoque, busco gerar relatórios que ajudem a enxergar a situação real da empresa, apoiando o gestor nas decisões do dia a dia."
  },
  {
    number: "02",
    title: "O Método (Tech + Adm)",
    desc: "Minha trajetória une a operação real das empresas ao desenvolvimento de sistemas. Atuo analisando a rotina do negócio para aplicar uma solução técnica: seja estruturando um ERP completo, configurando regras ou codificando integrações. Meu objetivo é atuar como a ponte entre a necessidade da empresa e a tecnologia aplicada, executando o projeto para fazer a ferramenta rodar na prática."
  },
  {
    number: "03",
    title: "Desenvolvimento & IA",
    desc: "Além de negócios e dados, atuo como Desenvolvedora Web. Crio aplicações modernas, sites institucionais, Landing Pages e portfólios (como este). Utilizo recursos de Inteligência Artificial para acelerar o desenvolvimento, otimizar códigos e garantir entregas responsivas."
  }
];

export function AboutSection() {
  return (
    <section id="sobre" className="py-24 border-t border-[var(--border)]">
      <div className="section-wrap">
        
        <header className="flex flex-col lg:flex-row lg:items-center justify-between gap-12 mb-16">
          <div className="flex-1">
            <div className="flex items-center gap-4 mb-6">
              <span className="section-number">01</span>
              <span className="font-mono text-[10px] uppercase tracking-widest text-[var(--text-2)]">Quem Sou</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-6">
              A ponte entre o <br/>
              <span className="text-[var(--text-2)]">código e a operação.</span>
            </h2>
            <p className="max-w-lg text-sm text-[var(--text-2)] leading-relaxed">
              Conecto a rotina de negócios (financeiro, fiscal e estoque) à tecnologia. Eu mapeio onde o processo trava e executo a solução na prática, seja estruturando ERPs ou desenvolvendo sistemas do zero.
            </p>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative lg:w-[320px] shrink-0"
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

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {FEATURES.map((item, index) => (
            <motion.div 
              key={item.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="card p-8 flex flex-col group"
            >
              <div className="font-mono text-[10px] text-[var(--text-3)] mb-8 transition-colors group-hover:text-[var(--accent)]">
                {item.number} / {item.title}
              </div>
              <p className="text-sm leading-relaxed text-[var(--text-1)]">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
