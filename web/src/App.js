import { Routes, Route } from "react-router-dom";
import Lobby from "./views/Lobby";
import GoliathGallery from "./views/GoliathGallery";
import DavidGallery from "./views/DavidGallery";
import "./App.css";
import LoginPage from "./views/LoginPage";
import RegisterPage from "./views/RegisterPage";
import LandingView from "./views/LandingView";
import DetailLotView from "./views/DetailLotView";
import DetailCollection from "./views/DetailCollection";
import ProfileView from "./views/ProfileView";
import RequireAuth from "./middlewares/requireAuth";
import StepByStepAR from "./views/stepByStepAR";


function App() {
  return (
    <div className="App bg-[#ebd7bb] min-h-screen text-[#1F2937]">
      <Routes>
        <Route path="/" element={<LandingView />} />
        <Route path="/lobby" element={<Lobby />} />
        <Route path="/goliath-gallery" element={<GoliathGallery />} />
        <Route path="/david-gallery" element={<DavidGallery />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/collection/:id" element={<DetailCollection />} />
        <Route path="/lot/:id" element={<DetailLotView />} />
        <Route path="/ar-gallery" element={<StepByStepAR />} />
        <Route path="/profile" element={
          <RequireAuth>
            <ProfileView />
          </RequireAuth>
        } />
      </Routes>
    </div>
  );
}

export default App;
