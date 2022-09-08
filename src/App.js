import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar.js'
import Aside from './components/Aside.js'
import Services from './components/Services.js'
import Product from './components/Product.js';
import Testimonial from './components/Testimonial';
import Counter from './components/Counter';
import Footer from './components/Footer';
import Started from './components/Started';
import PropTypes from 'prop-types';
import product1 from './images/product-1.jpg'
import product2 from './images/product-2.jpg'
import product3 from './images/product-3.jpg'



const listadoP = [
  {nombre:'sillita',precio: 400,image: product1},
  {nombre:'lamparita',precio: 400,image: product2},
  {nombre:'silloni',precio: 400,image: product3},
]

const counterData = {
  creativityFuel: 13455,
  happyClients: 465,
  allProducts: 1332,
  hoursSpent: 2500
}


function App() {
  return (
    <>
      <div className="fh5co-loader"></div> 
      <div id="page">
        <Navbar/>
        <Aside/>
        <Services/>
        <Product productos={listadoP}/>
        <Testimonial/>
        <Counter data={counterData}/>
        <Started/>
        <Footer/>
      
      </div>
      <div className="gototop js-top">
        <a href="#" className="js-gotop"><i className="icon-arrow-up"></i></a>
      </div>
    </>


  );
}

export default App;
