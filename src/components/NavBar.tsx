import { Link } from "react-scroll";
import "../../node_modules/bulma/css/bulma.css";
import "./NavBar.css";

function NavBar() {
  const scrollConfig = {
    spy: true,
    smooth: true,
    offset: 50,
    duration: 1200,
  }

  return (
    <div id="Navigation">
      <section className="container" id="the-navigation">
        <div className="columns">
          <div className="column is-half is-offset-one-quarter">
            <nav className="level">
              <div className="level-item has-text-centered">
                <Link to="experience" {...scrollConfig}>
                  <p className="nav-link nav-heading">Experience</p>
                </Link>
              </div>
              <div className="level-item has-text-centered">
                <Link to="skills" {...scrollConfig}>
                  <p className="nav-link nav-heading">Skills</p>
                </Link>
              </div>
              <div className="level-item has-text-centered">
                <Link to="portfolio" {...scrollConfig}>
                  <p className="nav-link nav-heading">Portfolio</p>
                </Link>
              </div>
              <div className="level-item has-text-centered">
                <Link to="about" {...scrollConfig}>
                  <p className="nav-link nav-heading">About</p>
                </Link>
              </div>
            </nav>
          </div>
        </div>
      </section>
    </div>
  );
}

export default NavBar;
