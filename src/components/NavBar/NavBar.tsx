import { Code2, Dumbbell } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

import { cn } from "lib/utils";

function NavBar() {
  const location = useLocation();
  const brandLabel =
    location.pathname === "/career" ? "Tom Vo" : "Coach Tom Vo";
  const BrandIcon = location.pathname === "/career" ? Code2 : Dumbbell;

  return (
    <header className="sticky top-0 z-40 bg-background shadow-[0_10px_24px_-24px_rgba(17,17,17,0.5)]">
      <nav className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-6 md:px-10">
        <Link
          to="/coach"
          className="inline-flex items-center gap-2 text-sm font-semibold tracking-tight text-foreground"
        >
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-border bg-surface text-accent">
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
                ? "bg-foreground/[0.05] text-foreground"
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
                ? "bg-foreground/[0.05] text-foreground"
                : "text-muted hover:text-foreground",
            )}
          >
            Career
          </Link>
          {location.pathname === "/coach" ? (
            <a
              href="#consultation"
              className="rounded-lg bg-accent px-3 py-2 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent/90"
            >
              Book
            </a>
          ) : null}
        </div>
      </nav>
    </header>
  );
}

export default NavBar;
