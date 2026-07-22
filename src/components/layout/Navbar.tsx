"use client";

import Link from "next/link";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { href: "/#sobre",       label: "Quem Sou",   id: "sobre" },
  { href: "/#experiencia", label: "Trajetória", id: "experiencia" },
  { href: "/#projetos",    label: "Cases",      id: "projetos" },
  { href: "/#atuacao",     label: "Paradigmas", id: "atuacao" },
  { href: "/#laboratorio", label: "Simulador",  id: "laboratorio" },
  { href: "/#showcase",    label: "Portfólio",  id: "showcase" },
  { href: "/#metodo",      label: "Método",     id: "metodo" },
  { href: "/#habilidades", label: "Skills",     id: "habilidades" },
  { href: "/#contato",     label: "Contato",    id: "contato" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Fechar menu ao clicar em um link
  const handleNavClick = () => setMobileOpen(false);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-[var(--bg)]/95 backdrop-blur-md border-b border-[var(--border)]" : "bg-transparent"
        }`}
      >
        <div className="max-w-[1100px] mx-auto px-5 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <span className="font-display font-bold text-[17px] tracking-tight text-[var(--text-1)] group-hover:text-[var(--accent)] transition-colors">
              Paloma Amaral
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] animate-pulse" />
          </Link>

          {/* Desktop Nav — só aparece em lg+ para ter espaço */}
          <nav className="hidden lg:flex items-center gap-3 xl:gap-5">
            {NAV_LINKS.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className="font-mono text-[9px] xl:text-[10px] tracking-wider uppercase text-[var(--text-3)] hover:text-[var(--text-1)] transition-colors relative group whitespace-nowrap"
              >
                {link.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-[var(--accent)] transition-all group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-3">
            <ThemeToggle />
            <Link href="/curriculo" className="btn-primary text-sm">
              Ver Currículo
            </Link>
          </div>

          {/* Tablet (md): só ThemeToggle + Hambúrguer */}
          <div className="hidden md:flex lg:hidden items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="w-10 h-10 flex flex-col justify-center items-center gap-1.5 rounded-lg border border-[var(--border)] bg-[var(--bg-2)]"
              aria-label="Menu"
            >
              <motion.span animate={mobileOpen ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }} className="w-5 h-px bg-[var(--text-1)] block origin-center" />
              <motion.span animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }} className="w-5 h-px bg-[var(--text-1)] block" />
              <motion.span animate={mobileOpen ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }} className="w-5 h-px bg-[var(--text-1)] block origin-center" />
            </button>
          </div>

          {/* Mobile: ThemeToggle + Hamburger */}
          <div className="flex md:hidden items-center gap-3">
            <ThemeToggle />
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="w-10 h-10 flex flex-col justify-center items-center gap-1.5 rounded-lg border border-[var(--border)] bg-[var(--bg-2)]"
              aria-label="Menu"
            >
              <motion.span
                animate={mobileOpen ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }}
                className="w-5 h-px bg-[var(--text-1)] block origin-center transition-colors"
              />
              <motion.span
                animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
                className="w-5 h-px bg-[var(--text-1)] block"
              />
              <motion.span
                animate={mobileOpen ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }}
                className="w-5 h-px bg-[var(--text-1)] block origin-center"
              />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
            />
            {/* Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 280 }}
              className="fixed top-0 right-0 bottom-0 w-72 bg-[var(--bg-2)] border-l border-[var(--border)] z-50 md:hidden flex flex-col"
            >
              {/* Header do drawer */}
              <div className="h-16 flex items-center justify-between px-5 border-b border-[var(--border)]">
                <span className="font-display font-bold text-sm text-[var(--text-2)]">Menu</span>
                <button onClick={() => setMobileOpen(false)} className="text-[var(--text-3)] hover:text-[var(--text-1)]">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </button>
              </div>

              {/* Links */}
              <nav className="flex-1 flex flex-col px-5 pt-6 gap-1">
                {NAV_LINKS.map((link, i) => (
                  <motion.a
                    key={link.id}
                    href={link.href}
                    onClick={handleNavClick}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06 }}
                    className="py-4 border-b border-[var(--border)] font-display font-medium text-[var(--text-1)] hover:text-[var(--accent)] transition-colors flex items-center justify-between"
                  >
                    {link.label}
                    <span className="text-[var(--text-3)] text-sm">↗</span>
                  </motion.a>
                ))}
              </nav>

              {/* CTA do drawer */}
              <div className="p-5 border-t border-[var(--border)]">
                <Link href="/curriculo" onClick={handleNavClick} className="btn-primary w-full justify-center">
                  Ver Currículo
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
