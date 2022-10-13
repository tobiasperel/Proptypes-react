import './App.css';
import Home from './Pages/Home';
import DetalleProducto from './Pages/DetalleProducto';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CarritoProvider } from './context/carrito';
import { ProductosProvider } from './context/productos';
import {CarritoData} from './Pages/CarritoData';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <ProductosProvider>
      <CarritoProvider>
        <BrowserRouter>
          <Navbar/>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/detalleProducto/:idParams" element={<DetalleProducto />} />
              <Route path='/carrito' element = {<CarritoData/>} />
          </Routes>
          <Footer/>
        </BrowserRouter>
      </CarritoProvider>
    </ProductosProvider>
  );
}

export default App;
