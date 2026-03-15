import CoachCredibilitySection from "components/CoachRedesign/CoachCredibilitySection";
import ConsultationFormSection from "components/CoachRedesign/ConsultationFormSection";
import FAQSection from "components/CoachRedesign/FAQSection";
import FinalCTASection from "components/CoachRedesign/FinalCTASection";
import HeroSection from "components/CoachRedesign/HeroSection";
import PricingSection from "components/CoachRedesign/PricingSection";
import ServicesSection from "components/CoachRedesign/ServicesSection";
import StatsSection from "components/CoachRedesign/StatsSection";
// import TestimonialsSection from "components/CoachRedesign/TestimonialsSection";
import TransformationGallery from "components/CoachRedesign/TransformationGallery";

function CoachLandingPage() {
  return (
    <div className="relative overflow-hidden bg-background text-foreground">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[420px] bg-gradient-to-b from-accent/10 via-transparent to-transparent" />
      <div className="relative">
        <HeroSection />
        <StatsSection />
        <ServicesSection />
        <TransformationGallery />
        {/* Intentionally hidden until approved client quotes are collected. */}
        {/* <TestimonialsSection /> */}
        <PricingSection />
        <CoachCredibilitySection />
        <FAQSection />
        <ConsultationFormSection />
        <FinalCTASection />
      </div>
    </div>
  );
}

export default CoachLandingPage;
