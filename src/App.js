import './App.css';
import Footer from './components/Footer';
import Home from './Pages/Home';
import DetalleProducto from './Pages/DetalleProducto';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/patito/:idParams" element={<DetalleProducto />} />
          {/* <Route path="/about" element={<Footer />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
