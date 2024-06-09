import "App.css";
import "bulma/css/bulma.min.css";
import Footer from "components/Footer";

import NavBar from "components/NavBar/NavBar";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Career from "views/Career";
import Coach from "views/Coach";

function App() {
  return (
    <div className="App theme-light">
      <BrowserRouter>
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
