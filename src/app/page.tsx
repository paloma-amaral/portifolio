import { Header } from "@/components/layout/Navbar";
import { BottomNavigation } from "@/components/layout/BottomNavigation";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { ScenariosSection } from "@/components/sections/ScenariosSection";
import { TimelineSection } from "@/components/sections/TimelineSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { FrentesSection } from "@/components/sections/FrentesSection";
import { LabSection } from "@/components/sections/LabSection";
import { ShowcaseSection } from "@/components/sections/ShowcaseSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { ScrollToTop } from "@/components/ui/ScrollToTop";
import { Expander } from "@/components/ui/Expander";

export default function HomePage() {
  return (
    <>
      <Header />
      <BottomNavigation />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ScenariosSection />
        <TimelineSection />
        <SkillsSection />
        {/* Seção Laboratório com Wrapper Escuro/Imersivo */}
        <div id="laboratorio" className="force-dark py-32 relative overflow-hidden flex flex-col items-center bg-[#0a0a0c] text-[var(--text-1)]">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(var(--accent-rgb),0.15),transparent_50%)] pointer-events-none" />
          
          <div className="text-center mb-12 relative z-10 w-full max-w-4xl px-4">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="section-number text-white/50 border-white/20">06</span>
              <span className="font-mono text-[10px] uppercase tracking-widest text-[var(--accent)]">Parte técnica</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-4">
              Antes e depois, ferramentas <span className="text-[var(--accent)] text-transparent bg-clip-text bg-gradient-to-r from-[var(--accent)] to-purple-500">e código.</span>
            </h2>
            <p className="text-sm md:text-base text-white/60 max-w-lg mx-auto leading-relaxed">
              Situações reais em antes e depois, simuladores interativos e os projetos com código.
            </p>
          </div>

          <div className="w-full max-w-7xl mx-auto px-4 relative z-10 flex flex-col gap-24">
            <FrentesSection />
            <LabSection />
            <ShowcaseSection />
          </div>
        </div>
        <ContactSection />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
