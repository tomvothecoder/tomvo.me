import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReactPlayer from "react-player";
import { useEffect } from "react";

import { CSSinJS } from "common/types";

const ContactForm: React.FC = () => {
  const styles: CSSinJS = {
    caption: { marginBottom: "10px" },
    socialMedia: { marginTop: "10px" },
    selfie: { justifyContent: "center" },
    igHandle: { fontSize: "20px", marginLeft: "6px" },
  };

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

    const existingScript = document.getElementById(
      scriptId,
    ) as HTMLScriptElement | null;

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
    <div className="has-text-center">
      <div className="columns is-8 is-centered">
        <div
          className="column is-4 is-vcentered"
         
         
        >
          <h1 className="title is-2">Ready to get started?</h1>
          <p className="is-size-5 has-text-dark-grey" style={styles["caption"]}>
            Tell me your goals, current training setup, and what support you are
            looking for. I will follow up with next steps and coaching options.
          </p>

          <figure
            style={styles["selfie"]}
            className="image is-inline-block is-hidden-mobile"
          >
            <div className="player-wrapper">
              <ReactPlayer
                className="react-player fixed-bottom"
                url="https://github.com/tomvothecoder/tomvo.me/raw/main/public/videos/IMG_3290.mp4"
                width="60%"
                height="60%"
                playing={true}
                loop={true}
                muted={true}
                playsinline={true}
              />
            </div>
          </figure>
        </div>
        <div
          className="column card is-4 has-text-left coach-surface-card"
         
         
        >
          <form
            className="kwes-form"
            action="https://kwesforms.com/api/foreign/forms/aSVFVwmIio7ugCj6l1gO"
          >
            <div style={styles["socialMedia"]}>
              <p className="bd-notification is-primary">
                <a
                  href="https://www.instagram.com/coachtomvo/"
                  id="instagram-icon"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon icon={faInstagram} size="2x" />
                  <span style={styles["igHandle"]}>@coachtomvo</span>
                </a>
              </p>
            </div>
            <div className="field">
              <label className="label" htmlFor="name">
                Name
              </label>
              <div className="control">
                <input
                  className="input is-medium"
                  type="text"
                  name="name"
                  data-kw-rules="required|min:2|max:255"
                />
              </div>
            </div>
            <div className="field">
              <label className="label" htmlFor="email">
                Email
              </label>
              <div className="control">
                <input
                  className="input is-medium"
                  type="text"
                  name="email"
                  data-kw-rules="required|email"
                />
              </div>
              <div className="field">
                <label className="label" htmlFor="phone">
                  Phone Number (optional)
                </label>
                <div className="control">
                  <input className="input is-medium" type="text" name="phone" />
                </div>
              </div>
              <div className="field">
                <label className="label" htmlFor="message">
                  Message
                </label>
                <div className="control">
                  <textarea
                    className="textarea is-medium"
                    name="message"
                    data-kw-rules="required|max:1000"
                  ></textarea>
                </div>
              </div>
              <div className="control">
                <button
                  type="submit"
                  className="button is-link is-fullwidth has-text-weight-medium is-medium"
                  data-kw-rules="required|email"
                >
                  Send Message
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
