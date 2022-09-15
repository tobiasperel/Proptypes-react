import { Link } from 'react-router-dom';
import '../App.css';

function Navbar() {
  return (
    <nav className="fh5co-nav" role="navigation">
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-xs-2">
              <div id="fh5co-logo"><Link to="../" >Grey di.</Link></div>
            </div>
            <div className="col-md-6 col-xs-6 text-center menu-1">
              <ul>
                <li className="has-dropdown">
                  <a href="#fh5co-product">Shop</a>
                  <ul className="dropdown">
                    <li><a href="single.html">Single Shop</a></li>
                  </ul>
                </li>
                <li className="has-dropdown">
                  <a href="#fh5co-services">Services</a>
                </li>
                <li className="has-dropdown">
                  <a href="#fh5co-testimonial">Testimony</a>
                </li>
                <li><a href="#fh5co-footer">Contact</a></li>
              </ul>
            </div>
            <div className="col-md-3 col-xs-4 text-right hidden-xs menu-2">
              <ul>
              <li><i className='iconPer2'><span><small>0</small>🛒</span></i></li>
              </ul>
            </div>
          </div>
        </div>
    </nav>
  );
}

export default Navbar;