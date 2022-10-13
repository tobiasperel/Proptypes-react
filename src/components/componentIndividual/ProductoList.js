import '../../App.css';
import { ProductoShape } from '../../Shapes/index.js';
import { Link } from 'react-router-dom';
import { useCarritoContext } from '../../context/carrito';
import { useEffect, useState } from 'react';


function ProductoList({ producto }) {
    const { carritoProductos, removeProducto, menosCarrito, masCarrito } = useCarritoContext()
    const { id, nombre, precio, image, cantidad } = producto;
    const productoActual = carritoProductos

    return (
        <div className="product-list">
            <img src={image}/>
            <h3>{nombre}</h3>
            <h3>$ {precio}</h3>
            <button onClick={() => removeProducto(id)}>
                <p>🗑️</p>
            </button>
            <button onClick={() => menosCarrito(id)}>
                <p>-</p>
            </button>
            <button onClick={() => masCarrito(id)}>
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