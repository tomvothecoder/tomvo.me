import { useEffect } from "react";
import { Clock3, MapPin, Phone } from "lucide-react";

import SectionWrapper from "components/CoachRedesign/SectionWrapper";
import { Button } from "components/ui/button";
import { Input } from "components/ui/input";
import { Textarea } from "components/ui/textarea";

function ConsultationFormSection() {
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
      id="consultation"
      title="Book your free consultation"
      description="Share your goals and training context. You will receive a response with next-step recommendations."
      className="py-14 md:py-20"
    >
      <div className="grid gap-8 xl:grid-cols-[0.82fr_1.18fr] xl:items-start">
        <div className="space-y-5">
          <p className="text-[15px] leading-7 text-foreground/75">
            Share your training goals, schedule, and current baseline. You will
            get a clear recommendation on fit, format, and next steps.
          </p>
          <p className="text-sm leading-6 text-foreground/72">
            Best fit for clients who want measurable strength progress, meet
            prep support, or more consistent training structure.
          </p>
          <div className="divide-y divide-border border border-border bg-surface">
            <div className="flex items-center gap-3 px-5 py-4 text-[15px] leading-6 text-foreground/78">
              <Clock3 className="h-4 w-4 shrink-0 text-accent" />
              <span>Typical response time: within 24 hours</span>
            </div>
            <div className="flex items-center gap-3 px-5 py-4 text-[15px] leading-6 text-foreground/78">
              <MapPin className="h-4 w-4 shrink-0 text-accent" />
              <span>In-person coaching in Fremont and Newark</span>
            </div>
            <div className="flex items-center gap-3 px-5 py-4 text-[15px] leading-6 text-foreground/78">
              <Phone className="h-4 w-4 shrink-0 text-accent" />
              <span>Online coaching with weekly plan adjustments</span>
            </div>
          </div>
        </div>

        <div className="border border-foreground/15 bg-surface p-6 md:p-7">
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
                className="text-sm font-medium text-foreground"
              >
                Training Goal
              </label>
              <Input
                id="trainingGoal"
                name="trainingGoal"
                type="text"
                placeholder="Strength, fat loss, meet prep, or performance"
                data-kw-rules="required|min:4|max:200"
                required
              />
            </div>

            <div className="space-y-1.5">
              <label htmlFor="message" className="text-sm font-medium text-foreground">
                Message (optional)
              </label>
              <Textarea
                id="message"
                name="message"
                placeholder="Share your current routine, timeline, or concerns"
                data-kw-rules="max:1000"
              />
            </div>

            <Button type="submit" className="w-full" size="lg">
              Book Free Consultation
            </Button>

            <p className="text-xs leading-5 text-muted">
              By submitting, you agree to be contacted about coaching options.
            </p>
          </form>
        </div>
      </div>
    </SectionWrapper>
  );
}

export default ConsultationFormSection;
