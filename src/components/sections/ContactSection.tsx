"use client";

import { motion } from "framer-motion";

const CONTACTS = [
  {
    id: "github",
    label: "GitHub",
    value: "/palomaamaral",
    href: "https://github.com/palomaamaral",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.37 0 0 5.373 0 12c0 5.302 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.627-5.373-12-12-12"/>
      </svg>
    )
  },
  {
    id: "email",
    label: "E-mail",
    value: "palomadias028@gmail.com",
    href: "mailto:palomadias028@gmail.com",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    )
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    value: "/in/paloma-amaral",
    href: "https://linkedin.com/in/paloma-amaral",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    )
  },
];

export function ContactSection() {
  return (
    <section id="contato" className="py-32 border-t border-[var(--border)] relative overflow-hidden">
      
      {/* Gradiente de fundo */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full opacity-[0.05]"
          style={{ background: "radial-gradient(circle, var(--accent) 0%, transparent 70%)" }} />
      </div>

      {/* Texto de Fundo Animado (Marquee) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none flex flex-col justify-center select-none z-0 opacity-[0.02] text-[var(--text-1)]">
        <motion.div
          className="flex whitespace-nowrap font-display font-bold text-[12rem] md:text-[18rem] leading-none tracking-tighter"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
        >
          <span className="pr-12">OPEN TO WORK • OPEN TO WORK • OPEN TO WORK • OPEN TO WORK •</span>
          <span className="pr-12">OPEN TO WORK • OPEN TO WORK • OPEN TO WORK • OPEN TO WORK •</span>
        </motion.div>
      </div>

      <div className="section-wrap relative z-10">
        
        <div className="max-w-2xl mx-auto text-center">
          <span className="section-number block mb-6">06 / Contato</span>
          
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            Uma empresa mais organizada <br />
            <span className="text-[var(--accent)]">começa com uma conversa.</span>
          </h2>
          
          <p className="text-[var(--text-2)] mb-12 text-sm sm:text-base leading-relaxed font-mono">
            Disponível para oportunidades CLT, Projetos Pontuais ou BPO Financeiro.
          </p>



          {/* Contatos */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            {CONTACTS.map((contact, i) => (
              <motion.a
                key={contact.id}
                href={contact.href}
                target={contact.id !== "email" ? "_blank" : undefined}
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-3 px-5 py-4 rounded-xl border border-[var(--border)] bg-[var(--bg-2)] hover:border-[var(--accent)] hover:bg-[var(--bg-3)] transition-all group"
              >
                <span className="text-[var(--text-3)] group-hover:text-[var(--accent)] transition-colors">
                  {contact.icon}
                </span>
                <div className="text-left">
                  <div className="font-mono text-[9px] text-[var(--text-3)] uppercase tracking-widest">{contact.label}</div>
                  <div className="text-xs text-[var(--text-1)] font-medium">{contact.value}</div>
                </div>
              </motion.a>
            ))}
          </div>

          {/* Localização */}
          <p className="mt-10 font-mono text-[10px] text-[var(--text-3)] uppercase tracking-widest">
            Pitangueiras, SP — Interior Paulista · Disponível para remoto
          </p>
        </div>

      </div>
    </section>
  );
}
