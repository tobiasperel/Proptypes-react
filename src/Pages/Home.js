import React from 'react'
import '../App.css';
import Navbar from '../components/Navbar.js'
import Aside from '../components/Aside.js'
import Services from '../components/Services.js'
import Product from '../components/Product.js';
import Testimonial from '../components/Testimonial';
import Counter from '../components/Counter';
import Footer from '../components/Footer';
import Started from '../components/Started';
import PropTypes from 'prop-types';
import { Routes, Route, Link } from "react-router-dom";
import Data from '../data';
import { useProductoContext } from '../context/productos';

  
export default function Home() {
  const {productos} = useProductoContext()

  return (
    <>
      <div id="page">
        <Aside/>
        <Services allServices={Data.servicesData}/>
        <Product productos={productos} estaCarrito={false}/>
        <Testimonial/>
        <Counter dataAll={Data.counterData}/>
        <Started/>
      </div>
      <div className="gototop js-top">
        <a href="#" className="js-gotop"><i className="icon-arrow-up"></i></a>
      </div>
    </>
  )
}
