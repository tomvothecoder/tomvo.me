import { Code2, Dumbbell } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

import { cn } from "lib/utils";

function NavBar() {
  const location = useLocation();
  const brandLabel =
    location.pathname === "/career" ? "Tom Vo" : "Coach Tom Vo";
  const BrandIcon = location.pathname === "/career" ? Code2 : Dumbbell;

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background">
      <nav className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-6 md:px-10">
        <Link
          to="/coach"
          className="inline-flex items-center gap-2.5 text-[15px] font-semibold tracking-tight text-foreground"
        >
          <BrandIcon className="h-4 w-4 text-accent" />
          <span>{brandLabel}</span>
        </Link>

        <div className="flex items-center gap-3 sm:gap-4">
          <Link
            to="/coach"
            className={cn(
              "border-b-2 border-transparent px-1 py-2 text-sm font-medium transition-colors",
              location.pathname === "/coach"
                ? "border-accent text-foreground"
                : "text-muted hover:text-foreground",
            )}
          >
            Coaching
          </Link>
          <Link
            to="/career"
            className={cn(
              "border-b-2 border-transparent px-1 py-2 text-sm font-medium transition-colors",
              location.pathname === "/career"
                ? "border-accent text-foreground"
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
