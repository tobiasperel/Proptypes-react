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
import product4 from './images/product-4.jpg'
import product5 from './images/product-5.jpg'
import product6 from './images/product-6.jpg'



const listadoP = [
  {nombre:'sillita',precio: 400,image: product1},
  {nombre:'lamparita',precio: 400,image: product2},
  {nombre:'silloni',precio: 400,image: product3},
  {nombre:'sillita',precio: 400,image: product4},
  {nombre:'lamparita',precio: 400,image: product5},
  {nombre:'silloni',precio: 400,image: product6},
]
const counterData = [
  { nombre: "Creativity Fuel", emote: "👁‍🗨", dataNum: 13455},
  { nombre: "Happy Clients", emote: "😊", dataNum: 465},
  { nombre: "All Products",  emote: "🛒", dataNum: 1332},
  { nombre: "Hours Spent", emote: "⌚", dataNum: 2500},
]

const servicesData = [
  { nombre: "Creativity Fuel", emote: "💳", descripcion: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove", url: 'https://themewagon.com/themes/download-free-responsive-ecommerce-template-shop-sales-pages/'},
  { nombre: "Save Money", emote: "💸", descripcion: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove", url: 'https://themewagon.com/themes/download-free-responsive-ecommerce-template-shop-sales-pages/'},
  { nombre: "Free Delivery", emote: "🚚", descripcion: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove", url: 'https://themewagon.com/themes/download-free-responsive-ecommerce-template-shop-sales-pages/'},
]


function App() {
  return (
    <>
      <div className="fh5co-loader"></div> 
      <div id="page">
        <Navbar/>
        <Aside/>
        <Services allServices={servicesData}/>
        <Product productos={listadoP}/>
        <Testimonial/>
        <Counter dataAll={counterData}/>
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
