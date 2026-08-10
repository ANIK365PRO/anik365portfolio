import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { QualificationSection } from "@/components/QualificationSection";
import { SkillsSection } from "@/components/SkillsSection";
import { TechnologiesSection } from "@/components/TechnologiesSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      
      <AboutSection />
      <TechnologiesSection />
      <SkillsSection />

      <QualificationSection />
      <ProjectsSection />
      <ContactSection />

      <Footer />
    </>
  );
}
