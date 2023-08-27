import { CSSinJS } from "common/types";

type Props = { iconSrc: string; name: string; bullets: Array<string> };

const Service = ({ iconSrc, name, bullets }: Props) => {
  const styles: CSSinJS = {
    title: { fontSize: "18px", fontWeight: 600 },
    bullet: { fontSize: "16px" },
  };
  return (
    <section>
      <div
        className="columns is-centered is-8"
        data-aos="zoom-in"
        data-aos-delay="100"
      >
        <div className="column is-1">
          <figure className="image is-64x64 is-horizontal-center">
            <img src={iconSrc} alt={name}></img>
          </figure>
        </div>
        <div className="column is-7">
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

export default Service;
