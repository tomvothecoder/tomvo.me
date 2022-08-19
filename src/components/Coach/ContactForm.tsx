import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CSSinJS } from "common/types";

const ContactForm: React.FC = () => {
  const styles: CSSinJS = { socialMedia: { marginTop: "10px" } };

  return (
    <div className="has-text-centered">
      <div className="columns is-10 is-centered ">
        <div
          className="column is-4 has-text-left"
          data-aos="fade-in"
          data-aos-delay="100"
        >
          <h1 className="title is-1">Let's Connect</h1>
          <p className="is-size-4 ">
            I'm excited to learn more about your aspirations and how I can help
            you reach them. Shoot me a message and I'll get back to you soon!
          </p>
          <div style={styles["socialMedia"]}>
            <p className="bd-notification is-primary">
              <a
                href="https://www.instagram.com/tomvodelaghetto/"
                id="linkedin-icon"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faInstagram} size="3x" />
              </a>
            </p>
          </div>
        </div>
        <div
          className="column is-6 has-text-left"
          data-aos="fade-in"
          data-aos-delay="100"
        >
          <div className="field">
            <label className="label">Name</label>
            <div className="control">
              <input className="input is-medium" type="text" />
            </div>
          </div>
          <div className="field">
            <label className="label">Email</label>
            <div className="control">
              <input className="input is-medium" type="text" />
            </div>
          </div>
          <div className="field">
            <label className="label">Message</label>
            <div className="control">
              <textarea className="textarea is-medium"></textarea>
            </div>
          </div>
          <div className="control">
            <button
              type="submit"
              className="button is-link is-fullwidth has-text-weight-medium is-medium"
            >
              Send Message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
