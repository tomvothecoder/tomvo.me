import { useLocation } from "react-router-dom";

import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  const location = useLocation();
  const isCareerPage = location.pathname === "/career";

  if (!isCareerPage) {
    return (
      <footer className="strength-footer">
        <a href="#hero" className="strength-footer-brand">
          Tom Vo Strength<span aria-hidden="true"> /</span>
        </a>
        <div>
          <p>Purposeful training. Personal coaching.</p>
          <p>Fremont, Newark & online</p>
        </div>
        <nav aria-label="Footer navigation">
          <a href="#coaching">Coaching</a>
          <a href="#about">About</a>
          <a href="#apply">Apply</a>
          <Link to="/career">Career</Link>
        </nav>
        <p className="strength-footer-bottom">
          © {new Date().getFullYear()} Tom Vo <span>Built rep by rep.</span>
        </p>
      </footer>
    );
  }

  return (
    <footer className="border-t border-border bg-background px-6 py-10 md:px-10">
      <div
        className={`mx-auto flex w-full max-w-6xl flex-col gap-2 text-sm text-muted ${
          isCareerPage
            ? "items-center"
            : "sm:flex-row sm:items-center sm:justify-between"
        }`}
      >
        <p>{isCareerPage ? "Tom Vo" : "Tom Vo Strength"}</p>
        {isCareerPage ? null : (
          <p>Private training in Fremont and Newark, California.</p>
        )}
      </div>
    </footer>
  );
};

export default Footer;
