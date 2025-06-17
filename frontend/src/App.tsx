import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./Page/main";
import HeatPage from "./Page/heat";
import CallPage from "./Page/call";
import SubwayPage from "./Page/subway";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        {/* 메인페이지 */}
        <Route path="/" element={<MainPage />} />
        <Route path="/heat" element={<HeatPage />} />
        <Route path="/call" element={<CallPage />} />
        <Route path="/subway" element={<SubwayPage />} />
      </Routes>
    </Router>
  );
}

export default App;
