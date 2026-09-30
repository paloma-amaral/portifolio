/* Composições gráficas (SVG). São ilustrações da interface, sem dados reais,
 * e não substituem as capturas do ambiente de demonstração. */

type Kind = "pagar" | "conciliacao" | "caixa" | "mutuo" | "sistema" | "site" | "fluxo";

const L = "var(--border)";
const S1 = "var(--bg-3)";
const A = "var(--accent)";
const T = "var(--text-3)";

function Rows({ y, n, w = 250, x = 24, accentEvery = 0 }: { y: number; n: number; w?: number; x?: number; accentEvery?: number }) {
  return (
    <>
      {Array.from({ length: n }).map((_, i) => (
        <g key={i}>
          <rect x={x} y={y + i * 30} width={w} height={22} rx={6} fill={S1} />
          <rect x={x + 10} y={y + i * 30 + 8} width={60 + ((i * 37) % 70)} height={6} rx={3} fill={T} opacity={0.6} />
          <rect
            x={x + w - 52}
            y={y + i * 30 + 6}
            width={40}
            height={10}
            rx={5}
            fill={accentEvery && i % accentEvery === 0 ? A : L}
          />
        </g>
      ))}
    </>
  );
}

function Shell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <rect x="0" y="0" width="480" height="300" fill="var(--bg)" />
      <rect x="0" y="0" width="64" height="300" fill="var(--bg-2)" />
      {[0, 1, 2, 3, 4].map((i) => (
        <rect key={i} x="16" y={24 + i * 32} width="32" height="10" rx="5" fill={i === 1 ? A : L} />
      ))}
      <rect x="84" y="20" width="140" height="12" rx="6" fill={T} opacity="0.7" />
      {children}
    </>
  );
}

export function Art({ kind, label }: { kind: Kind; label: string }) {
  return (
    <svg viewBox="0 0 480 300" role="img" aria-label={label} className="block h-auto w-full">
      {kind === "pagar" && (
        <Shell>
          {[0, 1, 2].map((i) => (
            <g key={i}>
              <rect x={84 + i * 130} y="48" width="118" height="54" rx="10" fill={S1} />
              <rect x={96 + i * 130} y="60" width="50" height="6" rx="3" fill={T} opacity="0.6" />
              <rect x={96 + i * 130} y="76" width="80" height="14" rx="4" fill={i === 0 ? A : L} />
            </g>
          ))}
          <Rows y={122} n={5} w={380} x={84} accentEvery={2} />
        </Shell>
      )}
      {kind === "conciliacao" && (
        <Shell>
          <Rows y={60} n={6} w={170} x={84} />
          <Rows y={60} n={6} w={170} x={296} accentEvery={3} />
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <path key={i} d={`M254 ${71 + i * 30} H296`} stroke={i % 3 === 0 ? A : L} strokeWidth="2" strokeDasharray="4 4" />
          ))}
        </Shell>
      )}
      {kind === "caixa" && (
        <Shell>
          {[46, 80, 62, 104, 90, 118, 70].map((h, i) => (
            <rect key={i} x={92 + i * 34} y={200 - h} width="22" height={h} rx="5" fill={i === 5 ? A : L} />
          ))}
          <Rows y={214} n={3} w={140} x={344} />
          <rect x="84" y="44" width="60" height="8" rx="4" fill={T} opacity="0.5" />
        </Shell>
      )}
      {kind === "mutuo" && (
        <Shell>
          {[0, 1, 2].map((i) => (
            <g key={i}>
              <rect x="84" y={56 + i * 50} width="120" height="34" rx="8" fill={S1} />
              <rect x="94" y={68 + i * 50} width={50 + i * 14} height="8" rx="4" fill={T} opacity="0.6" />
            </g>
          ))}
          <path d="M214 120 H250" stroke={A} strokeWidth="3" strokeLinecap="round" />
          <path d="M242 112 L252 120 L242 128" fill="none" stroke={A} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          <rect x="264" y="44" width="190" height="230" rx="10" fill="var(--bg-2)" stroke={L} />
          <rect x="280" y="62" width="100" height="10" rx="5" fill={A} />
          {Array.from({ length: 9 }).map((_, i) => (
            <rect key={i} x="280" y={90 + i * 20} width={i % 4 === 3 ? 90 : 158} height="6" rx="3" fill={L} />
          ))}
        </Shell>
      )}
      {kind === "sistema" && (
        <Shell>
          <rect x="84" y="48" width="180" height="110" rx="12" fill={S1} />
          {[30, 62, 44, 80, 56, 92].map((h, i) => (
            <rect key={i} x={100 + i * 26} y={146 - h} width="16" height={h} rx="4" fill={i === 5 ? A : L} />
          ))}
          <rect x="280" y="48" width="184" height="110" rx="12" fill={S1} />
          <circle cx="372" cy="103" r="34" fill="none" stroke={L} strokeWidth="12" />
          <path d="M372 69 A34 34 0 0 1 404 114" fill="none" stroke={A} strokeWidth="12" strokeLinecap="round" />
          <Rows y={176} n={3} w={380} x={84} accentEvery={2} />
        </Shell>
      )}
      {kind === "site" && (
        <>
          <rect width="480" height="300" fill="var(--bg)" />
          <rect x="24" y="20" width="60" height="10" rx="5" fill={A} />
          {[0, 1, 2].map((i) => (
            <rect key={i} x={300 + i * 52} y="22" width="40" height="6" rx="3" fill={T} opacity="0.6" />
          ))}
          <rect x="24" y="64" width="250" height="26" rx="8" fill={T} opacity="0.75" />
          <rect x="24" y="100" width="190" height="26" rx="8" fill={T} opacity="0.75" />
          <rect x="24" y="142" width="220" height="8" rx="4" fill={L} />
          <rect x="24" y="158" width="180" height="8" rx="4" fill={L} />
          <rect x="24" y="186" width="96" height="30" rx="8" fill={A} />
          <rect x="300" y="64" width="156" height="152" rx="18" fill={S1} />
          <circle cx="378" cy="120" r="30" fill={L} />
          <rect x="24" y="236" width="132" height="44" rx="10" fill={S1} />
          <rect x="174" y="236" width="132" height="44" rx="10" fill={S1} />
          <rect x="324" y="236" width="132" height="44" rx="10" fill={S1} />
        </>
      )}
      {kind === "fluxo" && (
        <>
          <rect width="480" height="300" fill="var(--bg)" />
          {Array.from({ length: 4 }).map((_, r) =>
            Array.from({ length: 4 }).map((__, c) => (
              <rect key={`${r}${c}`} x={28 + c * 38} y={70 + r * 34} width="32" height="26" rx="5" fill={S1} stroke={L} />
            )),
          )}
          <path d="M196 140 H262" stroke={A} strokeWidth="4" strokeLinecap="round" strokeDasharray="2 10" />
          <path d="M254 130 L266 140 L254 150" fill="none" stroke={A} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
          <rect x="284" y="60" width="172" height="160" rx="14" fill="var(--bg-2)" stroke={L} />
          <Rows y={78} n={4} w={140} x={300} accentEvery={2} />
          <circle cx="370" cy="200" r="0" />
        </>
      )}
    </svg>
  );
}
