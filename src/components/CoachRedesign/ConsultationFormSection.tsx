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
      id="consultation"
      eyebrow="Consultation"
      title="Book your free consultation"
      description="Share your goals and training context. You will receive a response with next-step recommendations."
      className="bg-surface"
    >
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <motion.div
          variants={staggerContainer}
          {...(prefersReducedMotion ? {} : revealInView)}
          className="space-y-4"
        >
          <motion.p variants={fadeInUp} className="text-base leading-relaxed text-muted">
            This call helps identify your current bottlenecks, timeline, and the
            right coaching package for your goals.
          </motion.p>

          <motion.ul variants={fadeInUp} className="space-y-3 text-sm text-muted">
            <li className="flex items-center gap-3">
              <Clock3 className="h-4 w-4 text-accent" />
              <span>Typical response time: within 24 hours</span>
            </li>
            <li className="flex items-center gap-3">
              <MapPin className="h-4 w-4 text-accent" />
              <span>Service area: Fremont, Newark, Santa Clara</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="h-4 w-4 text-accent" />
              <span>Private coaching and structured online support</span>
            </li>
          </motion.ul>
        </motion.div>

        <motion.div variants={fadeInUp} {...(prefersReducedMotion ? {} : revealInView)}>
          <Card>
            <CardContent className="pt-6">
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
                  <label htmlFor="trainingGoal" className="text-sm font-medium text-foreground">
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

                <p className="text-xs text-muted">
                  By submitting, you agree to be contacted about coaching options.
                </p>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}

export default ConsultationFormSection;
