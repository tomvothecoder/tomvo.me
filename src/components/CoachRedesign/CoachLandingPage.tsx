import ApproachSection from "components/CoachRedesign/ApproachSection";
import CoachCredibilitySection from "components/CoachRedesign/CoachCredibilitySection";
import ConsultationFormSection from "components/CoachRedesign/ConsultationFormSection";
import HeroSection from "components/CoachRedesign/HeroSection";
import ResultsSection from "components/CoachRedesign/ResultsSection";
import ServicesSection from "components/CoachRedesign/ServicesSection";
import "components/CoachRedesign/CoachLandingPage.css";

function CoachLandingPage() {
  return (
    <main id="main-content" className="strength-site" tabIndex={-1}>
      <HeroSection />
      <ServicesSection />
      <ApproachSection />
      <ResultsSection />
      <CoachCredibilitySection />
      <ConsultationFormSection />
    </main>
  );
}

export default CoachLandingPage;
