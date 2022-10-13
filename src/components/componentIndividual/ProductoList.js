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
                    console.log(id);
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
                    return {
                        ...prod,
                        cantidad: prod.cantidad - 1
                    }
                } else {
                    return prod
                }
            })
        )
    }

    return (
        <div className="product-list">
            <img src={image}/>
            <h3>{nombre}</h3>
            <h3>$ {precio}</h3>
            <button onClick={() => setCarritoProductos(carritoProductos.filter(p => producto.id !== p.id))}>
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