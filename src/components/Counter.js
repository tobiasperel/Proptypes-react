import { objectOf } from 'prop-types';
import '../App.css';
import {CounterShape} from '../Shapes/index.js'

Counter.propTypes = {
  Counter:objectOf(CounterShape)
}

function Counter({ data }) {
  const { creativityFuel, happyClients, allProducts, hoursSpent } = data
  return (
    <div id="fh5co-counter" className="fh5co-bg fh5co-counter">
        <div className="container">
          <div className="row">
            <div className="display-t">
              <div className="display-tc">
                <div className="col-md-3 col-sm-6 animate-box">
                  <div className="feature-center">
                    <span className="icon">
                      <i className='iconPer'>👁‍🗨</i>
                    </span>
                    <span className="counter js-counter" data-from="0" data-to="22070" data-speed="5000" data-refresh-interval="50">{creativityFuel}</span>
                    <span className="counter-label">Creativity Fuel</span>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6 animate-box">
                  <div className="feature-center">
                    <span className="icon">
                      <i className='iconPer'>😊</i>
                    </span>
                    <span className="counter js-counter" data-from="0" data-to="450" data-speed="5000" data-refresh-interval="50">{happyClients}</span>
                    <span className="counter-label">Happy Clients</span>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6 animate-box">
                  <div className="feature-center">
                    <span className="icon">
                      <i className='iconPer'>🛒</i>
                    </span>
                    <span className="counter js-counter" data-from="0" data-to="700" data-speed="5000" data-refresh-interval="50">{allProducts}</span>
                    <span className="counter-label">All Products</span>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6 animate-box">
                  <div className="feature-center">
                    <span className="icon">
                      <i className='iconPer'>⌚</i>
                    </span>
                    <span className="counter js-counter" data-from="0" data-to="5605" data-speed="5000" data-refresh-interval="50">{hoursSpent}</span>
                    <span className="counter-label">Hours Spent</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

  )
}

export default Counter