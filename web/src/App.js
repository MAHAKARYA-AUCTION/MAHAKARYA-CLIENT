import { Routes, Route } from "react-router-dom";
import './App.css';

import LandingView from "./views/LandingView";

function App() {
  return (
    <div className="App bg-[#ebd7bb] min-h-screen">
      <Routes>
        <Route path="/" element={<LandingView />} />
      </Routes>
    </div>
  );
}

export default App;
