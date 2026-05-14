import CoachCredibilitySection from "components/CoachRedesign/CoachCredibilitySection";
import ConsultationFormSection from "components/CoachRedesign/ConsultationFormSection";
import FAQSection from "components/CoachRedesign/FAQSection";
import HeroSection from "components/CoachRedesign/HeroSection";
import ProtocolSection from "components/CoachRedesign/ProtocolSection";
import ServicesSection from "components/CoachRedesign/ServicesSection";
import StatsSection from "components/CoachRedesign/StatsSection";
import TransformationGallery from "components/CoachRedesign/TransformationGallery";

function CoachLandingPage() {
  return (
    <main className="coach-cinematic bg-[#f7f4ed] text-[#141816]">
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <TransformationGallery />
      <ProtocolSection />
      <CoachCredibilitySection />
      <FAQSection />
      <ConsultationFormSection />
    </main>
  );
}

export default CoachLandingPage;
