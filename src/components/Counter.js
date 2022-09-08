import '../App.css';

function Counter() {
  return (
    <div id="fh5co-counter" className="fh5co-bg fh5co-counter">
        <div className="container">
          <div className="row">
            <div className="display-t">
              <div className="display-tc">
                <div className="col-md-3 col-sm-6 animate-box">
                  <div className="feature-center">
                    <span className="icon">
                      <i className="icon-eye"></i>
                    </span>
                    <span className="counter js-counter" data-from="0" data-to="22070" data-speed="5000" data-refresh-interval="50">1</span>
                    <span className="counter-label">Creativity Fuel</span>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6 animate-box">
                  <div className="feature-center">
                    <span className="icon">
                      <i className="icon-shopping-cart"></i>
                    </span>
                    <span className="counter js-counter" data-from="0" data-to="450" data-speed="5000" data-refresh-interval="50">1</span>
                    <span className="counter-label">Happy Clients</span>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6 animate-box">
                  <div className="feature-center">
                    <span className="icon">
                      <i className="icon-shop"></i>
                    </span>
                    <span className="counter js-counter" data-from="0" data-to="700" data-speed="5000" data-refresh-interval="50">1</span>
                    <span className="counter-label">All Products</span>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6 animate-box">
                  <div className="feature-center">
                    <span className="icon">
                      <i className="icon-clock"></i>
                    </span>
                    <span className="counter js-counter" data-from="0" data-to="5605" data-speed="5000" data-refresh-interval="50">1</span>
                    <span className="counter-label">Hours Spent</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

  )
}

export default Counter