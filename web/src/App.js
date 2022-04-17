import { Routes, Route } from "react-router-dom";
import "./App.css";
import LoginPage from "./views/LoginPage";
import RegisterPage from "./views/RegisterPage";
import LandingView from "./views/LandingView";
import DetailLotView from "./views/DetailLotView";
import DetailCollection from "./views/DetailCollection";

function App() {
  return (
    <div className="App bg-[#ebd7bb] min-h-screen text-[#1F2937]">
      <Routes>
        <Route path="/" element={<LandingView />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/collection/:id" element={<DetailCollection />} />
        <Route path="/lot/:id" element={<DetailLotView />} />
      </Routes>
    </div>
  );
}

export default App;
