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

  
export default function Home() {
  return (
    <>
      <div id="page">
        <Navbar/>
        <Aside/>
        <Services allServices={Data.servicesData}/>
        <Product productos={Data.productos}/>
        <Testimonial/>
        <Counter dataAll={Data.counterData}/>
        <Started/>
        <Footer/>
      </div>
      <div className="gototop js-top">
        <a href="#" className="js-gotop"><i className="icon-arrow-up"></i></a>
      </div>
    </>
  )
}
