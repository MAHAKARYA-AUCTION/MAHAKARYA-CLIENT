import logo from "./logo.svg";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import VirtualAuctionHall from "./views/VirtualAuctionHall";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingView />} />
        <Route path="/hall" element={<VirtualAuctionHall />} />
      </Routes>
    </div>
  );
}

export default App;
