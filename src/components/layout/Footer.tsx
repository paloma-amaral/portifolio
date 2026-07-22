"use client";

const SOCIAL_LINKS = [
  { label: "LinkedIn", href: "https://linkedin.com/in/paloma-amaral" },
  { label: "GitHub", href: "https://github.com/palomaamaral" },
  { label: "Email", href: "mailto:paloma@email.com" },
];

export function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--bg)] py-12 mt-20">
      <div className="section-wrap">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          <div>
            <div className="font-display font-bold text-[24px] tracking-tight mb-2">
              PALOMA AMARAL.
            </div>
            <p className="font-mono text-sm text-[var(--text-2)] mb-6 max-w-sm">
              Operações + Engenharia de Software. Construindo pontes entre a realidade fiscal/financeira e os sistemas que a suportam.
            </p>
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-2 font-mono text-xs text-[var(--accent)]">
                <span className="w-2 h-2 rounded-full bg-[var(--accent)] animate-pulse"></span>
                Disponível para oportunidades
              </span>
            </div>
          </div>

          <div className="flex flex-col md:items-end gap-4">
            <h3 className="label">Conecte-se</h3>
            <div className="flex flex-col md:items-end gap-2">
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--text-1)] hover:text-[var(--accent)] transition-colors font-display text-lg"
                >
                  {link.label} ↗
                </a>
              ))}
            </div>
          </div>

        </div>

        <div className="mt-16 pt-6 border-t border-[var(--border)] flex flex-col md:flex-row justify-between items-center gap-4 font-mono text-[10px] text-[var(--text-3)] uppercase tracking-wider">
          <p>© {new Date().getFullYear()} Paloma Amaral. MIT License.</p>
          <p>Next.js / Tailwind CSS / Framer Motion</p>
        </div>
      </div>
    </footer>
  );
}
