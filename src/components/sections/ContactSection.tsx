import Link from "next/link";
import { CONTACT, SITE } from "@/lib/content";
import { Reveal } from "@/components/ui/motion";

export function ContactLinks() {
  return (
    <ul className="mt-8 flex flex-wrap gap-x-8 gap-y-2 text-[var(--text-2)]">
      <li>
        <span className="label mr-2">E-mail</span>
        <a className="link-accent" href={`mailto:${SITE.email}`}>
          {SITE.email}
        </a>
      </li>
      {SITE.linkedin && (
        <li>
          <span className="label mr-2">LinkedIn</span>
          <a className="link-accent" href={SITE.linkedin} target="_blank" rel="noopener noreferrer">
            {SITE.linkedin.replace(/^https?:\/\//, "")}
          </a>
        </li>
      )}
      {SITE.github && (
        <li>
          <span className="label mr-2">GitHub</span>
          <a className="link-accent" href={SITE.github} target="_blank" rel="noopener noreferrer">
            {SITE.github.replace(/^https?:\/\//, "")}
          </a>
        </li>
      )}
      <li>
        <span className="label mr-2">Local</span>
        {SITE.location}
      </li>
    </ul>
  );
}

export function ContactSection() {
  return (
    <section id="contato" aria-labelledby="titulo-contato" className="section-wrap section border-t border-[var(--border)]">
      <Reveal className="bento relative p-8 md:p-14">
        <div className="aurora" aria-hidden="true" />
        <h2 id="titulo-contato" className="display-lg relative">
          {CONTACT.title}
        </h2>
        <p className="lead relative mt-5 max-w-2xl">{CONTACT.text}</p>
        <p className="relative mt-3 max-w-2xl text-[var(--text-2)]">
          Para um sistema ou site, escreva com uma descrição da rotina ou do que você precisa. Não publico preço:
          cada trabalho é orçado depois da conversa.
        </p>
        <div className="relative mt-8 flex flex-wrap gap-3">
          <a href={`mailto:${SITE.email}`} className="btn-primary">
            Enviar e-mail
          </a>
          <Link href="/curriculo" className="btn-secondary">
            Ver currículo
          </Link>
        </div>
        <div className="relative">
          <ContactLinks />
        </div>
      </Reveal>
    </section>
  );
}
