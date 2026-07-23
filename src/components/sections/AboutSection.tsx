"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useProfile } from "@/lib/ProfileContext";

const ABOUT_CONTENT = {
  all: {
    headline: "A ponte entre o código e a operação.",
    description: "Conecto a rotina de negócios (financeiro, fiscal e estoque) à tecnologia. Eu mapeio onde o processo trava e executo a solução na prática, seja estruturando ERPs ou desenvolvendo painéis de dados.",
    features: [
      { number: "01", title: "Dados e Decisão", desc: "Dados confiáveis não nascem de planilhas soltas; eles vêm de uma operação estruturada. Uso a tecnologia para automatizar rotinas manuais e transformar números em dados claros." },
      { number: "02", title: "O Método (Tech + Adm)", desc: "Minha trajetória une a operação real das empresas à análise de sistemas. Atuo analisando a rotina do negócio para aplicar uma solução técnica." },
      { number: "03", title: "Automação e ERP", desc: "Estruturo sistemas e fluxos que reduzem erros humanos e eliminam gargalos burocráticos no backoffice financeiro." }
    ]
  },
  clt: {
    headline: "Precisão na rotina de Backoffice.",
    description: "Garanto que o fluxo de caixa, o faturamento e a conciliação bancária rodem sem erros. Estruturo processos no ERP para que a operação não dependa de controles manuais vulneráveis.",
    features: [
      { number: "01", title: "Contas e Fechamento", desc: "Auditoria rigorosa de pagamentos, recebimentos e conciliações bancárias para que a diretoria tenha segurança no caixa diário." },
      { number: "02", title: "Implantação de Sistemas", desc: "Mapeamento dos processos e transição segura de plataformas (como higienização de cadastros e parametrização financeira)." },
      { number: "03", title: "Rotinas Fiscais", desc: "Garantia de conformidade na emissão de Notas Fiscais (NF-e, NFS-e) e apuração básica, blindando a empresa de passivos." }
    ]
  },
  dados: {
    headline: "Dados que guiam decisões.",
    description: "Transformo bases de dados confusas e planilhas desconexas em painéis executivos (BI) e scripts automatizados que economizam dezenas de horas do time por semana.",
    features: [
      { number: "01", title: "Python & Automação", desc: "Desenvolvimento de scripts para extrair dados brutos do ERP, limpar inconsistências (Saneamento) e formatar informações." },
      { number: "02", title: "Modelagem SQL", desc: "Criação de queries estruturadas (PostgreSQL) para cruzar vendas, estoque e despesas, garantindo a precisão (Single Source of Truth)." },
      { number: "03", title: "Dashboards e BI", desc: "Construção de relatórios visuais dinâmicos para a alta gestão, substituindo relatórios estáticos por indicadores em tempo real." }
    ]
  },
  pj: {
    headline: "Soluções sob medida para seu negócio.",
    description: "Atuo de forma consultiva para identificar onde sua empresa perde dinheiro por falta de processos. Implemento automações financeiras que liberam sua equipe para focar no crescimento.",
    features: [
      { number: "01", title: "Diagnóstico Operacional", desc: "Mapeamento do fluxo do seu negócio para identificar gargalos e tarefas repetitivas em vendas, compras ou no financeiro." },
      { number: "02", title: "Redução de Fricção", desc: "Integração de ferramentas e criação de automações sistêmicas que eliminam a necessidade de controles paralelos e duplos inputs." },
      { number: "03", title: "Precificação e Custos", desc: "Estruturação de DRE gerencial, mark-up e margens para garantir que a sua operação deixe o lucro projetado no final do mês." }
    ]
  },
  dev: {
    headline: "Código moderno, interfaces fluidas.",
    description: "Desenvolvo aplicações web escaláveis. Transformo layouts e ideias em interfaces responsivas, rápidas e acessíveis, focadas na melhor experiência do usuário.",
    features: [
      { number: "01", title: "Frontend & UI", desc: "Criação de componentes reutilizáveis em React e Next.js, estilizados com Tailwind CSS e animações avançadas." },
      { number: "02", title: "Integração & Dados", desc: "Consumo de APIs REST, manipulação de estado complexo e estruturação eficiente de dados vindos do backend." },
      { number: "03", title: "Boas Práticas", desc: "Aplicação de código limpo, arquitetura modular, versionamento com Git/GitHub e metodologias ágeis." }
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
