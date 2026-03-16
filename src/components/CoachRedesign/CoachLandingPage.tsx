import { useEffect, useState } from "react";

import CoachCredibilitySection from "components/CoachRedesign/CoachCredibilitySection";
import ConsultationFormSection from "components/CoachRedesign/ConsultationFormSection";
import FAQSection from "components/CoachRedesign/FAQSection";
import FinalCTASection from "components/CoachRedesign/FinalCTASection";
import HeroSection from "components/CoachRedesign/HeroSection";
import PricingSection from "components/CoachRedesign/PricingSection";
import CoachSubNav from "components/CoachRedesign/CoachSubNav";
import ServicesSection from "components/CoachRedesign/ServicesSection";
import StatsSection from "components/CoachRedesign/StatsSection";
// import TestimonialsSection from "components/CoachRedesign/TestimonialsSection";
import TransformationGallery from "components/CoachRedesign/TransformationGallery";
import { Button } from "components/ui/button";
import { cn } from "lib/utils";

// Scroll distance at which the mobile sticky CTA should become visible.
const MOBILE_STICKY_CTA_SCROLL_THRESHOLD_PX = 520;

function CoachLandingPage() {
  const [showMobileStickyCta, setShowMobileStickyCta] = useState(false);

  useEffect(() => {
    const toggleStickyCta = () => {
      setShowMobileStickyCta(
        window.scrollY > MOBILE_STICKY_CTA_SCROLL_THRESHOLD_PX,
      );
    };
    toggleStickyCta();
    window.addEventListener("scroll", toggleStickyCta, { passive: true });

    return () => window.removeEventListener("scroll", toggleStickyCta);
  }, []);

  return (
    <div className="relative bg-background pb-20 text-foreground md:pb-0">
      <div className="pointer-events-none absolute inset-x-0 top-10 h-[420px] bg-gradient-to-b from-accent/10 via-transparent to-transparent md:top-12" />
      <div className="relative">
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
