import { Routes, Route } from "react-router-dom";
import './App.css';
import LoginPage from '../src/views/LoginPage';

import LandingView from "./views/LandingView";

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
      </Routes>
    </div>
  );
}

export default App;
