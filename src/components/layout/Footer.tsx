import { SITE } from "@/lib/content";

export function Footer() {
  return (
    <footer className="no-print border-t border-[var(--border)] py-10">
      <div className="section-wrap flex flex-col gap-2 text-sm text-[var(--text-2)] md:flex-row md:items-center md:justify-between">
        <p>
          © {new Date().getFullYear()} {SITE.name} · {SITE.location}
        </p>
        <p>
          <a className="link-accent" href={`mailto:${SITE.email}`}>
            {SITE.email}
          </a>
          {SITE.linkedin && (
            <>
              {" · "}
              <a className="link-accent" href={SITE.linkedin} target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </>
          )}
          {SITE.github && (
            <>
              {" · "}
              <a className="link-accent" href={SITE.github} target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </>
          )}
        </p>
      </div>
    </footer>
  );
}
