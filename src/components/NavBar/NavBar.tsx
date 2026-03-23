import { Code2, Dumbbell } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

import { cn } from "lib/utils";

function NavBar() {
  const location = useLocation();
  const brandLabel =
    location.pathname === "/career" ? "Tom Vo" : "Coach Tom Vo";
  const BrandIcon = location.pathname === "/career" ? Code2 : Dumbbell;

  return (
    <header className="sticky top-0 z-40 border-b border-[#cad2c7] bg-[#f7f8f4] shadow-[0_10px_24px_-24px_rgba(17,17,17,0.5)]">
      <nav className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-6 md:px-10">
        <Link
          to="/coach"
          className="inline-flex items-center gap-2 text-sm font-semibold tracking-tight text-foreground"
        >
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-[#cad2c7] bg-white text-[#1f4f45]">
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
                ? "bg-[#e4e9e1] text-foreground"
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
                ? "bg-[#e4e9e1] text-foreground"
                : "text-muted hover:text-foreground",
            )}
          >
            Career
          </Link>
          {location.pathname === "/coach" ? (
            <a
              href="#consultation"
              className="rounded-lg bg-[#1f4f45] px-3 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#183d36]"
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
