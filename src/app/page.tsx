import { Header } from "@/components/layout/Navbar";
import { BottomNavigation } from "@/components/layout/BottomNavigation";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { TimelineSection } from "@/components/sections/TimelineSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { FrentesSection } from "@/components/sections/FrentesSection";
import { LabSection } from "@/components/sections/LabSection";
import { ShowcaseSection } from "@/components/sections/ShowcaseSection";
import { ScenariosSection } from "@/components/sections/ScenariosSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function HomePage() {
  return (
    <>
      <Header />
      <BottomNavigation />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <TimelineSection />
        <ProjectsSection />
        <FrentesSection />
        <LabSection />
        <ShowcaseSection />
        <ScenariosSection />
        <SkillsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
