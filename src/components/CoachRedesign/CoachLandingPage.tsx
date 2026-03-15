import { useEffect, useState } from "react";

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
import { Button } from "components/ui/button";
import { cn } from "lib/utils";

function CoachLandingPage() {
  const [showMobileStickyCta, setShowMobileStickyCta] = useState(false);

  useEffect(() => {
    const toggleStickyCta = () => {
      setShowMobileStickyCta(window.scrollY > 520);
    };

    toggleStickyCta();
    window.addEventListener("scroll", toggleStickyCta, { passive: true });

    return () => window.removeEventListener("scroll", toggleStickyCta);
  }, []);

  return (
    <div className="relative overflow-hidden bg-background pb-20 text-foreground md:pb-0">
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
      <div
        className={cn(
          "fixed inset-x-0 bottom-3 z-40 px-4 transition-all duration-300 md:hidden",
          showMobileStickyCta
            ? "translate-y-0 opacity-100"
            : "pointer-events-none translate-y-6 opacity-0",
        )}
      >
        <div className="mx-auto w-full max-w-md">
          <Button asChild size="lg" className="w-full shadow-soft">
            <a href="#consultation">Book Free Consultation</a>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default CoachLandingPage;
