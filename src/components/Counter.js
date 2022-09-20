import '../App.css';
import { arrayOf } from 'prop-types';
import { CounterShape } from '../Shapes/index.js'
import CounterIndividual from './componentIndividual/CounterIndividual'
import React from 'react'

Counter.propTypes = {
  dataAll:arrayOf(CounterShape)
}

function Counter({ dataAll }) {
  return (
    <div id="fh5co-counter" className="fh5co-bg fh5co-counter">
      <div className="container">
        <div className="row">
          <div className="display-t">
            <div className="display-tc">
              {
                dataAll.map((data, idx) => (
                  <CounterIndividual key={idx} data={data}/>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Counter