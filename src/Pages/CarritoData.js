import React, { useEffect } from 'react'
import { useCarritoContext } from '../context/carrito';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProductoList from '../components/componentIndividual/ProductoList';
import '../App.css'

export const CarritoData = () => {
  const {carritoProductos,setCarritoProductos} = useCarritoContext()

  return (
    <>
    <div id="fh5co-product">
        <div className="container">
          <div className="row animate-box">
            <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
              <span>tus deseos aca</span>
              <h2>Tu Carrito</h2>
            </div>
          </div>
          <div className="row">
          {
            carritoProductos.length != 0 ? (
              carritoProductos.map(producto => {
                if (producto.id != -1) {
                  return (
                    <>
                      <div style={{position:"relative"}}>
                        <ProductoList producto={producto}/>
                      </div>
                    </>
                ) 
                }
            })
            ) : (
              <div className='hagoTodoPeer'>
                <p>NO HAY PRODUCTOS</p>
              </div>
            )
            }
          </div>
        </div>
      </div>
    </>
  )
}
