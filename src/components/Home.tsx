import { Navbar } from "./Navbar";
import { HeroSection } from "./sections/HeroSection";
import { EngineeringFocusSection } from "./sections/EngineeringFocusSection";
import { AboutSection } from "./sections/AboutSection";
import { SkillsSection } from "./sections/SkillsSection";
import { ProjectsSection } from "./sections/ProjectsSection";
import { ExperienceSection } from "./sections/ExperienceSection";
import { EducationSection } from "./sections/EducationSection";
import { CertificationsSection } from "./sections/CertificationsSection";
import { ContactSection } from "./sections/ContactSection";
import { SeoMetadata } from "./SeoMetadata";
import { profile } from "../content/profile";

export default function Home() {
  return (
    <div className="min-h-screen">
      <SeoMetadata />
      <Navbar />
      <main>
        <HeroSection />
        <EngineeringFocusSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <EducationSection />
        <CertificationsSection />
        <ContactSection />
      </main>
      <footer className="py-8 px-6 border-t border-border bg-card">
        <div className="max-w-5xl mx-auto text-center text-sm text-muted-foreground">
          <p>© 2026 {profile.fullLegalName}. Built with React, TypeScript, and Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  );
}
