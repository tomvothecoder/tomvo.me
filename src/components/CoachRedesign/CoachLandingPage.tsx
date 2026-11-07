import CoachCredibilitySection from "components/CoachRedesign/CoachCredibilitySection";
import ConsultationFormSection from "components/CoachRedesign/ConsultationFormSection";
import FAQSection from "components/CoachRedesign/FAQSection";
import HeroSection from "components/CoachRedesign/HeroSection";
import PricingSection from "components/CoachRedesign/PricingSection";
import ServicesSection from "components/CoachRedesign/ServicesSection";
import StatsSection from "components/CoachRedesign/StatsSection";
import TransformationGallery from "components/CoachRedesign/TransformationGallery";
import "components/CoachRedesign/CoachLandingPage.css";

function CoachLandingPage() {
  return (
    <main id="main-content" className="strength-site" tabIndex={-1}>
      <HeroSection />
      <StatsSection />
      <PricingSection />
      <ServicesSection />
      <TransformationGallery />
      <CoachCredibilitySection />
      <FAQSection />
      <ConsultationFormSection />
    </main>
  );
}

export default CoachLandingPage;
