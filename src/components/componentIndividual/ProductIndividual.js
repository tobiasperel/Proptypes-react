import '../../App.css';
import { ProductoShape } from '../../Shapes/index.js';

function Producto({producto}) {
  const {nombre,precio,image} = producto;
  return (
    <div className="col-md-4 text-center animate-box">
        <div className="product">
        <div className="product-grid" style={{ backgroundImage:`url(${image})` }}>
            <div className="inner">
            <p>
                <a href="single.html" className="icon"><i className="icon-shopping-cart"></i></a>
                <a href="single.html" className="icon"><i className="icon-eye"></i></a>
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
