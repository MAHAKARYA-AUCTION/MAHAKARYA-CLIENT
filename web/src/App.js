import { Routes, Route } from "react-router-dom";
import "./App.css";
import Lobby from "./views/Lobby";
import LandingView from "./views/LandingPage";
import Gallery from "./views/Gallery";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingView />} />
        <Route path="/lobby" element={<Lobby />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </div>
  );
}

export default App;
