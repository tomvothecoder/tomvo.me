import { useLocation } from "react-router-dom";

const Footer: React.FC = () => {
  const location = useLocation();
  const isCareerPage = location.pathname === "/career";

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
