import { useEffect, useRef } from "react";
import { ArrowUpRight } from "lucide-react";

function ConsultationFormSection() {
  const initialized = useRef(false);

  useEffect(() => {
    const scriptId = "kwesforms-script";
    const kwesWindow = window as typeof window & {
      kwesforms?: { init: () => void };
      kwesFormsInitialize?: () => void;
    };
    const initKwesForms = () => {
      if (initialized.current) return;
      if (typeof kwesWindow.kwesFormsInitialize === "function") {
        kwesWindow.kwesFormsInitialize();
        initialized.current = true;
      } else if (typeof kwesWindow.kwesforms?.init === "function") {
        kwesWindow.kwesforms.init();
        initialized.current = true;
      }
    };
    // The current CDN script initializes itself on first load. Only explicitly
    // reinitialize it for a newly mounted form after client-side navigation.
    const onScriptLoad = () => {
      if (typeof kwesWindow.kwesFormsInitialize === "function") {
        initialized.current = true;
      } else {
        initKwesForms();
      }
    };

    if (
      typeof kwesWindow.kwesFormsInitialize === "function" ||
      typeof kwesWindow.kwesforms?.init === "function"
    ) {
      initKwesForms();
      return undefined;
    }

    const existingScript = document.getElementById(
      scriptId,
    ) as HTMLScriptElement | null;

    if (existingScript) {
      existingScript.addEventListener("load", onScriptLoad);
      return () => existingScript.removeEventListener("load", onScriptLoad);
    }

    const script = document.createElement("script");
    script.id = scriptId;
    script.src = "https://kwesforms.com/v2/kwes-script.js";
    script.async = true;
    script.defer = true;
    script.addEventListener("load", onScriptLoad);
    document.body.appendChild(script);

    return () => script.removeEventListener("load", onScriptLoad);
  }, []);

  return (
    <section
      id="apply"
      className="strength-apply"
      aria-labelledby="apply-title"
    >
      <div className="strength-apply-copy">
        <p className="strength-entry">
          <span>06 /</span> Your next step
        </p>
        <h2 id="apply-title">
          Let’s talk <br />
          about your training.
        </h2>
        <p>
          Tell me where you’re starting.
          <br />
          And where you’d like to go.
        </p>
        <div className="strength-apply-note">
          <p>
            I’ll read your note and send back clear next steps. No need to have
            it all figured out.
          </p>
          <p>Typically replies within 24–48 hours.</p>
        </div>
      </div>

      <div className="strength-form-wrap">
        <form
          className="kwes-form strength-form"
          action="https://kwesforms.com/api/foreign/forms/aSVFVwmIio7ugCj6l1gO"
          method="post"
          aria-describedby="application-help"
        >
          <p
            id="application-help"
            className="strength-form-privacy strength-form-wide"
          >
            All fields are required.
          </p>
          <div>
            <label htmlFor="name">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              placeholder="Your full name"
              data-kw-rules="required|min:2|max:255"
              required
            />
          </div>

          <div>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="you@example.com"
              data-kw-rules="required|email"
              required
            />
          </div>

          <div>
            <label htmlFor="phone">Phone</label>
            <input
              id="phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              placeholder="(555) 555-5555"
              data-kw-rules="required|min:7|max:20"
              required
            />
          </div>

          <div>
            <label htmlFor="trainingGoal">What are you working toward?</label>
            <input
              id="trainingGoal"
              name="trainingGoal"
              type="text"
              placeholder="Your training goal"
              data-kw-rules="required|min:4|max:200"
              required
            />
          </div>

          <div className="strength-form-wide">
            <label htmlFor="message">Tell me where you’re starting</label>
            <textarea
              id="message"
              name="message"
              placeholder="What has been going well? What do you want to improve? Anything I should know before we start?"
              data-kw-rules="required|min:10|max:1200"
              required
              rows={4}
            />
          </div>

          <button type="submit" className="strength-button strength-form-wide">
            <span>Send coaching request</span>
            <ArrowUpRight aria-hidden="true" />
          </button>

          <p className="strength-form-privacy strength-form-wide">
            By submitting, you agree to be contacted about coaching options.
          </p>
        </form>
      </div>
    </section>
  );
}

export default ConsultationFormSection;
