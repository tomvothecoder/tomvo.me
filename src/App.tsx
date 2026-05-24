import "App.css";
import { lazy, Suspense } from "react";
import Footer from "components/Footer";

import NavBar from "components/NavBar/NavBar";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Coach from "views/Coach";

const Career = lazy(() => import("views/CareerRoute"));

function App() {
  return (
    <div className="App theme-light">
      <BrowserRouter>
        <NavBar />
        <Suspense fallback={null}>
          <Routes>
            <Route path="/coach" element={<Coach />}></Route>
            <Route path="/career" element={<Career />}></Route>
            <Route path="*" element={<Navigate to="/coach" replace />} />
          </Routes>
        </Suspense>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
