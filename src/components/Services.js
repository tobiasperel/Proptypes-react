import '../App.css';
import React from 'react'
import {arrayOf} from 'prop-types'
import {ServicesShape} from '../Shapes/index.js'
import ServiceIndividual from './componentIndividual/ServiceIndividual'

Services.propTypes = {
  allServices:arrayOf(ServicesShape)
}

function Services({ allServices }) {
  return (
    <div id="fh5co-services" className="fh5co-bg-section">
        <div className="container">
          <div className="row">
            {
              allServices.map((service, idx) =>(
                <ServiceIndividual service={service} key={idx}/>
              ))
            }
          </div>
        </div>
      </div>
  );
}

export default Services