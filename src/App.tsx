import "App.css";
import "bulma/css/bulma.min.css";
import AOS from "aos";
import Footer from "components/Footer";
import { useEffect } from "react";

import NavBar from "components/NavBar/NavBar";
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Career from "views/Career";
import Coach from "views/Coach";

let isAOSInitialized = false;

function AOSLifecycle() {
  const location = useLocation();

  useEffect(() => {
    if (!isAOSInitialized) {
      AOS.init({ once: true });
      isAOSInitialized = true;
    }

    const refreshAOS = () => AOS.refreshHard();

    // Safari can restore pages from cache where animation classes are stale.
    window.addEventListener("load", refreshAOS);
    window.addEventListener("pageshow", refreshAOS);
    refreshAOS();

    return () => {
      window.removeEventListener("load", refreshAOS);
      window.removeEventListener("pageshow", refreshAOS);
    };
  }, []);

  useEffect(() => {
    const rafId = window.requestAnimationFrame(() => {
      AOS.refreshHard();
    });

    return () => window.cancelAnimationFrame(rafId);
  }, [location.pathname]);

  return null;
}

function App() {
  return (
    <div className="App theme-light">
      <BrowserRouter>
        <AOSLifecycle />
        <NavBar />
        <Routes>
          <Route path="/coach" element={<Coach />}></Route>
          <Route path="/career" element={<Career />}></Route>
          <Route path="*" element={<Navigate to="/coach" replace />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
