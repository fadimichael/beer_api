import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import "./App.css";
import Overview from "./pages/Overview";
import BeerDetail from "./components/BeerDetails";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/beer" element={<Overview />} />
          <Route path="/beer/:id" element={<BeerDetail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
