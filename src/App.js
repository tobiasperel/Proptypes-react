import './App.css';
import Footer from './components/Footer';
import Home from './Pages/Home';
import DetalleProducto from './Pages/DetalleProducto';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CarritoProvider } from './context/carrito';

function App() {
  return (
    <CarritoProvider>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/detalleProducto/:idParams" element={<DetalleProducto />} />
        </Routes>
      </BrowserRouter>
    </CarritoProvider>
  );
}

export default App;
