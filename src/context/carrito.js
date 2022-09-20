import { createContext, useState, useContext, useMemo, useEffect } from 'react';
export const CarritoContext = createContext();

export function CarritoProvider (props) {
    const [carritoProductos, setCarritoProductos] = useState([]);

    const value = useMemo(() => {
        return ({
           carritoProductos,
           setCarritoProductos
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