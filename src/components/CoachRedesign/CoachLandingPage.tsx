import CoachCredibilitySection from "components/CoachRedesign/CoachCredibilitySection";
import ConsultationFormSection from "components/CoachRedesign/ConsultationFormSection";
import FAQSection from "components/CoachRedesign/FAQSection";
import HeroSection from "components/CoachRedesign/HeroSection";
import PricingSection from "components/CoachRedesign/PricingSection";
import CoachSubNav from "components/CoachRedesign/CoachSubNav";
import ServicesSection from "components/CoachRedesign/ServicesSection";
import StatsSection from "components/CoachRedesign/StatsSection";
// import TestimonialsSection from "components/CoachRedesign/TestimonialsSection";
import TransformationGallery from "components/CoachRedesign/TransformationGallery";

function CoachLandingPage() {
  return (
    <div className="bg-[#eef1eb] text-[#162018]">
      <CoachSubNav />
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
    </div>
  );
}

export default CoachLandingPage;
