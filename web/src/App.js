import { Routes, Route } from "react-router-dom";

import Lobby from "./views/Lobby";
import Gallery from "./views/Gallery";
import "./App.css";
import LoginPage from "../src/views/LoginPage";
import LandingView from "./views/LandingView";
import DetailLotView from "./views/DetailLotView";

function App() {
  return (
    <div className="App bg-[#ebd7bb] min-h-screen">
      <Routes>
        <Route path="/" element={<LandingView />} />
        <Route path="/lobby" element={<Lobby />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/lot/:id" element={<DetailLotView />} />
      </Routes>
    </div>
  );
}

export default App;
