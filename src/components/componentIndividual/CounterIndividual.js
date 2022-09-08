import '../../App.css';
import { CounterShape } from '../../Shapes/index.js';

function CounterIndividual({data}) {
  const {nombre,emote,dataNum} = data;
  return (
    <div className="col-md-3 col-sm-6 animate-box">
        <div className="feature-center">
        <span className="icon">
            <i className='iconPer'>{emote}</i>
        </span>
        <span className="counter js-counter" data-from="0" data-to="22070" data-speed="5000" data-refresh-interval="50">{dataNum}</span>
        <span className="counter-label">{nombre}</span>
        </div>
    </div>
  )
}

CounterIndividual.propTypes = {
    data:CounterShape
} 

export default CounterIndividual
