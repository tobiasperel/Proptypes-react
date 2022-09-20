import './App.css';
import Home from './Pages/Home';
import DetalleProducto from './Pages/DetalleProducto';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CarritoProvider } from './context/carrito';
import {CarritoData} from './Pages/CarritoData';
function App() {
  return (
    <CarritoProvider>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/detalleProducto/:idParams" element={<DetalleProducto />} />
            <Route path='/carrito' element = {<CarritoData/>} />
        </Routes>
      </BrowserRouter>
    </CarritoProvider>
  );
}

export default App;
