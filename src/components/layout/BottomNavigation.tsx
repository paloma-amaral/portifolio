"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const NAV_ITEMS = [
  { id: "inicio",      href: "#inicio",      label: "Início",    icon: HomeIcon },
  { id: "sobre",       href: "#sobre",       label: "Trajetória", icon: UserIcon },
  { id: "projetos",    href: "#projetos",    label: "Projetos",  icon: GridIcon },
  { id: "laboratorio", href: "#laboratorio", label: "Lab",       icon: FlaskIcon },
  { id: "contato",     href: "#contato",     label: "Contato",   icon: MailIcon },
];

export function BottomNavigation() {
  const [activeId, setActiveId] = useState("inicio");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Pegar a que está mais visível
        const visible = entries
          .filter(e => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible.length > 0) setActiveId(visible[0].target.id);
      },
      { threshold: 0.3, rootMargin: "-60px 0px -60px 0px" }
    );

    NAV_ITEMS.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 tap-transparent"
      style={{ paddingBottom: "env(safe-area-inset-bottom, 0px)" }}>
      <div className="bg-[var(--bg-2)]/95 backdrop-blur-xl border-t border-[var(--border)] flex items-stretch h-16">
        {NAV_ITEMS.map((item) => {
          const isActive = activeId === item.id;
          const Icon = item.icon;
          return (
            <a
              key={item.id}
              href={item.href}
              onClick={() => setActiveId(item.id)}
              className="flex-1 flex flex-col items-center justify-center gap-0.5 relative"
            >
              {isActive && (
                <motion.div
                  layoutId="bottom-indicator"
                  className="absolute top-0 left-0 right-0 h-[2px] bg-[var(--accent)] rounded-b"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
                />
              )}
              <Icon
                size={20}
                className={`transition-colors duration-200 ${isActive ? "text-[var(--accent)]" : "text-[var(--text-3)]"}`}
              />
              <span className={`font-mono text-[9px] transition-colors duration-200 ${isActive ? "text-[var(--accent)]" : "text-[var(--text-3)]"}`}>
                {item.label}
              </span>
            </a>
          );
        })}
      </div>
    </nav>
  );
}

/* ─── SVG Icons ─── */
type IconProps = { size?: number; className?: string };

function HomeIcon({ size = 20, className = "" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
      <polyline points="9 22 9 12 15 12 15 22"/>
    </svg>
  );
}

function UserIcon({ size = 20, className = "" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
      <circle cx="12" cy="7" r="4"/>
    </svg>
  );
}

function GridIcon({ size = 20, className = "" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/>
      <rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/>
    </svg>
  );
}

function FlaskIcon({ size = 20, className = "" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M9 3h6m-3 0v6l-4 8a2 2 0 0 0 1.73 3h8.54a2 2 0 0 0 1.73-3l-4-8V3"/>
    </svg>
  );
}

function MailIcon({ size = 20, className = "" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect x="2" y="4" width="20" height="16" rx="2"/>
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
    </svg>
  );
}
