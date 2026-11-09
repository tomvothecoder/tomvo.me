import { useEffect, useState } from "react";
import { ArrowUpRight, Code2, Dumbbell, Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

import { cn } from "lib/utils";

const coachLinks = [
  { href: "#coaching", label: "Coaching" },
  { href: "#approach", label: "Approach" },
  { href: "#results", label: "Results" },
  { href: "#about", label: "About" },
];

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isCoachPage = location.pathname === "/coach";
  const brandLabel =
    location.pathname === "/career" ? "Tom Vo" : "Tom Vo Strength";
  const BrandIcon = location.pathname === "/career" ? Code2 : Dumbbell;

  useEffect(() => {
    if (menuOpen && isCoachPage) {
      document.querySelector<HTMLAnchorElement>("#coach-navigation a")?.focus({
        preventScroll: true,
      });
    }
  }, [menuOpen, isCoachPage]);

  if (isCoachPage) {
    return (
      <header className="strength-header">
        <a href="#main-content" className="strength-skip-link">
          Skip to content
        </a>
        <nav className="strength-nav" aria-label="Main navigation">
          <Link
            to="/coach"
            className="strength-wordmark"
            onClick={() => setMenuOpen(false)}
            aria-label="Tom Vo Strength home"
          >
            Tom Vo Strength
          </Link>
          <div
            id="coach-navigation"
            className={cn("strength-nav-links", menuOpen && "is-open")}
            onKeyDown={(event) => {
              if (event.key === "Escape") {
                setMenuOpen(false);
                document.getElementById("coach-menu-toggle")?.focus();
              }
            }}
          >
            {coachLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <Link to="/career" onClick={() => setMenuOpen(false)}>
              Career
            </Link>
          </div>

          <div className="strength-nav-actions">
            <a
              href="#apply"
              className="strength-nav-apply"
              onClick={() => setMenuOpen(false)}
            >
              <span>Let’s talk</span> <ArrowUpRight aria-hidden="true" />
            </a>
            <button
              id="coach-menu-toggle"
              type="button"
              aria-expanded={menuOpen}
              aria-controls="coach-navigation"
              aria-label={menuOpen ? "Close navigation" : "Open navigation"}
              onClick={() => setMenuOpen(!menuOpen)}
              onKeyDown={(event) => {
                if (event.key === "Escape") setMenuOpen(false);
              }}
            >
              {menuOpen ? (
                <X aria-hidden="true" />
              ) : (
                <Menu aria-hidden="true" />
              )}
            </button>
          </div>
        </nav>
      </header>
    );
  }

  return (
    <header className="sticky top-0 z-40 border-b border-[#cad2c7] bg-[#f7f8f4] shadow-[0_10px_24px_-24px_rgba(17,17,17,0.5)]">
      <nav className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-6 md:px-10">
        <Link
          to="/coach"
          className="inline-flex items-center gap-2 text-sm font-semibold tracking-tight text-foreground"
        >
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-[#cad2c7] bg-white text-[#1f4f45]">
            <BrandIcon className="h-4 w-4" />
          </span>
          <span>{brandLabel}</span>
        </Link>

        <div className="flex items-center gap-2 sm:gap-3">
          <Link
            to="/coach"
            className={cn(
              "rounded-lg px-3 py-2 text-sm font-medium transition-colors",
              location.pathname === "/coach"
                ? "bg-[#ede7dc] text-foreground"
                : "text-muted hover:text-foreground",
            )}
          >
            Coaching
          </Link>
          <Link
            to="/career"
            className={cn(
              "rounded-lg px-3 py-2 text-sm font-medium transition-colors",
              location.pathname === "/career"
                ? "bg-[#ede7dc] text-foreground"
                : "text-muted hover:text-foreground",
            )}
          >
            Career
          </Link>
          {location.pathname === "/coach" ? (
            <a
              href="#apply"
              className="rounded-lg bg-[#a33c22] px-3 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#7f2e1a]"
            >
              Apply
            </a>
          ) : null}
        </div>
      </nav>
    </header>
  );
}

export default NavBar;
