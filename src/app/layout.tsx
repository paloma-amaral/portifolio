import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { ThemeProvider } from "@/lib/theme-context";
import { ProfileProvider } from "@/lib/ProfileContext";
import { themeScript } from "@/lib/theme-script";
import "./globals.css";

/* ── Google Fonts via next/font (zero layout shift) ──────────────────── */
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

/* ── SEO Metadata ─────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: {
    default: "Paloma Amaral | Engenharia de Software & Operações",
    template: "%s | Paloma Amaral",
  },
  description:
    "Portfólio de Paloma Amaral — Estudante de Engenharia de Software (UNAERP) com experiência real em rotinas fiscais, financeiras e administrativas. Conectando operação e tecnologia.",
  keywords: [
    "engenharia de software",
    "analista de implantação",
    "operações de negócios",
    "Power BI",
    "SQL",
    "Python",
    "NF-e",
    "conciliação bancária",
    "UNAERP",
    "portfólio",
    "Paloma Amaral",
    "digitalização de processos",
    "análise de dados",
  ],
  authors: [{ name: "Paloma Amaral" }],
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "Paloma Amaral — Portfólio",
    title: "Paloma Amaral | Engenharia de Software & Operações",
    description:
      "Conectando a rotina operacional, financeira e fiscal à tecnologia. Vivência prática em processos administrativos e estruturação de sistemas.",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0d0514" },
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
  ],
};

/* ── Root Layout ──────────────────────────────────────────────────────── */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${spaceGrotesk.variable} h-full scroll-smooth`}
      suppressHydrationWarning
    >
      <head>
        {/* Anti-FOUC: aplicar tema antes do primeiro render */}
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="noise min-h-full flex flex-col antialiased">
        <ProfileProvider>
          <ThemeProvider>{children}</ThemeProvider>
        </ProfileProvider>
      </body>
    </html>
  );
}
