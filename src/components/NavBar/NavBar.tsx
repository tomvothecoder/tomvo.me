import "components/NavBar/NavBar.css";

import { useLocation } from "react-router-dom";
import NavBarItem from "./NavBarItem";

function NavBar() {
  const location = useLocation();

  const navBarItems: {
    [key: string]: Array<{ title: string; scrollTo: string }>;
  } = {
    "/career": [
      {
        title: "Experience",
        scrollTo: "experience",
      },
      {
        title: "Skills",
        scrollTo: "skills",
      },
      {
        title: "Portfolio",
        scrollTo: "portfolio",
      },
      {
        title: "About",
        scrollTo: "about",
      },
    ],
  };

  // The default route "/" redirects to another route, so avoid rendering
  // nav bar items on the default route (which breaks).
  let curNavBarItems = null;
  if (location.pathname == "/career") {
    curNavBarItems = navBarItems[location.pathname as string];
  }

  return (
    <section id="nav-bar">
      <nav className="navbar">
        <div id="navbarExampleTransparentExample" className="navbar-menu">
          <div className="navbar-end">
            {curNavBarItems !== null &&
              navBarItems[location.pathname as string].map((item) => (
                <a className="navbar-item">
                  <NavBarItem
                    key={item.title}
                    title={item.title}
                    scrollTo={item.scrollTo}
                  />
                </a>
              ))}
          </div>
        </div>
      </nav>
    </section>
  );
}

export default NavBar;
