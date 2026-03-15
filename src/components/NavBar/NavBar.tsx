import { Dumbbell } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

import { cn } from "lib/utils";

function NavBar() {
  const location = useLocation();

  return (
    <header className="sticky top-0 z-40 border-b border-border/80 bg-background/95 backdrop-blur">
      <nav className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-6 md:px-10">
        <Link to="/coach" className="inline-flex items-center gap-2 text-sm font-semibold tracking-tight text-foreground">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-accent/10 text-accent">
            <Dumbbell className="h-4 w-4" />
          </span>
          <span>Coach Tom Vo</span>
        </Link>

        <div className="flex items-center gap-2 sm:gap-3">
          <Link
            to="/coach"
            className={cn(
              "rounded-lg px-3 py-2 text-sm font-medium transition-colors",
              location.pathname === "/coach"
                ? "bg-accent/10 text-accent"
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
                ? "bg-accent/10 text-accent"
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
