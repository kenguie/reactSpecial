import React, { Component } from 'react';
import Slick from 'react-slick';

class Slideshow extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 5000,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      centerPadding: 0
    };

    return (
      <div id="slideshow">
        <Slick {...settings}>
          <div>
            <img src="../../images/Layer1.jpg" />
            <div className="text">
              <div className="headline">Screening:<br/>DVF Secret Agent Part 2</div>
              <div className="date">October 15, 2017</div>
              <div className="info">Join us for a private screening of DVF Secret Agent Part 2 with our special guest, director Peter Lindberg.</div>
            </div>
          </div>
          <div>
            <img src="../../images/Layer2.jpg" />
            <div className="text">
              <div className="headline">Screening:<br/>DVF Secret Agent Part 2</div>
              <div className="date">October 15, 2017</div>
              <div className="info">Join us for a private screening of DVF Secret Agent Part 2 with our special guest, director Peter Lindberg.</div>
            </div>
          </div>
          <div>
            <img src="../../images/Layer3.jpg" />
            <div className="text">
              <div className="headline">Screening:<br/>DVF Secret Agent Part 2</div>
              <div className="date">October 15, 2017</div>
              <div className="info">Join us for a private screening of DVF Secret Agent Part 2 with our special guest, director Peter Lindberg.</div>
            </div>
          </div>
        </Slick>
      </div>
    );
  }
}

export default Slideshow;
