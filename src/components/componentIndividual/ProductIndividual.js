import '../../App.css';
import { ProductoShape } from '../../Shapes/index.js';
import { Link } from 'react-router-dom';


function Producto({producto}) {
  const {nombre,precio,image} = producto;
  return (
    <div className="col-md-4 text-center animate-box">
        <div className="product">
        <div className="product-grid" style={{ backgroundImage:`url(${image})` }}>
            <div className="inner">
            <p>
                <Link to='/patito' detalleProducto={producto} className="icon"><i className="icon-shopping-cart"></i></Link>
            </p>
            </div>
        </div>
        <div className="desc">
            <h3><a href="single.html">{nombre}</a></h3>
            <span className="price">$ {precio}</span>
        </div>
        </div>
    </div>
  )
}

Producto.propTypes = {
    pruducto:ProductoShape
} 

export default Producto
