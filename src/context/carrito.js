import { createContext, useState, useContext, useMemo, useEffect } from 'react';
export const CarritoContext = createContext();

export function CarritoProvider (props) {
    const [carritoProductos, setCarritoProductos] = useState([]);


    useEffect(() => {
      const items = JSON.parse(localStorage.getItem('carrito'));
      if (items) {
        setCarritoProductos(items);
      }
    }, []);
    
    useEffect(() => {
        if (carritoProductos.length === 0) return
        localStorage.setItem("carrito", JSON.stringify(carritoProductos));
    }, [carritoProductos])
    



    const removeProducto = (id) => {
        const nuevoCarrito = carritoProductos.filter(p => id !== p.id)
        setCarritoProductos(nuevoCarrito)
        if (!nuevoCarrito.length) localStorage.removeItem("carrito")
    }

    const masCarrito = (id) => {
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

    const menosCarrito = (id) => {
        setCarritoProductos(
            carritoProductos.map(prod => {
                if(prod.id === id) {
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
    
    const addCarrito = (producto, ) => {
        if (carritoProductos.map(p => p.id).includes(producto.id)) {
            setCarritoProductos(
                carritoProductos.map(prod => {
                    if(prod.id === producto.id) {
                        return {
                            ...prod,
                            cantidad: prod.cantidad + 1
                        }
                    } else {
                        return prod
                    }
                })
            )
        } else {
            setCarritoProductos([
                ...carritoProductos,
                {...producto, cantidad: 1}
            ])
        }
    }

    const value = useMemo(() => {
        return ({
           carritoProductos,           
           masCarrito,
           menosCarrito,
           removeProducto,
           addCarrito
        });
    }, [carritoProductos]);
    
    return (
        <CarritoContext.Provider value={value}>
            {props.children}
        </CarritoContext.Provider>
    );
}

export const useCarritoContext = () => {
    const context = useContext(CarritoContext);

    if (!context) {
        throw new Error('useAccountContext must be used within a carritoProvider');
    }

    return context;
};