import { useEffect } from "react";
import { Clock3, MapPin, Phone } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

import { fadeInUp, revealInView, staggerContainer } from "components/CoachRedesign/animations";
import SectionWrapper from "components/CoachRedesign/SectionWrapper";
import { Button } from "components/ui/button";
import { Card, CardContent } from "components/ui/card";
import { Input } from "components/ui/input";
import { Textarea } from "components/ui/textarea";

function ConsultationFormSection() {
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const scriptId = "kwesforms-script";
    const kwesWindow = window as typeof window & {
      kwesforms?: { init: () => void };
    };
    const initKwesForms = () => kwesWindow.kwesforms?.init();

    if (kwesWindow.kwesforms?.init) {
      initKwesForms();
      return undefined;
    }

    const existingScript = document.getElementById(scriptId) as HTMLScriptElement | null;

    if (existingScript) {
      existingScript.addEventListener("load", initKwesForms);
      return () => existingScript.removeEventListener("load", initKwesForms);
    }

    const script = document.createElement("script");
    script.id = scriptId;
    script.src = "https://kwesforms.com/v2/kwes-script.js";
    script.async = true;
    script.defer = true;
    script.addEventListener("load", initKwesForms);
    document.body.appendChild(script);

    return () => script.removeEventListener("load", initKwesForms);
  }, []);

  return (
    <SectionWrapper
      id="apply"
      eyebrow="Contact"
      title="Apply for coaching."
      description="Send the training context I need to evaluate fit. You will get a direct response with recommended next steps."
      descriptionClassName="text-[#2e4036]/75"
      className="bg-[#efe8dc] py-16 md:py-24"
    >
      <div className="grid gap-8 xl:grid-cols-[0.82fr_1.18fr] xl:items-start">
        <div className="space-y-5">
          <p className="text-[15px] leading-7 text-[#17231d]/75">
            Good applications mention current lifts, training schedule,
            equipment access, injury constraints, and what you want to improve
            over the next 12 to 24 weeks.
          </p>
          <p className="text-sm leading-6 text-[#17231d]/[0.72]">
            Best fit for strength goals, powerlifting prep, technique work,
            mobility support, and consistent performance-focused training.
          </p>
          <div className="overflow-hidden rounded-lg border border-[#cfc4b5] bg-[#f7f4ed]">
            <div className="flex items-center gap-3 border-b border-[#d8d1c4] px-5 py-4 text-[15px] leading-6 text-[#17231d]/[0.78]">
              <Clock3 className="h-4 w-4 shrink-0 text-accent" />
              <span>Typical response time: within 24 to 48 hours</span>
            </div>
            <div className="flex items-center gap-3 border-b border-[#d8d1c4] px-5 py-4 text-[15px] leading-6 text-[#17231d]/[0.78]">
              <MapPin className="h-4 w-4 shrink-0 text-accent" />
              <span>In-person coaching in Fremont and Newark</span>
            </div>
            <div className="flex items-center gap-3 px-5 py-4 text-[15px] leading-6 text-[#17231d]/[0.78]">
              <Phone className="h-4 w-4 shrink-0 text-accent" />
              <span>Online coaching with weekly plan adjustments</span>
            </div>
          </div>
        </div>

        <div className="rounded-lg border border-[#cfc4b5] bg-[#f7f4ed] p-6 md:p-7">
          <form
            className="kwes-form space-y-4"
            action="https://kwesforms.com/api/foreign/forms/aSVFVwmIio7ugCj6l1gO"
          >
            <div className="space-y-1.5">
              <label htmlFor="name" className="text-sm font-medium text-foreground">
                Name
              </label>
              <Input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                placeholder="Your full name"
                data-kw-rules="required|min:2|max:255"
                required
              />
            </div>

            <div className="space-y-1.5">
              <label htmlFor="email" className="text-sm font-medium text-foreground">
                Email
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="you@example.com"
                data-kw-rules="required|email"
                required
              />
            </div>

            <div className="space-y-1.5">
              <label htmlFor="phone" className="text-sm font-medium text-foreground">
                Phone
              </label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                placeholder="(555) 555-5555"
                data-kw-rules="required|min:7|max:20"
                required
              />
            </div>

            <div className="space-y-1.5">
              <label
                htmlFor="trainingGoal"
                className="text-sm font-medium text-[#17231d]"
              >
                Primary training goal
              </label>
              <Input
                id="trainingGoal"
                name="trainingGoal"
                type="text"
                placeholder="Meet prep, stronger squat, return to training"
                data-kw-rules="required|min:4|max:200"
                required
              />
            </div>

            <div className="space-y-1.5">
              <label htmlFor="message" className="text-sm font-medium text-foreground">
                Training context
              </label>
              <Textarea
                id="message"
                name="message"
                placeholder="Current lifts, weekly schedule, injury history, equipment, timeline"
                data-kw-rules="required|min:10|max:1200"
                required
              />
            </div>

            <Button
              type="submit"
              className="coach-button-primary w-full rounded-lg"
              size="lg"
            >
              Apply for Coaching
            </Button>

            <p className="text-xs leading-5 text-[#4d574f]">
              By submitting, you agree to be contacted about coaching options.
            </p>
          </form>
        </div>
      </div>
    </SectionWrapper>
  );
}

export default ConsultationFormSection;
