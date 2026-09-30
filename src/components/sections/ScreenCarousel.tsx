"use client";

import Image from "next/image";
import { useRef } from "react";
import { Art } from "@/components/ui/Art";
import { Browser } from "@/components/ui/Device";

export type Slide = {
  kind: "pagar" | "conciliacao" | "caixa" | "mutuo";
  title: string;
  caption: string;
  src?: string;
};

export function ScreenCarousel({ slides }: { slides: Slide[] }) {
  const ref = useRef<HTMLUListElement>(null);
  const go = (dir: 1 | -1) => {
    const el = ref.current;
    if (!el) return;
    el.scrollBy({ left: dir * (el.clientWidth * 0.8), behavior: "smooth" });
  };

  return (
    <div>
      <ul
        ref={ref}
        className="snap-row"
        tabIndex={0}
        aria-label="Telas do sistema. Use as setas do teclado para percorrer."
        onKeyDown={(e) => {
          if (e.key === "ArrowRight") go(1);
          if (e.key === "ArrowLeft") go(-1);
        }}
      >
        {slides.map((s, i) => (
          <li key={s.title}>
            <Browser title={s.title}>
              {s.src ? (
                <Image
                  src={s.src}
                  alt={`${s.title}: captura do ambiente de demonstração, com dados fictícios`}
                  width={1600}
                  height={1000}
                  sizes="(min-width: 1024px) 280px, 78vw"
                  loading={i === 0 ? "eager" : "lazy"}
                  className="block h-auto w-full"
                />
              ) : (
                <Art kind={s.kind} label={`Ilustração da tela ${s.title}`} />
              )}
            </Browser>
            <p className="mt-3 font-display text-base font-semibold">{s.title}</p>
            <p className="text-sm text-[var(--text-2)]">{s.caption}</p>
          </li>
        ))}
      </ul>
      <div className="mt-4 flex gap-3 lg:hidden">
        <button type="button" onClick={() => go(-1)} aria-label="Tela anterior" className="btn-secondary !px-4">
          ←
        </button>
        <button type="button" onClick={() => go(1)} aria-label="Próxima tela" className="btn-secondary !px-4">
          →
        </button>
      </div>
    </div>
  );
}
