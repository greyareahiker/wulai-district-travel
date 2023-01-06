import "./App.css";

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
  slidesToShow: 1,
  slidesToScroll: 1,
  vertical: true,
  verticalSwiping: true,
  swipeToSlide: true,
  arrows: false,
  infinite: false,
};
function App() {
  return (
    <div className="App">
      <Slider {...settings}>
        <div className="slide-container">
          <p>slider1</p>
        </div>
        <div className="slide-container">
          <p>slider2</p>
        </div>
        <div className="slide-container">
          <p>slider3</p>
        </div>
      </Slider>
    </div>
  );
}

export default App;
