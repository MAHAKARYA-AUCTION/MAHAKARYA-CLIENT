import { Routes, Route } from "react-router-dom";
import './App.css';
import LoginPage from '../src/views/LoginPage';
import LandingView from "./views/LandingView";
import DetailLotView from "./views/DetailLotView";
import TopupView from "./views/TopupView";

function App() {
  return (
    <div className="App bg-[#ebd7bb] min-h-screen">
      <Routes>
        <Route path="/" element={<LandingView />} />
        <Route
          path='/login'
          element={
            <LoginPage />
          }
        />
        <Route path="/lot/:id" element={<DetailLotView />} />
        <Route path="/topup" element={<TopupView />} />
      </Routes>

    </div>
  );
}

export default App;
