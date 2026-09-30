"use client";

import Link from "next/link";
import { useState } from "react";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { useProfile } from "@/lib/profile";

const LINKS = {
  recrutador: [
    { href: "/#projeto", label: "Projeto" },
    { href: "/#experiencia", label: "Trajetória" },
    { href: "/#habilidades", label: "Habilidades" },
    { href: "/#contato", label: "Contato" },
  ],
  cliente: [
    { href: "/#servicos", label: "Serviços" },
    { href: "/#trabalhos", label: "Trabalhos" },
    { href: "/#como-funciona", label: "Como funciona" },
    { href: "/#contato-cliente", label: "Contato" },
  ],
};

export function Header() {
  const [open, setOpen] = useState(false);
  const profile = useProfile();
  const links = LINKS[profile];

  return (
    <header className="no-print sticky top-0 z-50 border-b border-[var(--border)] bg-[color-mix(in_srgb,var(--bg)_82%,transparent)] backdrop-blur-md">
      <div className="section-wrap flex h-16 items-center justify-between gap-4">
        <Link href="/" className="font-display text-lg font-bold tracking-tight whitespace-nowrap">
          Paloma<span className="text-[var(--accent)]"> Amaral</span>
        </Link>

        <nav aria-label="Principal" className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="py-2 text-[var(--text-2)] transition-colors hover:text-[var(--text-1)]">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <span className="hidden md:block">
            <Link href="/curriculo" className="btn-primary">
              Currículo
            </Link>
          </span>
          <button
            type="button"
            className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-lg border border-[var(--border)] bg-[var(--bg-2)] md:hidden"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            aria-controls="menu-mobile"
            onClick={() => setOpen((v) => !v)}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              {open ? <path d="M18 6L6 18M6 6l12 12" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <nav id="menu-mobile" aria-label="Menu principal" className="border-t border-[var(--border)] bg-[var(--bg)] md:hidden">
          <ul className="section-wrap py-2">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="flex min-h-12 items-center border-b border-[var(--border)]"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <Link
                href="/curriculo"
                onClick={() => setOpen(false)}
                className="flex min-h-12 items-center font-semibold text-[var(--accent)]"
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
