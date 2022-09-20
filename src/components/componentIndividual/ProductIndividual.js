import '../../App.css';
import { ProductoShape } from '../../Shapes/index.js';
import { Link } from 'react-router-dom';


function Producto({producto}) {
  const {id,nombre,precio,image} = producto;
  return (
    <div className="col-md-4 text-center animate-box">
        <div className="product">
        <div className="product-grid" style={{ backgroundImage:`url(${image})` }}>
            <div className="inner">
            <p>
                <Link to= {`/detalleProducto/${id}`}  className="icon"><i className='iconPer iconPer2'>🔎</i></Link>
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
    producto:ProductoShape
} 

export default Producto
