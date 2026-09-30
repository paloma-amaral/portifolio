"use client";

import { PROFILES } from "@/lib/content";
import { setProfile, useProfile } from "@/lib/profile";

export function ProfileSelector() {
  const active = useProfile();

  return (
    <div role="group" aria-label="Escolha o que você procura" className="grid gap-3 sm:grid-cols-2">
      {PROFILES.map((p) => {
        const on = active === p.id;
        return (
          <button
            key={p.id}
            type="button"
            aria-pressed={on}
            onClick={() => {
              setProfile(p.id);
              requestAnimationFrame(() =>
                document.querySelector(p.target)?.scrollIntoView({ behavior: "smooth", block: "start" }),
              );
            }}
            className={`group text-left rounded-2xl border p-5 transition-all cursor-pointer min-h-24 ${
              on
                ? "border-[var(--accent)] bg-[var(--bg-2)] shadow-[0_0_0_1px_var(--accent)]"
                : "border-[var(--border)] bg-[var(--bg-2)] hover:border-[var(--accent)]"
            }`}
          >
            <span className="flex items-center justify-between gap-3">
              <span className="font-display text-xl font-semibold">{p.title}</span>
              <span
                aria-hidden="true"
                className={`text-xl transition-transform group-hover:translate-y-1 ${on ? "text-[var(--accent)]" : "text-[var(--text-3)]"}`}
              >
                ↓
              </span>
            </span>
            <span className="mt-1 block text-[var(--text-2)]">{p.text}</span>
          </button>
        );
      })}
    </div>
  );
}
