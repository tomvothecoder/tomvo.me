type Props = { iconSrc: string; name: string; bullets: Array<string> };

const Service = ({ iconSrc, name, bullets }: Props) => {
  return (
    <section>
      <div
        className="columns is-centered is-8"
        data-aos="zoom-in"
        data-aos-delay="125"
      >
        <div className="column is-1">
          <figure className="image is-64x64 is-horizontal-center">
            <img src={iconSrc} alt={name}></img>
          </figure>
        </div>
        <div className="column is-7">
          <h2 className="default-font has-text-left">{name}</h2>
          <ul className="has-text-left">
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
