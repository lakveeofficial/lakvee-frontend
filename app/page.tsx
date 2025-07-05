import AboutSection from "@/components/AboutSection";
import AdmissionSection from "@/components/AdmissionComponent";
import ContactSection from "@/components/ContactSection";
import HeaderComponent from "@/components/HeaderComponent";
import HeroSection from "@/components/HeroSection";
import ProjectSection from "@/components/ProjectSection";
import ServicesComponent from "@/components/ServicesComponent";

export default function Home() {
  return (
    <div className="">
      <div className="relative h-screen overflow-hidden">
        <div className="absolute inset-0 top-1/2 h-full bg-hero bg-no-repeat bg-center bg-contain z-0" />
        <div className="absolute inset-0 bg-black bg-opacity-10 z-10" />
        <div className="relative z-20 max-w-screen-2xl mx-auto">
          <HeaderComponent />
          <HeroSection />
        </div>
      </div>
      <AboutSection />
      <ServicesComponent />
      <ProjectSection />
      <AdmissionSection />
      <ContactSection />
    </div>
  );
}
