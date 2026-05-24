import { useLocation } from "react-router-dom";

import coachPrimaryLogo from "assets/coach-logos/TomVoStrength_Primary_Horizontal_Color.png";

const Footer: React.FC = () => {
  const location = useLocation();
  const isCareerPage = location.pathname === "/career";

  if (!isCareerPage) {
    return (
      <footer className="rounded-t-[3rem] bg-[#141816] px-6 py-12 text-[#f7f4ed] md:px-10">
        <div className="mx-auto grid w-full max-w-6xl gap-8 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
          <div>
            <img
              src={coachPrimaryLogo}
              alt="Tom Vo Strength"
              className="h-auto w-56 rounded-lg bg-[#f7f4ed] p-2"
            />
            <p className="mt-3 max-w-sm text-sm leading-6 text-[#f2f0e9]/[0.68]">
              Strength coaching for clearer movement, measurable progress, and
              training that fits real schedules.
            </p>
          </div>

          <div className="space-y-2 text-sm text-[#f2f0e9]/[0.72]">
            <p className="coach-mono text-xs uppercase tracking-[0.18em] text-[#e08a63]">
              Navigation
            </p>
            <a className="block transition hover:-translate-y-px hover:text-white" href="#fit">
              Fit
            </a>
            <a className="block transition hover:-translate-y-px hover:text-white" href="#coaching">
              Coaching
            </a>
            <a className="block transition hover:-translate-y-px hover:text-white" href="#method">
              Method
            </a>
            <a className="block transition hover:-translate-y-px hover:text-white" href="#packages">
              Start Training
            </a>
            <a className="block transition hover:-translate-y-px hover:text-white" href="#apply">
              Apply
            </a>
          </div>

          <div className="space-y-3">
            <p className="coach-mono text-xs uppercase tracking-[0.18em] text-[#e08a63]">
              Coaching
            </p>
            <div className="inline-flex items-center gap-2 rounded-[2rem] border border-white/[0.12] bg-white/[0.06] px-3 py-2 text-xs font-semibold text-[#f2f0e9]">
              <span className="h-2 w-2 rounded-full bg-[#51d88a] shadow-[0_0_0_5px_rgba(81,216,138,0.16)]" />
              <span>Currently Accepting Clients</span>
            </div>
            <p className="text-xs leading-5 text-[#f2f0e9]/[0.55]">
              NASM CPT. Private training in Fremont and Newark, California.
            </p>
          </div>
        </div>
      </footer>
    );
  }

  return (
    <footer className="border-t border-border bg-background px-6 py-10 md:px-10">
      <div
        className={`mx-auto flex w-full max-w-6xl flex-col gap-2 text-sm text-muted ${
          isCareerPage ? "items-center" : "sm:flex-row sm:items-center sm:justify-between"
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
