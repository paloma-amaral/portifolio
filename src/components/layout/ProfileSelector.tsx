"use client";

import { useProfile, ProfileType } from "@/lib/ProfileContext";
import { motion } from "framer-motion";

const PROFILES: { id: ProfileType; label: string; emoji: string }[] = [
  { id: "all",   label: "Visão Geral",      emoji: "◈" },
  { id: "clt",   label: "Analista CLT",     emoji: "◇" },
  { id: "dados", label: "Dados & BI",       emoji: "◉" },
  { id: "pj",    label: "Consultoria PJ",   emoji: "◎" },
  { id: "dev",   label: "Desenvolvedora",   emoji: "▣" },
];

export function ProfileSelector() {
  const { activeProfile, setActiveProfile } = useProfile();

  return (
    <div className="w-full mb-8">
      <p className="font-mono text-[9px] text-[var(--text-3)] mb-3 uppercase tracking-[0.2em]">
        Selecione o perfil de interesse
      </p>
      
      <div className="flex flex-nowrap gap-2 overflow-x-auto pb-1 scrollbar-none" style={{ scrollbarWidth: "none" }}>
        {PROFILES.map((profile) => {
          const isActive = activeProfile === profile.id;
          return (
            <button
              key={profile.id}
              onClick={() => setActiveProfile(profile.id)}
              className="tap-transparent relative flex-shrink-0 px-4 py-2 rounded-full border font-mono text-[11px] transition-all"
              style={{
                borderColor: isActive ? "var(--accent)" : "var(--border)",
                background: isActive ? "rgba(185, 142, 167, 0.12)" : "transparent",
                color: isActive ? "var(--accent)" : "var(--text-3)",
              }}
            >
              {isActive && (
                <motion.div
                  layoutId="profile-pill"
                  className="absolute inset-0 rounded-full"
                  style={{ background: "rgba(185, 142, 167, 0.08)" }}
                  transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                />
              )}
              <span className="relative z-10 flex items-center gap-1.5 whitespace-nowrap">
                <span className={`text-[10px] ${isActive ? "text-[var(--accent)]" : "text-[var(--text-3)]"}`}>{profile.emoji}</span>
                {profile.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
