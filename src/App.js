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


const productos = [
  {nombre:'Tuki',precio: 400,image: 'https://yt3.ggpht.com/d0Obn2GZNDXqUc15SPYJDbomDic17Ysv2VlQOj2imo9WgCk8hy8M-6nHWsJ3YKLahTUk4FKlQDk=s900-c-k-c0x00ffffff-no-rj'},
  {nombre:'Tuki',precio: 400,image: 'https://yt3.ggpht.com/d0Obn2GZNDXqUc15SPYJDbomDic17Ysv2VlQOj2imo9WgCk8hy8M-6nHWsJ3YKLahTUk4FKlQDk=s900-c-k-c0x00ffffff-no-rj'},
  {nombre:'Tuki',precio: 400,image: 'https://yt3.ggpht.com/d0Obn2GZNDXqUc15SPYJDbomDic17Ysv2VlQOj2imo9WgCk8hy8M-6nHWsJ3YKLahTUk4FKlQDk=s900-c-k-c0x00ffffff-no-rj'},

]
function App() {
  return (
    <>
      <div className="fh5co-loader"></div> 
      <div id="page">
        <Navbar/>
        <Aside/>
        <Services/>
        <Product productos={productos}/>
        <Testimonial/>
        <Counter/>
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
