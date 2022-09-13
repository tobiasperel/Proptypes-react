import '../../App.css';
import { ServicesShape } from '../../Shapes/index.js';

function Service({service}) {
  const {nombre, emote, descripcion, url} = service;
  return (
    <div className="col-md-4 col-sm-4 text-center">
        <div className="feature-center animate-box" data-animate-effect="fadeIn">
        <span className="icon">
            <i className='iconPer'>{emote}</i>
        </span>
        <h3>{nombre}</h3>
        <p>{descripcion}</p>
        <p><a href={url} className="btn btn-primary btn-outline">Learn More</a></p>
        </div>
    </div>
  )
}

Service.propTypes = {
    service:ServicesShape
} 

export default Service
