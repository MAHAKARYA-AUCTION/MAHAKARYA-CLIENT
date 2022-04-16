import { Routes, Route } from "react-router-dom";

import Lobby from "./views/Lobby";
import GoliathGallery from "./views/GoliathGallery";
import DavidGallery from "./views/DavidGallery";
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
        <Route path="/goliath-gallery" element={<GoliathGallery />} />
        <Route path="/david-gallery" element={<DavidGallery />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/lot/:id" element={<DetailLotView />} />
      </Routes>
    </div>
  );
}

export default App;
