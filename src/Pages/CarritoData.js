import React, { useEffect } from 'react'
import { useCarritoContext } from '../context/carrito';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
export const CarritoData = () => {
  const {carritoProductos,setCarritoProductos} = useCarritoContext()
  
  useEffect(() => {
    console.log(carritoProductos)
  }, [])

  return (
    <>
    <Navbar/>
    {carritoProductos.map(producto => {
      return (
        <>
        <p>{producto.id}</p>
        <p>{producto.nombre}</p>
        <p>{producto.precio}</p>
        <img src={producto.image}/>
        <button onClick={() => setCarritoProductos(carritoProductos.filter(p => producto.id !== p.id ))}>eliminar del carrito</button>
        </>
  )
    })}
    <Footer/>
    </>
  )
}
