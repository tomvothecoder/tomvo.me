import "../../node_modules/bulma/css/bulma.css";
import "./NavBar.css";

function NavBar() {
  return (
    <div id="Navigation">
      <section className="container" id="the-navigation">
        <div className="columns">
          <div className="column is-half is-offset-one-quarter">
            <nav className="level">
              <div className="level-item has-text-centered">
                <div>
                  <a href="#" className="nav-link">
                    <span className="nav-heading">Experience</span>
                  </a>
                </div>
              </div>
              <div className="level-item has-text-centered">
                <div>
                  <a href="#" className="nav-link">
                    <span className="nav-heading">Skills</span>
                  </a>
                </div>
              </div>
              <div className="level-item has-text-centered">
                <div>
                  <a href="#" className="nav-link">
                    <span className="nav-heading">Portfolio</span>
                  </a>
                </div>
              </div>
              <div className="level-item has-text-centered">
                <div>
                  <a href="#" className="nav-link">
                    <span className="nav-heading">About</span>
                  </a>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </section>
    </div>
  );
}

export default NavBar;
