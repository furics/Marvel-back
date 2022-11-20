import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//pages
import Comics from "./pages/Comics";
import Home from "./pages/Home";
import Character from "./pages/Character";
import ComicsCharacter from "./pages/ComicsCharacter";
import Favoris from "./pages/Favoris";

//components
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/character/:characterId" element={<Character />} />
        <Route path="/comics" element={<Comics />} />
        <Route path="/comics/:characterId" element={<ComicsCharacter />} />
        <Route path="/favoris" element={<Favoris />} />
      </Routes>
    </Router>
  );
}

export default App;
