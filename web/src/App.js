import { Routes, Route } from "react-router-dom";
import "./App.css";
import VirtualAuctionHall from "./views/VirtualAuctionHall";
import LandingView from "./views/LandingPage";
import DiamondGallery from "./views/DiamondGallery";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingView />} />
        <Route path="/hall" element={<VirtualAuctionHall />} />
        <Route path="/diamond_gallery" element={<DiamondGallery />} />
      </Routes>
    </div>
  );
}

export default App;
