import { Header } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { SystemCaseSection } from "@/components/sections/SystemCaseSection";
import { TimelineSection } from "@/components/sections/TimelineSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { EducationSection } from "@/components/sections/EducationSection";
import { ServicesSection, WorksSection } from "@/components/sections/ClientSections";
import { ContactSection } from "@/components/sections/ContactSection";

export default function HomePage() {
  return (
    <>
      <a href="#conteudo" className="skip-link">
        Pular para o conteúdo
      </a>
      <Header />
      <main id="conteudo" className="flex-1">
        <HeroSection />
        <AboutSection />
        <SystemCaseSection />
        <TimelineSection />
        <SkillsSection />
        <EducationSection />
        <ServicesSection />
        <WorksSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
