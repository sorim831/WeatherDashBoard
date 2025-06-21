import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./Page/main";

import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        {/* 메인페이지 */}
        <Route path="/" element={<MainPage />} />
      </Routes>
    </Router>
  );
}

export default App;
