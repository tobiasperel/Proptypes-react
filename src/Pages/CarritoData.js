import React, { useEffect } from 'react'
import { useCarritoContext } from '../context/carrito';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProductIndividual from '../components/componentIndividual/ProductIndividual'
export const CarritoData = () => {
  const {carritoProductos,setCarritoProductos} = useCarritoContext()
  
  useEffect(() => {
    console.log(carritoProductos)
  }, [])

  return (
    <>
    <div id="fh5co-product">
        <div className="container">
          <div className="row animate-box">
            <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
              <span>tus deseos aca (?</span>
              <h2>Tu Carrito</h2>
            </div>
          </div>
          <div className="row">
          {carritoProductos.map(producto => {
      return (
        
        <>
          <div style={{position:"relative"}}>
            <ProductIndividual producto={producto} estaCarrito={true}/>
          </div>
        </>
  )
    })}
          </div>
        </div>
      </div>
    </>
  )
}
