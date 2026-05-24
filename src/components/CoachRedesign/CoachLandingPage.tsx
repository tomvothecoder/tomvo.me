import CoachCredibilitySection from "components/CoachRedesign/CoachCredibilitySection";
import ConsultationFormSection from "components/CoachRedesign/ConsultationFormSection";
import FAQSection from "components/CoachRedesign/FAQSection";
import HeroSection from "components/CoachRedesign/HeroSection";
import PricingSection from "components/CoachRedesign/PricingSection";
import ServicesSection from "components/CoachRedesign/ServicesSection";
import StatsSection from "components/CoachRedesign/StatsSection";
import TransformationGallery from "components/CoachRedesign/TransformationGallery";

function CoachLandingPage() {
  return (
    <main className="coach-cinematic bg-[#f7f4ed] text-[#141816]">
      <div className="noise-overlay" aria-hidden="true" />
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <TransformationGallery />
      <CoachCredibilitySection />
      <PricingSection />
      <FAQSection />
      <ConsultationFormSection />
    </main>
  );
}

export default CoachLandingPage;
