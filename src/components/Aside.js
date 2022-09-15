import '../App.css';
import image from '../images/img_bg_1.jpg'

function Aside() {
  return (
    <aside id="fh5co-hero" className="js-fullheight">
        <div className="flexslider js-fullheight">
          <ul className="slides">
            <img src={image}/>
          </ul>
          </div>
      </aside>
  );
}
export default Aside