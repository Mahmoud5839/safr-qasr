import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import TravelCheckerPage from "./pages/TravelCheckerPage";
import Guide from "./pages/Guide";
import Sources from "./pages/Sources";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/travel-checker" element={<TravelCheckerPage />} />
        <Route path="/guide" element={<Guide />} />
        <Route path="/sources" element={<Sources />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;