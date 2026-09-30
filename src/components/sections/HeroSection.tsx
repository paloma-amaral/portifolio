import Image from "next/image";
import Link from "next/link";
import { HERO } from "@/lib/content";

export function HeroSection() {
  return (
    <section id="inicio" className="section pt-12 md:pt-20" aria-labelledby="titulo-principal">
      <div className="section-wrap grid gap-10 md:grid-cols-[1fr_240px] md:items-center">
        <div>
          <p className="label mb-4">{HERO.label}</p>
          <h1
            id="titulo-principal"
            className="font-display font-bold text-[2rem] leading-[1.1] tracking-tight sm:text-5xl md:text-[3.25rem] mb-5"
          >
            {HERO.title}
          </h1>
          <p className="text-lg text-[var(--text-2)] max-w-2xl mb-6">{HERO.subtitle}</p>

          <div className="flex flex-wrap gap-3 mb-8">
            <Link href="/curriculo" className="btn-primary">
              Ver currículo
            </Link>
            <a href="#projeto" className="btn-secondary">
              Ver o sistema
            </a>
          </div>

          <ul className="grid gap-3 sm:grid-cols-3">
            {HERO.proofs.map((p) => (
              <li key={p.value} className="card p-4">
                <p className="font-display font-bold text-2xl text-[var(--accent)]">{p.value}</p>
                <p className="text-sm text-[var(--text-2)]">{p.text}</p>
              </li>
            ))}
          </ul>
        </div>

        <Image
          src="/images/paloma.webp"
          alt="Foto de Paloma Amaral"
          width={916}
          height={1024}
          sizes="240px"
          className="hidden md:block w-60 h-auto rounded-[var(--radius-md)] border border-[var(--border)]"
        />
      </div>
    </section>
  );
}
