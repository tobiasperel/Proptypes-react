import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar.js'
import Aside from './components/Aside.js'
import Services from './components/Services.js'
import Product from './components/Product.js';
import Testimonial from './components/Testimonial';
import Counter from './components/Counter';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <div className="fh5co-loader"></div> 
      <div id="page">
      <Navbar/>
      <Aside/>
      <Services/>
      <Product/>
      <Testimonial/>
      <Counter/>
      
      

      
      <div id="fh5co-started">
        <div className="container">
          <div className="row animate-box">
            <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
              <h2>Newsletter</h2>
              <p>Just stay tune for our latest Product. Now you can subscribe</p>
            </div>
          </div>
          <div className="row animate-box">
            <div className="col-md-8 col-md-offset-2">
              <form className="form-inline">
                <div className="col-md-6 col-sm-6">
                  <div className="form-group">
                    <label for="email" className="sr-only">Email</label>
                    <input type="email" className="form-control" id="email" placeholder="Email" />
                  </div>
                </div>
                <div className="col-md-6 col-sm-6">
                  <button type="submit" className="btn btn-default btn-block">Subscribe</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <Footer/>
    </div>

      <div className="gototop js-top">
        <a href="#" className="js-gotop"><i className="icon-arrow-up"></i></a>
      </div>
      </>


  );
}

export default App;
