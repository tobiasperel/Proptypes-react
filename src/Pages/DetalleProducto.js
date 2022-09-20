import React, { useEffect, useMemo } from 'react'
import { useParams } from 'react-router-dom'
import Data from '../data'
import { ProductoShape } from '../Shapes/index.js';
import Navbar from '../components/Navbar';
import { useCarritoContext } from '../context/carrito';
import Footer from '../components/Footer';

export default function DetalleProducto() {
    const { idParams } = useParams()
    const {carritoProductos,setCarritoProductos} = useCarritoContext()

    const producto = useMemo(() => {
        return Data.productos.find(p => p.id === parseInt(idParams))
    }, [])
    
    return (
        <>
            <Navbar/>
            <p>{producto.id}</p>
            <p>{producto.nombre}</p>
            <p>{producto.precio}</p>
            <img src={producto.image}/>
            <button onClick={()=>setCarritoProductos([...carritoProductos,producto])}>Agregar al carrito</button>
            <Footer/>
        </>
    )
}

DetalleProducto.propTypes = {
    productos: ProductoShape
}
