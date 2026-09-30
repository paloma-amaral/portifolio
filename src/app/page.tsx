import { Header } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { SystemCaseSection } from "@/components/sections/SystemCaseSection";
import { TimelineSection } from "@/components/sections/TimelineSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { EducationSection } from "@/components/sections/EducationSection";
import { ContactSection } from "@/components/sections/ContactSection";
import {
  ServicesSection,
  WorksSection,
  ProcessSection,
  ClientContactSection,
} from "@/components/sections/ClientSections";

export default function HomePage() {
  return (
    <>
      <a href="#conteudo" className="skip-link">
        Pular para o conteúdo
      </a>
      <Header />
      <main id="conteudo" className="flex-1">
        <HeroSection />

        {/* O HTML traz os dois caminhos; o perfil escolhido (data-profile) mostra um. */}
        <div className="path-recrutador">
          <SystemCaseSection />
          <TimelineSection />
          <SkillsSection />
          <EducationSection />
          <ContactSection />
        </div>

        <div className="path-cliente">
          <ServicesSection />
          <WorksSection />
          <ProcessSection />
          <ClientContactSection />
        </div>
      </main>
      <Footer />
    </>
  );
}
