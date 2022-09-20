import '../App.css';

function Started() {
  return (
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
                    <label htmlFor="email" className="sr-only">Email</label>
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
    )
}

export default Started