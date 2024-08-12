import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import selfPortrait from "assets/me.jpg";
import { CSSinJS } from "common/types";

import kwesforms from "kwesforms";
import { useEffect } from "react";

const ContactForm: React.FC = () => {
  const styles: CSSinJS = {
    socialMedia: { marginTop: "10px" },
    selfie: { justifyContent: "center", width: "55%" },
  };

  useEffect(() => {
    kwesforms.init();
  }, []);

  return (
    <div className="has-text-centered">
      <div className="columns is-8 is-centered">
        <div
          className="column is-4 is-vcentered"
          data-aos="fade-in"
          data-aos-delay="100"
        >
          <figure style={styles["selfie"]} className="image is-inline-block">
            <img src={selfPortrait} alt="me" />
          </figure>
          <h1 className="title is-1">Let's Connect</h1>

          <p className="is-size-5 has-text-dark-grey">
            I want to learn about your exercise aspirations. Message me here or
            on Instagram and I'll get back to you soon.
          </p>
          <div style={styles["socialMedia"]}>
            <p className="bd-notification is-primary">
              <a
                href="https://www.instagram.com/coachtomvo/"
                id="instagram-icon"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faInstagram} size="3x" />
              </a>
            </p>
          </div>
        </div>
        <div
          className="column card is-4 has-text-left"
          data-aos="fade-in"
          data-aos-delay="100"
        >
          <form
            className="kwes-form"
            action="https://kwesforms.com/api/foreign/forms/aSVFVwmIio7ugCj6l1gO"
          >
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
