import "App.css";
import NavBar from "components/NavBar";
import { BrowserRouter } from "react-router-dom";
import Home from "views/Career";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Home />
      </BrowserRouter>
    </div>
  );
}

export default App;
