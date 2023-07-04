import Footer from "./components/Footer";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import { Route, Routes } from "react-router";
import Nosotros from "./components/Nosotros";
import Noticias from "./components/noticias";
import Gallery from "./components/galeriassimulacro";


function App() {
  return (
    <div id="home">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/noticias" element={<Noticias />} />
        <Route path="/galeria" element={<Gallery />} />
        
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
