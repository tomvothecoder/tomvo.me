import { useEffect, useState } from "react";
import { ArrowRight, Code2, Dumbbell } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

import { cn } from "lib/utils";

const coachLinks = [
  { href: "#fit", label: "Fit" },
  { href: "#services", label: "Services" },
  { href: "#results", label: "Results" },
  { href: "#faq", label: "FAQ" },
];

function NavBar() {
  const location = useLocation();
  const isCoachPage = location.pathname === "/coach";
  const [isScrolled, setIsScrolled] = useState(false);
  const brandLabel =
    location.pathname === "/career" ? "Tom Vo" : "Tom Vo Strength";
  const BrandIcon = location.pathname === "/career" ? Code2 : Dumbbell;

  useEffect(() => {
    if (!isCoachPage) {
      setIsScrolled(false);
      return undefined;
    }

    const updateScrollState = () => setIsScrolled(window.scrollY > 120);
    updateScrollState();
    window.addEventListener("scroll", updateScrollState, { passive: true });

    return () => window.removeEventListener("scroll", updateScrollState);
  }, [isCoachPage]);

  if (isCoachPage) {
    return (
      <header className="pointer-events-none fixed inset-x-0 top-3 z-50 px-3 sm:top-5 sm:px-6">
        <nav
          className={cn(
            "pointer-events-auto mx-auto flex min-h-14 w-full max-w-5xl items-center justify-between gap-3 rounded-lg border px-3 py-2 shadow-[0_18px_55px_-42px_rgba(0,0,0,0.55)] backdrop-blur-xl transition-all duration-300 sm:px-4",
            isScrolled
              ? "border-[#cfc4b5]/90 bg-[#f7f4ed]/[0.86] text-[#141816]"
              : "border-[#cfc4b5]/80 bg-[#f7f4ed]/[0.82] text-[#141816]",
          )}
        >
          <Link
            to="/coach"
            className="inline-flex min-w-0 items-center gap-2 rounded-lg pr-1 text-sm font-semibold tracking-tight transition-transform hover:-translate-y-px"
          >
            <span
              className={cn(
                "inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border",
                isScrolled
                  ? "border-[#cfc4b5] bg-white/70 text-[#1d2822]"
                  : "border-[#cfc4b5] bg-white/50 text-[#1d2822]",
              )}
            >
              <BrandIcon className="h-4 w-4" />
            </span>
            <span className="truncate">{brandLabel}</span>
          </Link>

          <div className="hidden items-center gap-1 md:flex">
            {coachLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-lg px-3 py-2 text-sm font-medium transition hover:-translate-y-px hover:bg-[#ede7dc]"
              >
                {link.label}
              </a>
            ))}
            <Link
              to="/career"
              className="rounded-lg px-3 py-2 text-sm font-medium text-[#141816]/[0.72] transition hover:-translate-y-px hover:bg-[#ede7dc]"
            >
              Career
            </Link>
          </div>

          <a
            href="#apply"
            className="coach-button-primary inline-flex h-10 shrink-0 items-center justify-center gap-2 rounded-lg px-4 text-sm font-semibold sm:px-5"
          >
            <span>Apply</span>
            <ArrowRight className="hidden h-4 w-4 sm:block" />
          </a>
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
