import { useEffect } from "react";
import CoachLandingPage from "components/CoachRedesign/CoachLandingPage";

const Coach: React.FC = () => {
  useEffect(() => {
    document.title = "Tom Vo Strength | Strength Coaching";
  }, []);

  return <CoachLandingPage />;
};

export default Coach;
