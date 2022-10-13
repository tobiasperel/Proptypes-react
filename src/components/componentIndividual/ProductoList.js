import '../../App.css';
import { ProductoShape } from '../../Shapes/index.js';
import { Link } from 'react-router-dom';
import { useCarritoContext } from '../../context/carrito';
import { useEffect, useState } from 'react';


function ProductoList({ producto }) {
    const { carritoProductos, setCarritoProductos } = useCarritoContext()
    const { id, nombre, precio, image, cantidad } = producto;
    const productoActual = carritoProductos
    
    

    const masCarrito = () => {
        setCarritoProductos(
            carritoProductos.map(prod => {
                
                if(prod.id === id) {
                    return {
                        ...prod,
                        cantidad: prod.cantidad + 1
                    }
                } else {
                    return prod
                }
            })
        )
    }

    const menosCarrito = () => {
        setCarritoProductos(
            carritoProductos.map(prod => {
                if(prod.id === producto.id) {
                    if(prod.cantidad === 1){
                        removeProducto(id)
                        return
                    }
                    return {
                        ...prod,
                        cantidad: prod.cantidad - 1
                    }
                } else {
                    return prod
                }
            }).filter(p => p !== undefined)
        )
    }

    const removeProducto = (id) => {
        const nuevoCarrito = carritoProductos.filter(p => id !== p.id)
        setCarritoProductos(nuevoCarrito)
        if (!nuevoCarrito.length) localStorage.removeItem("carrito")
    }

    return (
        <div className="product-list">
            <img src={image}/>
            <h3>{nombre}</h3>
            <h3>$ {precio}</h3>
            <button onClick={() => removeProducto(id)}>
                <p>🗑️</p>
            </button>
            <button onClick={menosCarrito}>
                <p>-</p>
            </button>
            <button onClick={ masCarrito}>
                <p>+</p>
            </button>
            <p>{cantidad}</p>
        </div>
    )
}

ProductoList.propTypes = {
    ProductoList: ProductoShape
}

export default ProductoList