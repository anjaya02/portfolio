import CustomCursor from "@/components/custom-cursor";
import Navbar from "@/components/navbar";
import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import ProjectsSection from "@/components/projects-section";
import SkillsSection from "@/components/skills-section";
import CertificationsSection from "@/components/certifications-section";
import EducationSection from "@/components/education-section";
import ExperienceSection from "@/components/experience-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";
import BackToTop from "@/components/back-to-top";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-purple-950/20 to-background text-foreground cursor-none transition-colors duration-300 relative overflow-hidden">
      {/* Enhanced background effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Animated gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl float opacity-60" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl float-delayed opacity-60" />
        <div className="absolute top-3/4 left-1/2 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl float opacity-40" />

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 grid-background opacity-20" />

        {/* Subtle animated lines */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-0.5 h-full bg-gradient-to-b from-transparent via-purple-500/20 to-transparent float" />
          <div className="absolute top-0 right-1/3 w-0.5 h-full bg-gradient-to-b from-transparent via-blue-500/20 to-transparent float-delayed" />
        </div>
      </div>

      <CustomCursor />
      <Navbar />
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <CertificationsSection />
        <EducationSection />
        <ExperienceSection />
        <ContactSection />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
