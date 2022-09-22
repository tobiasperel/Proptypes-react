import React, { useEffect, useMemo } from 'react'
import { useParams } from 'react-router-dom'
import Data from '../data'
import { ProductoShape } from '../Shapes/index.js';
import Navbar from '../components/Navbar';
import { useCarritoContext } from '../context/carrito';
import Footer from '../components/Footer';
import '../App.css'

export default function DetalleProducto() {
    const { idParams } = useParams()
    const {carritoProductos,setCarritoProductos} = useCarritoContext()

    const producto = useMemo(() => {
        return Data.productos.find(p => p.id === parseInt(idParams))
    }, [])
    
    const productoGod = {
        id: carritoProductos.length,
        nombre: producto.nombre,
        precio: producto.precio,
        image: producto.image
    }

    useEffect(() => {
        console.log(producto);
    },[])
    
    const addCarrito = () => {
        setCarritoProductos([...carritoProductos, productoGod])
    }
    


    return (
        <div className='containerDetail'>
            <img className='imageDetail' src={producto.image}/>
            <div className='dataDetail'>
                <p className='titleDetail'>{producto.nombre}</p>
                <p className='priceDetail'>${producto.precio}</p>
                <p>(id: {producto.id})</p>
                <button className='buttonAddCarrito' onClick={addCarrito}>Agregar al carrito</button>
            </div>
        </div>
    )
}

DetalleProducto.propTypes = {
    productos: ProductoShape
}
