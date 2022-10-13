import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ProductoShape } from '../Shapes/index.js';
import { useCarritoContext } from '../context/carrito';
import { useProductoContext } from '../context/productos';
import '../App.css'

export default function DetalleProducto() {
    const { idParams } = useParams()
    const { addCarrito } = useCarritoContext()
    const {getById} = useProductoContext()
    const [producto,setProducto] = useState({})

    useEffect(() => {
      setProducto(getById(idParams))
    }, [idParams])

    return (
        <div className='containerDetail'>
            <img className='imageDetail' src={producto.image}/>
            <div className='dataDetail'>
                <p className='titleDetail'>{producto.nombre}</p>
                <p className='priceDetail'>${producto.precio}</p>
                <p>(id: {producto.id})</p>
                <button className='buttonAddCarrito' onClick={() =>addCarrito(producto)}>Agregar al carrito</button>
            </div>
        </div>
    )
}

DetalleProducto.propTypes = {
    productos: ProductoShape
}
