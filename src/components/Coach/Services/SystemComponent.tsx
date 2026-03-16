import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CSSinJS } from "common/types";

type Props = {
  icon: IconDefinition;
  iconClassName: string;
  name: string;
  bullets: Array<string>;
};

const SystemComponent = ({ icon, iconClassName, name, bullets }: Props) => {
  const styles: CSSinJS = {
    title: { fontSize: "18px", fontWeight: 500 },
    bullet: { fontSize: "16px" },
  };
  return (
    <section>
      <div className="columns is-centered is-8">
        <div className="column is-1">
          <figure className="coach-system-icon coach-icon-figure">
            <div className={iconClassName} aria-hidden="true">
              <FontAwesomeIcon icon={icon} />
            </div>
          </figure>
        </div>
        <div className="column is-7 has-text-grey-dark">
          <h2 className="default-font has-text-left" style={styles["title"]}>
            {name}
          </h2>
          <ul className="has-text-left" style={styles["bullet"]}>
            {bullets.map((bullet) => (
              <li key={bullet}>&bull; {bullet}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default SystemComponent;
