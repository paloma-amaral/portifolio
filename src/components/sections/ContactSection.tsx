import { CONTACT, SITE } from "@/lib/content";

export function ContactSection() {
  return (
    <section id="contato" className="section border-t border-[var(--border)]" aria-labelledby="titulo-contato">
      <div className="section-wrap max-w-3xl">
        <h2 id="titulo-contato" className="section-title">
          {CONTACT.title}
        </h2>
        <p className="text-lg text-[var(--text-2)] mb-8">{CONTACT.text}</p>

        <ul className="space-y-2 mb-8">
          <li>
            <span className="label mr-3">E-mail</span>
            <a className="link-accent" href={`mailto:${SITE.email}`}>
              {SITE.email}
            </a>
          </li>
          {SITE.linkedin && (
            <li>
              <span className="label mr-3">LinkedIn</span>
              <a className="link-accent" href={SITE.linkedin} target="_blank" rel="noopener noreferrer">
                {SITE.linkedin.replace(/^https?:\/\//, "")}
              </a>
            </li>
          )}
          {SITE.github && (
            <li>
              <span className="label mr-3">GitHub</span>
              <a className="link-accent" href={SITE.github} target="_blank" rel="noopener noreferrer">
                {SITE.github.replace(/^https?:\/\//, "")}
              </a>
            </li>
          )}
          <li>
            <span className="label mr-3">Local</span>
            {SITE.location}
          </li>
        </ul>

        <a href={`mailto:${SITE.email}`} className="btn-primary">
          Enviar e-mail
        </a>
      </div>
    </section>
  );
}
