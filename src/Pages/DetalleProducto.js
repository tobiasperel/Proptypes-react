import React, { useEffect, useMemo } from 'react'
import { useParams } from 'react-router-dom'
import Data from '../data'
import { ProductoShape } from '../Shapes/index.js';
import Navbar from '../components/Navbar';
export default function DetalleProducto() {
    const { idParams } = useParams()

    // const [producto, setProducto] = useState({});
    // useEffect(() => {
    //     setProducto(
    //         Data.productos.find(p => p.id === parseInt(idParams))
    //     )
    // }, [])

    const producto = useMemo(() => {
        return Data.productos.find(p => p.id === parseInt(idParams))
    }, [])
    // useEffect(() => {
    //     console.log(producto.nombre)
    // }, [])
    return (
        <>
            <Navbar/>
            <p>{producto.id}</p>
            <p>{producto.nombre}</p>
            <p>{producto.precio}</p>
            <img src={producto.image}/>
        </>
    )
}

DetalleProducto.propTypes = {
    productos: ProductoShape
}
