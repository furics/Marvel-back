import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//pages
import Comics from "./pages/Comics";
import Header from "./pages/Header";
import Characters from "./pages/Characters";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Characters />} />
        <Route path="/character/:characterId" element={<Characters />} />
        <Route path="/comics" element={<Comics />} />
      </Routes>
    </Router>
  );
}

export default App;
