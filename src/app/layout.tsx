import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { ThemeProvider } from "@/lib/theme-context";
import { themeScript } from "@/lib/theme-script";
import { SITE } from "@/lib/content";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const TITLE = `${SITE.name} | ${SITE.role}`;
const DESCRIPTION =
  "Analista financeiro e de processos e estudante de Engenharia de Software (UNAERP). Financeiro e fiscal de 5 empresas e sistema de gestão próprio em produção. Pitangueiras, SP.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: { default: TITLE, template: `%s | ${SITE.name}` },
  description: DESCRIPTION,
  authors: [{ name: SITE.name }],
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "/",
    siteName: SITE.name,
    title: TITLE,
    description: DESCRIPTION,
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0e0d0c" },
    { media: "(prefers-color-scheme: light)", color: "#f5f2ef" },
  ],
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: SITE.name,
  jobTitle: SITE.role,
  email: SITE.email,
  alumniOf: { "@type": "CollegeOrUniversity", name: "Universidade de Ribeirão Preto (UNAERP)" },
  knowsAbout: [
    "Contas a pagar",
    "Conciliação bancária",
    "Conferência de caixa",
    "NFC-e",
    "NFS-e",
    "ERP",
    "Documentação de processos",
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Pitangueiras",
    addressRegion: "SP",
    addressCountry: "BR",
  },
  ...(SITE.linkedin || SITE.github
    ? { sameAs: [SITE.linkedin, SITE.github].filter(Boolean) }
    : {}),
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${spaceGrotesk.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd).replace(/</g, "\\u003c") }}
        />
      </head>
      <body className="min-h-screen flex flex-col antialiased">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
