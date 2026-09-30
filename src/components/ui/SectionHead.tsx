import { Reveal } from "./motion";

export function SectionHead({
  id,
  eyebrow,
  title,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  children?: React.ReactNode;
}) {
  return (
    <Reveal className="mb-12 max-w-3xl">
      <p className="label mb-4">{eyebrow}</p>
      <h2 id={id} className="display-lg">
        {title}
      </h2>
      {children && <div className="lead mt-5">{children}</div>}
    </Reveal>
  );
}
