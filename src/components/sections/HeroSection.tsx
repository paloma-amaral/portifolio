import Image from "next/image";
import { HERO, STACK } from "@/lib/content";
import { Art } from "@/components/ui/Art";
import { Browser, Phone } from "@/components/ui/Device";
import { Tilt } from "@/components/ui/motion";
import { ProfileSelector } from "./ProfileSelector";

export function HeroSection() {
  const stack = [...STACK, ...STACK];

  return (
    <section id="inicio" aria-labelledby="titulo-principal" className="relative">
      <div className="aurora" aria-hidden="true" />

      <div className="section-wrap relative grid gap-14 pb-16 pt-14 md:pt-20 lg:grid-cols-[1.1fr_1fr] lg:items-center lg:gap-10">
        <div>
          <p className="rise label mb-5" style={{ animationDelay: "0.05s" }}>
            {HERO.role}
          </p>
          <h1 id="titulo-principal" className="rise display-xl" style={{ animationDelay: "0.12s" }}>
            Paloma
            <br />
            <span className="text-grad">Amaral</span>
          </h1>
          <p
            className="rise mt-6 font-display text-2xl font-medium tracking-tight sm:text-3xl"
            style={{ animationDelay: "0.22s" }}
          >
            {HERO.tagline}
          </p>
          <p className="rise lead mt-3 max-w-xl" style={{ animationDelay: "0.3s" }}>
            {HERO.sub}
          </p>

          <div className="rise mt-9" style={{ animationDelay: "0.4s" }}>
            <ProfileSelector />
          </div>
        </div>

        <div className="rise relative mx-auto w-full max-w-md lg:max-w-none" style={{ animationDelay: "0.25s" }}>
          <Tilt className="relative">
            <div className="relative ml-auto w-[78%] overflow-hidden rounded-[28px] border border-[var(--border)] bg-[var(--bg-3)]">
              <div className="absolute inset-0 bg-[var(--grad)] opacity-25" aria-hidden="true" />
              <Image
                src="/images/paloma.webp"
                alt="Foto de Paloma Amaral"
                width={800}
                height={1000}
                sizes="(min-width: 1024px) 380px, 70vw"
                priority
                className="relative block h-auto w-full"
              />
            </div>

            <div className="absolute -left-2 bottom-[-8%] w-[68%] sm:-left-6 lg:-left-10">
              <Browser title="Sistema de gestão">
                <Art kind="sistema" label="Ilustração da interface do sistema de gestão" />
              </Browser>
            </div>

            <div className="absolute -right-1 bottom-[-14%] hidden w-[22%] sm:block">
              <Phone>
                <Art kind="pagar" label="Ilustração da interface no celular" />
              </Phone>
            </div>
          </Tilt>
          <p className="mt-24 text-xs text-[var(--text-3)] sm:mt-28">
            Ilustração da interface. Capturas do ambiente de demonstração, com dados fictícios, ficam na seção do projeto.
          </p>
        </div>
      </div>

      <div className="marquee" aria-label="Tecnologias usadas nos meus projetos">
        <div className="marquee-track">
          {stack.map((t, i) => (
            <span
              key={`${t}-${i}`}
              aria-hidden={i >= STACK.length}
              className="flex items-center gap-8 px-4 py-4 font-display text-lg font-semibold text-[var(--text-2)]"
            >
              {t}
              <span aria-hidden="true" className="text-[var(--accent)]">
                ◆
              </span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
