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
    "/coach": [
      {
        title: "About",
        scrollTo: "about",
      },
      {
        title: "Values",
        scrollTo: "values",
      },
      {
        title: "Services",
        scrollTo: "services",
      },
      {
        title: "Contact",
        scrollTo: "contact",
      },
    ],
  };

  // The default route "/" redirects to another route, so avoid rendering
  // nav bar items on the default route (which breaks).
  let curNavBarItems = null;
  if (location.pathname !== "/") {
    curNavBarItems = navBarItems[location.pathname as string];
  }

  return (
    <section id="nav-bar">
      <div className="container">
        <div className="columns is-6">
          <div className="column is-half is-offset-one-quarter">
            <div className="level">
              {curNavBarItems !== null &&
                navBarItems[location.pathname as string].map((item) => (
                  <NavBarItem
                    key={item.title}
                    title={item.title}
                    scrollTo={item.scrollTo}
                  />
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NavBar;
