"use client";

import Link from "next/link";
import { useState } from "react";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

const NAV_LINKS = [
  { href: "/#inicio", label: "Sobre" },
  { href: "/#projeto", label: "Projeto" },
  { href: "/#experiencia", label: "Experiência" },
  { href: "/#habilidades", label: "Habilidades" },
  { href: "/#contato", label: "Contato" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="no-print sticky top-0 z-50 border-b border-[var(--border)] bg-[var(--bg)]">
      <div className="section-wrap flex h-16 items-center justify-between gap-4">
        <Link href="/" className="font-display font-bold text-lg tracking-tight whitespace-nowrap">
          Paloma Amaral
        </Link>

        <nav aria-label="Principal" className="hidden md:flex items-center gap-6">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-base text-[var(--text-2)] hover:text-[var(--text-1)] transition-colors py-2"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Link href="/curriculo" className="btn-primary hidden md:inline-flex">
            Currículo
          </Link>
          <button
            type="button"
            className="md:hidden w-11 h-11 rounded-lg border border-[var(--border)] bg-[var(--bg-2)] flex items-center justify-center cursor-pointer"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            aria-controls="menu-mobile"
            onClick={() => setOpen((v) => !v)}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              {open ? (
                <path d="M18 6L6 18M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <nav
          id="menu-mobile"
          aria-label="Menu principal"
          className="md:hidden border-t border-[var(--border)] bg-[var(--bg)]"
        >
          <ul className="section-wrap py-2">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="flex min-h-12 items-center border-b border-[var(--border)] text-base"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <Link
                href="/curriculo"
                onClick={() => setOpen(false)}
                className="flex min-h-12 items-center text-base font-semibold text-[var(--accent)]"
              >
                Currículo
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
