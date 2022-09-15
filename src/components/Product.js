import '../App.css';
import {arrayOf} from 'prop-types'
import {ProductoShape} from '../Shapes/index.js'
import React from 'react';
import image from '../images/product-1.jpg'
import ProductIndividual from './componentIndividual/ProductIndividual';

function Product({ productos }) {
  return (
    <div id="fh5co-product">
        <div className="container">
          <div className="row animate-box">
            <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
              <span>Cool Stuff</span>
              <h2>Products.</h2>
              <p>Dignissimos asperiores vitae velit veniam totam fuga molestias accusamus alias autem provident. Odit ab aliquam dolor eius.</p>
            </div>
          </div>
          <div className="row">
            {productos.map((producto) => (
              <ProductIndividual 
              producto={producto}
              />
              ))}
          </div>
        </div>
      </div>
  )
}

Product.propTypes = {
  productos:arrayOf(ProductoShape)
}

export default Product