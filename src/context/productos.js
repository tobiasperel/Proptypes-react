import { createContext, useState, useContext, useMemo, useEffect } from 'react';
import Data from '../data'
export const ProductosContext = createContext();

export function ProductosProvider (props) {
    const [productos, setProductos] = useState([]);

    useEffect(() => {     
        setProductos(getAll());      
    }, []);   

    const getById = (id) => {
        return productos.find(p => p.id === parseInt(id))
    }

    const getAll = () => {
        return Data.productos;
    }

    const value = useMemo(() => {
        return ({
           getById,           
           productos           
        });
    }, [productos]);
    
    return (
        <ProductosContext.Provider value={value}>
            {props.children}
        </ProductosContext.Provider>
    );
}

export const useProductoContext = () => {
    const context = useContext(ProductosContext);

    if (!context) {
        throw new Error('useAccountContext must be used within a ProductoProvider');
    }

    return context;
};